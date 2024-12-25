// Import Firebase modules (Modular SDK)
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';
import { getFirestore, setDoc, doc, getDoc, query, where, getDocs } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

// Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyBpiU-R3cvsW_lvnUPFpHaluPQFhEQLAUo",
  authDomain: "registerteamextreme.firebaseapp.com",
  projectId: "registerteamextreme",
  storageBucket: "registerteamextreme.firebasestorage.app",
  messagingSenderId: "708700351553",
  appId: "1:708700351553:web:34da6677db274de4d96ac0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);
