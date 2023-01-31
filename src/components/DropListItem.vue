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
  position: relative;
}

.caretDownIcon{
  position: absolute;
  top:50%;
  right:5%;
  transform:translate(-50%,-50%);
}

.langIcon{
  position: absolute;
  top:50%;
  transform:translate(50%,-50%);
}

select{
  appearance: none;
  color: var(--light-color);
  background-color: rgba(#141414,.9);
  border-radius: 0.1rem;
  border: 0.1rem solid var(--light-color);
  padding: 0.35rem 1.8rem;
 
}



</style>