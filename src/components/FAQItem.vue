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
        <div class="head"> 
            <h2>{{ question }}</h2>
            <div  @click="toggle">
                <font-awesome-icon v-if="!isToggled" icon="fa-solid fa-plus" size="2x"  inverse/> 
                <font-awesome-icon v-if="isToggled" icon="fa-solid fa-xmark" size="2x"  inverse/> 
            </div>
        </div>
        <div class="drawer" v-if="isToggled"> 
            <h2>{{ answer }}</h2>
        </div>
    </div>
</template>


<style scoped>

 .faqItem{
    display: flex;
    flex-direction: column;
    gap: 0.07rem;
    width: 100%;
    margin-bottom: 0.5rem;

 }
 
 .head{
    background-color:var(--gray-color);
    color: var(--light-color);
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding: 1.3rem;
 }

.drawer{
    display: flex;
    background-color: var(--gray-color);
    color: white;
    border-top-color:var(--gray-color);
    padding: 1rem;
}

</style>