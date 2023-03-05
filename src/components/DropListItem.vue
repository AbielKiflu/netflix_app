<script setup>
 

 
</script>

<template>
   <div class="selection">
     <span class="langIcon"><font-awesome-icon icon="fa-solid fa-globe" size="xs" inverse /></span>
  <select>
    <option selected value="en">English</option>
    <option value="fr">French</option>
  </select> 
  <span class="caretDownIcon"><font-awesome-icon icon="fa-solid fa-caret-down" size="sm" inverse/></span>
   </div>

</template>


<style scoped lang="scss">

.selection{
 display: flex;
 padding: 0 0.5rem;
 align-items: center;  
 border: 0.1rem solid var(--light-color);
}



select{
  appearance: none;
  color: var(--light-color);
  background-color: rgba(#141414,.9);
  border-radius: 0.1rem;
  outline: none;
  border: none;
  text-align-last:left;
  padding: 0.35rem 1.8rem;
 
}



</style>