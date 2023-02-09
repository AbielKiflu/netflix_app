
<template>
   <NavMenu/>
   <BannerItem/>
</template>

<script setup>
   import { watchEffect ,onMounted} from 'vue';
   import reqests from "@/api/request";
   import BannerItem from "@/components/navigation/BannerItem";
   import NavMenu from "@/components/navigation/NavMenu";
   import useMovieStore from "@/store/movie";
   import { storeToRefs } from 'pinia';

   const {movie}=storeToRefs(useMovieStore());
   //https://developers.themoviedb.org/3/account/get-account-details

   onMounted(() => {
      console.log(`the component is now mounted.`)
   })

   watchEffect(async () => {
   try {
   const response = await fetch(reqests.movie)
   movie.value = await response.json()
      
   } catch (error) {
      movie.value = 'Error! Could not reach the API. ' + error
   }

   },{
   flush: 'post'
   })


    

</script>





<style scoped>



</style>