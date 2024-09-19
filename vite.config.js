import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        /^node:.*/,
      ]
    },
    commonjsOptions: {
      transformMixedEsModules: true, // Allows both ESM and CJS
    }
  },
  ssr: {
    noExternal: ['@mediapipe/face_detection'], // Ensure it stays on the client-side
  }
});

// const serverConfig = {
//   fs: {
//     cachedChecks: false
//   }
// };

