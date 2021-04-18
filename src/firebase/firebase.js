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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };


  export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    
    const batch = firestore.batch();
    objectToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });

    return await batch.commit();
  }
  

 export const convertCollectionsSnapshotToMap = (collections) => {
const transformedCollection = collections.docs.map(doc => {
  const {title,items} = doc.data();

  return{
    routeName: encodeURI(title.toLowerCase()),
    id:doc.id,
    title,items
  }
});

return transformedCollection.reduce((accumulator,collection) => {
  accumulator[collection.title.toLowerCase()] = collection;
  return accumulator;

}, {});
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

