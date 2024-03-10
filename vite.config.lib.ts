import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueSetupExtend()],
  resolve: {
    alias: {
      "pkg": resolve(__dirname, "packages"),
      "@": resolve(__dirname, "src")
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'packages/form/index.js'),
      name: 'OForm',
      fileName: 'o-form'
    },
    cssCodeSplit: true,
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      // external: ['vue', 'element-plus', 'uid', 'lodash'],
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
