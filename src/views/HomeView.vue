
<template>
   <BannerItem/>
</template>

<script setup>
   import { watchEffect,onBeforeMount } from 'vue';
   import reqests from "@/api/request";
   import BannerItem from "@/components/navigation/BannerItem";
   import useMovieStore from "@/store/movie";
   import { storeToRefs } from 'pinia';

   const {movie}=storeToRefs(useMovieStore());
   //https://developers.themoviedb.org/3/account/get-account-details

  

   onBeforeMount(()=>{
      watchEffect(async () => {
   try {
   const response = await fetch(reqests.movie)
   movie.value = await response.json()
      
   } catch (error) {
      movie.value = 'Error! Could not reach the API. ' + error
   }

   })
   })

    

</script>





<style scoped>



</style>