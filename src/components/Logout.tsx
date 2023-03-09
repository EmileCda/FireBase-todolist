import { signOut } from "@firebase/auth";
import {  Navigate } from "react-router-dom";
import { firebaseAuth } from "../lib/Firebase";
import { resetUid, } from "../store/Subscription.store";

/**
 * this function sign-out the current user
 */
export async function firebaseLogout(){
  try {
    await signOut(firebaseAuth);
    // logout successful.
  } catch (error) {}

}



export default  function Logout() {
  resetUid();
  firebaseLogout();

  return (
    <>
      <Navigate to="/Login" />;
    </>
  );
}
