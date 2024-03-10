import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueSetupExtend()],
  resolve: {
    alias: {
      "pkg": resolve(__dirname, "packages"),
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: resolve(__dirname, 'out')
  }
})
