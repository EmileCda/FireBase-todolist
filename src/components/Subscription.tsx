import { checkEmail, checkPass } from "../store/Subscription.store";
/**
 * this component display screen subscrib (screen 1)
 * allow to get username (as an email) and password.
 * Data (username / password) are stored in a nanostore located in  "../store/Subscription.store";
 */

export default function Subscription() {

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
      <button>S'inscrire</button>
      <p>Vous avez un compte? Connectez vous</p>
    </>
  );
}
