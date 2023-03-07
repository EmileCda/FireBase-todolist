import styled from "styled-components";
import { AppTheme } from "./App.style";

export const DisplayListTodo = styled.div`
  display: flex;
  flex-direction: column;

  li{
    text-decoration: none;
  }
`;

// export const MenuContainer = styled.div<{isClicked: boolean}>`
export const Tododiv = styled.div<{isClicked: boolean}>`
border-bottom: 1px solid ${AppTheme.colors.dark};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  min-width: 80vw;
  padding: 0 10px;
  
  background-color: ${(props) =>
    props.isClicked ? AppTheme.colors.medium : AppTheme.colors.checked};
  color: ${(props) =>
    props.isClicked ? AppTheme.colors.light : AppTheme.colors.dark};
    cursor: pointer;
`;

export const Icone = styled.div`
font-size: 2rem;
padding: 0 10px;
color: ${AppTheme.colors.trash};
  
`;

