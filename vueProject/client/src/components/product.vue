<template>
  <div id="pgcontainer">

    <!--头部的开始-->
    <header>
      <a class="fanhui" href="javascript:;" @click="goback"></a>
      <strong>产品中心</strong>
      <a href="#" class="menubtn" @click="menuCtl"></a>
      <!-- use captain icon for toggle menu -->
      <menubar v-show="bl"></menubar>
      <div class="overlay"></div>
    </header>
    <!--头部的结束-->

    <!--主题内容的开始-->
    <div class="zymain">
      <div class="zybt"><strong>产品中心</strong></div>
      <!--更换内容开始-->
      <div class="cgal_nr">
        <ul>
          <li
            v-for="(item,index) in arr"
          >
            <router-link :to="'/case_show/'+item.id">
              <div class="lzj">
                <img :src="item.img"  />
              </div>{{item.title}}
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
  import menubar from './menubar.vue'
  export default {
    data(){
      return {
        arr:[],
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
//        url:'/data/product.data'
//      }).then((res)=>{
//        this.arr = res.data;
////        console.log(this.arr);
//      }).catch((res)=>{
//        console.log(res);
//      })
      this.$http.get(
//        url:'/data/comPro.json'
        'http://localhost:3000/product'
      ).then((res)=>{
        this.arr = res.data;
//        console.log(this.arr);
      }).catch((res)=>{
        console.log(res);
      })
    }
  }
</script>