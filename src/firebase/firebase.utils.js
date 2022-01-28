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

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

