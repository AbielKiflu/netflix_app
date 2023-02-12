<script setup>
import {defineProps,ref} from "vue";
const props=defineProps({
    movies: {
        type:Object,
    }
})


const slides=ref([...props.movies.results]);
const current=ref(0);
const showSlides=ref([]);



const nextHandler=() =>{
     if(current.value < slides.value.length){
        current.value ++;
        showSlides.value=slides.value.filter((slide,index) =>index>current.value );
     }
  
}

const previousHandler=() =>{
    if(current.value>0){
        current.value--;
        showSlides.value=slides.value.filter((slide,index) =>index>current.value );
        console.log(current.value);
     }
}
 

</script>

<template>
    
    <div class="carousel">
        <button @click.prevent="previousHandler">{{ "<" }}</button>
        <div class="slides">
        <div class="card" v-for="movie in movies.results" :key="movie.id">
         <img :src="`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`" :alt="movie.title">
        </div>
        </div>
        <button @click.prevent="nextHandler">{{ ">" }}</button>
    </div>
   
</template>


<style lang="scss" scoped>

    .carousel{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.5rem;
    }
    .slides{
        display: flex;
        justify-content: space-between;
        gap: 0.5rem;
        overflow: scroll;
    }
    .card {
        border-radius: 0.3rem;
        display: inline-block;
        img{
            width: 15rem;
            
            object-fit: fill;
             
        }
    }

    button{
    background-color: transparent;
    color: white;
    padding: 0.5rem;
    border: transparent;
   
    }


</style>
