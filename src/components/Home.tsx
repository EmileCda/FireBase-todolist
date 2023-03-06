import { useStore } from "@nanostores/react";
import { Link, Navigate } from "react-router-dom";
import { toggleUser } from "../store/Menu.store";
import { SubscribeStore } from "../store/Subscription.store";
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

export function TodoListClicked(id: string) {
  console.log(`TodoListClicked ${id}`);
}

export function DisplayTodoList(listName: string, id: string) {
  return (
    <>
      <TodoList onClick={() => TodoListClicked(id)}>
        <UpperList onClick={toggleUser}>
          <IconUser>
            <i className="fa-solid fa-user"></i>
          </IconUser>
          <TextUser>
            <p>Par</p>
            <p>userLogged</p>
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
  const { username, password, userLogged, uid } = useStore(SubscribeStore);

  if (!uid) {
    return <Navigate to="/Login"></Navigate>;
  }
  return (
    <>
      <HomeContainer>
        <Title>Mes Todos</Title>
        {DisplayTodoList("Petite course", "1")}
        {DisplayTodoList("menage", "2")}
        {DisplayTodoList("FTT", "3")}
        {NewTodoList()}
      </HomeContainer>
    </>
  );
}
