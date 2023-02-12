
<template>
   <BannerItem />
   <h2>Movies</h2>
   <CardItem :movies="movieList"/>
   
</template>

<script setup>
   import { watchPostEffect,ref } from 'vue';
   import reqests from "@/api/request";
   import BannerItem from "@/components/navigation/BannerItem";
   import useMovieStore from "@/store/movie";
   import { storeToRefs } from 'pinia';
   import CardItem from "@/components/card/CardItem";

   const {movie}=storeToRefs(useMovieStore());
   const movieList=ref([]);

   watchPostEffect(async () => {
   try {
   const response = await fetch(reqests.movies)
   movieList.value = await response.json()
   console.log(movieList.value);
   } catch (error) {
      movieList.value = 'Error! Could not reach the API. ' + error
   }

   });
  
   watchPostEffect(async () => {
   try {
   const response = await fetch(reqests.movie)
   movie.value = await response.json()
   } catch (error) {
      movie.value = 'Error! Could not reach the API. ' + error
   }

   });
    

</script>





<style scoped>



</style>