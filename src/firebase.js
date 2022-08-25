import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBs1gII4u8zcAD0bJ_oZuu6bOOEHT_zRDI",
    authDomain: "clone-5ce87.firebaseapp.com",
    databaseURL: "https://clone-5ce87.firebaseio.com",
    projectId: "clone-5ce87",
    storageBucket: "clone-5ce87.appspot.com",
    messagingSenderId: "565982152932",
    appId: "1:565982152932:web:79bcfa5cff62e87195c4f1",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };

