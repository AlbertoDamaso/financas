import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyBzmbmRi4Ewem1Nbn9OcEAQHDuSNWzOZHI",
  authDomain: "test-b9bcf.firebaseapp.com",
  projectId: "test-b9bcf",
  storageBucket: "test-b9bcf.appspot.com",
  messagingSenderId: "263130363844",
  appId: "1:263130363844:web:03db90739c78dc80d59691",
  measurementId: "G-761DZ4DVLM"
};


if(!firebase.apps.length){
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export default firebase;