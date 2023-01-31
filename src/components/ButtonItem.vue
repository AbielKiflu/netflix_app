<script setup>
 import { defineProps } from 'vue';

 defineProps({
   text: {
     type: String,
     required: true
    }
  });
 
</script>

<template>
  <button>{{ text }}</button>
</template>


<style scoped>

button{
  color: var(--light-color);
  background-color:var(--primary-color);
  border-radius: 0.2rem;
  border-color: transparent;
  padding: 0.35rem;

}

</style>