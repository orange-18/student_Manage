<template>
    <!-- <div>
        <el-breadcrumb>
            <el-breadcrumb-item :to="{path: '/info/baseInfo'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{level2}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{level3}}</el-breadcrumb-item>
            <el-breadcrumb-item v-show="showLevel4">{{level4}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div> -->

    
    <el-breadcrumb class="app-breadcrumb" separator="/">
        <transition-group name="breadcrumb">
            <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
                <span v-if="item.redirect==='noRedirect'||index==levelList.length-1" class="no-redirect">{{ item.meta.title }}</span>
                <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
            </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>
<script>
// export default {
//     name: 'MyBreadCrumb',
//     data(){
//         return{
//         }
//     },
//     props: {
//         level2: {
//             type: String
//         },
//         level3: {
//             type: String
//         },
//         level4: {
//             type: String
//         },
//         showLevel4: {
//             type: Boolean
//         }
//     }
// }



import pathToRegexp from 'path-to-regexp'

export default {
  data() {
    return {
      levelList: null
    }
  },
  watch: {
    $route(route) {
      // if you go to the redirect page, do not update the breadcrumbs
      if (route.path.startsWith('/redirect/')) {
        return
      }
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb() {
      // only show routes with meta.title
      let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      console.log(matched,'00000000')
      const first = matched[0]

      if (!this.isHome(first)) {
          console.log('asasasasa')
        matched = [{ path: '/home', meta: { title: '首页' }}].concat(matched)
      }
      console.log(matched,'000000001')

      this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
      console.log(this.levelList,'11111111')
    },
    isHome(route) {
        console.log(route,'9999999')
      const name = route && route.name
      if (!name) {
        return false
      }
      return name.trim().toLocaleLowerCase() === 'home'.toLocaleLowerCase()
    },
    pathCompile(path) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route
      var toPath = pathToRegexp.compile(path)
      return toPath(params)
    },
    handleLink(item) {
      const { redirect, path } = item
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push(this.pathCompile(path))
    }
  }
}
</script>
<style scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
}
.app-breadcrumb.el-breadcrumb .no-redirect {
    color: #97a8be;
    cursor: text;
  }
</style>