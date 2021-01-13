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

Vue.use(Router)

export default new Router({
  routes: [
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
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/',
      name: '个人信息',
      component: container,
      children: [
        {path: '/info/baseInfo', name:'基本信息', component: baseInfo},
        {path: '/info/naturalInfo', name: '自然信息', component: naturalInfo},
        {path: '/info/unusualActInfo', name: '异动信息', component: unusualActInfo},
      ]
    },
    {
      path: '/',
      name: '学期选课',
      component: container,
      children: [
        {path: '/selectCourse/culturalQuality', name: '文化素质选修课', component: culturalQuality},
        {path: '/selectCourse/general', name: '通修课', component: general}
      ]
    },
    {
      path: '/',
      name: '没有用的功能',
      component: container,
      children: [
        {path: '/other/slot', name: '插槽', component: slot},
        {path: '/other/edit', name: '编辑信息', component: edit},
        {path: '/other/compute', name: '计算属性', component: compute},
        {path: '/other/watch', name: '侦听属性', component: watch}
      ]
    },
    {
      path: '/containerTest',
      name: 'containerTest',
      component: containerTest
    }
  ]
})
