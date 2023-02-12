<script setup>
import BtnItem from "@/components/controls/BtnItem.vue";
import FieldItem from "@/components/controls/FieldItem.vue";
import CheckItem from "@/components/controls/CheckItem.vue";
import { RouterLink } from "vue-router";
import {ref} from "vue";
import {getAuth,signInWithEmailAndPassword} from "firebase/auth";
import useLoginStore from "@/store/login";
import { storeToRefs } from 'pinia';
import { useRouter } from "vue-router";

const router=useRouter();
const email=ref("");
const password=ref("");

const {login}=storeToRefs(useLoginStore());
const {setLoginState}=useLoginStore();
 
const handleLogin=()=>{
    signInWithEmailAndPassword(getAuth(),email.value,password.value)
    .then((result)=>{
        console.log(result);
        setLoginState();
        localStorage.setItem("login",login.value);
         router.push("/home");
        
    })
    .catch((error)=>{
        console.log("Login failed" + error);
       
    });
     
}

//signOut

</script>

<template>

  <header>
    <nav>
        <RouterLink to="/">
        <svg xmlns="http://www.w3.org/2000/svg" 
      height="100" width="120" viewBox="-153.6 -69.1855 1331.2 415.113">
      <path fill="#d81f26" d="M140.803 258.904c-15.404 
      2.705-31.079 3.516-47.294 5.676L44.051 119.724v151.073C28.647 272.418 14.594
       274.58 0 276.742V0h41.08l56.212 157.021V0h43.511zm85.131-157.558c16.757
         0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621
          50.809-3.785 76.482-4.596v41.617l-119.724 9.461V0h119.724v43.241h-76.482zm237.284-58.104h-44.862V242.15c-14.594
           0-29.188 0-43.239.539V43.242h-44.862V0H463.22zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433V0h120.808v43.241h-78.375zm148.641
            103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676V0h43.24zm109.994 49.457c13.783.812 28.377
             1.623 42.43 3.242V0h-42.43zM1024 0l-54.863 131.615L1024 276.742c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617
              73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75L871.576 0h46.482l28.377 72.699L976.705 0z"/></svg></RouterLink>
    
    </nav>

    <form class="login">
        <h1>Sign In</h1>
        <FieldItem 
            v-model="email"
            type="text"
            label="Email"
            id="email" />

        <FieldItem 
            v-model="password"
            type="password"
            label="Password"
            id="password"
             /> 
 
        <BtnItem text="Sign In" @click.prevent="handleLogin"/>

        <div class="control">
            <CheckItem
                label="Remember Me"
                id="remember"
                />
            <span>Need help?</span>  
        </div>

        <div class="footer">
            <p class="footer-link">New to Netflix <a href="#">Sign up now</a></p>
            <p class="footer-info">This page is protected by Google 
                reCAPTCHA to ensure you're not a bot <a href="#">Learn more</a></p>
        </div>

    </form>
  </header>

 
</template>

<style scoped lang="scss">

nav{
 

    h1{
      
        z-index: 4444;
    }
}

  header{
    position: relative;
    background:linear-gradient(rgba(0, 0, 0, 0.6) ,rgba(0, 0, 0, 0.3) 100%,transparent)
    ,url("@/assets/banner.jpg") no-repeat;
    background-size:cover;
    height: 90vh;
    background-position:center;
 
 
}
 
.login{
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    max-width: 430px;
    padding: 3rem;
    background-color: rgba(0 , 0, 0, 0.8);
    border-radius: 0.3rem;
   
  
}

.control{
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    color: lightgray;
}

.footer{
    display: flex;
    flex-direction: column;
    margin: 4rem 0;
    p{
        color: lightgray;
    }
}

.footer-link a{
    color: white;
 
}
.footer-info{
    font-size: 0.8rem;
}

.footer-info a{
    color:skyblue;
    text-decoration: none;
}
 
 
 
</style>