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
import { setListTodoList } from "./TodoList.store";

export type TUser = {};

export type TSubscribeStore = {
  email: string;
  name: string;
  password: string;
  IsValideEmail: boolean;
  isvalidePass: boolean;
  isSending: boolean;
  uid: string;
  message: string | null;
};

export const SubscribeStore = map<TSubscribeStore>({
  email: "",
  name: "name init",
  password: "",
  IsValideEmail: false,
  isvalidePass: false,
  isSending: false,
  uid: "",
  message: "",
});

export const resetSubscribeStore = action(
  SubscribeStore,
  "resetStore",
  (store) => {

    store.setKey("email", "");
    store.setKey("name", "name init");
    store.setKey("password", "");
    store.setKey("IsValideEmail", false);
    store.setKey("isvalidePass", false);
    store.setKey("isSending", false);
    store.setKey("uid", "");
    store.setKey("message", "");


  }
  
)


export const validateEmail = action(
  SubscribeStore,
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
      store.setKey("name", email.substring(0, email.lastIndexOf("@")));
      
      return;
    }
    // default
    store.setKey("IsValideEmail", false);
  }
);

// ---------------------------------------------------------------

export const resetUid = action(SubscribeStore, "resetUid", (store) => {
  store.setKey("uid", "");
});
// ---------------------------------------------------------------

export const setName = action(
  SubscribeStore,
  "setNom",
  (store, newName: string) => {
    store.setKey("name", newName);
  }
);

// ---------------------------------------------------------------

export const validatePass = action(SubscribeStore, "validatePass", (store) => {
  // Retrieve the email in the store
  const { password } = store.get();
  // check password lenght if > 5 => password is valide. could have a more constraint rules
  store.setKey("isvalidePass", password.length > 5 ? true : false);
});

// ---------------------------------------------------------------

export const checkEmail = action(
  SubscribeStore,
  "checkEmail",
  (store, value: string) => {
    store.setKey("email", value);
    validateEmail();
  }
);

// ---------------------------------------------------------------
export const checkPass = action(
  SubscribeStore,
  "checkPass",
  (store, value: string) => {
    store.setKey("password", value);
    validatePass();
  }
);

// ---------------------------------------------------------------
export const CheckUser = action(SubscribeStore, "CheckUser", async (store) => {
  const { email, password } = store.get();
  let userAutorized;
  try {
 // login successful.

    userAutorized = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    store.setKey("uid", userAutorized.user.uid);
    store.setKey("email", email);
    
  } catch(error){
    console.log(error);
    store.setKey(
      "message",
      "erreur de connexion; username ou password incorrect"
    );
  }
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

        store.setKey("uid", valideUser.user.uid);
      } catch {
        store.setKey("message", "Erreur de connexion");
      }
    } else {
      store.setKey(
        "message",
        `error ${isSending} && ${isvalidePass} && ${IsValideEmail}`
      );
    }
    store.setKey("isSending", false);
  }
);
