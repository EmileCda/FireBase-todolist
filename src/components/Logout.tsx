import { signOut } from "@firebase/auth";
import { Navigate } from "react-router-dom";
import { firebaseAuth } from "../lib/Firebase";
import {
  resetSubscribeStore,
} from "../store/Subscription.store";
import { resetTodolistStore } from "../store/TodoList.store";

/**
 * this function sign-out the current user
 */
export async function firebaseLogout() {
  try {
    await signOut(firebaseAuth);
    // logout successful.
  } catch (error) {}
}

export default function Logout() {
  resetSubscribeStore();
  resetTodolistStore();
  firebaseLogout();

  return (
    <>
      <Navigate to="/Login" />;
    </>
  );
}
