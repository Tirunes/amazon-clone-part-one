












import firebase from 'firebase/compat/app'
//auth
import {getAuth} from 'firebase/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs3A726o7NhoODzy9MvoG8T7fYh8uE2dc",
  authDomain: "clone-6d804.firebaseapp.com",
  projectId: "clone-6d804",
  storageBucket: "clone-6d804.appspot.com",
  messagingSenderId: "150521394322",
  appId: "1:150521394322:web:abd9d490bbddbb6cce224b"
};

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const db = app.firestore()













