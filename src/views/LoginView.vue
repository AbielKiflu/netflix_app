<script setup>
import BtnItem from "@/components/controls/BtnItem.vue";
import FieldItem from "@/components/controls/FieldItem.vue";
import CheckItem from "@/components/controls/CheckItem.vue";


 


</script>

<template>
  
  <header>
    <form class="login">
        <h1>Sign In</h1>
        <FieldItem 
            type="text"
            label="Email"
            id="email" />
        <FieldItem 
            type="password"
            label="Password"
            id="password"
             /> 
 
        <BtnItem text="Sign In"/>

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
  header{
    position: relative;
    background:url("@/assets/banner.jpg") no-repeat;
    background-size:cover;
    height: 79.1vh;
    background-position:center;
    display: flex;
    justify-content: center;
    align-items: center;
 
}
 
.login{
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    max-width: 430px;
    padding: 3rem;
    border-color: black;
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