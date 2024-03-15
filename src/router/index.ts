import { createRouter, createWebHistory, Router, RouteRecordRaw } from "vue-router";


// 直接引入本地模块（否则 name属性不存在）
const modules = import.meta.glob("@/views/*/index.vue", {
    import: "default",
    eager: true,
});

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        redirect: '/create-form',
    }
];
const reg = /(?<=\/src\/views\/)[\w-]+/
Object.entries(modules).forEach(([_path, module]) => {
    const matchPath = _path.match(reg)
    let path = ''
    if (matchPath && matchPath[0]) {
        path = `/${matchPath[0]}`
        if (module && (module as any).name) {
            const routeItem: RouteRecordRaw = {
                path: path,
                name: (module as any).name,
                component: module,
            };
            routes.push(routeItem);
        }
    } else {
        throw new Error(`模块导入错误，${_path}`)
    }
});

const router: Router = createRouter({
    routes,
    history: createWebHistory('/o-form/'),
});

export default router;
