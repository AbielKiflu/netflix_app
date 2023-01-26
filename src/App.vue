<template>
   <Navigation/>
</template>

<script>
 import Navigation from "./components/Navigation";

export default {
  name: 'App',
 

components: {
  Navigation
},

mounted() {
    document.title = 'Netflix';
  }

 
}
</script>

<style>
 
</style>
