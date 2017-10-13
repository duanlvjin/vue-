<template>
  <div id="pgcontainer">

    <!--头部的开始-->
    <header>
      <a class="fanhui" href="javascript:;" @click="goback"></a>
      <strong>新闻详细页</strong>
      <a href="#" class="menubtn" @click="menuCtl"></a>
      <!-- use captain icon for toggle menu -->
      <menubar v-show="bl"></menubar>
      <div class="overlay"></div>
    </header>
    <!--头部的结束-->

    <!--主题内容的开始-->
    <div class="zymain">
      <div class="zybt"><strong>新闻中心</strong></div>
      <div class="zy_nr">
        <h2>{{nList.title}}</h2>
        <img :src="nList.img" />
        <p v-html="nList.content"></p>
      </div>
    </div>
    <!--主题内容的结束-->

    <!--底部的开始-->
    <div class="lbottom">
      <p>西安市碑林区山叶琴行 版权所有<br />
        联系电话：029-87807128 <br />
        地址：陕西省西安市文艺北路敬业大厦0410 <br />
        技术支持：西安艾特软件</p>
    </div>
    <!--底部的结束-->
  </div>
</template>
<script>
  import menubar from './menubar.vue'
  export default {
    data(){
      return{
        nList:{},
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
//        url:'/data/newList.data'
//      }).then((res)=>{
//        this.nList = res.data[this.$route.params.id-1]
//      }).catch((res)=>{
//        console.log(res);
//      })
      this.$http.get(
        'http://localhost:3000/newsList'
      ).then((res)=>{
        this.nList = res.data[this.$route.params.id-1];
//        console.log(res.data);
      }).catch((res)=>{
        console.log(res);
      });
    }
  }
</script>