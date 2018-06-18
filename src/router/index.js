import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [{
        path: '/',
        redirect: '/home',
        component: resolve => require(['@/views/home/home.vue'], resolve),
        children: [{
            path: '/home',
            component: resolve => require(['@/views/home/login.vue'], resolve),
        }, {
            path: '/register',
            component: resolve => require(['@/views/home/register.vue'], resolve),
        }]
    }, {
        path: '/admin',
        component: resolve => require(['@/views/admin/index.vue'], resolve),
        children: [{
            path: '/admin',
            component: resolve => require(['@/views/admin/main.vue'], resolve)
        }, {
            path: '/webadd',
            component: resolve => require(['@/views/web/webadd.vue'], resolve)
        }, {
            path: '/websea',
            component: resolve => require(['@/views/web/websea.vue'], resolve)
        }]
    }]
})

export default router;
