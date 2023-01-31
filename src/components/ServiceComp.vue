<template>
 <div class="wrapper">
    <div class="detail">
        <h2>Title</h2>
        <p>We provide everything</p>
    </div>
    <div class="image">
        <img src="" alt="">
    </div>
 </div>
</template>


<script setup>
    
</script>


<style lang="scss" scoped>
    .wrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .detail{
        color:var(--light-color);
    }

    .image{
        width: 20rem;
        height: 10rem;
        border-color: var(--light-color);
    }

</style>