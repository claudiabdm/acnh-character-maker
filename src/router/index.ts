import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect: 'skin',
    component: Home,
    props: true,
    children: [
      {
        path: 'skin',
        name: 'skin',
        component: () => import('../components/SettingsSkin.vue')
      },
      {
        path: 'hair',
        name: 'hair',
        component: () => import('../components/SettingsHair.vue')
      },
      {
        path: 'eyes',
        name: 'eyes',
        component: () => import('../components/SettingsEyes.vue')
      },
      {
        path: 'nose-mouth',
        name: 'nose-mouth',
        component: () => import('../components/SettingsNoseMouth.vue')
      },
      {
        path: 'blush',
        name: 'blush',
        component: () => import('../components/SettingsBlush.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'settings__link--active',
  routes
});

export default router;
