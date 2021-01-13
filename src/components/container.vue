<template>
  <div>
    <el-container>
      <el-aside class="elAside" :class="collapsed?'aside-icon':'aside-text'" v-show="!collapsed">
        <div class="app-side-logo">
          <img src="@/assets/school.png"/>
        </div>
        <el-menu class="el-menu-vertical-demo" @open="handleOpen" router><!-- router设置路由 index指向的即为路由 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-user"></i><span slot="title">个人信息</span>
            </template>
            <el-menu-item-group class="over-hide">
              <el-menu-item index="/info/baseInfo">基本信息</el-menu-item>
              <el-menu-item index="/info/naturalInfo">自然信息</el-menu-item>
              <el-menu-item index="/info/unusualActInfo">异动信息</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-set-up"></i><span slot="title">学期选课</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/selectCourse/culturalQuality">文化素质选修课</el-menu-item>
              <el-menu-item index="/selectCourse/general">通识课选课</el-menu-item>
              <el-menu-item disabled>体育课选课</el-menu-item>
              <el-menu-item disabled>辅修、双专业、双学位课</el-menu-item>
              <el-menu-item disabled>英语选课</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-orange"></i><span slot="title">没有用的功能</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/other/edit">编辑信息</el-menu-item>
              <el-menu-item disabled>下拉刷新</el-menu-item>
              <el-menu-item index="/other/slot">插槽</el-menu-item>
              <el-menu-item index="/other/compute">计算属性</el-menu-item>
              <el-menu-item index="/other/watch">侦听属性</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 窄的侧边栏 -->
      <ul v-show="collapsed" class="elAside" :class="collapsed?'aside-icon':'aside-text'">
        <div class="app-side-logo">
          <img src="@/assets/school.png"/>
        </div>
        <li>
          <div @mouseover="showMenu(1,true)" @mouseout="showMenu(1,false)"><i class="el-icon-user"></i></div>
          <ul class="submenu-1" @mouseover="showMenu(1,true)" @mouseout="showMenu(1,false)">
            <li @click="$router.push('/baseInfo')">基本信息</li>
            <li @click="$router.push('/naturalInfo')">自然信息</li>
            <li @click="$router.push('/unusualActInfo')">异动信息</li>
          </ul>
        </li>
        <li>
          <div @mouseover="showMenu(2,true)" @mouseout="showMenu(2,false)"><i class="el-icon-set-up"></i></div>
          <ul class="submenu-2" @mouseover="showMenu(2,true)" @mouseout="showMenu(2,false)">
            <li @click="$router.push('/culturalQuality')">文化素质选修课</li>
            <li @click="$router.push('/general')">通识课选课</li>
            <li>体育课选课</li>
            <li>辅修、双专业、双学位课</li>
            <li>英语选课</li>
          </ul>
        </li>
        <li>
          <div @mouseover="showMenu(3,true)" @mouseout="showMenu(3,false)"><i class="el-icon-orange"></i></div>
          <ul class="submenu-3" @mouseover="showMenu(3,true)" @mouseout="showMenu(3,false)">
            <li @click="$router.push('/edit')">编辑信息</li>
            <li @click="$router.push('/compute')">计算属性</li>
          </ul>
        </li>
      </ul>
      <el-container style="background:#f0f0f0">
        <el-header class="elHeader" :class="collapsed?'header-icon':'header-text'">
          <!-- <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item,index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
          </el-breadcrumb> -->
          <!-- 面包屑导航 -->
          <div class="header-left">
            <div>
              <i class="el-icon-s-fold" v-show="!collapsed" @click="showCollapse"></i>
              <i class="el-icon-s-unfold" v-show="collapsed" @click="showCollapse"></i>
            </div>
            <my-bread-crumb :level2="level2" :level3="level3" :level4="level4" :showLevel4="showLevel4"></my-bread-crumb>
          </div>
          <!-- <div>
            <el-breadcrumb>
              <el-breadcrumb-item :to="{path: '/baseInfo'}">首页</el-breadcrumb-item>
              <el-breadceumb-ite>{{level2}}</el-breadceumb-ite>
              <el-breadceumb-ite>{{level3}}</el-breadceumb-ite>
              <el-breadceumb-ite v-show="showLevel4">{{level4}}</el-breadceumb-ite>
            </el-breadcrumb>
          </div> -->
          <div>
            退出登录
          </div>
        </el-header>
        <div><i></i></div>
        <router-view style="margin-top:100px"></router-view><!-- 路由出口，即右侧显示部分 -->
      </el-container>
    </el-container>
  </div>
