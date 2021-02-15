import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOVycIy8X0IX205D7CaxrcDkorI_bftC8",
  authDomain: "clone-9babb.firebaseapp.com",
  projectId: "clone-9babb",
  storageBucket: "clone-9babb.appspot.com",
  messagingSenderId: "632628525793",
  appId: "1:632628525793:web:fdb3e80cc98edc1e9155a0",
  measurementId: "G-0362JN2ZBG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
