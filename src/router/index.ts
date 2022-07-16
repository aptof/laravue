import { createRouter, createWebHistory } from 'vue-router';
import WelcomeView from '../views/WelcomeView.vue';
import NotFound from '@/views/NotFound.vue';


export enum RouteNames {
  HOME = 'home',
  LOGIN = 'login',
  REGISTER = 'register',
  RESET = 'reset',
  DASHBOARD = 'dashboard'
}

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouteNames.HOME,
      component: WelcomeView,
    },
    {
      path: '/login',
      name: RouteNames.LOGIN,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/register',
      name: RouteNames.REGISTER,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: NotFound
    },
    {
      path: '/reset',
      name: RouteNames.RESET,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: NotFound
    },
    {
      path: '/dashboard',
      name: RouteNames.DASHBOARD,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: NotFound
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
  ],
});