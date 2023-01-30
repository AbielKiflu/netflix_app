<template>
<header>
    <nav class="nav">
        <div class="brand">
            <router-link class="link" :to="{name:'App'}">
                <img :src="brandSvg" alt="brand" />
            </router-link>
        </div>
        <ul>
            <router-link to="/">Welcome</router-link>
            <router-link to="/home">Home</router-link>
            <router-link to="/movies">Movies</router-link>
         </ul>
 
    </nav>
</header>
</template>


<script>
import brandSvg from "@/assets/brand.svg";

export default {
    name: 'navigationMenu',
 
    setup() {
      return {
        brandSvg
      };}

}
</script>


<style lang="scss" scoped>
.nav{
    background: rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    ul{
        list-style: none;
        display: flex;;
        flex-direction: row;
       
   
        li{
            padding: 0 0.4rem;
           .link{
                color: white;
                
            }
        }
        }
}

img{
    width:7rem;
    height:auto;
    object-fit:cover;
    border:0.01rem solid white;
}
</style>