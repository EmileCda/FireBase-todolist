import { useStore } from "@nanostores/react";
import { Navigate } from "react-router";
import { SubscribeStore } from "../store/Subscription.store";
import { AddListTodolist, CheckTodoListName } from "../store/TodoList.store";


import {
  IconContainer,
  TexteContainer,
  TitleContainer,
  Title,
} from "../style/NewList.style";
import { Button } from "../style/Subscription.style";

export async function NewTodoList() {
  const result = await AddListTodolist();
  console.log("result");
  // return <Navigate to="/Login"></Navigate>;
  return <h1>pourquoi navigate ne marche pas ?</h1>
}
/**
 * this function do ...
 */
export default function NewList() {
  const { uid } = useStore(SubscribeStore);

  if (!uid) {
    return <Navigate to="/Login"></Navigate>;
  }
  return (
    <>
      <TitleContainer>
        <IconContainer>
          <i className="fa-solid fa-chevron-left"></i>
        </IconContainer>
        <TexteContainer>
          <Title>Nouvelle liste</Title>
        </TexteContainer>
      </TitleContainer>
      <p></p>
      <input
        type="text"
        onChange={(e) => CheckTodoListName(e.currentTarget.value)}
        name="todolistName"
      />
      <Button onClick={NewTodoList}>Créer</Button>
    </>
  );
}
