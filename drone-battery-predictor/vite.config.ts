import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import mkcert from "vite-plugin-mkcert";
import fs from "fs";
import path from "path";
// VITE_PUBLIC_BASE_URL можно использовать для разных окружений
const BASE_URL = process.env.NODE_ENV === "production"
  ? "/drone-battery-predictor-frontend/"
  : "/";

export default defineConfig({
  base: BASE_URL,
  server: {
    https: {
        key: fs.readFileSync(path.resolve(__dirname, "192.168.1.114+2-key.pem")),
        cert: fs.readFileSync(path.resolve(__dirname, "192.168.1.114+2.pem"))
      },
    host: true,  
    port: 3000,
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "robots.txt", "icons/*.png"],
      manifest: {
        name: "Drone Battery Predictor",
        short_name: "DronePwr",
        description: "Прогноз скорости разряда аккумулятора дрона",
        icons: [
          { src: "/icons/192.png", sizes: "192x192", type: "image/png" },
          { src: "/icons/512.png", sizes: "512x512", type: "image/png" }
        ],
        start_url: "/drone_main",
        display: "standalone",
        background_color: "#ffefdc",
        theme_color: "#1F58C8"
      },
    }),
  ],
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"]
  }
});
