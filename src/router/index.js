import {createRouter,createWebHistory} from 'vue-router';
import WelcomeView from "@/views/Welcome.vue"
import HomeView from "@/views/Home.vue";
import MoviesView from "@/views/Movies.vue";


 const router = createRouter({

  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomeView

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

    }
  
  ],

 });
 

export default router;