<template>
 <div id="app">{{ message }}</div>
</template>

<script>
 

export default {
  name: 'App',
  data() {
      return {
        message: 'Hello Vue!'
      }
},

mounted() {
    document.title = 'Netflix';
  }

 
}
</script>

<style>
 
</style>
