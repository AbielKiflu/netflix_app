
<template>
   <section class="banner" :style="bannerStyl">
        <h1 class="banner-title">{{ movie?.title }}</h1>
        <p class="banner-info"> 
          {{ trimmer(movie?.overview) }}
        </p>
           <div class="banner-action">
            <button class="banner-btn">Play</button>
            <button class="banner-btn">More info</button>
           </div>
   </section>
  
 </template>
 
 <script setup>
  import useMovieStore from "@/store/movie";
  import { storeToRefs } from 'pinia';
  import {ref,watchPostEffect} from 'vue';
  const bannerStyl=ref({});
 

  const {movie}=storeToRefs(useMovieStore());

  const trimmer=(str)=>str?.length > 70 && str.substring(0,100)+"..."

 

  watchPostEffect(()=>{
    bannerStyl.value.backgroundImage=`url("https://image.tmdb.org/t/p/original/${movie?.value?.backdrop_path}")`;
  
 
  })




 </script>
 
 
 
 
 
 <style lang="scss" scoped>
 
 .banner{

  background-repeat: no-repeat;
  //rgba(51, 51, 51, 0.5)
  background-size: cover;
  background-position: center center;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 1rem;
 }

 .banner-title{
  font-size: 3rem;
 
 }

 .banner-info{
  max-width: 60%;
 }

 .banner-action{
  display: flex;
  gap: 1rem;
 }

 .banner-btn{
  padding: 0.4rem 1rem;
  border-radius: 0.3rem;
  border: none;
    &:hover { 
      background: lightgrey;
    }
 }



 
 </style>