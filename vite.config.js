import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.svg', // Incluir directamente
        'img/*.png',   // Incluir todos los PNG en la carpeta img
        '*.css',       // Incluir todos los CSS en la carpeta public
        '*.js'         // Incluir todos los JS en la carpeta public
      ], // Añade otros activos estáticos según sea necesario
      manifest: {
        name: 'Nombre de tu Aplicación',
        short_name: 'AppCorta',
        description: 'Descripción de tu Aplicación',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icons/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: 'icons/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        start_url: '.',
        display: 'standalone',
        orientation: 'portrait'
      }
    })
  ]
})
