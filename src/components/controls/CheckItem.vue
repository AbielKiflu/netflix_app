
<script   setup>
import { defineProps } from 'vue';

 defineProps({
    label: {
      type: String,
      default: "",
    },
    id:{
      type: String,
      required: true,
    }
 
  });
 
</script>


<template>
 
  <div class="input">
  <input
    class="field"
    type="checkbox"
    :id="id"
     >
  <label :for="id" >{{ label }}</label>
  </div>
 

</template>




<style lang="scss" scoped>
 
 .input {
  display: flex;
  gap: 0.5em;
 }

</style>