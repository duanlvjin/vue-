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
    <!--<form action="http://localhost:3000/login/submit" method="post">-->
      <ul class="u_login">
        <li class="login1">
          <span>帐号:</span>
          <input type="text" value="" v-model="username"/>
        </li>
        <li class="login2">
          <span>密码:</span>
          <input type="text" value="" v-model="password"/>
        </li>
      </ul>
      <div class="loginbar">
        <input type="button" value="登 录" class="login-btn" @click=login />
        <h2 class="msg">{{msg}}</h2>
      </div>
      <li class="regLi">还没注册？<a href="/reg">点此注册</a></li>
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
      login(){
        this.$http({
          method:'post',
          url:"http://localhost:3000/login",
          params:{
            username:this.username,
            password:this.password
          }
        }).then((res)=>{
        console.log(res);
          if(res.data == 'ok' ){
            this.$router.push('/user');
          }else{
            this.msg = res.data;
          }
        }).catch((res)=>{
          console.log(res);
        })
      }
    },
//    created(){
//      this.$http.get('http://localhost:3000/login'
//      ).then((res)=>{
//        if(res.data == 'ok'){
//          this.$router.push({path:'user'})
//        }
//      }).catch((res)=>{
//        console.log(res);
//      })
//    }
  }
</script>