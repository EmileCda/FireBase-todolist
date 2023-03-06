import { useStore } from "@nanostores/react";
import { subScriptionStore } from "../store/Subscription.store";
/**
 * this componnent is for test , should be terminate on release 
 */
export default function OutputTest() {
  const { username, password } = useStore(subScriptionStore);

  return (
    <>
      <h1>Inscription</h1>
      <p>username : {username}</p>
      <p>password : {password}</p>
    </>
  );
}
