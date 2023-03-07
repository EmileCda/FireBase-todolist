/** this store is to manage list of todolist */

import { addDoc, collection } from "@firebase/firestore";
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
  idTodoList: -1,
  todolist: [],
  listTodoList: [todo0,todo1,todo2],
});

/** this fonction is for adding a todolist into a list of todolist
 * a todolist must have a name and a responsible par default responsible is userlogged
 */
export const AddListTodolist = action(
  todolistStore,
  "AddListTodolist",
  // async (store) => {
  (store) => {
    const { todolist, todolistName, reponsible, listTodoList } = store.get();

    const myNewTodoList: Ttodolist = {
      todolistName: todolistName,
      reponsible: reponsible,
      todolist: todolist,
    };
    const newListTodo = [myNewTodoList, ...listTodoList];

    store.setKey("listTodoList", newListTodo);

    // const status = await addDoc(collection(firebaseDb, "tasks"), {
    //   todolist: newListTodo,
    // });
  }
);

/**this function is for checking if the new todolist name is valide
 * name should not be duplicate
 *
 */
export const CheckTodoListName = action(
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
export const CheckTodoResponsible = action(
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
export const ChangeResponsible = action(
  todolistStore,
  "ChangeResponsible",
  (store, value: string) => {
    store.setKey("reponsible", value);
  }
);

export const AddTodo = action(todolistStore, "AddTodo", (store) => {
  const { todoName, todolist } = store.get();
  const newTodo = { todoName: todoName, isDone: false };
  const newTodoList = [newTodo, ...todolist];
  store.setKey("todolist", newTodoList);
});

/** this function is going to check if the name for todo is correct
 * for the moment there is no check rule
 * later we can add some check rule like duplicate name etc.
 */
export const CheckTodo = action(
  todolistStore,
  "CheckTodo",
  (store, value: string) => {
    store.setKey("todoName", value);
  }
);

export const ChangeTodo = action(
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
    const { todolist } = store.get();
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
    console.log("toggleTodoState");

    store.setKey("todolist", myNewTodoList);
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
        store.setKey("todolistName", todolist.todolistName);
        store.setKey("reponsible", todolist.reponsible);
        store.setKey("todolist", todolist.todolist);
        store.setKey("idTodoList", idTodoList);
        idTodoList;
      }
    });
  }
);
