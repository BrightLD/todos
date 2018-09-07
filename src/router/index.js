import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
  routes: [
    // 组件重定向，默认为/,重定向为/studycenterIndex
    {
      path:"/",redirect:"/index"
    }
  ]
});
