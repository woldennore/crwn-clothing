import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBI2CdoC-rubwN5LSIOu4S90UzdzvgjzOU",
    authDomain: "crw-db-badfb.firebaseapp.com",
    projectId: "crw-db-badfb",
    storageBucket: "crw-db-badfb.appspot.com",
    messagingSenderId: "684021077180",
    appId: "1:684021077180:web:dee872cd74f7f7ca79ecb9",
    measurementId: "G-T8688Q9PEG"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const created = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          created,
          ...additionalData
        });
      } catch (error) {
        console.log("error creating user", error.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });
    return await batch.commit()
  }

  export const convertCollectionsSnapshotToMap = (collections) =>{
    const transformedCollection = collections.docs.map( doc => {
      const { title, items} = doc.data();
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    });
    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator
    }, {})
  }

  export const  getCurrentuser = () => {
    return new Promise((resolve,reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
      },reject)
    })
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

  export default firebase;

