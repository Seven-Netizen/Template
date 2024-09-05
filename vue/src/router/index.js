import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    redirect: '/home',
    component: () => import('../views/main/Layout.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home.vue'),
        meta: {
          title: '渠道管理',
        }
      },
      {
        path: '/param',
        name: 'param',
        component: () => import('../views/Param.vue'),
        meta: {
          title: '参数生成',
        }
      },
    ]
  },

]

// 创建一个新的VueRouter实例，用于管理应用程序的路由
const router = new VueRouter({
  // 使用'history'模式，支持HTML5 History功能，以实现无刷新页面切换
  mode: 'history',
  // 设置路由基地址，通常为当前环境的BASE_URL，以确保路由地址正确解析
  base: process.env.BASE_URL,
  // 指定滚动行为，页面切换时滚动到顶部
  scrollBehavior: () => ({ y: 0 }),
  // 路由配置项，定义不同路径对应的不同组件
  routes
})

// 解决重复点击导航时，控制台出现报错  ---亦可在跳转时做判断
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}






export default router
