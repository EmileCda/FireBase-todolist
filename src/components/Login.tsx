import { useStore } from "@nanostores/react";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import {
  checkEmail,
  checkPass,
  CheckUser,
  SubscribeStore,
} from "../store/Subscription.store";
import { ConnectionContainer, Icon, MyDiv } from "../style/Login.style";

import { Button } from "../style/Subscription.style";
/**
 * this component display screen subscrib (screen 1)
 * allow to get username (as an email) and password.
 * Data (username / password) are stored in a nanostore located in  "../store/Subscription.store";
 */

export default function Login() {
  const { uid, IsValideEmail, isvalidePass } = useStore(SubscribeStore);
  if (uid) {
    return <Navigate to="/"></Navigate>;
  }
  return (
    <ConnectionContainer emailValide={IsValideEmail} passValide={isvalidePass}>
      <h1>Connexion</h1>
      <MyDiv>
        <input
          type="email"
          onChange={(e) => checkEmail(e.currentTarget.value)}
          name="email"
        />
        <Icon isValide={IsValideEmail}>
          {IsValideEmail ? (
            <i className="fa-solid fa-circle-check"></i>
          ) : (
            <i className="fa-solid fa-xmark"></i>
          )}
        </Icon>
      </MyDiv>
      <MyDiv>
        <input
          type="text"
          onChange={(e) => checkPass(e.currentTarget.value)}
          name="password"
        />
        <Icon isValide={isvalidePass}>
          {isvalidePass ? (
            <i className="fa-solid fa-circle-check"></i>
          ) : (
            <i className="fa-solid fa-xmark"></i>
          )}
        </Icon>
      </MyDiv>
      <Button onClick={CheckUser}>Se connecter</Button>
      <p>
        Vous n’avez pas de compte ?<br />
      </p>
      <p>
        <Link to="/Subscription">Inscrivez vous</Link>
      </p>
    </ConnectionContainer>
  );
}
