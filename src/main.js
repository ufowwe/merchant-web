// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
// 路由
import router from './router';
// 状态管理
import store from '@/store/index.js';
// 动态改变路由到状态管理
import { sync } from 'vuex-router-sync';
// ajax请求
import 'common/js/axios.js';
// 引入jQuery
import 'static/jquery/jquery.min.js';
// 初始化路由状态
sync(store, router);
Vue.config.productionTip = false;
// iView 样式与主题
import iView from 'iview';
import 'common/less/iview-theme.less';
//注册iView 组件
Vue.use(iView);
//引入bootstrap
import 'static/bootstrap/css/bootstrap.min.css';
import 'static/bootstrap/js/bootstrap.min.js';
// 创建应用
let vm = new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})