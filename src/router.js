import Vue from 'vue';
import Router from 'vue-router';

import index from './views/index.vue';
import result from './views/result.vue';
import share from './views/share.vue';

Vue.use(Router);

//异步加载component时，在某些浏览器环境(万年历，QQ)中会存在找不到文件的错误
//改为提前加载
export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/result',
    name: 'result',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: result
  },
  {
    path: '/share',
    name: 'share',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: share
  }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  }
});

