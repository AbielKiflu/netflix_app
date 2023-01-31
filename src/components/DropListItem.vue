<script setup>
 

 
</script>

<template>
   <div class="selection">
     <span class="langIcon"><font-awesome-icon icon="fa-solid fa-globe"  inverse /></span>
  <select>
    <option selected value="en">English</option>
    <option value="fr">French</option>
  </select> 
  <span class="caretDownIcon"><font-awesome-icon icon="fa-solid fa-caret-down" inverse/></span>
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
   color: white;
   background-color: rgba(#141414,.9);
    border-radius: 0.2rem;
   border: 0.1rem solid white;
   padding: 0.7rem 3rem;
 
}



</style>