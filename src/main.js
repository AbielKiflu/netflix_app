import { createApp } from 'vue';
import App from './App.vue';
import {createPinia} from "pinia";
import router from '@/router/';



/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faTwitter,faFacebookF,faInstagram,faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCirclePlay,faCirclePlus,faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
/* add icons to the library */
library.add(faTwitter,faFacebookF,faInstagram,faYoutube,faCirclePlay,faCirclePlus,faThumbsUp,faCircleChevronDown)



const app= createApp(App);
app.use(router);
app.use(createPinia());
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app')
