/**store for screen1 : subscrib
 *
 *
 *
 */
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { action, map } from "nanostores";
import { firebaseAuth } from "../lib/Firebase";

export type TUser = {};

export type TSubscribeStore = {
  email: string;
  password: string;
  IsValideEmail: boolean | null;
  isvalidePass: boolean | null;
  isSending: boolean | null;
  userLogged: string | null;
  uid: string | null;
  message: string | null;
};

export const SubscribeStore = map<TSubscribeStore>({
  email: "",
  password: "",
  IsValideEmail: false,
  isvalidePass: false,
  isSending: false,
  userLogged: "",
  uid: "1",
  message: "",
});

export const validateEmail = action(
  SubscribeStore,
  "validateEmail",
  (store) => {
    // Retrieve the email in the store
    const { email } = store.get();

    // no email
    if (email === "") {
      store.setKey("IsValideEmail", null);
      return;
    }
    // email do according to polycie

    if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
      store.setKey("IsValideEmail", true);
      return;
    }
    // default
    store.setKey("IsValideEmail", false);
  }
);

// ---------------------------------------------------------------

export const validatePass = action(SubscribeStore, "validatePass", (store) => {
  // Retrieve the email in the store
  const { password } = store.get();
  // check password lenght if > 6 => password is valide
  store.setKey("isvalidePass", password.length > 6 ? true : false);
});

// ---------------------------------------------------------------

export const checkEmail = action(
  SubscribeStore,
  "checkEmail",
  (store, value: string) => {
    store.setKey("email", value);
  }
);

// ---------------------------------------------------------------
export const checkPass = action(
  SubscribeStore,
  "checkPass",
  (store, value: string) => {
    store.setKey("password", value);
  }
);

// ---------------------------------------------------------------
export const CheckUser = action(SubscribeStore, "CheckUser", async (store) => {
  const { email, password } = store.get();
  const userAutorized = await signInWithEmailAndPassword(
    firebaseAuth,
    email,
    password
  );

  store.setKey("userLogged", userAutorized.user.email);
  store.setKey("uid", userAutorized.user.uid);
});

// ---------------------------------------------------------------
export const CreateUser = action(
  SubscribeStore,
  "CreateUser",
  async (store) => {
    const { isSending, email, password, isvalidePass, IsValideEmail } =
      store.get();

    if (!isSending && isvalidePass && IsValideEmail) {
      store.setKey("isSending", true);

      try {
        const valideUser = await createUserWithEmailAndPassword(
          firebaseAuth,
          email,
          password
        );
        console.log (valideUser);
        store.setKey("userLogged", valideUser.user.email);
        store.setKey("uid", valideUser.user.uid);
      } catch {
        store.setKey("message", "Erreur de connexion");
      }
    }
    store.setKey("isSending", false);
  }
);
