import { useStore } from "@nanostores/react";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { SubscribeStore } from "../store/Subscription.store";
import {
  addListTodolist,
  checkTodoListName,
  selectTodoList,
  todolistStore,
} from "../store/TodoList.store";

import {
  IconContainer,
  TexteContainer,
  TitleContainer,
  Title,
  UpperList,
  IconUser,
  TextUser,
  UserContainer,
  Button,
  Input,
} from "../style/NewList.style";


export async function NewTodoList() {
  const result = await addListTodolist();
  // new todolist is inserted at the beginning of the list

  selectTodoList(0);

  console.log("result");
  return <Navigate to="/TodoList"></Navigate>;
}
/**
 * this function do ...
 */
export default function NewList() {
  const { uid } = useStore(SubscribeStore);
  const { reponsible } = useStore(todolistStore);

  if (!uid) {
    return <Navigate to="/Login"></Navigate>;
  }
  return (
    <>
      <TitleContainer>
        <Link to="/">
        <IconContainer>
          <i className="fa-solid fa-chevron-left"></i>
        </IconContainer>
        </Link>
        <TexteContainer>
          <Title>Nouvelle liste</Title>
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
        onChange={(e) => checkTodoListName(e.currentTarget.value)}
        name="todolistName"
        placeholder="Course du dimanche"
      />
      <Button onClick={NewTodoList}>Créer</Button>
    </>
  );
}
