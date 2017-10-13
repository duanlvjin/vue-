<template>
  <div id="app">
    <loading v-show="getLoading"></loading>
    <!--<keep-alive>-->
    <transition
      enter-active-class="animated bounce"
    >
      <router-view></router-view>
    </transition>
    <!--</keep-alive>-->
    <footbar v-show="getFoot"></footbar>
  </div>
</template>

<script>
  import footbar from './components/footbar.vue';
  import {mapGetters} from 'vuex';
  export default {
    name: 'app',
    data () {
      return {
        msg: ''
      }
    },
    components:{
      footbar
    },
    computed:mapGetters([
      'getFoot','getLoading'
    ]),
  }
</script>

<style>


</style>
