import { createApp } from 'vue';
import App from './App.vue';
import {createPinia} from "pinia";
//import router from '@/router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//import { faTwitter,faFacebookF,faInstagram,faYoutube } from '@fortawesome/free-brands-svg-icons'
//import { faCirclePlay,faCirclePlus,faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'
//import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'

import { faPlus,faXmark } from '@fortawesome/free-solid-svg-icons';


library.add(faPlus,faXmark);

const app= createApp(App);
//app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia());
app.mount('#app')
