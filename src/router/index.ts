import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import PrivacyVue from '@/views/Privacy.vue';

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
        component: () => import('@/views/SettingsSkin.vue')
      },
      {
        path: 'hair',
        name: 'hair',
        component: () => import('@/views/SettingsHair.vue')
      },
      {
        path: 'eyes',
        name: 'eyes',
        component: () => import('@/views/SettingsEyes.vue')
      },
      {
        path: 'nose-mouth',
        name: 'nose-mouth',
        component: () => import('@/views/SettingsNoseMouth.vue')
      },
      {
        path: 'blush',
        name: 'blush',
        component: () => import('@/views/SettingsBlush.vue')
      },
      {
        path: 'background',
        name: 'background',
        component: () => import('@/views/SettingsBackground.vue')
      },
      {
        path: 'clothes',
        name: 'clothes',
        component: () => import('@/views/SettingsClothes.vue')
      }
    ]
  }, 
  {
    path: '/privacy',
    name: 'privacy',
    component: PrivacyVue
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
