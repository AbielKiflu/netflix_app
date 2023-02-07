<script setup>
 

 
</script>

<template>
     <div class="wrapped"> 
      <input type="text" name="" id="" placeholder="Email address">
     
        <button class="callToAction">
            <div>Get Started </div>
            <div>
                <span class="caretRight">
            <font-awesome-icon icon="fa-solid fa-angle-right" size="lg" inverse/>
        </span>
            </div>
        </button>

    
</div>
</template>


<style scoped>
 
 .wrapped{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    margin: 1rem 0;
 }

.callToAction{
    background-color: var(--primary-color);
    border-color:transparent;
    color:white;
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 0.5rem;
   
}
 

input[type="text"]{
    padding: 0.5rem 1rem;   
   
}

 


</style>