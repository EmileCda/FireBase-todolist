/** this store is to manage list of todolist */

import { addDoc, collection } from "@firebase/firestore";
import { useStore } from "@nanostores/react";
import { action, map } from "nanostores";
import { firebaseDb } from "../lib/Firebase";

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
  todolistName: "",
  reponsible: "toto-resp",
  todoName: "",
  idTodoList: 0,
  todolist: [],
  listTodoList: [todo0, todo1, todo2],
});

/** this fonction is for adding a todolist into a list of todolist
 * a todolist must have a name and a responsible par default responsible is userlogged
 */
export const addListTodolist = action(
  todolistStore,
  "AddListTodolist",
  // async (store) => {
  (store) => {
    const { todolistName, reponsible, listTodoList } = store.get();

    const myNewTodoList: Ttodolist = {
      todolistName: todolistName,
      reponsible: reponsible,
      todolist: [],
    };
    const newListTodo = [myNewTodoList, ...listTodoList];

    store.setKey("listTodoList", newListTodo);

    store.setKey("todolistName", todolistName);
    store.setKey("reponsible", reponsible);
    store.setKey("todolist", []);
    store.setKey("idTodoList", 0);
  }

  // const status = await addDoc(collection(firebaseDb, "tasks"), {
  //   todolist: newListTodo,
  // });
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

export const addTodo = action(todolistStore, "AddTodo", (store) => {
  const {
    todoName,
    todolist,
    listTodoList,
    idTodoList,
    todolistName,
    reponsible,
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
  }
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
  (store, idItem: number) => {
    const { todolist,todolistName,reponsible ,listTodoList,idTodoList} = store.get();
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

  }
);

/** this functin toggle the current */
export const deleteTodo = action(
  todolistStore,
  "deleteTodo",
  (store, idItem: number) => {
    const { todolist } = store.get();
    const myNewTodoList = todolist.filter((todo, index) => {
      if (idItem !== index) {
        return todo;
      }
    });
    store.setKey("todolist", myNewTodoList);
  }
);

/** this functin toggle the current */
export const deleteTodoList = action(
  todolistStore,
  "deleteTodoList",
  (store, idTodoList: number) => {
    const { listTodoList } = store.get();
    const myNewListTodoList = listTodoList.filter((todolist, index) => {
      if (idTodoList !== index) {
        return todolist;
      }
    });
    store.setKey("listTodoList", myNewListTodoList);
    console.log(`deleteTodoList : ${idTodoList}`);
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

    store.setKey("todolistName", myNewListTodoList[0].todolistName);
    store.setKey("reponsible", myNewListTodoList[0].reponsible);
    store.setKey("todolist", myNewListTodoList[0].todolist);
    store.setKey("idTodoList", idTodoList);
    store.setKey("routeChange", true);
  }
);
