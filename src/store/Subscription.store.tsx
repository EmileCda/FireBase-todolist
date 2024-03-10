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
import { load, setUser } from "./TodoList.store";

export type TSubscribeStore = {
  email: string;
  password: string;
  IsValideEmail: boolean;
  isvalidePass: boolean;
  isBusy: boolean;
  message: string;
};

export const subscribeStore = map<TSubscribeStore>({
  email: "",
  password: "",
  IsValideEmail: false,
  isvalidePass: false,
  isBusy: false,
  message: "",
});

export const validateEmail = action(
  subscribeStore,
  "validateEmail",
  (store) => {
    // Retrieve the email in the store
    const { email } = store.get();

    // no email
    if (email === "") {
      store.setKey("IsValideEmail", false);
      return;
    }
    // email do according to polycie

    if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
      store.setKey("IsValideEmail", true);
      store.setKey("email", email);

      return;
    }
    // default
    store.setKey("IsValideEmail", false);
  }
);
// ---------------------------------------------------------------

export const validatePass = action(subscribeStore, "validatePass", (store) => {
  // Retrieve the email in the store
  const { password } = store.get();
  // check password lenght if > 5 => password is valide. could have a more constraint rules
  store.setKey("isvalidePass", password.length > 5 ? true : false);
});

// ---------------------------------------------------------------

export const inputChangeEmail = action(
  subscribeStore,
  "inputChangeEmail",
  (store, value: string) => {
    store.setKey("email", value);
    validateEmail();
  }
);
// ---------------------------------------------------------------

export const inputChangePassword = action(
  subscribeStore,
  "inputChangePassword",
  (store, value: string) => {
    store.setKey("password", value);
    validatePass();
  }
);

// ---------------------------------------------------------------
export const CheckUser = action(subscribeStore, "CheckUser", async (store) => {
  store.setKey("isBusy", true);

  const { email, password } = store.get();
  try {
    // login successful.

    const userAutorized = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    setUser (userAutorized.user.uid,email);
    load(userAutorized.user.uid);
    store.setKey("password", "");
    store.setKey("email", "");
    store.setKey("isvalidePass", false);
    store.setKey("IsValideEmail", false);
  } catch (error) {
    console.log(error);
  }
  store.setKey("message", "error on line 113  CheckUser subscription.store");

  store.setKey("isBusy", false);
});

// ---------------------------------------------------------------
export const CreateUser = action(
  subscribeStore,
  "CreateUser",
  async (store) => {
    const { isBusy, email, password, isvalidePass, IsValideEmail } =
      store.get();

    if (!isBusy && isvalidePass && IsValideEmail) {
      store.setKey("isBusy", false);

      try {
        const valideUser = await createUserWithEmailAndPassword(
          firebaseAuth,
          email,
          password
        );

        setUser(valideUser.user.uid, email);

        store.setKey("password", "");
        store.setKey("email", "");
        store.setKey("isvalidePass", false);
        store.setKey("IsValideEmail", false);
      } catch (error) {
        store.setKey(
          "message",
          "error on line 138 CreateUser subscription.store"
        );
      }
    }
    store.setKey("isBusy", false);
  }
);
