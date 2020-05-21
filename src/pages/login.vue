<template>
    <div class="loginPage">
        <div class="loginTop">学生信息管理系统</div>
        <div class="loginContent">
            <p>学生信息管理系统</p>
            <div>
                <i class="el-icon-user"></i>
                <input type="phone" placeholder="请输入用户名" v-model="username">
            </div>
            <div>
                <i class="el-icon-lock"></i>
                <input type="password" placeholder="请输入密码" v-model="password">
            </div>
            <button @click="login">登录</button>
            <p>忘记密码？</p>
        </div>
        <div class="loginBottom">备案号0000-xxxx</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            username: 'admin',
            password: '123456'
        }
    },
    methods:{
        login(){
            // 判断用户名密码，此处仅做示例
            if(this.username != 'admin' || this.password != '123456'){
                alert('用户名或密码错误！');
            }else{
                this.$router.push('/home');
            }
        }
    }
}
</script>
<style lang="">
.loginPage{
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url('http://47.94.89.73:8080/zeefile/audio/photo/loginbg.jpg');
    /* background: linear-gradient(to bottom, #BFEFFF, #6dd5fa, #2980b9); */
}
.loginTop, .loginBottom{
    position: absolute;
    height:50px;
    width:100%;
    background: hsla(0,0%,82.7%,.4);
    /* background-color: #000000; */
    opacity: 0.5;
    color: #ffffff;
    line-height: 50px;
}
.loginTop{
    top: 0;
    font-size: 20px;
    font-weight: bold;
    text-align: start;
    width: 95%;
    padding-left: 5%;
}
.loginBottom{
    bottom: 0;
}
.loginContent{
    width: 400px;
    height: 35%;
    background: hsla(0,0%,82.7%,.2);
    /* background-color: #1685a9; */
    border-radius: 10px;
    top: 50%;
    left: 50%;
    position: relative;
    transform: translate(-50%, -60%);
    padding-top: 30px;
}
.loginContent div:nth-of-type(1),
.loginContent div:nth-of-type(2){
    margin-top: 40px;
}
i{
    font-size: 16px;
    color: #dddddd;
}
input{
    /* background-color: #89defb; */
    border: none;
    border-radius: 10px;
    padding: 0 10px;
    height: 30px;
    margin-left: 10px;
}
button{
    height: 30px;
    background-color: #409eff;
    border: 1px solid #409eff;
    width: 50%;
    margin-top: 70px;
    border-radius: 10px;
}
.loginContent p:nth-of-type(1){
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
}
.loginContent p:nth-of-type(2){
    color: red;
}
</style>