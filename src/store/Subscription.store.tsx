/**store for screen1 : subscrib
 *
 *
 *
 */
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";
import { action, map } from "nanostores";
import { firebaseAuth } from "../lib/Firebase";

export type TSubscribeStore = {
  username: string;
  password: string;
  IsValideUsername: boolean | null;
  isvalidePass: boolean | null;
  userLogged: string | null;
  uid: string | null;
};

export const SubscribeStore = map<TSubscribeStore>({
  username: "",
  password: "",
  IsValideUsername: false,
  isvalidePass: false,
  userLogged: "",
  uid: "",
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
export const CheckUser = action(SubscribeStore, "CheckUser", async (store) => {

  const { username, password } = store.get();
  const userAutorized = await signInWithEmailAndPassword(
    firebaseAuth,
    username,
    password,
  )

  console.log(userAutorized);
  console.log(userAutorized.user.uid);
  store.setKey("userLogged", userAutorized.user.email);
  store.setKey("uid", userAutorized.user.uid);

});

// ---------------------------------------------------------------
export const  CreateUser = action(
  SubscribeStore,
  "CreateUser",
  async (store) => {
    const { username, password } = store.get();

    
    const valideUser = await createUserWithEmailAndPassword(
      firebaseAuth,
      username,
      password
    );
    console.log(valideUser);
    console.log(`[${valideUser.user.email}]`);
    console.log(`[${valideUser.user.uid}]`);

    store.setKey("userLogged", valideUser.user.email);
    store.setKey("uid", valideUser.user.uid);
  }
);
