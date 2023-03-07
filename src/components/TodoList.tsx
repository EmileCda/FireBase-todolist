import { useStore } from "@nanostores/react";
import { Link } from "react-router-dom";
import {
  addTodo,
  checkTodo,
  deleteTodo,
  todolistStore,
  toggleTodoState,
  Ttodo,
} from "../store/TodoList.store";

import {
  Button,
  IconContainer,
  IconUser,
  Input,
  TexteContainer,
  TextUser,
  Title,
  TitleContainer,
  UpperList,
  UserContainer,
} from "../style/NewList.style";
import { DisplayListTodo, Icone, Tododiv } from "../style/TodoList.style";

export function DisplayTodo(todo: Ttodo) {}

/**
 * this function do ...
 */
export default function TodoList() {
  const { todolistName, reponsible, todolist, todoName } =
    useStore(todolistStore);
  return (
    <>
      <TitleContainer>
        <Link to="/">
          <IconContainer>
            <i className="fa-solid fa-chevron-left"></i>
          </IconContainer>
        </Link>
        <TexteContainer>
          <Title>{todolistName}</Title>
        </TexteContainer>
      </TitleContainer>
      <UserContainer>
        <UpperList>
          <IconUser>
            <i className="fa-solid fa-user"></i>
          </IconUser>
          <TextUser>
            <p>Par</p>
            <p>{reponsible}</p>
          </TextUser>
        </UpperList>
      </UserContainer>
      <Input
        type="text"
        onChange={(e) => checkTodo(e.currentTarget.value)}
        name="Todo"
        value={todoName}
      />

      <Button onClick={addTodo}>Ajouter</Button>
      <DisplayListTodo>
        <ul>
          {todolist.map((item: Ttodo, index) => (
            <li key={index} onClick={() => toggleTodoState(index)}>
              <Tododiv isClicked={item.isDone}>
                <div>{item.todoName}</div>
                <Icone onClick={() => deleteTodo(index)}>
                  <i className="fa-sharp fa-solid fa-trash"></i>
                </Icone>
              </Tododiv>
            </li>
          ))}
        </ul>
      </DisplayListTodo>
    </>
  );
}
