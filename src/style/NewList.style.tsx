import styled from "styled-components";
import { AppTheme } from "./App.style";

export const TitleContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  min-width: 100vx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${AppTheme.colors.dark};
`;

export const IconContainer = styled.div`
  color: ${AppTheme.colors.light};
  font-size: 2rem;
  display: flex;
  flex-grow: 1;
  padding: ${AppTheme.BorderRadius};
`;
export const TexteContainer = styled.div`
  display: flex;
  flex-grow: 2;

`;
export const Title = styled.div`
  font-family: ${AppTheme.font.extra};
  font-size: 2rem;
  color: ${AppTheme.colors.light};
  text-align: center;
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
export const UserContainer = styled.div`
  background-color: ${AppTheme.colors.light};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 100vw;
  position: absolute;
  top: 60px;
  left: 0px;
  right: 0px;
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
export const Input = styled.input`
background-color  : ${AppTheme.colors.light};
padding: ${AppTheme.BorderRadius};
margin: ${AppTheme.BorderRadius};
border: none;
border-bottom: solid 0.1rem  ${AppTheme.colors.medium};
;
`;
