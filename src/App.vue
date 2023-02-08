<script setup>
//Helvetica
</script>

<template>
    <router-view></router-view>
</template>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
*, :root{
  --primary-color: #e50914;
  --dark-color: #141414;
  --gray-color:#303030;
  --light-color: #f4f4f4;


}

::selection{
  background-color: var(--primary-color);
}

*{
  //outline: 1px #e50914 solid ;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Poppins', sans-serif;
}


body {
  background-color: #000000;
  color: var(--light-color);
 
}

</style>