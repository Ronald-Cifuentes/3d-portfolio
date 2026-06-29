import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  build: {
    rollupOptions: {
      output: {
        // Vite 8 / Rolldown requires manualChunks as a function
        manualChunks(id: string) {
          if (id.includes('node_modules')) {
            // React core - rarely changes, good cache target
            if (id.includes('react-dom') || id.includes('/react/')) {
              return 'vendor-react'
            }
            // Router - separate chunk
            if (id.includes('react-router')) {
              return 'vendor-router'
            }
            // Animation library - large, stable
            if (id.includes('framer-motion')) {
              return 'vendor-framer'
            }
            // Styled components
            if (id.includes('styled-components')) {
              return 'vendor-styled'
            }
            // Three.js and related (only loaded if canvas components are used)
            if (id.includes('three') || id.includes('@react-three')) {
              return 'vendor-three'
            }
          }
          return undefined
        },
      },
    },
  },
})
