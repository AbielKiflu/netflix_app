
<template>
   <section class="banner">
        <h1 class="banner-title">Movie name</h1>
        <p class="banner-info">
          The movie is about ... Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem possimus 
          delectus, id suscipit!</p>
            <button class="banner-btn">Play</button>
   </section>
  
 </template>
 
 <script setup>
  
   
 </script>
 
 
 
 
 
 <style scoped>
 
 .banner{
  background-image: url("@/assets/movie.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 45vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 1rem;
 }

 .banner-title{
  font-size: 2.5rem;
 }

 .banner-info{
  max-width: 60%;
 }

 .banner-btn{
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
 
 }



 
 </style>