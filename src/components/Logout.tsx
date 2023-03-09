import { useStore } from "@nanostores/react";
import { Link, Navigate } from "react-router-dom";
import { resetUid, SubscribeStore } from "../store/Subscription.store";
import { AboutContainer } from "../style/About.style";
import { IconContainer, TexteContainer, Title, TitleContainer } from "../style/NewList.style";


/**
 * this function do ...
 */
export default function Logout() {
  resetUid()
  return (
    <>
     <Navigate to="/Login" />;
    </>
  );
}
