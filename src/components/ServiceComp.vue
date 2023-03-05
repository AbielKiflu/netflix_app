<template>
    <div class="service" :class="{even:id%2==0, odd:id%2==1}">
    <div class="detail" >
        <h1>{{ title}}</h1>
        <h2>{{ description }}</h2>
    </div>
    <div class="image">
        <img :src="require(`@/assets/${image}`)" alt="Picture">
    </div>
 </div>
 
  
</template>


<script setup>
   import { defineProps } from 'vue';
    defineProps({
        id:Number,
        title: String,
        description: String,
        image: String
    });
    
</script>


<style lang="scss" scoped>

    
    .service {
        padding: 2rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        border-bottom: 0.5rem solid var(--gray-color);
        
    }

    .odd{
        flex-direction: row-reverse;
    }

    .even{
        flex-direction: row;
    }

    .detail{
        color:var(--light-color);
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 35rem;
    }
    h1{
        font-weight: bold;
       font-size: 2.5rem;
    }
   
 
    img{
        object-fit: contain;
        max-width: 25rem;
        height:auto;
        
    }
 
 


</style>