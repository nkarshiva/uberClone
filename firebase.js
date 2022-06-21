import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCahNh9T0ye9R0lAbgNKQo0N6fT13fllPo",
  authDomain: "uber-clone-d6544.firebaseapp.com",
  projectId: "uber-clone-d6544",
  storageBucket: "uber-clone-d6544.appspot.com",
  messagingSenderId: "664303140606",
  appId: "1:664303140606:web:128206dd3ba5bdd42f6faf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider
const auth = getAuth()

export {app,provider,auth}