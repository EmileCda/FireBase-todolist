import { createUserWithEmailAndPassword } from "@firebase/auth";
import { useStore } from "@nanostores/react";
import { Navigate, redirect } from "react-router";
import { Link } from "react-router-dom";
import {
  checkEmail,
  checkPass,
  CheckUser,
  CreateUser,
  SubscribeStore,
} from "../store/Subscription.store";
import { Button } from "../style/Subscription.style";
/**
 * this component display screen subscrib (screen 1)
 * allow to get username (as an email) and password.
 * Data (username / password) are stored in a nanostore located in  "../store/Subscription.store";
 */

export default function Login() {
  const { username, password, userLogged, uid } = useStore(SubscribeStore);

  if (uid) {
    return <Navigate to="/"></Navigate>;
  }
  return (
    <>
      <h1>Loggin</h1>
      <input
        type="email"
        onChange={(e) => checkEmail(e.currentTarget.value)}
        name="email"
      />
      <input
        type="text"
        onChange={(e) => checkPass(e.currentTarget.value)}
        name="password"
      />
      <p>userLogged:{userLogged}</p>
      <p>uid:{uid}</p>
      <Button onClick={CheckUser}>Se connecter</Button>
      <p>
        Pas de compte ?<Link to="/Subscription">Subscription</Link>
      </p>
    </>
  );
}
