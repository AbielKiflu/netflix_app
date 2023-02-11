
<script   setup>
import { defineProps } from 'vue';

 defineProps({
   type: {
    type: String,
    required: true
    },
    label: {
      type: String,
      default: "",
    },
    placeholder:{
      type: String,
      default: ""
    },
    id:{
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      default: "",
    }
  });
 
</script>


<template>
  <div class="container">
  <div class="input" :class="{invalid:modelValue.length<=0}">
  <label :for="id">{{ label }}</label>
  <input
    class="field"
    :type="type" 
    :value="modelValue"
    required
    :id="id"
    @input="$emit('update:modelValue',$event.target.value)"
     >
  </div>
  <span v-show="modelValue.length<=0" class="input-error">Enter a valid {{ label }}</span>
  </div>

</template>




<style lang="scss" scoped>

 .container{
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  border-radius: 0.3rem;
  gap:0.2rem;
 
 }


 .input{
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  background-color: var(--gray-color);
  border-radius: 0.3rem;
  //border-bottom: 0.2rem solid rgb(248, 106, 23);
 }

 .invalid{
  border-bottom: 0.2rem solid rgb(248, 106, 23);
 }

 .field{
  display: block;
  width: 100%;
  background: transparent;
  border-radius: 0.3rem;
  text-align: left;
  color: lightgray;
  outline: none;
  border: none;
  background-color: var(--gray-color);

 }

 label{
  font-size: 0.7rem;
  color: lightgray;
 }



 .input-error{
  color:  rgb(248, 106, 23);
  font-size: 0.8rem;
 }


</style>