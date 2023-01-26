<template>
<footer class="footer">

    <div class="share">
    <font-awesome-icon icon="fa-brands fa-facebook-f" size="xl" inverse />
    <font-awesome-icon icon="fa-brands fa-instagram" size="xl" inverse/>
    <font-awesome-icon icon="fa-brands fa-twitter" size="xl" inverse/>
    <font-awesome-icon icon="fa-brands fa-youtube" size="xl" inverse/>
</div>

    <div class="footer_links">
    <ul> 
        <li><a href="#" >  Audio Description</a></li>
    <li><a href="#" > Investor Relations </a></li>
    <li><a href="#" >  Legal Notices</a></li>
 </ul>

 <ul> 
    <li><a href="#" > Help Center </a></li>
    <li><a href="#" > Jobs </a></li>
    <li><a href="#" >Cookie Preferences  </a></li>
 </ul>

 <ul> 
    <li><a href="#" > Gift Cards </a></li>
    <li><a href="#" >  Terms of Use</a></li>
    <li><a href="#" >Corporate Information  </a></li>
 </ul>

 <ul> 
    <li><a href="#" > Media Center </a></li>
    <li><a href="#" >  Privacy</a></li>
    <li><a href="#" >  Contact Us</a></li>
 </ul>
</div>

<button> Source Code</button>
<p>&copy;1997-2023 Netflix, Inc. </p>

</footer>
</template>


<script>
 
export default {
    name: 'pageFooter',
    
}
</script>



<style  lang="scss" scoped>

footer{
  max-width: 70%;
    .share{
    display: flex;
    margin:1rem 0;
    gap: 1rem;
    justify-content: flex-start;
}
    .footer_links{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
     
    ul{
        list-style: none;
        display: flex;
        gap:1rem;
        flex-direction: column;
            li{
                 
                a{
                    text-decoration:none;
                    color:gray;
                   
                }
            }
    }
}

button{
    background-color: transparent;
    padding: 0.5rem;
    margin:1rem 0;
    color: gray;
    border: 0.1rem solid gray;
}
p{
    color: gray;
    font-size: 0.8rem;
}




}
</style>