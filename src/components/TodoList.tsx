import { useStore } from "@nanostores/react";
import { Navigate } from "react-router";

import { addTodo, deleteTodo, deleteTodoList, inputChangeTodoName, todolistStore, toggleTodoIsDone, Ttodo } from "../store/TodoList.store";
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
  const { listTodoList,idCurrentTodoList,user,inputNewTodoName,isBusy
  } = useStore(todolistStore);



  return (
    <>
      <TodoListContainer isLoading={isBusy}>
        <TitleContainer>
          <IconContainer>
            <MyLink to="/">
              <i className="fa-solid fa-chevron-left"></i>
            </MyLink>
          </IconContainer>
          <TexteContainer>
            <Title>{listTodoList[idCurrentTodoList].todolistName}</Title>
          </TexteContainer>
        </TitleContainer>
        <UserContainer>
          <UpperList>
            <IconUser>
              <i className="fa-solid fa-user"></i>
            </IconUser>
            <TextUser>
              <p>Par</p>
              <p>{user.name}</p>
            </TextUser>
          </UpperList>
        </UserContainer>
        <InputGroup>
          <Input
            type="text"
            onChange={(e) => inputChangeTodoName(e.currentTarget.value)}
            name="Todo"
            value={inputNewTodoName}
          />
          <IconButton onClick={addTodo} isLoading={isBusy}>
            <i className="fa-solid fa-circle-plus"></i>
          </IconButton>
        </InputGroup>
        <DisplayListTodo>
          <ul>
            {listTodoList[idCurrentTodoList].todolist.map((item: Ttodo, index: number) => (
              <li key={index} onClick={() => toggleTodoIsDone(index)}>
                <DisplayTodo todo={item} index={index} />
              </li>
            ))}
          </ul>
        </DisplayListTodo>
      </TodoListContainer>
      <MyLink to="/">
        <DeleteList isLoading={isBusy}>
          <Icone onClick={deleteTodoList}>
            <i className="fa-sharp fa-solid fa-trash"></i>
          </Icone>
        </DeleteList>
      </MyLink>
    </>
  );
}
