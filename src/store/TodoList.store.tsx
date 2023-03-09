/** this store is to manage list of todolist */

import {  collection, doc, getDoc, setDoc } from "@firebase/firestore";
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
  responsible: string;
  todolist: Ttodo[];
};

export type TTodolistStore = {
  isDownLoad: boolean,
  isLoading: boolean,
  uid: string,
  todolistName: string,
  responsible: string,
  idTodoList: number,
  todolist: Ttodo[],
  todoName: string;
  listTodoList: Ttodolist[],
};

const todo0: Ttodolist = {
  todolistName: "course 0",
  responsible: "kours-man",
  todolist: [],
};

const todo1: Ttodolist = {
  todolistName: "bricolage 2",
  responsible: "brikoman",
  todolist: [],
};

const todo2: Ttodolist = {
  todolistName: "ménage",
  responsible: "MénaMan",
  todolist: [],
};

export const todolistStore = map<TTodolistStore>({
  isDownLoad: false,
  isLoading: false,
  uid: "-1",
  todolistName: "",
  responsible: "toto-resp",
  todoName: "",
  idTodoList: -1,
  todolist: [],
  // listTodoList: [todo0, todo1, todo2],
  listTodoList: [],
});

export const setUid = action(
  todolistStore,
  "setUid",
  (store, value: string) => {
    store.setKey("uid", value);
  }
);



/** setter for responsible
 * 
 * */
export const resetTodolistStore= action( todolistStore,"resetStore",(store) => {

  store.setKey("isDownLoad",false);
  store.setKey("isLoading",false);
  store.setKey("uid","-1");
  store.setKey("todolistName","");
  store.setKey("responsible","toto-resp");
  store.setKey("todoName","");
  store.setKey("idTodoList",-1);
  store.setKey("todolist",[]);
  
})


/** setter for responsible
 * 
 * */
export const setResponsible= action( todolistStore,"initStore",(store,value) => {

  store.setKey("responsible",value);
})


/** setter for responsible
 * 
 * */
export const resetIsDownLoad= action( todolistStore,"resetIsDownLoad",(store) => {

  store.setKey("isDownLoad",false);
})
/** setter for responsible
 * 
 * */
export const setIsDownLoad= action( todolistStore,"resetIsDownLoad",(store) => {

  store.setKey("isDownLoad",true);
})

/** this function initialyse all store data 
 * 
 * */
export const initStore= action( todolistStore,"initStore",(store) => {

  store.setKey("listTodoList", []);
  store.setKey("todolist", []);
  store.setKey("todolistName","");
  store.setKey("idTodoList", -1);

})

