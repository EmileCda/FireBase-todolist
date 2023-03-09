/** this store is to manage list of todolist */

import { addDoc, collection, doc, setDoc } from "@firebase/firestore";
import { useStore } from "@nanostores/react";
import { action, map } from "nanostores";
import { firebaseDb } from "../lib/Firebase";
import { SubscribeStore } from "./Subscription.store";

export const todoListCollection = "Todolists";

export type Ttodo = {
  todoName: string;
  isDone: boolean;
};

export type Ttodolist = {
  todolistName: string;
  reponsible: string;
  todolist: Ttodo[];
};

export type TTodolistStore = {
  isLoading: boolean;
  uid: string;
  todolistName: string;
  reponsible: string;
  idTodoList: number;
  todolist: Ttodo[];
  todoName: string;
  listTodoList: Ttodolist[];
};

const todo0: Ttodolist = {
  todolistName: "course 0",
  reponsible: "kours-man",
  todolist: [],
};

const todo1: Ttodolist = {
  todolistName: "bricolage 2",
  reponsible: "brikoman",
  todolist: [],
};

const todo2: Ttodolist = {
  todolistName: "ménage",
  reponsible: "MénaMan",
  todolist: [],
};

export const todolistStore = map<TTodolistStore>({
  isLoading: false,
  uid: "",
  todolistName: "",
  reponsible: "toto-resp",
  todoName: "",
  idTodoList: -1,
  todolist: [],
  listTodoList: [todo0, todo1, todo2],
});

export const setUid = action(
  todolistStore,
  "setUid",
  (store, value: string) => {
    store.setKey("uid", value);
  }
);

/** this function load data from parameter to data store */
export const setListTodoList = action(
  todolistStore,"setListTodoList",(store,data,uid)=>{
    store.setKey("isLoading", true);
    const {idTodoList} = store.get()
    const indexinit = 0; 
    console.log(data);
    store.setKey("listTodoList",data);
    store.setKey("uid",uid);
    store.setKey("todolist",data[indexinit].todolist);
    store.setKey("todolistName",data[indexinit].todolistName);
    store.setKey("reponsible",data[indexinit].reponsible);
    store.setKey("idTodoList",indexinit);
    


  }
);





/** this fonction is for adding a todolist into a list of todolist
 * a todolist must have a name and a responsible par default responsible is userlogged
 */

export const addListTodolist = action(
  todolistStore,
  "AddListTodolist",
  async (store) => {
    store.setKey("isLoading", true);
    const { todolistName, reponsible, listTodoList, uid } = store.get();
    const myNewTodoList: Ttodolist = {
      todolistName: todolistName,
      reponsible: reponsible,
      todolist: [],
    };
    const newListTodoList = [myNewTodoList, ...listTodoList];

    store.setKey("listTodoList", newListTodoList);

    store.setKey("todolistName", todolistName);
    store.setKey("reponsible", reponsible);
    store.setKey("todolist", []);
    store.setKey("idTodoList", 0);

    const myDoc = doc(firebaseDb, todoListCollection, uid);
    const status = await setDoc(myDoc, { newListTodoList });
    store.setKey("isLoading", false);
  }
);

/**this function is for checking if the new todolist name is valide
 * name should not be duplicate
 *
 */
export const checkTodoListName = action(
  todolistStore,
  "CheckTodoLitsName",
  (store, value: string) => {
    store.setKey("todolistName", value);
  }
);

/**this function is for checking if the new todolist reponsible is valide
 *
 *
 */
export const checkTodoResponsible = action(
  todolistStore,
  "CheckTodoLitsName",
  (store, value: string) => {
    store.setKey("reponsible", value);
  }
);

/**this function is for changing reponsible for todolist
 *
 *
 */
export const changeResponsible = action(
  todolistStore,
  "ChangeResponsible",
  (store, value: string) => {
    store.setKey("reponsible", value);
  }
);

export const addTodo = action(todolistStore, "AddTodo", async (store) => {
  store.setKey("isLoading", true);

  const {
    todoName,
    todolist,
    listTodoList,
    idTodoList,
    todolistName,
    reponsible,
    uid,
  } = store.get();
  if (todoName !== "") {
    const newTodo: Ttodo = { todoName: todoName, isDone: false };
    const newTabTodo: Ttodo[] = [newTodo, ...todolist];
    store.setKey("todolist", newTabTodo);
    store.setKey("todoName", "");

    const newTodoList: Ttodolist = {
      todolistName: todolistName,
      reponsible: reponsible,
      todolist: newTabTodo,
    };
    const newListTodoList = listTodoList.map((TodoList, index: number) => {
      if (idTodoList !== index) {
        return TodoList;
      } else {
        return newTodoList;
      }
    });
    store.setKey("listTodoList", newListTodoList);
    const myDoc = doc(firebaseDb, todoListCollection, uid);
    const status = await setDoc(myDoc, { newListTodoList });
  }
  store.setKey("isLoading", false);
});

