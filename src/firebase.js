// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAQB2rPpMONWe4lKtWYVCusIEuC2o0-NCA",
    authDomain: "twitter-clone-e23ac.firebaseapp.com",
    projectId: "twitter-clone-e23ac",
    storageBucket: "twitter-clone-e23ac.appspot.com",
    messagingSenderId: "655929860729",
    appId: "1:655929860729:web:639294b8785a19c9f3aaa8",
    measurementId: "G-TD2024GJGY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;