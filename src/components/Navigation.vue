<template>
<header>
    <nav class="nav">
        <div class="brand">
            <router-link class="link" :to="{name:'App'}">
                <img :src="brandSvg" alt="brand" />
            </router-link>
        </div>
        <ul>
            <li>  <router-link class="link" to="#"> Home</router-link></li>
            <li> <router-link class="link" to="#"> Tv Shows</router-link></li>
            <li>  <router-link class="link" to="#"> Movies</router-link></li>
            <li> <router-link class="link" to="#"> My List</router-link></li>
         </ul>

         <ul>
            <li> <router-link class="link" to="#"> Logout</router-link></li>
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