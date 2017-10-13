<template>
  <div id="pgcontainer">
    <!--头部的开始-->
    <header>
      <a class="fanhui" href="javascript:;" @click="goback"></a>
      <strong>用户中心</strong>
      <a href="#" class="menubtn" @click="menuCtl"></a>
      <!-- use captain icon for toggle menu -->
      <menubar v-show="bl"></menubar>
      <div class="overlay"></div>
    </header>
    <!--头部的结束-->
    <!--登录的开始-->
    <!--<form action="http://localhost:3000/reg/submit" method="post">-->
      <ul class="u_reg">
        <li class="reg1">
          <span>帐号:</span>
          <input type="text" value="" v-model="username" />
        </li>
        <li class="reg2">
          <span>密码:</span>
          <input type="text" value="" v-model="password" />
        </li>
      </ul>
      <div class="regbar">
        <input type="button" value="注 册" class="reg-btn" @click=reg />
        <h2 class="msg">{{msg}}</h2>
      </div>
      <li class="regLi">已有账户？<a href="/login">点此登录</a></li>
    <!--</form>-->
    <!--登录的结束-->
    <copyright></copyright>
  </div>
</template>
<script>
  import menubar from './menubar.vue';
  import copyright from './copyright.vue';
  export default {
    data(){
      return{
        bl:false,
        username:"",
        password:"",
        msg:''
      }
    },
    components:{
      menubar,copyright
    },
    methods:{
      goback(){
        this.$router.go(-1);
      },
      menuCtl(){
        this.bl=!this.bl;
      },
      reg(){
//        console.log(this.username);
        this.$http({
          method:'post',
          url:"http://localhost:3000/reg",
          params:{
            username:this.username,
            password:this.password
          }
        }).then((res)=>{
//        console.log(res.data);
          if(res.data== 'ok' ){
            this.$router.push('/login');
          }else{
            this.msg=res.data;
          }
        }).catch((res)=>{
          console.log(res);
        })
      }
    }
  }
</script>