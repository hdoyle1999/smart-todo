import firebase from 'firebase/app';     //get the features of firebase we need not everything
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAYNkPKEsuKrcnaKnOu8ywb8SDnORllrbA",
    authDomain: "smart-todo-9f5ff.firebaseapp.com",
    projectId: "smart-todo-9f5ff",
    storageBucket: "smart-todo-9f5ff.appspot.com",
    messagingSenderId: "999307636453",
    appId: "1:999307636453:web:bae1250bc3d77d01726e0c",
    measurementId: "G-KWVMY6V1TR"
};

console.log("whhore");
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//firebase.firestore()    //may need to comment this out i dunno, dont think it does anythin anyway
firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase;