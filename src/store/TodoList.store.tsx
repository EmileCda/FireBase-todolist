/** this store is to manage list of todolist */

import { collection, doc, getDoc, setDoc } from "@firebase/firestore";

import { action, map } from "nanostores";
import { firebaseDb } from "../lib/Firebase";

export const todoListCollection = "Todolists";

export type Ttodo = {
  todoName: string;
  isDone: boolean;
};

export type Ttodolist = {
  todolistName: string;
  todolist: Ttodo[];
};

export type Tuser = {
  email: string;
  name: string;

  uid: string;
};

export type TTodolistStore = {
  listTodoList: Ttodolist[];
  user: Tuser;
  inputNewTodoListName: string;
  inputNewTodoName: string;

  isBusy: boolean;
  idCurrentTodoList: number;
};

export const todolistStore = map<TTodolistStore>({
  listTodoList: [],
  user: { email: "", name: "", uid: "" },

  inputNewTodoListName: "",
  inputNewTodoName: "",
  isBusy: false,
  idCurrentTodoList: -1,
});

/** this function load data from firebase to data store
 * document is identified by UID
 * 2 informations are retreived 1) user 2) list of todolist
 */
// ---------------------------------------------------------------------
export const loadStore = action(
  todolistStore,
  "loadStore",
  async (store, uid: string) => {
    store.setKey("isBusy", true);

    const todolistCollection = collection(firebaseDb, todoListCollection);
    const myDoc = doc(todolistCollection, uid);
    const myDocSnapshot = await getDoc(myDoc);
    if (myDocSnapshot.exists()) {
      const myData = myDocSnapshot.data();
      const loadListTodoList = myData.todoLists;
      const userInformation = myData.user;
      store.setKey("listTodoList", loadListTodoList);
      store.setKey("user", userInformation);
    }
    store.setKey("isBusy", false);
  }
);

// ---------------------------------------------------------------------
/** this function activate or desactivate the state of a todo
 *
 */
export const toggleTodoIsDone = action(
  todolistStore,
  "addTodo",
  (store, idTodo: number) => {
    store.setKey("isBusy", true);

    const { listTodoList, idCurrentTodoList } = store.get();
    const newlistTodoList = listTodoList.map(
      (oneTodoList: Ttodolist, todoListIndex: number) => {
        // return unchanged todolist
        if (idCurrentTodoList !== todoListIndex) {
          return oneTodoList;
        }
        // looking for the right todo identified by todoIndex

        const modifiedTabTodo: Ttodo[] = oneTodoList.todolist.map(
          (oneTodo: Ttodo, todoIndex: number) => {
            if (idTodo !== todoIndex) {
              return oneTodo;
            }

            // returning the whole todo and modifing isdone
            return { ...oneTodo, isDone: !oneTodo.isDone };
          }
        );

        // return the todolist modified todolist into NewListTodoList
        return { ...oneTodoList, todolist: modifiedTabTodo };
      }
    );

    store.setKey("listTodoList", newlistTodoList);
    save();
    store.setKey("isBusy", false);
  }
);
// --------------------------------------------------------------------
/** this function add a new to in the current todolist
 *
 */
export const addTodo = action(todolistStore, "addTodo", (store) => {
  store.setKey("isBusy", true);

  const { listTodoList, inputNewTodoName, idCurrentTodoList } = store.get();
  const newlistTodoList = listTodoList.map(
    (oneTodoList: Ttodolist, index: number) => {
      // return unchanged todolist
      if (idCurrentTodoList !== index) {
        return oneTodoList;
      }
      // return modified todolist by addinf new todo
      return {
        todolistName: oneTodoList.todolistName,
        todolist: [
          { todoName: inputNewTodoName, isDone: false },
          ...oneTodoList.todolist,
        ],
      };
    }
  );
  store.setKey("inputNewTodoName", "");
  store.setKey("listTodoList", newlistTodoList);
  save();
  store.setKey("isBusy", false);
});
// ---------------------------------------------------------------------
/** this function delete  a todo,identified by an index  in the current todolist */
export const deleteTodo = action(
  todolistStore,
  "deleteTodo",
  (store, idTodo: number) => {
    store.setKey("isBusy", true);

    const { listTodoList, idCurrentTodoList } = store.get();
    const newlistTodoList = listTodoList.map(
      (oneTodoList: Ttodolist, index: number) => {
        // return unchanged todolist
        if (idCurrentTodoList !== index) {
          return oneTodoList;
        }
        // return modified todolist by addinf new todo

        return {
          ...oneTodoList,
          todolist: oneTodoList.todolist.filter((oneTodo, index) => {
            index !== idTodo;
          }),
        };
      }
    );
    store.setKey("listTodoList", newlistTodoList);
    save();
    store.setKey("isBusy", false);
  }
);
// ---------------------------------------------------------------------
/** this function is in charge to manage the input text used for setting a name for a todo */
export const inputChangeTodoName = action(
  todolistStore,
  "inputChangeTodoName",
  (store, inputNewTodoName: string) => {
    store.setKey("isBusy", true);

    store.setKey("inputNewTodoName", inputNewTodoName);
    store.setKey("isBusy", false);
  }
); // ---------------------------------------------------------------------
/** this function is in charge to manage the input text used for setting a name for a todolist */
export const inputChangeTodoListName = action(
  todolistStore,
  "inputChangeTodoListName",
  (store, inputNewTodolistName: string) => {
    store.setKey("isBusy", true);

    store.setKey("inputNewTodoListName", inputNewTodolistName);
    store.setKey("isBusy", false);
  }
);

