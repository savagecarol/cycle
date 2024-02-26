import firebase from "firebase/app";
import "firebase/auth"; 
import "firebase/firestore"; 

const firebaseConfig = {
        apiKey: "AIzaSyAMOgZj-HNEdEANoWZqD6thyK7waxJ2FpU",
        authDomain: "cycle-e5661.firebaseapp.com",
        projectId: "cycle-e5661",
        storageBucket: "cycle-e5661.appspot.com",
        messagingSenderId: "763530731165",
        appId: "1:763530731165:web:a12430deeb1ed674afbe74",
        measurementId: "G-V45QBK2MT2"
};

firebase.initializeApp(firebaseConfig);
