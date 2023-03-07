import { createUserWithEmailAndPassword } from "@firebase/auth";
import { useStore } from "@nanostores/react";
import { Navigate } from "react-router";
import {
  checkEmail,
  checkPass,
  CreateUser,
  SubscribeStore,
} from "../store/Subscription.store";
import { Button } from "../style/Subscription.style";
/**
 * this component display screen subscrib (screen 1)
 * allow to get username (as an email) and password.
 * Data (username / password) are stored in a nanostore located in  "../store/Subscription.store";
 */

export default function Subscription() {
  const { userLogged, uid, isSending } = useStore(SubscribeStore);

  if (uid) {
    return <Navigate to="/"></Navigate>;
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
      <Button onClick={CreateUser} >S'inscrire</Button>
      {/* <Button onClick={CreateUser} isVisible={isSending}>S'inscrire</Button> */}
      {/* <MenuUser onClick={toggleUser}  isVisible={userLogged ? true: false}> */}
      <p>Vous avez un compte? Connectez vous</p>
    </>
  );
}
