<script setup>
 

 
</script>

<template>
     <div class="faqItem"> 
        <div class="head"> 
            <p>What can I watch</p>
            <button>+</button>
        </div>
        <div class="drawer"> 
      <p>Hi there</p>
        </div>
    </div>
</template>


<style scoped>

 .faqItem{
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    width: 60%;

 }
 
 .head{
    background-color: rgb(73, 70, 70);
    color: white;
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding: 1rem;
 }

.drawer{
    display: flex;
    background-color: rgb(73, 70, 70);
    color: white;
    border-top-color:#141414 ;
    padding: 1rem;
}

</style>