// ---------------------------------------------------------------------
/** this function add a new todolist on the top of the list of todo list */
export const addTodoList = action(todolistStore, "addTodo", (store) => {
  store.setKey("isBusy", true);

  const { listTodoList, inputNewTodoListName } = store.get();
  const newListTodoList = [
    { todolistName: inputNewTodoListName, todolist: [] },
    ...listTodoList,
  ];

  store.setKey("idCurrentTodoList", 0);
  store.setKey("inputNewTodoListName", "");
  store.setKey("listTodoList", newListTodoList);
  store.setKey("isBusy", false);
});

// ---------------------------------------------------------------------
/** this function set the id regardin to the current todoList */
export const setIdCurrentTodolist = action(
  todolistStore,
  "setIdCurrentTodolist",
  (store, index: number) => {
    store.setKey("idCurrentTodoList", index);
  }
);

// ---------------------------------------------------------------------
export const deleteTodoList = action(todolistStore, "addTodo", (store) => {
  store.setKey("isBusy", true);

  const { listTodoList, idCurrentTodoList } = store.get();

  const newlistTodoList = listTodoList.filter(
    (oneTodoList: Ttodolist, indexTodoList: number) =>
     ( indexTodoList !== idCurrentTodoList)
  );

  store.setKey("listTodoList", newlistTodoList);
  save();
  store.setKey("isBusy", false);
});

// ---------------------------------------------------------------------

export const save = action(todolistStore, "addTodo", async (store) => {
  store.setKey("isBusy", true);

  const { user, listTodoList } = store.get();
  if (user.uid !== "") {
    // name given (todoLists) to firebase in order to have a database field name
    const todoLists = { user: user, todolist: listTodoList };

    const myDoc = doc(firebaseDb, todoListCollection, user.uid);
    const status = await setDoc(myDoc, { todoLists });
    store.setKey("isBusy", false);
  }
});

// ---------------------------------------------------------------------
export const load = action(
  todolistStore,
  "addTodo",
  async (store, uidFromSubscribe) => {
    store.setKey("isBusy", true);

    const todolistCollection = collection(firebaseDb, todoListCollection);

    const myDoc = doc(todolistCollection, uidFromSubscribe);
    const myDocSnapshot = await getDoc(myDoc);
    if (myDocSnapshot.exists()) {
      const myData = myDocSnapshot.data().todoLists;
      store.setKey("listTodoList", myData.todolist);
      const myUser: Tuser = {
        email: myData.user.email,
        name: myData.user.name,
        uid: uidFromSubscribe,
      };
      store.setKey("user", myUser);
    }
    store.setKey("isBusy", false);
  }
);

// ---------------------------------------------------------------------
export const setUser = action(
  todolistStore,
  "addTodo",
  (store, uidFromSubscribe: string, emailFromSubscribe: string) => {
    const { user } = store.get();

    const newuser = {
      ...user,
      uid: uidFromSubscribe,
      email: emailFromSubscribe,
    };

    store.setKey("user", newuser);
  }
);
// ---------------------------------------------------------------------
export const resetUser = action(todolistStore, "addTodo", (store) => {
  store.setKey("user", {
    name: "",
    email: "",
    uid: "",
  });
});
