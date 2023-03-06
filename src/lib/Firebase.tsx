// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDoc, getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
  authDomain: "todolist-c63c7.firebaseapp.com",
  apiKey: "AIzaSyDNXyJU86kkn7AjtteePY51bc7I69QFkmw",
  projectId:"todolist-c63c7",
  storageBucket:"todolist-c63c7.appspot.com",
  messagingSenderId:"969221130007",
  appId: "1:969221130007:web:2e0b57913e74ace0f85952"
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


// export async function createTodoList(){

// const myCollection = collection (firebaseDb, TODOLIST_COLLECTION);

// const refTtodoList = await addDoc(todoListName);
// const id = refTtodoList.id; 

//   const snap = await getDoc(doc(firebaseDb, TODOLIST_COLLECTION, id))

  
//   const newATodoList = snap.data()


//   return {
//     id: id,
//     ...newAddress,
//   } as Identifiable<Address>

// }
