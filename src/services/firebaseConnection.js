import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

let firebaseConfig = {
    apiKey: "AIzaSyB67YziQWcceLYzvcDtIJ6ahXm12q-7TxM",
    authDomain: "financas-9e575.firebaseapp.com",
    projectId: "financas-9e575",
    storageBucket: "financas-9e575.appspot.com",
    messagingSenderId: "759174999706",
    appId: "1:759174999706:web:8227a8d7119d313cffb923",
    measurementId: "G-Z7S19RBE6P"
  };
  
if(!firebase.apps.length){
    //Abri minha conexao.
    firebase.initializeApp(firebaseConfig);
}

export default firebase;