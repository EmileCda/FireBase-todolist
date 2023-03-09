import { useStore } from "@nanostores/react";
import { Navigate } from "react-router";

import {
  checkEmail,
  checkPass,
  CreateUser,
  SubscribeStore,
} from "../store/Subscription.store";
import { ConnectionContainer, Icon, InputGroup, MyButton, MyLink } from "../style/Common.style";
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
    isSending
  } = useStore(SubscribeStore);

  if (uid) {
    return <Navigate to="/"></Navigate>;
  }

  return (
    <ConnectionContainer emailValide={IsValideEmail} passValide={isvalidePass} isLoading>
      <h1>Inscription</h1>
      <InputGroup>
        <input
          type="email"
          onChange={(e) => checkEmail(e.currentTarget.value)}
          name="email"
          value={email}
        />
        <Icon isValide={isvalidePass}>
          {IsValideEmail ? (
            <i className="fa-solid fa-circle-check"></i>
          ) : (
            <i className="fa-solid fa-xmark"></i>
          )}
        </Icon>
        </InputGroup>
      <InputGroup>
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
      </InputGroup>
      <MyButton onClick={CreateUser} isLoading={isSending} >S'inscrire</MyButton>
      <p> Vous avez un compte? <br /></p>
        <p><MyLink to="/Login">Connectez vous</MyLink>
      </p>
    </ConnectionContainer>
  );
}
