import { useStore } from "@nanostores/react";
import { Link, Navigate } from "react-router-dom";
import { SubscribeStore } from "../store/Subscription.store";

/**
 * this function do ...
 */
export default function Accueil() {
  const { username, password, userLogged, uid } = useStore(SubscribeStore);

  if (!uid) {
    return <Navigate to="/Login"></Navigate>;
  }
  return (
    <>
      <h1>Accueil</h1>
      <p>userLogged : {userLogged}</p>
      <p>UID : {uid}</p>
    </>
  );
}
