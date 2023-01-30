<script setup>
 import {ref,defineProps} from "vue";

 const isToggled=ref(false);

defineProps(
    {
        question:String,
        answer:String,
    }
);

console.log(isToggled.value);
 const toggle=()=>{
    isToggled.value=!isToggled.value;    
 }

 
</script>

<template>
     <div class="faqItem"> 
        <div class="head"> 
            <p>{{ question }}</p>
            <div  @click="toggle">
                <font-awesome-icon v-if="!isToggled" icon="fa-solid fa-plus" size="2x"  inverse/> 
                <font-awesome-icon v-if="isToggled" icon="fa-solid fa-xmark" size="2x"  inverse/> 
            </div>
        </div>
        <div class="drawer" v-if="isToggled"> 
            <p>{{ answer }}</p>
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