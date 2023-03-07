/**store for screen1 : subscrib
 *
 *
 *
 */
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { action, map } from "nanostores";
import { firebaseAuth } from "../lib/Firebase";

export type TSubscribeStore = {
  username: string;
  password: string;
  IsValideUsername: boolean | null;
  isvalidePass: boolean | null;
  userLogged :string | null;
    uid : string |null;
};

export const SubscribeStore = map<TSubscribeStore>({
  username: "",
  password: "",
  IsValideUsername: false,
  isvalidePass: false,
  userLogged: "",
   uid : "",
});

export const validateUsername = action(
  SubscribeStore,
  "validate email",
  (store) => {
    // Retrieve the email in the store
    const { username } = store.get();

    // no username
    if (username === "") {
      store.setKey("IsValideUsername", null);
      return;
    }
    // username do not accordint to polycie

    if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(username)) {
      store.setKey("IsValideUsername", true);
      return;
    }
    // default
    store.setKey("IsValideUsername", false);
  }
);

// ---------------------------------------------------------------

export const checkEmail = action(
  SubscribeStore,
  "checkEmail",
  (store, value: string) => {
    store.setKey("username", value);
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

// export const LogIn = action(SubscribeStore, "LogIn", (store) => {});

// ---------------------------------------------------------------
export const CreateUser = action(
  SubscribeStore,
  "CreateUser",
  async (store) => {
    const { username, password } = store.get();
    const credential = await createUserWithEmailAndPassword(
      firebaseAuth,
      username,
      password
    );
    // store.setkey("user", credential.user);
    console.log(credential.user.email);
    console.log(credential.user.uid);
    
    store.setKey("userLogged", credential.user.email);
    store.setKey("uid", credential.user.uid);
  }
);
