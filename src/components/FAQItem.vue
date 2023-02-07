<script setup>
 import {ref,defineProps} from "vue";

 const isToggled=ref(false);

defineProps(
    {
        question:String,
        answer:String,
    }
);
 
 const toggle=()=>{
    isToggled.value=!isToggled.value;    
 }

 
</script>

<template>
     <div class="faqItem"> 
        <div class="question"> 
            <h2>{{ question }}</h2>
            <span  @click="toggle">
                <font-awesome-icon v-if="!isToggled" icon="fa-solid fa-plus" size="2x"  inverse/> 
                <font-awesome-icon v-if="isToggled" icon="fa-solid fa-xmark" size="2x"  inverse/> 
            </span>
        </div>
        <p class="answare" v-if="isToggled"> 
             {{ answer }}
        </p>
    </div>
</template>


<style lang="scss" scoped>

 .faqItem{
    margin: 0.5rem auto;
    max-width: 780px;

    .question{
    background-color:var(--gray-color);
    color: var(--light-color);
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;

    
    }

    .answare{
        background-color: var(--gray-color);
        border-top-color:var(--gray-color);
        color: white;
        padding: 0.5rem;
        margin-top: 0.1rem;
      
    }
 }
 


</style>