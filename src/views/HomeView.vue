
<template>
   <NavMenu/>
   <BannerItem/>
 
</template>

<script setup>
   import { ref, watchEffect } from 'vue';
   import reqests from "@/api/request";
   import BannerItem from "@/components/navigation/BannerItem";
   import NavMenu from "@/components/navigation/NavMenu";

   const movie=ref({});


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