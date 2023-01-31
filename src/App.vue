<script setup>
//Helvetica
import WelcomeView from "@/views/WelcomeView";
 
</script>

<template>
   <WelcomeView/>
</template>


<style lang="scss">
@font-face {
   font-family: 'Helvetica-Bold';
   src: url('@/assets/fonts/Helvetica-Bold.ttf');
}

*, :root{
  --primary-color: #e50914;
  --dark-color: #141414;
  --gray-color:#303030;
  --light-color: #f4f4f4;

  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family:'Helvetica', sans-serif;
  font-weight: 500;
  //outline: 1px #e50914 solid ;
}
 


body {
  background-color: #000000;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

</style>