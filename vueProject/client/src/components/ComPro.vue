<template>
  <div id="pgcontainer">
    <!--头部的开始-->
    <header> <a class="fanhui" href="javascript:;" @click="goback"></a> <strong>公司简介</strong> <a href="javascript:" class="menubtn" @click="menuCtl"></a>
      <!-- use captain icon for toggle menu -->
      <menubar v-show="bl"></menubar>
      <div class="overlay"></div>
    </header>
    <!--头部的结束-->
    <!--主题内容的开始-->
    <div class="zymain">
      <div class="zybt"><strong>关于三叶琴行</strong></div>
      <div class="zy_nr">
        <img :src="arr.img" />
        <p v-html="arr.content"></p>
      </div>
    </div>
    <!--主题内容的结束-->
    <copyright></copyright>
  </div>
</template>
<script>
  import copyright from './copyright.vue';
  import menubar from './menubar.vue';
  export  default {
    data(){
      return {
        arr:{},
        bl:false
      }
    },
    components:{
      copyright,menubar
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
//        url:'/data/comPro.json'
//      }).then((res)=>{
//        this.arr = res.data;
////        console.log(res.data);
//      }).catch((res)=>{
//        console.log(res);
//      })
      this.$http.get(
//        url:'/data/comPro.json'
        'http://localhost:3000/ComPro'
      ).then((res)=>{
        this.arr = res.data[0];
        console.log(this.arr);
      }).catch((res)=>{
        console.log(res);
      })
    },
  }
</script>