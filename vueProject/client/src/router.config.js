import home from './components/home.vue';
import ComPro from './components/ComPro.vue';
import product from './components/product.vue';
import news from './components/news.vue';
import contactUs from './components/contactUs.vue';
import user from './components/user.vue';
import login from './components/login.vue';
import reg from './components/reg.vue';
import case_show from './components/case_show.vue';
import news_show from './components/news_show.vue';
import error from './components/error.vue';

const routes=[
  {path:'/home',component:home},
  {path:'/ComPro',component:ComPro},
  {path:'/product',component:product},
  {path:'/news',component:news},
  {path:'/contactUs',component:contactUs},
  {path:'/user',component:user},
  {path:'/login',component:login},
  {path:'/reg',component:reg},
  {path:'/case_show/:id',component:case_show},
  {path:'/news_show/:id',component:news_show},
  {path:'*',component:error},
  {path:'/',redirect:'/home'},
];
export default routes