import { useStore } from "@nanostores/react";
import { AddTodo, CheckTodo, todolistStore, toggleTodoState } from "../store/TodoList.store";
import { Button } from "../style/Subscription.style";

/**
 * this function do ...
 */
export default function TodoList() {
  const { todolistName, reponsible, todolist } = useStore(todolistStore);
  return (
    <>
      <h1>{todolistName}</h1>
      <h2>{reponsible}</h2>
      <input
        type="text"
        onChange={(e) => CheckTodo(e.currentTarget.value)}
        name="password"
      />
        <button onClick={AddTodo} >Ajouter</button>
        
              <ul>
        {todolist.map((item, index) => (
          <li key={index} onClick={()=>toggleTodoState(index)}>
            {item.todoName} : {item.isDone ? "fait" : "non fait"}
          </li>
        ))}
      </ul>
    </>
  );
}
