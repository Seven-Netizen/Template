export default {
    namespaced: true,
    state: {
        isCollapse: false,  // 控制水平折叠收起菜单（仅在 mode 为 vertical 时可用）
        collapseBtnClass: "el-icon-s-fold",
    },
    mutations: {

        /**
         * 控制菜单的展开和折叠状态
         * @param {Object} state - 包含菜单状态的对象
         * 此函数不返回任何值，它直接修改传入的state对象的属性
         *
         * 菜单的展开和折叠状态通过isCollapse属性来表示
         * 该函数通过切换isCollapse的值来实现菜单的展开和折叠
         * 同时，根据isCollapse的值更新collapseBtnClass属性
         * 以改变菜单按钮的图标，反映当前的展开或折叠状态
         */
        collapseMenu(state) {
            // 切换菜单的展开/折叠状态
            state.isCollapse = !state.isCollapse;
            // 根据当前的折叠状态，设置展开/折叠按钮的图标类名
            // 根据当前的折叠状态，设置展开/折叠按钮的图标类名
            state.collapseBtnClass = state.isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold';
        },
    },
}

