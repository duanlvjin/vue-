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
    <!--用户页内容的开始-->
    <ul class="user">
      <li>欢迎回来！{{user}}</li>
    </ul>

    <!--用户页主题内容的结束-->

    <copyright></copyright>

  </div>
</template>
<script>
  import menubar from './menubar.vue';
  import copyright from './copyright.vue';
  export default {
    data(){
      return{
        user:'',
        bl:false,
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
      }
    },
    created(){
      this.$http.get(
        'http://localhost:3000/user'
      ).then((res)=>{
        if(res.data == "no"){
          this.$router.replace({path:'login'})
        }
        this.user = res.data;
      }).catch((res)=>{
        console.log(res);
      })
    },
  };
</script>