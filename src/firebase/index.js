//import firebase from "firebase/app";
//import "firebase/firestore";
//import "firebase/auth";

 const firebaseConfig = {
    apiKey: process.env.VUE_APP_FB_API ,
    authDomain: process.env.VUE_APP_FB_DOMAIN ,
    projectId: process.env.VUE_APP_FB_PRO ,
    storageBucket: process.env.VUE_APP_FB_STORAGE ,
    messagingSenderId: process.env.VUE_APP_FB_SENDER,
    appId:  process.env.VUE_APP_FB_APPID
  };


 
  //const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  //const db = firebaseApp.firestore();
  //const auth = firebase.auth();

  //export { db, auth, timestamp };

  export  {firebaseConfig};