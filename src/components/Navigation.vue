<template>
<header>
    <nav>
        <div class="brand">
            <router-link class="link" :to="{name:'App'}">Netflix</router-link>
        </div>
         <ul>
            <router-link class="link" to="#"> Home</router-link>
            <router-link class="link" to="#"> Tv Shows</router-link>
            <router-link class="link" to="#"> Movies</router-link>
            <router-link class="link" to="#"> My List</router-link>
         </ul>

    </nav>
</header>
</template>


<script>
export default {

}
</script>


<style lang="scss" scoped>

</style>