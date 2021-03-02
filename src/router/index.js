import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/pages/login'
import container from '@/components/container'
import home from '@/pages/home'
import naturalInfo from '@/pages/info/naturalInfo'
import baseInfo from '@/pages/info/baseInfo'
import unusualActInfo from '@/pages/info/unusualActInfo'
import containerTest from '@/components/containerTest'
import culturalQuality from '@/pages/selectCourse/culturalQuality'
import general from '@/pages/selectCourse/general'
import slot from '@/pages/other/slot'
import edit from '@/pages/other/edit'
import compute from '@/pages/other/compute'
import watch from '@/pages/other/watch'
import pdf from '@/pages/other/pdf'
import bigScreen from '@/pages/screen/bigScreen'
import fpIndex from '@/pages/firstPage/home'

// 路由
// import Layout from '@/layout/index'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '',
    //   component: Layout,
    //   redirect: '/'
    // },
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    // 个人信息
    // {
    //   path: '/info',
    //   component: Layout,
    //   children: [
    //     {
    //       path: 'baseInfo',
    //       name: 'baseInfo',
    //       component: () => import('@/info/baseInfo')
    //     },
    //     {
    //       path: 'naturalInfo',
    //       name: 'naturalInfo',
    //       component: () => import('@/info/naturalInfo')
    //     },
    //     {
    //       path: 'unusualActInfo',
    //       name: 'unusualActInfo',
    //       component: () => import('@/info/unusualActInfo')
    //     }
    //   ]
    // },
    // 学期选课
    // {
    //   path: 'selectCourse',
    //   component: Layout,
    //   children: [
    //     {
    //       path: 'culturalQuality',
    //       name: 'culturalQuality',
    //       component: () => import('@/selectCourse/culturalQuality')
    //     },
    //     {
    //       path: 'general',
    //       name: 'general',
    //       component: () => import('@/selectCourse/general')
    //     }
    //   ]
    // },
    // {
    //   path: 'other',
    //   component: Layout,
    //   children: [
    //     {
    //       path: 'slot',
    //       name: 'slot',
    //       component: () => import('@/other/slot')
    //     },
    //     {
    //       path: 'edit',
    //       name: 'edit',
    //       component: () => import('@/other/edit')
    //     },
    //     {
    //       path: 'compute',
    //       name: 'compute',
    //       component: () => import('@/other/compute')
    //     },
    //     {
    //       path: 'watch',
    //       name: 'watch',
    //       component: () => import('@/other/watch')
    //     },
    //     {
    //       path: 'pdf',
    //       name: 'pdf',
    //       component: () => import('@/other/pdf')
    //     }
    //   ]
    // },
    // {
    //   path: 'screen',
    //   component: Layout,
    //   children: [
    //     {
    //       path: 'bigScreen',
    //       name: 'bigScreen',
    //       component: () => import('@/screen/bigScreen')
    //     }
    //   ]
    // },


    {
      path: '/home',
      name: 'home',
      component: container
    },
    {
      path: '/firstPage/home',
      name: '首页',
      component: container,
      children: [
        {
          path: '/firstPage/home', name:'首页', component: fpIndex,
          meta:{title: '首页'}
        },
      ]
    },
    {
      path: '/',
      name: '个人信息',
      component: container,
      children: [
        {path: '/info/baseInfo', name:'基本信息', component: baseInfo, meta: {title: '基本信息'}},
        {path: '/info/naturalInfo', name: '自然信息', component: naturalInfo, meta: {title: '自然信息'}},
        {path: '/info/unusualActInfo', name: '异动信息', component: unusualActInfo, meta: {title: '异动信息'}},
      ]
    },
    {
      path: '/',
      name: '学期选课',
      component: container,
      children: [
        {path: '/selectCourse/culturalQuality', name: '文化素质选修课', component: culturalQuality, meta: {title: '文化素质选修课'}},
        {path: '/selectCourse/general', name: '通修课', component: general, meta: {title: '通修课'}}
      ]
    },
    {
      path: '/',
      name: '没有用的功能',
      component: container,
      children: [
        {path: '/other/slot', name: '插槽', component: slot, meta: {title: '插槽'}},
        {path: '/other/edit', name: '编辑信息', component: edit, meta: {title: '编辑信息'}},
        {path: '/other/compute', name: '计算属性', component: compute, meta: {title: '计算属性'}},
        {path: '/other/watch', name: '侦听属性', component: watch, meta: {title: '侦听属性'}},
        {path: '/other/pdf', name: 'pdf', component: pdf, meta: {title: 'pdf'}}
      ]
    },
    {
      path: '/screen/bigScreen',
      name: '数据大屏',
      component: bigScreen,
      meta: {title: '数据大屏'}
    },
    {
      path: '/containerTest',
      name: 'containerTest',
      component: containerTest,
      meta: {title: 'containerTest'}
    }
  ]
})
