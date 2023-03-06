import { createUserWithEmailAndPassword } from "@firebase/auth";
import { useStore } from "@nanostores/react";
import { redirect } from "react-router";
import { checkEmail, checkPass, CreateUser, SubscribeStore } from "../store/Subscription.store";
import { Button } from "../style/Subscription.style";
/**
 * this component display screen subscrib (screen 1)
 * allow to get username (as an email) and password.
 * Data (username / password) are stored in a nanostore located in  "../store/Subscription.store";
 */


export default function Subscription() {
    const { username, password,userLogged,uid } = useStore(SubscribeStore);
  if (uid) {
    redirect("/");
  }
  return (
    <>
      <h1>Inscription</h1>
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
      <p>{userLogged}</p>
      <p>{uid}</p>
      <Button onClick={CreateUser}>S'inscrire</Button>
      <p>Vous avez un compte? Connectez vous</p>
    </>
  );
}