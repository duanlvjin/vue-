<template>
  <div id="pgcontainer">

    <!--头部的开始-->
    <header>
      <a class="fanhui" href="javascript:;" @click="goback"></a>
      <strong>新闻中心</strong>
      <a href="#" class="menubtn" @click="menuCtl"></a>
      <!-- use captain icon for toggle menu -->
      <menubar v-show="bl"></menubar>
      <div class="overlay"></div>
    </header>
    <!--头部的结束-->

    <!--主题内容的开始-->
    <div class="zymain">
      <div class="zybt"><strong>公司新闻</strong></div>
      <!--更换内容开始-->
      <div class="xwzx_nr">
        <ul>
          <li v-for="(item,index) in news">
            <router-link :to="'/news_show/'+item.id">
              <div class="lzj">
                <img :src="item.img" alt="">
              </div>
              <h3>{{item.title}}</h3>
              <p>{{item.disc}}</p>
            </router-link>
          </li>

          <div class="clear"></div>
        </ul>
      </div>
      <!--更换内容结束-->
    </div>
    <!--主题内容的结束-->

    <copyright></copyright>

  </div>
</template>
<script>
  import copyright from './copyright.vue';
  import menubar from './menubar.vue';
  export default {
    data(){
      return{
        news:[],
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
//        url:'/data/news.data'
//      }).then((res)=>{
//        this.news=res.data;
//      }).catch((res)=>{
//        console.log(res);
//      })
      this.$http.get(
        'http://localhost:3000/news'
      ).then((res)=>{
        this.news = res.data;
      }).catch((res)=>{
        console.log(res);
      })
    }
  }
</script>