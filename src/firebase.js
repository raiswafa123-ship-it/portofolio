// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjEjOZZW71edodJ63Kj5AolIJP-k10i0Y",
  authDomain: "dimaz-7350b.firebaseapp.com",
  projectId: "dimaz-7350b",
  storageBucket: "dimaz-7350b.firebasestorage.app",
  messagingSenderId: "932372364362",
  appId: "1:932372364362:web:e97204552fcb44f898fab3"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ 
  prompt: 'select_account' 
});
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);
