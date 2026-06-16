import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  build: {
    // Don't generate .map files in production
    // Source maps let anyone read your original source code in DevTools
    sourcemap: false,

    // Minify + mangle variable names — makes reverse engineering harder
    minify: 'terser',

    // Remove console.log and debugger statements from production build
    // These can leak internal info and are not needed in production
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },

    rollupOptions: {
      output: {
        // Hashed filenames — ensures users always get latest files, prevents cache poisoning
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
})
