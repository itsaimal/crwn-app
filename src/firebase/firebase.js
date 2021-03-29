import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const config = {
    apiKey: "AIzaSyA0Mk0s2zRlzkmqfctZQp814r20ETL_-Y0",
    authDomain: "crown-app-12.firebaseapp.com",
    projectId: "crown-app-12",
    storageBucket: "crown-app-12.appspot.com",
    messagingSenderId: "106530922370",
    appId: "1:106530922370:web:7d75731349d337ac94b99b",
    measurementId: "G-EQ1H8YEPGB"
  };



  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

