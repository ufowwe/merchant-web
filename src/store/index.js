import Vue from 'vue';
import Vuex from 'vuex';
// 引入根目录状态
import state from './state.js';
// 引入根目录方法
import mutations from './mutations.js';
// 本地储存插件
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

// 初始化
export default new Vuex.Store({
    // 状态
    state,
    // 同步方法
    mutations,
    // 插件
    plugins: [
        // 采用session储存模式 也可以切换为 cookie  localStorage 模式
        createPersistedState({
            storage: window.sessionStorage
        })
    ]
})