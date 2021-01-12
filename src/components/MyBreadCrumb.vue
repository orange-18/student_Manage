<template>
    <div>
        <el-breadcrumb>
            <el-breadcrumb-item :to="{path: '/baseInfo'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{level2}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{level3}}</el-breadcrumb-item>
            <el-breadcrumb-item v-show="showLevel4">{{level4}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>
export default {
    name: 'MyBreadCrumb',
    data(){
        return{
            showLevel4: false,
        }
    },
    props: {
        level2: {
            type: String
        },
        level3: {
            type: String
        },
        level4: {
            type: String
        }
    }
}
</script>