import { useStore } from "@nanostores/react";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { SubscribeStore } from "../store/Subscription.store";
import { addListTodolist, checkTodoListName, resetRouteChange, todolistStore,  } from "../store/TodoList.store";

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


/**
 * this function do ...
 */
export default function NewList() {
  const { uid } = useStore(SubscribeStore);
  const { reponsible,routeChange } = useStore(todolistStore);

  if (!uid) {
    return <Navigate to="/Login"></Navigate>;
  }
  if (routeChange) {
    return <Navigate to="/TodoList"></Navigate>;
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
      {/* <Button onClick={NewTodoList}>Créer</Button> */}
      <Button onClick={addListTodolist}>Créer</Button>
    </>
  );
}
