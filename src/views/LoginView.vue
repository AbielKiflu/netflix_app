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
    border-bottom: 0.5rem solid var(--gray-color);
}
 
.login{
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    max-width: 500px;
    padding: 3rem;
    border-color: black;
    background-color: rgba(0 , 0, 0, 0.8);
    border-radius: 0.3rem;
   
  
}

.control{
    display: flex;
    justify-content: space-between;

}

 
 
 
 
 
</style>