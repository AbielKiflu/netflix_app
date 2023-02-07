<template>
    <div class="wrapper" :class="{even:id%2==0, odd:id%2==1}">
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
    .wrapper {
        margin-top: 0.5rem;
        background-color: #000000;
        display: flex;
        flex-wrap: wrap;
        justify-content:center;
        align-self:center;
        gap:2rem;
        padding: 3rem;   
    }

    .odd{
        flex-direction: row-reverse;
    }

    .even{
        flex-direction: row;
    }

 

  

    .reverse{
        flex-direction: row-reverse;
    }

    .detail{
        color:var(--light-color);
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 30rem;
        gap:1rem;
    }
    h1{
        font-weight: bold;
        font-size: 3rem;
    }
   

    .image{
        max-width: 25rem;
        border-color: var(--light-color);
    }

    img{
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
</style>