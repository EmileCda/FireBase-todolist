// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {  getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  projectId:import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:import.meta.env.VITE_FIREBASE_MSG_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
// Application Firebase
export const firebase = initializeApp(firebaseConfig)
// Initialize le service d'authentification
export const firebaseAuth = getAuth(firebase)
// Initialise le service firestore (la base de données)
export const firebaseDb = getFirestore(firebase)



// Nous pouvons aussi en faire un export par défaut
export default { auth: firebaseAuth, db: firebaseDb }


