<script setup>
    import ButtonItem from "@/components/ButtonItem";
    import DropListItem from "@/components/DropListItem";
 
</script>

<template>
    <nav class="nav">
        <router-link class="link" to="/">
            <img class="logo" :src="require('@/assets/logo.png')" alt="">        
        </router-link>
            <ul>
                <li><DropListItem/></li>
                <li><ButtonItem text="Sign In"/></li>
            </ul>
    </nav>
</template>





<style lang="scss" scoped>
.nav{
    //background: linear-gradient(black 20%,rgba(0, 0, 0, 0.9) 40%,transparent);
    display: flex;
    justify-content: space-between;
    max-width: calc(100% - 3rem);
 
    
    ul{
        
        list-style: none;
        display: flex;;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        gap:1rem;
       
    }

}





.logo{
 max-width: 7rem;

}



</style>