<template>
  <div id="pgcontainer">

    <!--头部的开始-->
    <header>
      <a class="fanhui" href="javascript:;" @click="goback"></a>
      <strong>成功案例</strong>
      <a href="#" class="menubtn" @click="menuCtl"></a>
      <!-- use captain icon for toggle menu -->
      <menubar v-show="bl"></menubar>
      <div class="overlay"></div>
    </header>
    <!--头部的结束-->

    <!--主题内容的开始-->
    <div class="zymain">
      <div class="zybt"><strong>成功案例</strong></div>
      <div class="zy_nr">
        <h2>{{arr.title}}</h2>
        <p v-html="arr.content"></p>
      </div>
    </div>
    <!--主题内容的结束-->

    <!--底部的开始-->
    <div class="lbottom">
      <p>Copryrught@2015-2020 版权所有  郑州龙拓科技有限公司<br />
        地址：郑州紫荆山路72号裕鸿花园D座16楼C户</p>
    </div>
    <!--底部的结束-->
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
//        url:'/data/suc_case.data'
//      }).then((res)=>{
//        this.arr=res.data[this.$route.params.id-1];
////        console.log(this.arr);
//      }).catch((res)=>{
//        console.log(res);
//      })
      this.$http.get(
        'http://localhost:3000/suc_case'
      ).then((res)=>{
        this.arr = res.data[this.$route.params.id-1]
      }).catch((res)=>{
        console.log(res);
      })
    }
  }
</script>