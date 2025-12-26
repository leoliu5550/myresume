
import { defineConfig, loadEnv } from "vite";

import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  const defaultBase = "/";
  // 優先順序：Workflow 傳進來的 VITE_BASE > GitHub 自動給的 REPOSITORY 名稱 > 預設 "/"
  const githubRepo = env.GITHUB_REPOSITORY ? `/${env.GITHUB_REPOSITORY.split("/")[1]}/` : undefined;
  const base = mode === "production" ? (env.VITE_BASE ?? githubRepo ?? defaultBase) : defaultBase;

  console.log("Current Base Path:", base); // 這會在 GitHub Actions 的 Build Log 中印出來，方便你檢查
  return {
    base,
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
