<template>
  <div id="pgcontainer">

    <!--头部的开始-->
    <header>
      <a class="fanhui" href="#" @click="goback"></a>
      <strong>页面出错</strong>
      <a href="#" class="menubtn" @click="menuCtl"></a>
      <!-- use captain icon for toggle menu -->
      <menubar v-show="bl"></menubar>
      <div class="overlay"></div>
    </header>
    <!--头部的结束-->
  <div class="nofind">没找到该页面！</div>
  </div>
</template>
<script>
  import menubar from './menubar.vue'
  export default {
    data(){
      return {
        bl:false
      }
    },
    methods:{
      goback(){
        this.$router.go(-1);
      },
      menuCtl(){
        this.bl=!this.bl;
      }
    },
    components:{
      menubar
    }
  }
</script>
<style>
  .nofind{font-size:1.5rem;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}
</style>