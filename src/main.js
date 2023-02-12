import { createApp } from 'vue';
import App from './App.vue';
import {createPinia} from "pinia";
import router from '@/router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faTwitter,faFacebookF,faInstagram,faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faThumbsUp,faBell } from '@fortawesome/free-regular-svg-icons';
import { faPlus,faCaretDown,faAngleRight,faXmark,faGlobe,faCirclePlay,faCirclePlus,faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';

import firebase from 'firebase/compat/app';
import {firebaseConfig} from "./firebase";

 
firebase.initializeApp(firebaseConfig);
 

library.add(faPlus,faBell,faCaretDown,faAngleRight,faXmark,faGlobe,faCirclePlay,faCirclePlus,faCircleChevronDown,faTwitter,faFacebookF,faInstagram,faYoutube,faThumbsUp );




const app= createApp(App);

app.config.errorHandler = (err) => {
   console.log(err + ": " + err.message);
  }

app.use(createPinia());
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
