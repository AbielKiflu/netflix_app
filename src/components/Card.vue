<template>
    <div class="card">
        <img :src="require('@/assets/movie.jpg')"/>
    </div>

    <div class="cardZoom">
        <div class="video">
            <img :src="require('@/assets/movie.jpg')"/>
        </div>
        <div class="control">
            <font-awesome-icon icon="fa-solid fa-circle-play" size="2x" inverse />
            <font-awesome-icon icon="fa-solid fa-circle-plus" size="2x"  inverse  />
            <font-awesome-icon icon="fa-regular fa-thumbs-up" size="2x"  inverse />
            <font-awesome-icon icon="fa-solid fa-circle-chevron-down" size="2x"  inverse  />
        </div>
        <div class="info">
             
        </div>
    </div>
</template>


<script>
export default {
    name: 'cardView',

}
</script>


<style lang="scss" scoped>
img { 
border-radius: 0.25rem;
box-shadow: 0 0 0.2rem black;
}

.cardZoom{
    .control {

    }
}

</style>