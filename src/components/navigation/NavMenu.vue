<template>
 
    <nav class="navbar" :class="{'navbar-dark':scrollY}">
      <div class="navbar-left"><RouterLink to="/home">
        <svg xmlns="http://www.w3.org/2000/svg" 
      height="80" width="100" viewBox="-153.6 -69.1855 1331.2 415.113">
      <path fill="#d81f26" d="M140.803 258.904c-15.404 
      2.705-31.079 3.516-47.294 5.676L44.051 119.724v151.073C28.647 272.418 14.594
       274.58 0 276.742V0h41.08l56.212 157.021V0h43.511zm85.131-157.558c16.757
         0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621
          50.809-3.785 76.482-4.596v41.617l-119.724 9.461V0h119.724v43.241h-76.482zm237.284-58.104h-44.862V242.15c-14.594
           0-29.188 0-43.239.539V43.242h-44.862V0H463.22zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433V0h120.808v43.241h-78.375zm148.641
            103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676V0h43.24zm109.994 49.457c13.783.812 28.377
             1.623 42.43 3.242V0h-42.43zM1024 0l-54.863 131.615L1024 276.742c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617
              73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75L871.576 0h46.482l28.377 72.699L976.705 0z"/></svg></RouterLink>
    
        <ul class="navbar-items">
        <li><RouterLink to="/home"> Home</RouterLink> </li>
        <li><RouterLink to="/shows"> Tv Shows</RouterLink> </li>
        <li><RouterLink to="/movies"> Movies</RouterLink> </li>
        <li><RouterLink to="/lists"> My List</RouterLink> </li>
      </ul>
 
      </div>
      <div class="navbar-right">
        <font-awesome-icon icon="fa-regular fa-bell" size="2x" />
        <button @click.prevent="toggleUser" class="btn btn-user"></button>
      <div class="user">
          <div v-show="userMenu" class="dropdown-user">
            <ul>
              <li>Profile</li>
              <li>Manage account</li>
            </ul>
          </div>
        </div>
        </div>
    </nav>
  
</template>

<script    setup>
import { RouterLink } from "vue-router";
import { onBeforeUnmount, onMounted,ref } from "vue"

const userMenu=ref(false);
const scrollY =ref(false);

const toggleUser=()=>{
  userMenu.value=!userMenu.value;
}

function windowScroll() {
   if(window.scrollY > 50){
    scrollY.value=true;
   }else{
    scrollY.value=false;
   }
}

onMounted(() => {
    window.addEventListener('scroll', windowScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', windowScroll)
})
 
</script>

<style lang="scss" scoped>
 .navbar{
  display:flex;
  flex-direction: row;
  height: 4rem;
  font-weight: 600;
  font-size: 12px;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  transition-timing-function: ease-in;
  transition: all 2s;

 }

 .navbar-dark{
  background-color: #000000;
 }

 .btn{
  width: 2rem;
  padding: 1rem;
  border-radius: 0.3rem;
  outline: transparent;
  border: none;
 }

.btn-user{
  background: url('@/assets/user.png') no-repeat center;
} 

.navbar-left,.navbar-right{
  display:flex;
  gap: 1rem;
}
 
span{
  color: white;
}
 svg{
  overflow: hidden;
 }

 .navbar-items{
  list-style: none;
  display: flex;
  padding: 0.5rem;
  align-items: center;
 
  gap: 0.5rem;
    li a{
      color: var(--light-color);
      text-decoration: none;
    }
 }

 .user{
  position: relative;
 
 }
 .dropdown-user{
  position: absolute;
  right:0rem;
  top: 3rem;
  background-color: rgba(0 , 0, 0, 0.8);
  border-radius: 0.3rem;

  ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 10rem;
    li{
      font-size: 0.9rem;
      padding: 0.5rem;
      border-bottom:1px solid black;
     &:hover{
      background-color: gray;
     }
    }
  }
 }

 



 //@media only screen and (min-width: 450px) {
 //big screen
//}


</style>