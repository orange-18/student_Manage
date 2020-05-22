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
      component: container,
      children: [
        {path: '/home', name:'基本信息', component: home},
        {path: '/baseInfo', name:'基本信息', component: baseInfo},
        {path: '/naturalInfo', name: '自然信息', component: naturalInfo},
        {path: '/unusualActInfo', name: '异动信息', component: unusualActInfo},
      ]
    },
    {
      path: '/containerTest',
      name: 'containerTest',
      component: containerTest
    }
  ]
})
