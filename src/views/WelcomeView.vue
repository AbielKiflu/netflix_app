<script setup>
 
  import NavigationMenu from "@/components/NavigationMenu";
  import GetStarted from "@/components/GetStarted";
  import FAQ from "@/components/FAQ";
  import ServiceComp from "@/components/ServiceComp";

const services=[{
  id:1,
  title:"Enjoy on your TV",
  description:"Watch on Smart TV, Xbox chromecast, Apple TV, Blu-ray players, and more",
  image:"device-pile.png",
},
{
  id:2,
  title:"Watch everywhere.",
  description:"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
  image:"mobile.jpg",
},
{
  id:3,
  title:"Create profiles for kids.",
  description:"Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
  image:"kids.png",
}]



</script>

<template>
  
  <header>
    <NavigationMenu/>
  <div class="center">
    <h1>
      Unlimited movies, TV shows, and more.
    </h1>
    <h2>
      Watch anywhere. Cancel anytime.
    </h2>
    <p>
      Ready to watch? Enter your email to create or restart your membership.
    </p>
    <GetStarted/>
  </div>
  </header>

 
  <div class="services" v-for="service in services" :key="service.id">
    <ServiceComp :title="service.title" :description="service.description" :image="service.image" :id="service.id"/>
  </div>
  
  <FAQ/>

 
  
 
</template>

<style scoped lang="scss">
  header{
    position: relative;
    background:linear-gradient(rgba(0, 0, 0, 0.7) ,rgba(0, 0, 0, 0.7) 100%,transparent)
    ,url("@/assets/banner.jpg") no-repeat;
    background-size:cover;
    height: 79.1vh;
    background-position:center;
    display: flex;
    flex-direction: column;
    border-bottom: 0.5rem solid var(--gray-color);
    
    .center{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap:1rem;
        align-items: center;
        height: 100%;
      
      }
}
 
 

h1,h2,h3,h4,h5,h6{
  color: var(--light-color);
  text-align: center;
 
}
 
//@media only screen and (min-width: 768px) {...}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 800px) {
  h1{
  font-weight: bold;
  font-size: 3rem;
 
}
}

 
 
</style>