/** this function load data from parameter to data store */
export const setListTodoList = action(
  todolistStore,
  "setListTodoList",
  async (store) => {
    const {uid}= useStore(SubscribeStore);
  
    const { listTodoList } = store.get();
    if (uid){
      const todolistCollection = collection(firebaseDb, todoListCollection);

      const myDoc = doc(todolistCollection, uid);
      const myDocSnapshot = await getDoc(myDoc);

      
      if (myDocSnapshot.exists()) {
        const myData = myDocSnapshot.data();
        const indexinit = 0;
        const loadListTodoList = myData.todoLists;
        if (loadListTodoList.length > 0){
          store.setKey("listTodoList", loadListTodoList);
          store.setKey("todolist", loadListTodoList[indexinit].todolist);
          store.setKey(
            "todolistName",
            loadListTodoList[indexinit].todolistName
          );
          store.setKey("idTodoList", indexinit);
  
        }
        else{
          initStore();
        }
      } else {
        // not data exist; initStore in case of information from the last user
        initStore();
      }
  
    }
    
    
    store.setKey("isLoading", false);
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
    const { todolistName, responsible, listTodoList, uid } = store.get();
    const myNewTodoList: Ttodolist = {
      todolistName: todolistName,
      responsible: responsible,
      todolist: [],
    };
    const todoLists = [myNewTodoList, ...listTodoList];

    store.setKey("listTodoList", todoLists);

    store.setKey("todolistName", todolistName);
    store.setKey("todolist", []);
    store.setKey("idTodoList", 0);

    const myDoc = doc(firebaseDb, todoListCollection, uid);
    const status = await setDoc(myDoc, { todoLists });
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

export const addTodo = action(todolistStore, "AddTodo", async (store) => {
  store.setKey("isLoading", true);

  const {
    todoName,
    todolist,
    listTodoList,
    idTodoList,
    todolistName,
    responsible,
    uid,
  } = store.get();
  if (todoName !== "") {
    const newTodo: Ttodo = { todoName: todoName, isDone: false };
    const newTabTodo: Ttodo[] = [newTodo, ...todolist];
    store.setKey("todolist", newTabTodo);
    store.setKey("todoName", "");

    const newTodoList: Ttodolist = {
      todolistName: todolistName,
      responsible: responsible,
      todolist: newTabTodo,
    };
    const todoLists = listTodoList.map((TodoList, index: number) => {
      if (idTodoList !== index) {
        return TodoList;
      } else {
        return newTodoList;
      }
    });
    store.setKey("listTodoList", todoLists);
    const myDoc = doc(firebaseDb, todoListCollection, uid);
    const status = await setDoc(myDoc, { todoLists });
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
  "toggleTodoState",
  async (store, idItem: number) => {
    store.setKey("isLoading", true);

    const {
      todolist,
      todolistName,
      responsible,
      listTodoList,
      idTodoList,
      uid,
    } = store.get();
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
      responsible: responsible,
      todolist: myNewTodoList,
    };
    const todoLists = listTodoList.map((TodoList, index: number) => {
      if (idTodoList !== index) {
        return TodoList;
      } else {
        return newTodoList;
      }
    });
    store.setKey("listTodoList", todoLists);
    const myDoc = doc(firebaseDb, todoListCollection, uid);
    const status = await setDoc(myDoc, { todoLists });

    store.setKey("isLoading", false);
  }
);

/** this functin toggle the current */
export const deleteTodo = action(
  todolistStore,
  "deleteTodo",
  async (store, idItem: number) => {
    store.setKey("isLoading", true);
    const {
      todolist,
      todolistName,
      responsible,
      idTodoList,
      listTodoList,
      uid,
    } = store.get();

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
      responsible: responsible,
      todolist: myNewTodoList,
    };

    // todoLists is the whole list-of-todolist we just exchange the todolist newly with update
    const todoLists = listTodoList.map((TodoList, index: number) => {
      if (idTodoList !== index) {
        return TodoList;
      } else {
        return newTodoList;
      }
    });

    // Finnaly we store the list-of-todolist with todo changed
    store.setKey("listTodoList", todoLists);
    const myDoc = doc(firebaseDb, todoListCollection, uid);
    const status = await setDoc(myDoc, { todoLists });

    store.setKey("isLoading", false);
  }
);

/** this functin toggle the current */
export const deleteCurrentTodoList = action(
  todolistStore,
  "deleteCurrentTodoList",
  async (store) => {
    store.setKey("isLoading", true);

    const { listTodoList, uid,idTodoList } = store.get();
    const todoLists = listTodoList.filter((todolist, index) => {
      if (idTodoList !== index) {
        return todolist;
      }
    });
    store.setKey("listTodoList", todoLists);
    store.setKey("idTodoList", -1);

    const myDoc = doc(firebaseDb, todoListCollection, uid);
    const status = await setDoc(myDoc, { todoLists });
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
    const todoLists = listTodoList.filter((todolist, index) => {
      if (idTodoList === index) {
        return todolist;
      }
    });

    if (todoLists.length > 0) {
      store.setKey("todolistName", todoLists[0].todolistName);
      store.setKey("responsible", todoLists[0].responsible);
      store.setKey("todolist", todoLists[0].todolist);
      store.setKey("idTodoList", idTodoList);
    }
  }
);
