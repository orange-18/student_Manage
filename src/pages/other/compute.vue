<template>
    <div>
        <!-- 计算属性非响应式 -->
        <div>计算属性示例：{{reverseMessage}}</div>
        <br>
        <br>
        <!-- 响应式 -->
        <div>当前时间：{{nowTime()}}</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            message: 'Hellow'
        }
    },
    methods:{
        nowTime(){
            return new Date();
        }
    },
    computed:{
        reverseMessage(){
            return this.message.split('').reverse().join('');
            // 除非message改变，否则一直有缓存
        }
    }
}
</script>