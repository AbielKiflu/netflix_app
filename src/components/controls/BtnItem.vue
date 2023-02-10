
<script   setup>
 import { defineProps } from 'vue';

 defineProps({
   text: {
    type: String,
    required: true
    }
  });
 
</script>


<template>
  <button class="btn" >{{ text }}</button>
</template>




<style lang="scss" scoped>
.btn{
    padding: 0.8rem;
    display: block;
    background-color: var(--primary-color);
    outline: transparent;
    color: white;
    cursor: pointer;
    text-align: center;
    border-radius: 0.3rem;
    width: 100%;
    border: none;

}
</style>