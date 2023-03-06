import { Link } from "react-router-dom";
import styled from "styled-components";
import { AppTheme } from "./App.style";

export const TodoList = styled.div`
  background-color: ${AppTheme.colors.dark};
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  margin: ${AppTheme.BorderRadius};
  cursor: pointer;
`;
export const UpperList = styled.div`
  /* background-color: ${AppTheme.colors.lessDark}; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-grow: 1;
  p {
    padding: 0px;
    margin: 0px;
  }
`;
export const IconUser = styled.div`
  background-color: ${AppTheme.colors.lessLight};
  text-align: center;
  vertical-align: middle;
  padding: ${AppTheme.BorderRadius};
  border-radius: 0px 0px 0px ${AppTheme.BorderRadius};
  font-size: 2rem;
  cursor: pointer;
`;
export const TextUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${AppTheme.colors.lessLight};
  border-radius: 0px 0px ${AppTheme.BorderRadius} 0px;
  font-family: ${AppTheme.font.regular};
  font-size: 0.7rem;
  padding: ${AppTheme.BorderRadius};
`;
export const LowerList = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  padding: 0 ${AppTheme.BorderRadius} 0 0;
  font-family: ${AppTheme.font.regular};
  font-size: 1rem;
  font-weight: bold;
  color: ${AppTheme.colors.lessLight};
`;

export const HomeContainer = styled.div`
  background-color: ${AppTheme.colors.light};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 100vw;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
`;

export const Title = styled.div`
  background-color: ${AppTheme.colors.light};
  display: flex;
  min-width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${AppTheme.colors.lessDark};
  font-family: ${AppTheme.font.extra};
  font-size: 2.5rem;
`;

/**Box for adding new list
 *
 */

export const NewListBox = styled.div`
  background-color: ${AppTheme.colors.medium};
  border-radius: ${AppTheme.BorderRadius};
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: ${AppTheme.BorderRadius};
  cursor: pointer;
  a{
    text-decoration: none;
  }
`;

export const IconAdd = styled.div`
  padding: ${AppTheme.BorderRadius};
  font-size: 1.5rem;
`;
export const TextAdd = styled.div`
    font-size: 1rem;
    font-family: ${AppTheme.font.regular};
    color: ${AppTheme.colors.lessLight};
a{
    text-decoration: none;
}    
`;

export const MyLink = styled(Link)`
  text-decoration: none;

`