import styled from "styled-components";
import { AppTheme } from "./App.style";

export const TodoListContainer = styled.div<{ isLoading: boolean }>`
  ${(props) => (props.isLoading ? "cursor: wait;" : null)}
`;

export const DisplayListTodo = styled.div`
  display: flex;
  flex-direction: column;
  ul {
    list-style: none;
    list-style-position: inside;
    border: none;
    padding: 0;
  }
  li {
    text-decoration: none;
  }
`;

// export const MenuContainer = styled.div<{isClicked: boolean}>`
export const Tododiv = styled.div<{ isClicked: boolean }>`
  border-bottom: 1px solid ${AppTheme.colors.dark};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  min-width: 100vw;

  /* padding: 0 10px; */

  background-color: ${(props) =>
    props.isClicked ? AppTheme.colors.medium : AppTheme.colors.checked};
  color: ${(props) =>
    props.isClicked ? AppTheme.colors.light : AppTheme.colors.dark};
  cursor: pointer;
  div {
  }
`;

export const TodoName = styled.div`
  font-size: 2rem;
  padding: 0 ${AppTheme.BorderRadius};
`;
export const Icone = styled.div`
  font-size: 2rem;
  padding: 0 ${AppTheme.BorderRadius};
  color: ${AppTheme.colors.light};
  background-color: ${AppTheme.colors.trash};
`;

export const DeleteList = styled.div<{ isLoading: boolean }>`
  position: absolute;
  left: 0;
  bottom: 60px;
  min-width: 100vw;
  text-align: center;
  cursor: ${(props) => (props.isLoading ? "progress" : "pointer")};
`;

export const IconButton = styled.div<{ isLoading: boolean }>`
  cursor: ${(props) => (props.isLoading ? "progress" : "pointer")};
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  i {
    font-size: 2rem;
    color: ${AppTheme.colors.dark};
  }
`;
