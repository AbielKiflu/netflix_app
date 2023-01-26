<template>
<header>
    <nav>
        <div class="brand">
            <router-link class="link" :to="{name:'App'}">
                <img :src="brandSvg" alt="brand" />
            </router-link>
        </div>
         <ul>
            <router-link class="link" to="#"> Home</router-link>
            <router-link class="link" to="#"> Tv Shows</router-link>
            <router-link class="link" to="#"> Movies</router-link>
            <router-link class="link" to="#"> My List</router-link>
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
img{
    width:8rem;
    height:auto;
    object-fit:cover;
}
</style>