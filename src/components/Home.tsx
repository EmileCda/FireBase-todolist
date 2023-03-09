import { doc, getDoc } from "@firebase/firestore";
import { useStore } from "@nanostores/react";
import { Navigate } from "react-router";
import { firebaseDb } from "../lib/Firebase";
import { SubscribeStore } from "../store/Subscription.store";
import {
  resetIsDownLoad,
  selectTodoList,
  setIsDownLoad,
  setListTodoList,
  setResponsible,
  setUid,
  todoListCollection,
  todolistStore,
  Ttodolist,
} from "../store/TodoList.store";
import { MyLink } from "../style/Common.style";
import {
  HomeContainer,
  IconAdd,
  IconUser,
  LowerList,
  MyP,
  NewListBox,
  TextAdd,
  TextUser,
  Title,
  TodoList,
  UpperList,
} from "../style/Home.style";


// ----------------------------------------------------------

export type DisplayTodoListProp = {
  listName: string;
  responsible: string;
};

/** display one todo defined by a name and a responsible 
*/
// ----------------------------------------------------------
export function DisplayTodoList({
  listName,
  responsible,
}: DisplayTodoListProp) {
  return (
    <>
      <TodoList>
        <UpperList>
          <IconUser>
            <i className="fa-solid fa-user"></i>
          </IconUser>
          <TextUser>
            <MyP>Par</MyP>
            <p>{responsible}</p>
          </TextUser>
        </UpperList>
        <LowerList>{listName}</LowerList>
      </TodoList>
    </>
  );
}

// ----------------------------------------------------------
/** Display a push button for adding a new todoList
 *
 */
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

// ----------------------------------------------------------
/** this function is going to select one todolist among the list of todolist
 *
 * */
export function ChangeToDoList(index: number) {
  selectTodoList(index);
}

// ----------------------------------------------------------
/**
 * this function display all todolist and at the end a pushbutton indor to create new yodolist
 */

export default function Home() {
  const { uid, email } = useStore(SubscribeStore);
  const { listTodoList, isDownLoad } = useStore(todolistStore);

  if (parseInt(uid)<0) {
    // if not connected redirect to login screen
    return <Navigate to="/Login" />;
  }
  setUid(uid); // trick to have UID in todolistStore
  setResponsible(email.substring(0, email.lastIndexOf("@")));

  
  if (!isDownLoad ) {
    setListTodoList(); // load list of todolist from firebase
    
    setIsDownLoad();

  }


    return (
    <>
      <HomeContainer>
        <Title>Mes Todos</Title>
        <ul>
          {listTodoList.map((todoList: Ttodolist, index: number) => (
            <li key={index} onClick={() => ChangeToDoList(index)}>
              <MyLink to="/TodoList">
                <DisplayTodoList
                  listName={todoList.todolistName}
                  responsible={todoList.responsible}
                />
              </MyLink>
            </li>
          ))}
        </ul>
        <NewTodoList />
      </HomeContainer>
    </>
  );
}
