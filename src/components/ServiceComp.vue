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
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap:2rem;
        padding: 2rem 0;
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
        padding: 1rem;
        max-width: 40rem;
    }
    h1{
        font-weight: bold;
       font-size: 3rem;
    }
   
 
    img{
        object-fit: contain;
        max-width: 25rem;
        height:auto;
        
    }
</style>