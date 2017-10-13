<template>
  <div>
    <!--首页头部的开始-->
    <div class="ltop">
      <div class="ltopl fl"><img src="/src/assets/images/logo.png"  /></div>
      <div class="ltopr fr">
        <div class="dhtp">
          <img src="/src/assets/images/shouji_06.jpg"  />
        </div>
        <p>全国咨询热线：<br />
          <strong>029-87807128</strong></p>
        <div class="clear"></div>
      </div>
      <div class="clear"></div>
    </div>
    <!--首页头部的结束-->
    <!--nav的开始-->
    <div class="lnav">
      <ul>
        <!--<li><a href="#">网站首页</a></li>-->
        <!--<li><a href="gywm.html">公司简介</a></li>-->
        <!--<li><a href="c_p.html">产品中心</a></li>-->
        <!--<li><a href="news_list.html">新闻中心</a></li>-->
        <!--<li><a href="ltgd.html">联系我们</a></li>-->
        <!--<li><a href="user.html">用户中心</a></li>-->
        <li><router-link to="/">网站首页</router-link></li>
        <li><router-link to="/ComPro">公司简介</router-link></li>
        <li><router-link to="/product">产品中心</router-link></li>
        <li><router-link to="/news">新闻中心</router-link></li>
        <li><router-link to="/contactUs">联系我们</router-link></li>
        <li><router-link to="/user">用户中心</router-link></li>
      </ul>
    </div>
    <!--nav的结束-->
    <!--ban图片的开始-->
    <div id="slides" class="slider-focus">
      <div class="bd">
        <ul>
          <li><a class='pic' href="#"><img src="/src/assets/images/7fbabbcef3e6f922c5c652831d894acb.jpg" /> </a></li>
          <li><a class='pic' href="#"><img src="/src/assets/images/shoujiban1.jpg" /> </a></li>
          <li><a class='pic' href="#"><img src="/src/assets/images/shoujiban1.jpg" /> </a></li>
        </ul>
      </div>
      <div class="hd">
        <ul>
        </ul>
      </div>
    </div>
    <!--ban图片的结束-->
    <!--关于我们开始-->
    <div class="lgywm">
      <!--标题开始-->
      <div class="lgywm_title">
        <div class="xian"></div>
        <div class="lwenzi"><p><strong>关于我们</strong><br />ABOUT US</p></div>
      </div>
      <!--标题结束-->
      <div class="lgywm_wz">
        <p> {{arr1.content}}</p>
      </div>
      <!--按钮更多开始-->
      <div class="angd"><a href="/ComPro">了解更多 &gt;&gt; </a></div>
      <!--按钮更多结束-->
    </div>
    <!--关于我们结束-->
    <!--服务项目开始-->
    <div class="fwxm">
      <!--标题开始-->
      <div class="lgywm_title">
        <div class="xian"></div>
        <div class="lwenzi"><p><strong>产品中心</strong><br />SERVICES</p></div>
      </div>
      <!--标题结束-->
      <div class="cgal_nr">
        <ul>
          <li v-for="(item,index) in arr2"><a href="#"><div class="lzj"><img :src="item.img"  /></div>{{item.title}}</a></li>
          <div class="clear"></div>
        </ul>
      </div>
      <!--按钮更多开始-->
      <div class="angd"><a href="/product">了解更多 &gt;&gt; </a></div>
      <!--按钮更多结束-->
    </div>
    <!--服务项目结束-->
    <!--成功案例开始-->
    <div class="fwxm">
      <!--标题开始-->
      <div class="lgywm_title">
        <div class="xian"></div>
        <div class="lwenzi"><p><strong>成功案例</strong><br />CASES</p></div>
      </div>
      <!--标题结束-->
      <div class="cgal_nr">
        <ul>
          <li v-for="(item,index) in arr3"><a href="#"><div class="lzj"><img :src="item.img"  /></div>{{item.title}}</a></li>
          <div class="clear"></div>
        </ul>
      </div>
      <!--按钮更多开始-->
      <div class="angd"><a href="/case_show">了解更多 &gt;&gt; </a></div>
      <!--按钮更多结束-->
    </div>
    <!--成功案例结束-->
    <!--新闻中心开始-->
    <div class="fwxm">
      <!--标题开始-->
      <div class="lgywm_title">
        <div class="xian"></div>
        <div class="lwenzi"><p><strong>新闻资讯</strong><br />NEWS</p></div>
      </div>
      <!--标题结束-->
      <div class="xwzx_nr">
        <ul>
          <li v-for="(item,index) in arr4"><a href="#"><div class="lzj"><img :src="item.img"  /></div>
            <h3>{{item.title}}</h3>
            <p>{{item.disc}}</p></a>
          </li>

          <div class="clear"></div>
        </ul>
      </div>
      <!--按钮更多开始-->
      <div class="angd"><a href="/news">了解更多 &gt;&gt; </a></div>
      <!--按钮更多结束-->
    </div>
    <!--新闻中心结束-->
    <copyright></copyright>
  </div>
</template>
<script>
  import TouchSlide from '../assets/js/TouchSlide.1.1.js';
  import copyright from './copyright.vue';
//  import  '../assets/js/home.js'

  export default {
    data(){
      return {
        arr1:{},
        arr2:[],
        arr3:[],
        arr4:[]
      }
    },
    components:{
      copyright
    },
    mounted(){
      TouchSlide({
        slideCell:"#slides",
        titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        mainCell:".bd ul",
        effect:"leftLoop",
        autoPage:true,//自动分页
        autoPlay:true //自动播放
      })
    },
    created(){
//      this.$http({
//        url: '/data/comPro.json'
////        'http://localhost:3000/'
//      }).then((res)=>{
//        this.arr1=res.data;
////        console.log(res);
//      }).catch((res)=>{
//        console.log(res);
//      });
//      this.$http({
//        url:'/data/product.data'
//      }).then((res)=>{
//        this.arr2=res.data;
////        console.log(this.arr2 );
//      }).catch((res)=>{
//        console.log(res);
//      });
//      this.$http({
//        url:'/data/case.data'
//      }).then((res)=>{
//        this.arr3=res.data;
////        console.log(this.arr3 );
//      }).catch((res)=>{
//        console.log(res);
//      });
//      this.$http({
//        url:'/data/news.data'
//      }).then((res)=>{
//        this.arr4=res.data;
////        console.log(this.arr4 );
//      }).catch((res)=>{
//        console.log(res);
//      });
      this.$http.get(
//        url:'/data/comPro.json'
        'http://localhost:3000/ComPro'
      ).then((res)=>{
        this.arr1 = res.data[0];
//        console.log(this.arr1);
      }).catch((res)=>{
        console.log(res);
      });
      this.$http.get(
//        url:'/data/comPro.json'
        'http://localhost:3000/product'
      ).then((res)=>{
        this.arr2 = res.data;
//        console.log(this.arr2);
      }).catch((res)=>{
        console.log(res);
      });
      this.$http.get(
//        url:'/data/comPro.json'
        'http://localhost:3000/'
      ).then((res)=>{
        this.arr3 = res.data;
//        console.log(this.arr3);
      }).catch((res)=>{
        console.log(res);
      });
      this.$http.get(
//        url:'/data/comPro.json'
        'http://localhost:3000/news'
      ).then((res)=>{
        this.arr4 = res.data;
//        console.log(this.arr4);
      }).catch((res)=>{
        console.log(res);
      })
    }
  }
</script>
<style>

</style>