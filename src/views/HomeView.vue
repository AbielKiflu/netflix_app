
<template>
   <BannerItem />
   <CardItem :movies="moviesPopular" header="Popular"/>
   <CardItem :movies="movieUpcoming" header="Upcomming"/>
   <CardItem :movies="moviesLatest" header="Latest"/>
   <CardItem :movies="moviesTopRated" header="Top Rated"/>
   
</template>

<script setup>
   import { watchPostEffect,ref } from 'vue';
   import reqests from "@/api/request";
   import BannerItem from "@/components/navigation/BannerItem";
   import useMovieStore from "@/store/movie";
   import { storeToRefs } from 'pinia';
   import CardItem from "@/components/card/CardItem";

   const {movie}=storeToRefs(useMovieStore());
   const moviesPopular=ref([]);
   
   const movieUpcoming=ref([]);
   const moviesTopRated=ref([]);
   //const moviesLatest=ref([]);


   const fetchMovie=async (path)=>{
      try {
   const response = await fetch(path)
      return await response.json()
 
   } catch (error) {
      return error.json()
   }
   }

   watchPostEffect(async () => {
      movie.value=await fetchMovie(reqests.movie)
      moviesPopular.value=await fetchMovie(reqests.moviesPopular)
      movieUpcoming.value=await fetchMovie(reqests.moviesUpcoming)
      moviesTopRated.value=await fetchMovie(reqests.moviesTopRated)
      //moviesLatest.value=await fetchMovie(reqests.moviesLatest)
      
    

   });
  
 
    

</script>





<style scoped>



</style>