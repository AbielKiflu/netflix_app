<template>
 <div class="wrapper">
    <div class="detail">
        <h1>{{ title }}</h1>
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
        title: String,
        description: String,
        image: String
    });
    
</script>


<style lang="scss" scoped>
    .wrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content:center;
        align-self:center;
        gap:2rem;
        padding: 3rem;   
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
        text-align: center;
    }
    h2{
         text-align: center;
    }

    .image{
        max-width: 30rem;
        max-height: auto;
        border-color: var(--light-color);
    }

    img{
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
</style>