import {createRouter,createWebHistory} from 'vue-router';
 
import HomeView from "@/views/Home.vue";
import MoviesView from "@/views/Movies.vue";


 const router = createRouter({

  history: createWebHistory(),
  routes: [
 
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