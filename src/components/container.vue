<template>
  <div>
    <el-container>
      <el-aside class="elAside">
        <div class="app-side-logo">
          <img src="@/assets/logo.png" width="60" height="60" />
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
              <el-menu-item index="2-1">文化素质选修课</el-menu-item>
              <el-menu-item index="2-2">通识课选课</el-menu-item>
              <el-menu-item>体育课选课</el-menu-item>
              <el-menu-item>辅修、双专业、双学位课</el-menu-item>
              <el-menu-item>英语选课</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="elHeader">
          <el-menu>
            <el-menu-item>{{headerTitle}}</el-menu-item>
          </el-menu>
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
    $('.elAside').css('height',$(window).height())
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