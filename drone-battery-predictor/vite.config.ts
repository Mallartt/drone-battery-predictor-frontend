import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/", // если деплой в https://<user>.github.io/<repo>
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
        secure: false,
      },
    },
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
});
