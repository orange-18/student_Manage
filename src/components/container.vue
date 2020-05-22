<template>
  <div>
    <el-container>
      <el-aside class="elAside">
        <div class="app-side-logo">
          <img src="@/assets/logo.jpg"/>
        </div>
        <el-menu class="el-menu-vertical-demo" @open="handleOpen" router><!-- router设置路由 index指向的即为路由 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i><span slot="title">个人信息</span>
            </template>
            <el-menu-item-group class="over-hide">
              <el-menu-item index="/baseInfo">基本信息</el-menu-item>
              <el-menu-item index="/naturalInfo">自然信息</el-menu-item>
              <el-menu-item index="/unusualActInfo">异动信息</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i><span slot="title">学期选课</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/culturalQuality">文化素质选修课</el-menu-item>
              <el-menu-item index="/general">通识课选课</el-menu-item>
              <el-menu-item disabled="true">体育课选课</el-menu-item>
              <el-menu-item disabled="">辅修、双专业、双学位课</el-menu-item>
              <el-menu-item disabled>英语选课</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-menu"></i><span slot="title">没有用的功能</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="edit">编辑信息</el-menu-item>
              <el-menu-item disabled="">下拉刷新</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="elHeader">
          <el-breadcrumb separator="/">
            <!-- <el-breadcrumb-item :to="{path:'/manage'}">home</el-breadcrumb-item> -->
            <el-breadcrumb-item v-for="(item,index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
          </el-breadcrumb>
          退出登录
        </el-header>
        <router-view></router-view><!-- 路由出口，即右侧显示部分 -->
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data(){
    return{
      headerTitle:'首页'
    }
  },
  mounted(){
    $('.elAside').css('height',$(window).height());    // 设置侧边栏高度为屏幕高度
  },
  methods:{
    handleOpen(key,keypath){
      console.log(key,'key',keypath,'keypath');
    },
    // goto(path){
    //   this.$router.replace(path);
    // }
  }
}
</script>
<style>
.elAside{
  width: 240px !important;
  height: 500px;
}
.app-side-logo{
  margin-top: 20px;
}
.app-side-logo img{
  width: 115px;
  height: 60px;
}
.over-hide{
  overflow: hidden;
}
.el-submenu__title{
  text-align: left;
}
.el-submenu .el-menu-item{
    min-width: 0;
    text-align: left;
    padding-left: 50px !important;
}
.elHeader{
  /* background-color: #009999; */
  text-align: end;
  line-height: 60px;
}
</style>