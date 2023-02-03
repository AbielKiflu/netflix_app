<script setup>
  import Footer from "@/components/Footer";
  import PageBreaker from "@/components/PageBreaker";
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
  <div class="wrapper">
    <h1>
      Unlimited movies, TV shows, and more.
    </h1>
    <h2>
      Watch anywhere. Cancel anytime.
    </h2>
    <h4>
      Ready to watch? Enter your email to create or restart your membership.
    </h4>
    <GetStarted/>
  </div>
  </header>

  <PageBreaker/>
  <div v-for="service in services" :key="service.id">
    <ServiceComp :title="service.title" :description="service.description" :image="service.image"/>
    <PageBreaker/>
  </div>
  
  <FAQ/>
  <PageBreaker/>
  <Footer/>
 
</template>

<style scoped lang="scss">
  header{
    position: relative;
    background:linear-gradient(rgba(0, 0, 0, 0.7) ,rgba(0, 0, 0, 0.7) 100%,transparent)
    ,url("@/assets/banner.jpg") no-repeat;
    background-size:cover;
    width: 100%;
    height: 79.1vh;
    background-position:center;
    display: flex;
    flex-direction: column;
     
    .wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        height: 100%;
        padding: 0.5rem;
      }
}



h1,h2,h3,h4,h5,h6{
  color: var(--light-color);
  text-align: center;
}

//@media only screen and (min-width: 768px) {...}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  h1{
  font-weight: bold;
  font-size: 3rem;
  max-width:40%;
}
}

 
 
</style>