import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
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
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
