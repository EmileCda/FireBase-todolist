import { useStore } from "@nanostores/react";
import {  Navigate } from "react-router-dom";
import { AddListTodo, checkListName } from "../store/NewList.store";
import { SubscribeStore } from "../store/Subscription.store";

import { IconContainer, TexteContainer, TitleContainer ,Title} from "../style/NewList.style";
import { Button } from "../style/Subscription.style";

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

      <input
        type="text"
        onChange={(e) => checkListName(e.currentTarget.value)}
        name="password"
      />
      <Button onClick={AddListTodo}>Créer</Button>
    </>
  );
}
