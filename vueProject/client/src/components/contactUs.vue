<template>
  <div id="pgcontainer">

    <!--头部的开始-->
    <header>
      <a class="fanhui" href="javascript:;" @click="goback"></a>
      <strong>联系我们</strong>
      <a href="#" class="menubtn" @click="menuCtl"></a>
      <!-- use captain icon for toggle menu -->
      <menubar v-show="bl"></menubar>
      <div class="overlay"></div>
    </header>
    <!--头部的结束-->

    <!--主题内容的开始-->
    <div class="zymain">
      <div class="zybt"><strong>联系我们</strong></div>
      <!--更换内容开始-->
      <div class="fot" v-html="arr.content">
      </div>
      <!--更换内容结束-->
    </div>
    <!--主题内容的结束-->
  </div>
</template>
<script>
  import menubar from './menubar.vue'
  export default {
    data(){
      return {
        arr:{},
        bl:false
      }
    },
    components:{
      menubar
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
//      this.$http({
//        url:'/data/contactUs.json'
//      }).then((res)=>{
//        this.arr=res.data
//      }).catch((res)=>{
//        console.log(res);
//      })
      this.$http.get(
        'http://localhost:3000/contactUs'
      ).then((res)=>{
        this.arr = res.data[0];
      }).catch((res)=>{
        console.log(res);
      });
    }
  }
</script>