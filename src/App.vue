<script setup>
//Helvetica
import WelcomeView from "@/views/WelcomeView";
 
</script>

<template>
   <WelcomeView/>
</template>


<style lang="scss">
@font-face {
   font-family: 'Helvetica';
   src: url('@/assets/fonts/Helvetica.ttf');
}

*, :root{
  --primary-color: #e50914;
  --dark-color: #141414;
  --light-color: #f4f4f4;

  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family:'Helvetica', sans-serif;
  //outline: 1px #e50914 solid ;
}

 


body {
  background-color: var(--dark-color);
}

</style>