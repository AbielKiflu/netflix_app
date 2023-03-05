<script setup>
 

 
</script>

<template>
     <div class="wrapped"> 
        <div class="emailcontainer">
           
            <input required type="email"
      autocomplete="email" minlength="5" maxlength="50"  name="email" id="" placeholder="Email address">
    
        </div>
        <button   class="callToAction">
            <h2  aria-hidden="true">Get Started </h2>
            <div  aria-hidden="true">
                <span class="caretRight">
            <font-awesome-icon icon="fa-solid fa-angle-right" size="lg" inverse/>
        </span>
            </div>
        </button>

    
</div>
</template>


<style lang="scss" scoped>
 
 .wrapped{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin: 1rem 0;
    background-color: transparent;
 }
.emailcontainer{
    background-color: rgb(255, 255, 255);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
    
}
.callToAction{
    background-color: var(--primary-color);
    border-color:transparent;
    color:white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1.5rem;
    padding: 0.5rem;
 

    &:hover {
        background-color:rgb(179, 22, 22);
    }
}
 

input[type="email"]{

    border: none;
    outline: transparent;
    border: none;
 
}
 

 


</style>