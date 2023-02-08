
<template>
   <NavMenu/>
   <BannerItem/>
 
</template>

<script setup>
   import { watchEffect } from 'vue';
 
   import reqests from "@/api/request";
   import BannerItem from "@/components/navigation/BannerItem";
   import NavMenu from "@/components/navigation/NavMenu";
   import useMovieStore from "@/store/movie";
   import { storeToRefs } from 'pinia';

   const {movie}=storeToRefs(useMovieStore());


   watchEffect(async () => {
try {
   const response = await fetch(reqests.movie)
  movie.value = await response.json()
  //console.log(movie.value);
 
} catch (error) {
      movie.value = 'Error! Could not reach the API. ' + error
   }

},{
  flush: 'post'
})

    

</script>





<style scoped>



</style>