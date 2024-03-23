import { useStore } from "@nanostores/react";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import {
  checkEmail,
  checkPass,
  CheckUser,
  SubscribeStore,
} from "../store/Subscription.store";
import { ConnectionContainer, Icon, InputGroup, MyButton } from "../style/Common.style";

/**
 * this component display screen subscrib (screen 1)
 * allow to get username (as an email) and password.
 * Data (username / password) are stored in a nanostore located in  "../store/Subscription.store";
 */

export default function Login() {
  const { uid, IsValideEmail, isvalidePass,isSending } = useStore(SubscribeStore);
  if (uid) {
    return <Navigate to="/"></Navigate>;
  }
  return (
    <ConnectionContainer emailValide={IsValideEmail} passValide={isvalidePass} isLoading={isSending}>
      <h1>Connexion</h1>
      <InputGroup>
        <input
          type="email"
          onChange={(e) => checkEmail(e.currentTarget.value)}
          name="email"
          placeholder="E-mail"
        />
        <Icon isValide={IsValideEmail}>
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
          placeholder="Password"
        />
        <Icon isValide={isvalidePass}>
          {isvalidePass ? (
            <i className="fa-solid fa-circle-check"></i>
          ) : (
            <i className="fa-solid fa-xmark"></i>
          )}
        </Icon>
      </InputGroup>
      <MyButton onClick={CheckUser} isLoading={isSending}>Se connecter</MyButton>
      <p>
        Vous n’avez pas de compte ?<br />
      </p>
      <p>
        <Link to="/Subscription">Inscrivez vous</Link>
      </p>
    </ConnectionContainer>
  );
}
