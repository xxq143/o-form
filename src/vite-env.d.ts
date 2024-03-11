/// <reference types="vite/client" />


declare module "*.vue" {
    import { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>;
    export default component
}

declare module "element-plus/dist/locale/zh-cn.mjs"
declare module "element-plus/dist/locale/en.mjs"
declare module "pkg/utils" {
    export default utils
}
interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly VITE_APP_PORT: string
    readonly VITE_APP_BASE_API: string
    // 更多环境变量...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
