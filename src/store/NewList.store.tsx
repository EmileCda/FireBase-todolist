/**store for state regarding to menu nav
 *
 */

import { action, map } from "nanostores";

export type TNewListStore = {
  name: string;
  listTodo: string[];
};

export const NewListStore = map<TNewListStore>({
  name: "",
  listTodo: [],
});

export const checkListName = action(
  NewListStore,
  "checkListName",
  (store, value) => {
    store.setKey("name", value);

    // const userAutorized = await signInWithEmailAndPassword(
    //   firebaseAuth,
    //   username,
    //   password
    // );
  }
);

// ---------------------------------------------------------------
export const AddListTodo = action(NewListStore, "AddListTodo", (store) => {
  const { name, listTodo } = store.get();

  const newListTodo = [name, ...listTodo];

  store.setKey("listTodo", newListTodo);
});
