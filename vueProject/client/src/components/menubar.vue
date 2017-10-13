<script src="../router.config.js"></script>
<template>
  <div id="hamburgermenu">
    <ul>
      <!--<li><a href="#">公司简介</a></li>-->
      <!--<li><a href="#">产品中心</a></li>-->
      <!--<li><a href="#">客户案例</a></li>-->
      <!--<li><a href="#">新闻中心</a></li>-->
      <!--<li><a href="#">联系我们</a></li>-->
      <li>
        <router-link to="/ComPro">公司简介</router-link>
      </li>
      <li>
        <router-link to="/product">产品中心</router-link>
      </li>
      <li>
        <router-link to="/news">新闻中心</router-link>
      </li>
      <li>
        <router-link to="/contactUs">联系我们</router-link>
      </li>
      <li>
        <router-link to="/user">用户中心</router-link>
      </li>
    </ul>
  </div>
</template>
<script>

</script>