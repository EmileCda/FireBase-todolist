import { signOut } from "@firebase/auth";
import { useStore } from "@nanostores/react";
import { Navigate } from "react-router";
import { firebaseAuth } from "../lib/Firebase";
import { resetUser, todolistStore } from "../store/TodoList.store";

/**
 * this function sign-out the current user
 */
export async function firebaseLogout() {
  try {
    await signOut(firebaseAuth);
    resetUser();
    // logout successful.
  } catch (error) {
    console.log(error);
  }
}

export default function Logout() {
  firebaseLogout();

  return <Navigate to="/Login" />;

}
