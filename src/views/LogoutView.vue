<script setup>
import {useRouter} from 'vue-router';
import {getAuth,signOut} from "firebase/auth";
import useLoginStore from "@/store/login";
import { storeToRefs } from 'pinia';

const {login}=storeToRefs(useLoginStore());
const {setLoginState}=useLoginStore();
const router = useRouter();


await signOut(getAuth());
setLoginState();
localStorage.setItem("login",login.value);
router.push('/login')

</script>

<template>
    <p>Logging out</p>

 
</template>
 

<style lang="scss" scoped>




</style>