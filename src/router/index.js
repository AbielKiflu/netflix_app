import {createRouter,createWebHistory} from 'vue-router';
 
 import WelcomeView from "@/views/WelcomeView.vue";
 import HomeView from "@/views/HomeView.vue";
 import MoviesView from "@/views/MoviesView.vue";
 import MyListView from "@/views/MyListView.vue";
 import TvShowView from "@/views/TvShowView.vue";
 

 const router = createRouter({

  history: createWebHistory(),
  routes: [
 
    {
      path: '/',
      name: 'welcome',
      component: WelcomeView,

    },
 
    {
      path: '/home',
      name: 'home',
      component: HomeView,

    },

    {
      path: '/movies',
      name: 'movies',
      component: MoviesView,

    },

    {
      path: '/lists',
      name: 'mylist',
      component: MyListView,

    },

    {
      path: '/shows',
      name: 'tvshow',
      component: TvShowView,

    },
  
  ],

 });
 

export default router;