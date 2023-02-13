import {createRouter,createWebHistory} from 'vue-router';
 import WelcomeView from "@/views/WelcomeView.vue";
 import HomeView from "@/views/HomeView.vue";
 import MoviesView from "@/views/MoviesView.vue";
 import MyListView from "@/views/MyListView.vue";
 import TvShowView from "@/views/TvShowView.vue";
 import LoginView from "@/views/LoginView.vue";
 import LogoutView from "@/views/LogoutView.vue";
 import {getAuth,onAuthStateChanged} from "firebase/auth";

 const router = createRouter({

  history: createWebHistory(),
  routes: [
 
    {
      path: '/',
      name: 'welcome',
      component: WelcomeView,

    },
    {
      path: '/logout',
      name: 'logout',
      component: LogoutView,

    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,

    },
 
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta:{
        requiresAuth: true,
      }

    },

    {
      path: '/movies',
      name: 'movies',
      component: MoviesView,
      meta:{
        requiresAuth: true,
      }
    },

    {
      path: '/lists',
      name: 'mylist',
      component: MyListView,
      meta:{
        requiresAuth: true,
      }
    },

    {
      path: '/shows',
      name: 'tvshow',
      component: TvShowView,
      meta:{
        requiresAuth: true,
      }
    },
  
  ],

 });

 const getCurrentUser = () =>{
  return new Promise((resolve, reject) =>{
    const removeListener=onAuthStateChanged(
      getAuth(),
      (user)=>{
        removeListener();
        resolve(user);
      },
      reject
    )
  });
 }

 router.beforeEach( async (to,from,next)=>{
   if(to.matched.some((record)=>record.meta.requiresAuth)){
    if(await getCurrentUser()){
      next();
    }else{
      next("/");
    }
   }else{
    next();
   }

  }
 );
 

export default router;