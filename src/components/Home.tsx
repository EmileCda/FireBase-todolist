
import { useStore } from "@nanostores/react";
import { Navigate } from "react-router";
import { setIdCurrentTodolist, todolistStore, Ttodolist } from "../store/TodoList.store";
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
/**
 * this function display all todolist and at the end a pushbutton indor to create new yodolist
 */
export default function Home() {
  const { user, listTodoList } = useStore(todolistStore);

  if (!user.uid) {
    // if not connected redirect to login screen
    return <Navigate to="/Login" />;
  }
  return (
    <>
      <HomeContainer>
        <Title>Mes Todos</Title>
        <ul>
          {listTodoList.map((todoList: Ttodolist, index: number) => (
            <li key={index} onClick={() => setIdCurrentTodolist(index)}>
              <MyLink to="/TodoList">
                <DisplayTodoList
                  listName={todoList.todolistName}
                  responsible={user.name}
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
