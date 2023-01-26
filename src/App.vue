<template>
   <Navigation/>
   <Footer/>
</template>

<script>
 import Navigation from "./components/Navigation";
 import Footer from "./components/Footer.vue";



export default {
  name: 'App',
 

components: {
  Navigation,
  Footer,
},

mounted() {
    document.title = 'Netflix';
  }

 
}
</script>

<style>
 *{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
 }

 body{
  background-color: #141414;
}
  

</style>
