import { useStore } from "@nanostores/react";
import { Navigate } from "react-router";

import { addTodoList, inputChangeTodoListName, todolistStore } from "../store/TodoList.store";
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
  const { user, isBusy } = useStore(todolistStore);

  if (!user.uid) {
    return <Navigate to="/Login"></Navigate>;
  }

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
            <p>{user.name}</p>
          </TextUser>
        </UpperList>
      </UserContainer>
      <Input
        type="text"
        onChange={(e) => inputChangeTodoListName(e.currentTarget.value)}
        name="todolistName"
        placeholder="Course du dimanche"
      />
      <MyLink to="/TodoList" onClick={addTodoList}><MyButton isLoading={isBusy}> Créer</MyButton></MyLink>
    </>
  );
}
