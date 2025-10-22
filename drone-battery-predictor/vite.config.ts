import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import fs from "fs";

const LOCAL_IP = "192.168.1.114";

export default defineConfig({
  base: "/",
  server: {
    host: true,
    port: 3000,
    https: {
      key: fs.readFileSync(`${LOCAL_IP}+2-key.pem`),
      cert: fs.readFileSync(`${LOCAL_IP}+2.pem`),
    },
    proxy: {
      "/api": {
        target: `https://${LOCAL_IP}:8000`,
        changeOrigin: true,
        secure: false, 
      },
    },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "Прогноз скорости разряда аккумулятора дрона",
        short_name: "DroneBatteryPredictor",
        start_url: ".",
        display: "standalone",
        background_color: "#ffefdc",
        theme_color: "#ffffd2",
        icons: [
          { src: "pwa-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "pwa-512x512.png", sizes: "512x512", type: "image/png" },
        ],
      },
    }),
  ],
});
