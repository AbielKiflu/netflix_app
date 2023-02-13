<script setup>
import { defineProps } from 'vue';
import {RouterLink} from 'vue-router';
defineProps({
   items: {
    type: Array,
    required: true
    }
  });

</script>


<template>
<div  class="dropdown-user" >
            <ul >
                <li :items="items" v-for="item in items" :key="item.id"><RouterLink :to="item.link"/>{{ item.value }}<RouterLink/></li>
            </ul>
          </div>
</template>

<style lang="scss" scoped>
 .dropdown-user{
  position: absolute;
  right:0rem;
  top: 3rem;
  background-color: rgba(0 , 0, 0, 0.8);
  border-radius: 0.3rem;

  ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 10rem;
    cursor: pointer;
    li{
      font-size: 0.9rem;
      padding: 0.5rem;
      border-bottom:1px solid black;
     &:hover{
      background-color: gray;
     }
    }
  }
 }
</style>