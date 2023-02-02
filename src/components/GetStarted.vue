<script setup>
 

 
</script>

<template>
     <div > 
      <input type="text" name="" id="" placeholder="Email address">
      <div class="callToAction"> 
        <button>Get Started </button>
        <span class="caretRight">
            <font-awesome-icon icon="fa-solid fa-angle-right" size="lg" inverse/>
        </span>
    </div>
</div>
</template>


<style scoped>
div{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    row-gap:0.5rem;
}
.callToAction{
     position: relative;
    
}

.caretRight{
    position:absolute;
    right:5%;
    top:50%;
    transform: translate(-50%, -50%);
    display: block;
}

input[type="text"]{
    padding: 0.6rem 1rem;
     
}

button{
   color: white;
   background-color: var(--primary-color);
   border-color:transparent;
   padding: 0.8rem;
    
}


</style>