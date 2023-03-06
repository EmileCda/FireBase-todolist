// import { useStore } from "@nanostores/react";
import { useStore } from "@nanostores/react";
import { redirect } from "react-router";
import { SubscribeStore } from "../store/Subscription.store";
/**
 * this componnent is for test , should be terminate on release 
 */
export default function OutputTest() {
  const { username, password,uid } = useStore(SubscribeStore);

  return (
    <>
      <h1>Inscription</h1>
      <p>username : {username}</p>
      <p>password : {password}</p>
      <p>UID : {uid}</p>
    </>
  );
}
