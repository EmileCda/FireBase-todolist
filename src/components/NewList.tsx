import { useStore } from "@nanostores/react";
import { Navigate } from "react-router";

import { SubscribeStore } from "../store/Subscription.store";
import { addListTodolist, checkTodoListName,  setUid,  todolistStore,  } from "../store/TodoList.store";
import {  MyButton, MyLink } from "../style/Common.style";

import {
  IconContainer,
  TexteContainer,
  TitleContainer,
  Title,
  UpperList,
  IconUser,
  TextUser,
  UserContainer,
  Input,
} from "../style/NewList.style";


/**
 * this function do ...
 */
export default function NewList() {
  const { uid } = useStore(SubscribeStore);
  const { responsible, isLoading } = useStore(todolistStore);

  if (!uid) {
    return <Navigate to="/Login"></Navigate>;
  }
  setUid(uid);

  return (
    <>
      <TitleContainer>
          <IconContainer>
          <MyLink to="/">
            <i className="fa-solid fa-chevron-left"></i>
            </MyLink>
          </IconContainer>
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
            <p>{responsible}</p>
          </TextUser>
        </UpperList>
      </UserContainer>
      <Input
        type="text"
        onChange={(e) => checkTodoListName(e.currentTarget.value)}
        name="todolistName"
        placeholder="Course du dimanche"
      />
      <MyLink to="/TodoList" onClick={addListTodolist}><MyButton isLoading={isLoading}> Créer</MyButton></MyLink>
    </>
  );
}
