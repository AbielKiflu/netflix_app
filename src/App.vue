<template>
 
  <button  class="btn" id="count" @click.prevent="handleSubmit">{{ counterStore.count }}</button>
  <router-link to="/">Welcome</router-link>
  <router-link to="/home">Home</router-link>
  <router-link to="/movies">Movies</router-link>
   

  <router-view></router-view>

</template>

<script setup>
import {ref,onMounted} from "vue";
import useCounterStore from '@/store/counter';




 






// create a counter store
const counterStore=useCounterStore()
const handleSubmit = ()=>{
  counterStore.increment();
}

//change the title of the website
const title=ref("Netflix");
onMounted(
  ()=>{
     document.title = title.value;
  }
);



 




 
 
</script>

<style>
 
 *{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  cursor: pointer;
 }

 body{
  background-color: #141414;
}

.btn{
  color:black;
  padding: 1rem;

}
  

</style>
