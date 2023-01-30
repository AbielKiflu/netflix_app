<script setup>
 import FAQItem from "@/components/FAQItem";

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
    }
    ]


 
</script>

<template>
     <div v-for="faq in faqdata" :key="faq.id"> 
       <FAQItem :question="faq.question" :answer="faq.answer"/>
        
    </div>
</template>


<style scoped>

div{
    display: flex;
  
}

 


</style>