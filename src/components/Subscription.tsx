import { useStore } from "@nanostores/react";
import { Navigate } from "react-router";

import {
  checkEmail,
  checkPass,
  CreateUser,
  SubscribeStore,
} from "../store/Subscription.store";
import { MyLink } from "../style/Common.style";
import { ConnectionContainer, Icon, MyDiv } from "../style/Login.style";
import { Button } from "../style/Subscription.style";
/**
 * this component display screen subscrib (screen 1)
 * allow to get username (as an email) and password.
 * Data (username / password) are stored in a nanostore located in  "../store/Subscription.store";
 */

export default function Subscription() {
  const {
    uid,
    email,
    password,
    IsValideEmail,
    isvalidePass,
  } = useStore(SubscribeStore);

  if (uid) {
    return <Navigate to="/"></Navigate>;
  }

  return (
    <ConnectionContainer emailValide={IsValideEmail} passValide={isvalidePass}>
      <h1>Inscription</h1>
      <MyDiv>
        <input
          type="email"
          onChange={(e) => checkEmail(e.currentTarget.value)}
          name="email"
          value={email}
        />
        <Icon isValide={IsValideEmail}>
          {IsValideEmail ? (
            <i className="fa-solid fa-circle-check"></i>
          ) : (
            <i className="fa-solid fa-xmark"></i>
          )}
        </Icon>
      </MyDiv>{" "}
      <MyDiv>
        <input
          type="text"
          onChange={(e) => checkPass(e.currentTarget.value)}
          name="password"
          value={password}
        />
        <Icon isValide={isvalidePass}>
          {isvalidePass ? (
            <i className="fa-solid fa-circle-check"></i>
          ) : (
            <i className="fa-solid fa-xmark"></i>
          )}
        </Icon>
      </MyDiv>
      <Button onClick={CreateUser}>S'inscrire</Button>
      <p> Vous avez un compte? <br /></p>
        <p><MyLink to="/Login">Connectez vous</MyLink>
      </p>
    </ConnectionContainer>
  );
}
