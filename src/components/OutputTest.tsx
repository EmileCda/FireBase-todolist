// import { useStore } from "@nanostores/react";
import { addDoc, collection } from "@firebase/firestore";
import { useStore } from "@nanostores/react";
import { redirect } from "react-router";
import { firebaseDb } from "../lib/Firebase";
import { SubscribeStore } from "../store/Subscription.store";
/**
 * this componnent is for test , should be terminate on release 
 */
export default  function OutputTest() {
  const { email, password,uid } = useStore(SubscribeStore);

   const status=      addDoc(collection(firebaseDb, 'tasks'), {
         todolistname: "toto",
         takslist:["task1","task2","task3","task4","task5","task6",]
       })
  console.log (status);

  return (
    <>
      <h1>Inscription</h1>
      <p>username : {email}</p>
      <p>password : {password}</p>
      <p>UID : {uid}</p>
    </>
  );
}
