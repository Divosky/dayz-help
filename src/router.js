import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/items',
      name: 'items',
      // route level code-splitting
      // this generates a separate chunk (items.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "items" */ './views/Items.vue'),
    },
    {
      path: '/updates',
      name: 'updates',
      component: () => import('./views/Updates.vue'),
    },
  ],
});
