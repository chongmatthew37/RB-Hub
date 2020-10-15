import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// Moment.js
import moment from 'moment';
import VueMoment from 'vue-moment';

moment.locale('en');

Vue.use(VueMoment, { moment });


// Router
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Home',
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta: {
      title: 'Login',
    }
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/News.vue'),
    meta: {
      title: 'News',
    }
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('../views/Map.vue'),
    meta: {
      title: 'Map',
    }
  },
  // {
  //   path: '/schedule',
  //   name: 'schedule',
  //   component: () => import('../views/Schedule.vue'),
  //   meta: {
  //     title: 'Schedule',
  //   }
  // },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/Settings.vue'),
    meta: {
      title: 'Settings',
    }
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
