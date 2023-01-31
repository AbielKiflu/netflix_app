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
     
}
.callToAction{
     position: relative;
    
}

.caretRight{
    position:absolute;
    right:5%;
    top:50%;
    transform: translate(-50%, -50%);
    
}

input[type="text"]{
    padding: 0.6rem 1rem;
    font-size: 1.5rem;
     
}

button{
   color: white;
   font-size: 1.5rem;
   background-color: var(--primary-color);
   border-color:transparent;
   padding: 1rem 2.5rem;

}


</style>