/** this function is going to check if the name for todo is correct
 * for the moment there is no check rule
 * later we can add some check rule like duplicate name etc.
 */
export const checkTodo = action(
  todolistStore,
  "CheckTodo",
  (store, value: string) => {
    store.setKey("todoName", value);
  }
);

export const changeTodo = action(
  todolistStore,
  "ChangeTodo",
  (store, value: string) => {
    store.setKey("todoName", value);
  }
);

/** this functin toggle the current */
export const toggleTodoState = action(
  todolistStore,
  "toggleTodoState",async  (store, idItem: number) => {
    store.setKey("isLoading", true);

    const { todolist, todolistName, reponsible, listTodoList, idTodoList,uid } =
      store.get();
    const myNewTodoList = todolist.map((todo, index) => {
      if (idItem === index) {
        const newTodo: Ttodo = {
          todoName: todo.todoName,
          isDone: !todo.isDone,
        };
        return newTodo;
      } else {
        return todo;
      }
    });
    store.setKey("todolist", myNewTodoList);

    const newTodoList: Ttodolist = {
      todolistName: todolistName,
      reponsible: reponsible,
      todolist: myNewTodoList,
    };
    const newListTodoList = listTodoList.map((TodoList, index: number) => {
      if (idTodoList !== index) {
        return TodoList;
      } else {
        return newTodoList;
      }
    });
    store.setKey("listTodoList", newListTodoList);
    const myDoc = doc(firebaseDb, todoListCollection, uid);
    const status = await setDoc(myDoc, { newListTodoList });

    store.setKey("isLoading", false);
  }
);

/** this functin toggle the current */
export const deleteTodo = action(
  todolistStore,
  "deleteTodo",
  async (store, idItem: number) => {
    store.setKey("isLoading", true);
    const { todolist, todolistName, reponsible, idTodoList, listTodoList,uid } =
      store.get();

    // MyNewTodoList containt all todo accept the one with the index = index
    const myNewTodoList = todolist.filter((todo, index) => {
      if (idItem !== index) {
        return todo;
      }
    });

    // add to MyNewTodoList  the name and de responsible
    store.setKey("todolist", myNewTodoList);
    const newTodoList: Ttodolist = {
      todolistName: todolistName,
      reponsible: reponsible,
      todolist: myNewTodoList,
    };

    // newListTodoList is the whole list-of-todolist we just exchange the todolist newly with update
    const newListTodoList = listTodoList.map((TodoList, index: number) => {
      if (idTodoList !== index) {
        return TodoList;
      } else {
        return newTodoList;
      }
    });

    // Finnaly we store the list-of-todolist with todo changed
    store.setKey("listTodoList", newListTodoList);
    const myDoc = doc(firebaseDb, todoListCollection, uid);
    const status = await setDoc(myDoc, { newListTodoList });


    store.setKey("isLoading", false);
  }
);

/** this functin toggle the current */
export const deleteTodoList = action(
  todolistStore,
  "deleteTodoList",
  async (store, idTodoList: number) => {
    store.setKey("isLoading", true);

    const { listTodoList,uid } = store.get();
    const myNewListTodoList = listTodoList.filter((todolist, index) => {
      if (idTodoList !== index) {
        return todolist;
      }
    });
    store.setKey("listTodoList", myNewListTodoList);

    const myDoc = doc(firebaseDb, todoListCollection, uid);
    const status = await setDoc(myDoc, { myNewListTodoList });

  }
);

/** this functin change the index for current todolist
 * ad then change the current todolist
 */
export const selectTodoList = action(
  todolistStore,
  "selectTodoList",
  (store, idTodoList: number) => {
    const { listTodoList } = store.get();
    const myNewListTodoList = listTodoList.filter((todolist, index) => {
      if (idTodoList === index) {
        return todolist;
      }
    });

    if (myNewListTodoList.length >0){
      store.setKey("todolistName", myNewListTodoList[0].todolistName);
      store.setKey("reponsible", myNewListTodoList[0].reponsible);
      store.setKey("todolist", myNewListTodoList[0].todolist);
      store.setKey("idTodoList", idTodoList);
  
    }

  }
);
