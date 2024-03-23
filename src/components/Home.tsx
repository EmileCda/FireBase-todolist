import { useStore } from "@nanostores/react";
import { useEffect } from "react";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { RenderErrorBoundary } from "react-router/dist/lib/hooks";
import { toggleUser } from "../store/Menu.store";
import { SubscribeStore } from "../store/Subscription.store";
import {
  selectTodoList,
  todolistStore,
  Ttodolist,
} from "../store/TodoList.store";
import {
  HomeContainer,
  IconAdd,
  IconUser,
  LowerList,
  MyLink,
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

export function DisplayTodoList(
  listName: string,
  responsible: string,
  id: number
) {
  const { listTodoList } = useStore(todolistStore);
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
            <p>Par</p>
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
export function InitData() {
  //  for testing
  selectTodoList(0);
}

/** this function is going to load data from firebase to local store */
export function ChangeToDoList(
  event: React.MouseEvent<HTMLLIElement, MouseEvent>,
  index: number
) {
  selectTodoList(index);
  // event.stopPropagation();
  // return <Navigate to="/"></Navigate>;
}

/**
 * this function do ...
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
  return (
    <>
      <HomeContainer>
        <Title>Mes Todos</Title>
        <ul>
          {listTodoList.map((TodoList: Ttodolist, index: number) => (
            <li key={index} onClick={(event) => ChangeToDoList(event, index)}>
              <Link to="/TodoList">
                {DisplayTodoList(
                  TodoList.todolistName,
                  TodoList.reponsible,
                  index
                )}
              </Link>
            </li>
          ))}
        </ul>

        {NewTodoList()}
      </HomeContainer>
    </>
  );
}
