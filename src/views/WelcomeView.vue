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
  title:"Download your shows to watch offline.",
  description:"Save your favorites easily and always have something to watch.",
  image:"mobile.jpg",
},
{
  id:3,
  title:"Watch everywhere.",
  description:"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
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
    <h3>
      Ready to watch? Enter your email to create or restart your membership.
    </h3>
    <GetStarted/>
  </div>
  </header>
  <PageBreaker/>
  <div v-for="service in services" :key="service.id">
    <ServiceComp :title="service.title" :description="service.description" :image="service.image"/>
    <PageBreaker/>
  </div>
 

  
  <h1 class="title">Frequently Asked Questions</h1>
  <FAQ/>
  <PageBreaker/>
  <Footer/>
 
</template>

<style scoped>
  header{
    background:url("@/assets/banner.jpg") no-repeat;
    background-size:cover;
    width: 100%;
    height: 100%;
    background-position:center;
}

.title{
  font-family:"Helvetica Neue";
  font-weight: 800;
}
 

.wrapper{
  margin: 4rem;
  padding: 2rem;
  background: linear-gradient(180deg,transparent,rgb(0, 0, 0,0.15) 25%,transparent);
}

h1, h2,h3{
  color:var(--light-color);
  text-align: center;
  padding: 1rem;
}
h1{
  
  font-size: 2.5rem;
}

h2{
 
  font-size: 1.6rem;
}

h3{
  margin-top: 5%;
}

</style>