import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
//import { exportDefaultDeclaration } from '@babel/types';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCh8e2fwqutFVKcu2g3uOv58FhPMXaYQ_U",
    authDomain: "srplans-b9bb9.firebaseapp.com",
    databaseURL: "https://srplans-b9bb9.firebaseio.com",
    projectId: "srplans-b9bb9",
    storageBucket: "",
    messagingSenderId: "453453338682",
    appId: "1:453453338682:web:35cdb4c2c1e56bc3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;