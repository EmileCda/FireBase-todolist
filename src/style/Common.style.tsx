/**this styled component is for some common  used in different screen  */

import { Link } from "react-router-dom";
import styled from "styled-components";
import { AppTheme } from "./App.style";


export const MyLink = styled(Link)`
  text-decoration: none;
  color: ${AppTheme.colors.dark};
`;



export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const IconContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0 ${AppTheme.BorderRadius};
  i{
    color: ${AppTheme.colors.light};
    font-size: 2rem;

  }
`;


export const Title = styled.div`
  font-size: 2.3rem;
  padding: 0 ${AppTheme.BorderRadius};
  font-family: ${AppTheme.font.extra};
  p {
    margin: 0;
  }
`;

// for screen-1 subcribe and screen-2 connection

export const ConnectionContainer = styled.div<{
  emailValide: boolean;
  passValide: boolean;
  isLoading : boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${AppTheme.colors.light};
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: ${AppTheme.BorderRadius};
  img {
    max-width: 80vw;
  }
  h1 {
    font-family: ${AppTheme.font.extra};
    font-size: 3rem;
    color: ${AppTheme.colors.lessDark};
  }
  button {
    background-color: ${AppTheme.colors.medium};
    color: ${AppTheme.colors.light};
    cursor: ${(props) => (props.isLoading ? "progress" : "pointer")};
    padding: ${AppTheme.BorderRadius};
    min-width: 10rem;
    border-radius: ${AppTheme.BorderRadius};
    margin: 0 ${AppTheme.BorderRadius};
  }
  p {
    font-family: ${AppTheme.font.regular};
    font-size: 1rem;
    padding: ${AppTheme.BorderRadius};
    text-align: center;
  }
`;



export const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  i {
    font-size: 2rem;
    color: ${AppTheme.colors.medium};
  }

  input {
    background-color: ${AppTheme.colors.light};
    border: none;
    border-bottom: 1px solid ${AppTheme.colors.dark};
    margin: ${AppTheme.BorderRadius};
    min-height: 2rem;
  }
`;

export const Icon = styled.div<{ isValide: boolean }>`
  i {
    font-size: 2rem;
    color: ${(props) =>
      props.isValide ? AppTheme.colors.dark : AppTheme.colors.notValid};
  }
`;


export const MyButton = styled.button<{isLoading: boolean}>`
  background-color  : ${AppTheme.colors.medium};
  color  : ${AppTheme.colors.light};
  min-width: 10rem;
  padding: ${AppTheme.BorderRadius};
  border-radius: ${AppTheme.BorderRadius};
  margin: 0  ${AppTheme.BorderRadius};
 
  cursor: ${(props) => (props.isLoading ? "progress" : "pointer")};
`;



export const Button = styled.button`
  background-color  : ${AppTheme.colors.medium};
  color  : ${AppTheme.colors.light};
  cursor: wait;
  padding: ${AppTheme.BorderRadius};
  min-width: 10rem;
  border-radius: ${AppTheme.BorderRadius};
  margin: 0  ${AppTheme.BorderRadius};
`;