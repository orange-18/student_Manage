<template>
    <div>
        <!-- 侦听器 -->
        <div>请输入内容：<input type="text" v-model="message1"></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            message1: ''
        }
    },
    watch:{
        message1(){
            console.log(this.message1)
        }
    }
}
</script>