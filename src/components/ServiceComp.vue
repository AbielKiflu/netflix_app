<template>
 <div class="wrapper">
    <div class="detail">
        <h1>{{ title }}</h1>
        <h2>{{ description }}</h2>
    </div>
    <div class="image">
        <img :src="require(`@/assets/${image}`)" alt="">
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
    }

    .detail{
        color:var(--light-color);
        text-align: center;
    }

    .image{
        border-color: var(--light-color);
    }

</style>