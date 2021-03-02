<template>
    <div class="big-screen">
        <my-bread-crumb level2="大屏" level3="数据大屏"></my-bread-crumb>
        数据大屏
    </div>
</template>
<script>
import MyBreadCrumb from '@/components/MyBreadCrumb'
export default {
    data(){
        return{
        }
    },
    components:{
        MyBreadCrumb
    }
}
</script>
<style lang="less">
    .big-screen{
        background: #021a40;
    }
</style>