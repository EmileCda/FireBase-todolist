import { useStore } from "@nanostores/react";
import { Navigate } from "react-router";

import {
  addTodo,
  checkTodo,
  deleteCurrentTodoList,
  deleteTodo,
  selectTodoList,
  todolistStore,
  toggleTodoState,
  Ttodo,
} from "../store/TodoList.store";
import { MyButton, MyLink } from "../style/Common.style";

import {
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
import {
  DeleteList,
  DisplayListTodo,
  IconButton,
  Icone,
  InputGroup,
  Tododiv,
  TodoListContainer,
  TodoName,
} from "../style/TodoList.style";

export type TDisplayTodoProps = {
  todo: Ttodo;
  index: number;
};

export function DisplayTodo({ todo, index }: TDisplayTodoProps) {
  return (
    <Tododiv isClicked={todo.isDone}>
      <TodoName>{todo.todoName}</TodoName>
      <Icone onClick={() => deleteTodo(index)}>
        <i className="fa-sharp fa-solid fa-trash"></i>
      </Icone>
    </Tododiv>
  );
}

/**
 * this function do ...
 */
export default function TodoList() {
  const {
    todolistName,
    responsible,
    todolist,
    todoName,
    idTodoList,
    isLoading,
  } = useStore(todolistStore);

  if (todolistName === "") {
    selectTodoList(idTodoList);
  }

  if (idTodoList < 0) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <TodoListContainer isLoading={isLoading}>
        <TitleContainer>
          <IconContainer>
            <MyLink to="/">
              <i className="fa-solid fa-chevron-left"></i>
            </MyLink>
          </IconContainer>
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
              <p>{responsible}</p>
            </TextUser>
          </UpperList>
        </UserContainer>
        <InputGroup>
          <Input
            type="text"
            onChange={(e) => checkTodo(e.currentTarget.value)}
            name="Todo"
            value={todoName}
          />
          <IconButton onClick={addTodo} isLoading={isLoading}>
            <i className="fa-solid fa-circle-plus"></i>
          </IconButton>
        </InputGroup>
        <DisplayListTodo>
          <ul>
            {todolist.map((item: Ttodo, index: number) => (
              <li key={index} onClick={() => toggleTodoState(index)}>
                <DisplayTodo todo={item} index={index} />
              </li>
            ))}
          </ul>
        </DisplayListTodo>
      </TodoListContainer>
      <MyLink to="/">
        <DeleteList isLoading={isLoading}>
          <Icone onClick={deleteCurrentTodoList}>
            <i className="fa-sharp fa-solid fa-trash"></i>
          </Icone>
        </DeleteList>
      </MyLink>
    </>
  );
}
