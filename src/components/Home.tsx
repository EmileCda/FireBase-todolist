import { useStore } from "@nanostores/react";
import { Link, Navigate } from "react-router-dom";
import { toggleUser } from "../store/Menu.store";
import { SubscribeStore } from "../store/Subscription.store";
import {
  selectTodoList,
  todolistStore,
  Ttodolist,
} from "../store/TodoList.store";
import {
  HomeContainer,
  IconAdd,
  IconUser,
  LowerList,
  MyLink,
  NewListBox,
  TextAdd,
  TextUser,
  Title,
  TodoList,
  UpperList,
} from "../style/Home.style";


export function DisplayTodoList(listName: string,responsible:string, id: number) {
  const { listTodoList } = useStore(todolistStore);
  return (
    <>
      <TodoList onClick={() => selectTodoList(id)}>
        <UpperList onClick={toggleUser}>
          <IconUser>
            <i className="fa-solid fa-user"></i>
          </IconUser>
          <TextUser>
            <p>Par</p>
            <p>{responsible}</p>
          </TextUser>
        </UpperList>
        <LowerList>{listName}</LowerList>
      </TodoList>
    </>
  );
}

export function NewTodoList() {
  return (
    <>
      <MyLink to="/NewList">
        <NewListBox>
          <IconAdd>
            <i className="fa-solid fa-circle-plus"></i>
          </IconAdd>
          <TextAdd>Nouvelle Liste</TextAdd>
        </NewListBox>
      </MyLink>
    </>
  );
}

/**
 * this function do ...
 */
export default function Home() {
  const { uid } = useStore(SubscribeStore);
  const { listTodoList,idTodoList,todolistName,reponsible } = useStore(todolistStore);

  if (!uid) {
    return <Navigate to="/Login"></Navigate>;
  }
  return (
    <>
      <HomeContainer>
        <Title>Mes Todos : {idTodoList}</Title>
        <p>{todolistName} {reponsible}</p>
        <ul>
          {listTodoList.map((TodoList: Ttodolist, index: number) => (
            <li key={index} onClick={() => selectTodoList(index)}>
              {DisplayTodoList(TodoList.todolistName,TodoList.reponsible,index)}
            </li>
          ))}
        </ul>
      </HomeContainer>
    </>
  );
}
