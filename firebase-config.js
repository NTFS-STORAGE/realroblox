// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyBpiU-R3cvsW_lvnUPFpHaluPQFhEQLAUo",
  authDomain: "registerteamextreme.firebaseapp.com",
  projectId: "registerteamextreme",
  storageBucket: "registerteamextreme.firebasestorage.app",
  messagingSenderId: "708700351553",
  appId: "1:708700351553:web:34da6677db274de4d96ac0"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
