import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "hire.lukesmoker.com",
      "site.lukesmoker.com",
      "www.lukesmoker.com",
      "lukesmoker.com"
    ]
  }
});
