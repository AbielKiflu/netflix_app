<script setup>
 import FAQItem from "@/components/FAQItem";
 import GetStarted from "@/components/GetStarted";
  
 const faqdata =[
    {
        id:1,
        question: "How can I watch on Netflix?" ,
        answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
        id:2,
        question: "What is Netflix?" ,
        answer: "Netflix is a streaming service"
    },
    {
        id:3,
        question: "How much Netflix costs?",
        answer:  "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 8,99 € to 17,99 € a month. No extra costs, no contracts."
    },
    {
        id:4,
        question: "How do I cancel?",
        answer:  "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
        id:5,
        question: "Is Netflix good for kids?",
        answer:  "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    }
    ]


 
</script>

<template>
 
     <div class="wrapper">
        <h1 class="title">Frequently Asked Questions</h1>
        <div>
           <div class="faqs" v-for="faq in faqdata" :key="faq.id"> 
            <FAQItem :question="faq.question" :answer="faq.answer"/>
        </div>
         
        </div>
        
        <h3>
            Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <GetStarted/>
  </div>

  
    
     
</template>


<style lang="scss" scoped>

 .wrapper {
   background-color: #000000;
    padding: 2rem 0;
    margin-bottom: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
 }

 h1,h2,h3,h4,h5,h6{
    color:var(--light-color);
    text-align: center;
 }

h1{     
    font-weight: bold;
    }
 


</style>