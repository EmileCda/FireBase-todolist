import { doc, getDoc } from "@firebase/firestore";
import { useStore } from "@nanostores/react";
import { Navigate } from "react-router";
import { firebaseDb } from "../lib/Firebase";
import { SubscribeStore } from "../store/Subscription.store";
import {
  selectTodoList,
  setListTodoList,
  setUid,
  todoListCollection,
  todolistStore,
  Ttodolist,
} from "../store/TodoList.store";
import {
  HomeContainer,
  IconAdd,
  IconUser,
  LowerList,
  MyLink,
  MyP,
  NewListBox,
  TextAdd,
  TextUser,
  Title,
  TodoList,
  UpperList,
} from "../style/Home.style";

export function testTiti(id: number) {
  console.log(id);
}

export type DisplayTodoListProp={
  listName: string,
  responsible: string,
  id: number


}

export function DisplayTodoList({listName,responsible,id}:DisplayTodoListProp)
 {
  return (
    <>
      <TodoList onClick={() => testTiti(id)}>
        {/* <TodoList onClick={() => selectTodoList(id)}> */}
        {/* <UpperList onClick={(e) => toggleUser(e)}> */}
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

/** this function is going to load data from firebase to local store */
export async function InitData() {
  const { uid } = useStore(SubscribeStore);

  const myDoc = doc(firebaseDb,todoListCollection, uid);
  const myDocSnapshot = await getDoc(myDoc)

  if (myDocSnapshot.exists()) {
    const myData = myDocSnapshot.data();
    setListTodoList(myDocSnapshot.data().newListTodoList,uid)
  } 
}

/** this function is going to load data from firebase to local store */
export function ChangeToDoList(
  event: React.MouseEvent<HTMLLIElement, MouseEvent>,
  index: number
) {
  selectTodoList(index);
}

/**
 * this function display all todolist and at the end a pushbutton indor to create new yodolist
 */
export default function Home() {
  const { uid } = useStore(SubscribeStore);
  const { listTodoList, idTodoList } =
    useStore(todolistStore);

  if (idTodoList < 0) {
    InitData();
  }

  if (!uid) {
    return <Navigate to="/Login" />;
  }
  setUid(uid);
  return (
    <>
      <HomeContainer>
        <Title>Mes Todos</Title>
        <ul>
          {listTodoList.map((TodoList: Ttodolist, index: number) => (
            <li key={index} onClick={(event) => ChangeToDoList(event, index)}>
              <MyLink to="/TodoList">
                <DisplayTodoList 
                  listName={TodoList.todolistName}
                  responsible={TodoList.reponsible}
                  id={index}
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
