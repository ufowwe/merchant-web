// 根目录方法
const mutations = {
    /**
     * 设置（修改）当前的用户基本信息
     * @param {[type]} obj   [用户信息对象]
     */
    setCurrentUser(state, obj) {
        state.currentUser = obj;
    },
    /**
     * 设置 用户的拥有的模块信息
     */
    setUserModuleList(state, obj) {
        state.userModuleList = obj;
    },

    /**
     * 设置当前登录的模块信息
     * @param {[Object]} obj   [传入当前模块信息]
     */
    setCurrentModule(state, obj) {
        state.currentModule = obj;
    },
    /**
     * 设置当前用户拥有的权限
     * @param {[Object]} obj   [传入当前用户权限]
     */
    setCurrentUserPri(state, obj) {
        state.currentUserPri = obj;
    },
    /**
     * 设置后台当前打开的一级菜单
     * @param {[Array]} arr   [当前后台打开的一级菜单名字]
     */
    setAdminOpenMenus(state, arr) {
        // 去除重复
        arr = M.uniqueArray(arr);
        // 设置到状态
        state.adminOpenMenus = arr;
    },
    /**
     * 设置搜索结果点击存放数据
     * @param {Object} state [状态仓库]
     * @param {Object} obj   [新的搜索结果点击查询地图]
     */
    setSearchResultMap(state, obj) {
        state.searchResultMap = obj;
    },
    /**
     * 设置搜索字段分类
     * @param {Object} state [状态仓库]
     * @param {Object} obj   [新的搜索字段分类查询地图]
     */
    setSearchCategoryMap(state, obj) {
        state.searchCategoryMap = obj;
    },


    allfile(state,arr){
        state.allfile = arr;
    }
};

export default mutations;
