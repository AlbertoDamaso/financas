import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyAkpD3Kkrtgr0NqLpuOLsCLKv7TDVlG7Ag",
  authDomain: "finacas-f19fa.firebaseapp.com",
  databaseURL: "https://finacas-f19fa-default-rtdb.firebaseio.com",
  projectId: "finacas-f19fa",
  storageBucket: "finacas-f19fa.appspot.com",
  messagingSenderId: "83244431760",
  appId: "1:83244431760:web:6ed55df15288f19ed15b15",
  measurementId: "G-R8ZXKZ3VTM"
};


if(!firebase.apps.length){
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export default firebase;