</template>
<script>
import MyBreadCrumb from './MyBreadCrumb'
export default {
  data(){
    return{
      headerTitle:'首页',
      collapsed: false,
      showLevel4: false,
      level2: '',
      level3: '',
      level4: '',
    }
  },
  components: {
    MyBreadCrumb
  },
  mounted(){
    $('.elAside').css('height',$(window).height());    // 设置侧边栏高度为屏幕高度
    var that = this;
    that.getMenu();
  },
  activated(){
    var that = this;
    that.getMenu();
  },
  // created(){
  //   var that = this;
  //   that.getMenu();
  // },
  methods:{
    getMenu(){
      var that = this;
        console.log(that.$store.state.levelTwo,'55555')
        console.log(that.$store.state.levelThree,'555552')
        if(that.level2 = ''){
          that.level2 = that.$store.state.levelTwo;
        }
        if(that.level3 = ''){
          that.level3 = that.$store.state.levelThree;
        }
    },
    handleOpen(key,keypath){
    },
    showCollapse(){
      this.collapsed = !this.collapsed;
    },
    showMenu(index,status){
      // this.$refs.menuCollapse.getElementsByClassName('submenu-'+index)[0].style.display = status ? 'block' : 'none';
      document.getElementsByClassName('submenu-' + index)[0].style.display = status ? 'block' : 'none';
    }
  },
  watch:{
    $route(to,from){
      console.log(to,'toooo')
      console.log(from,'frommmm')
      var that = this;
      that.level2 = to.matched[0].name;
      that.$store.dispatch('setLevelTwo',that.level2);
      that.level3 = to.name;
      that.$store.dispatch('setLevelThree',that.level3);
    },

  }
}
</script>
<style lang="less" scoped>
ul{
  list-style: none;
}
.aside-icon{
  width: 70px !important;
  padding: 0;
  margin-top: 0;
}
.aside-icon /deep/ .app-side-logo img{
  width: 40px;
  height: 38px;
}
.aside-icon /deep/ .el-submenu__icon-arrow{
  display: none;
}
.aside-icon /deep/ .el-submenu__title{
  text-align: center;
}
.aside-text{
  width: 240px !important;
}
.elAside{
  height: 500px;
  background: #212121;
  ul{
    background: #212121;
    li{
      color: #eee;
      opacity: 1 !important;
    }
    li.is-disabled{
      color: #666;
    }
    .el-menu-item-group li:hover{
      color: #333;
      background: #ffb74d;
    }
    .el-menu-item-group .is-disabled:hover{
      color: #555 !important;
    }
  }
}
.elAside /deep/ .el-submenu__title{
  color: #eee;
  text-align: left;
}
.elAside /deep/ .el-submenu__title:hover{
  color: #333;
  background: #ffb74d;
}
.elAside /deep/ .el-submenu .el-menu{
  background: #212121 !important;
}
.app-side-logo{
  margin-top: 20px;
}
.app-side-logo img{
  width: 65px;
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
  text-align: end;
  line-height: 60px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 5% 0 1%;
  height: 60px;
  position: fixed;
  background: #fff;
}
.header-icon{
  width: 97%;
}
.header-text{
  width: 88%;
}
.el-icon-s-fold,.el-icon-s-unfold{
  font-size: 20px;
  cursor: pointer;
  color: #212121;
}
.el-menu-item:focus, .el-menu-item:hover{
  background-color: transparent;
}
.el-menu-item.is-active{
  color: #333;
  background: #ffb74d;
}
.submenu-1,.submenu-2,.submenu-3{
  position: absolute;
  top: 0;
  left: 70px;
  display: none;
  z-index: 999;
  background: #212121;
  width: 150px;
  padding: 0;
}
.aside-icon .app-side-logo{
  height: 63px;
}
.aside-icon li{
  height: 56px;
  line-height: 56px;
  position: relative;
  cursor: pointer;
  i{
    font-size: 18px;
    color: #909399;
  }
}
.aside-icon li:hover{
  background: #ffb74d;
  color: #333;
}
.header-left{
  display: flex;
  flex-direction: row;
  align-items: center;
  div:first-of-type{
    margin-right: 10px;
  }
}
.header-left /deep/ .el-breadcrumb__item:nth-of-type(3) span:last-of-type{
  display: none;
}
</style>