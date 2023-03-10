import { useStore } from "@nanostores/react";
import { Navigate, Outlet } from "react-router";
import { Link } from "react-router-dom";
import {
  CheckUser,
  inputChangeEmail,
  inputChangePassword,
  subscribeStore,
} from "../store/Subscription.store";
import { todolistStore } from "../store/TodoList.store";
import { ConnectionContainer, Icon, InputGroup, MyButton } from "../style/Common.style";

/**
 * this component display screen subscrib (screen 1)
 * allow to get username (as an email) and password.
 * Data (username / password) are stored in a nanostore located in  "../store/Subscription.store";
 */

export default function Login() {
  const {  IsValideEmail, isvalidePass,isBusy } = useStore(subscribeStore);
  const {  user } = useStore(todolistStore);
  if (user.uid !=="") {
    return <Navigate to="/"></Navigate>;
  }
// console.log (user)
//   if (user.uid !== "") {
//     console.log (user)
//     // Je retourne les enfants de la route
//     return <Outlet />
//   }

  return (
    <ConnectionContainer emailValide={IsValideEmail} passValide={isvalidePass} isLoading={isBusy}>
      <h1>Connexion</h1>
      <InputGroup>
        <input
          type="email"
          onChange={(e) => inputChangeEmail(e.currentTarget.value)}
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
          onChange={(e) => inputChangePassword(e.currentTarget.value)}
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
      <MyButton onClick={CheckUser} isLoading={isBusy}>Se connecter</MyButton>
      <p>
        Vous n’avez pas de compte ?<br />
      </p>
      <p>
        <Link to="/Subscription">Inscrivez vous</Link>
      </p>
    </ConnectionContainer>
  );
}
