/**store for screen1 : subscrib
 * 
 * 
 * 
 */
import { action, map } from 'nanostores'

export const subScriptionStore = map({
    username: "",
    password: "",
  });
  
  
  export const checkEmail = action(
    subScriptionStore,
    "checkEmail",
    (store, value: string) => {
      store.setKey("username", value);
    }
  );
  
  export const checkPass = action(
    subScriptionStore,
    "checkPass",
    (store, value: string) => {
      store.setKey("password", value);
    }
  );