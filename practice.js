// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase confi
var firebaseConfig = {
  apiKey: "AIzaSyChRcYccG2isEW99D9B7RbjEk2B1K8J91c",
  authDomain: "kwitter-c6e62.firebaseapp.com",
  databaseURL: "https://kwitter-c6e62-default-rtdb.firebaseio.com",
  projectId: "kwitter-c6e62",
  storageBucket: "kwitter-c6e62.appspot.com",
  messagingSenderId: "473952775118",
  appId: "1:473952775118:web:96a0afdb32e68b4abd199f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        pupose : "adding user"
    });
}