import Vue from 'vue'
import App from './App.vue'

//引入公共样式
import './assets/css/ltkj.css';

//引入路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import routes from './router.config'
const router=new VueRouter({
  routes:routes,
  mode:'history' //路由模式: 路径模式
});
//引入状态管理
import store from './store/index.js';

//拦截器,统一配置相关插件，在处理流程中，做一个拦截操作
axios.interceptors.request.use(function (config) {
  // 显示loading
  store.dispatch('showLoading');
  return config;
}, function (error) {
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // loading消失
  store.dispatch('hideLoading');
  return response;
}, function (error) {
  return Promise.reject(error);
});

//引入axios
import axios from 'axios';
axios.defaults.withCredentials='true';//统一携带凭证
Vue.prototype.$http=axios;

//引入全局组件loading
import loading from './components/loading/index.js';
Vue.use(loading);

//引入animate.css
import 'animate.css';

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
