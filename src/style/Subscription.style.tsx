import styled from "styled-components";
import { AppTheme } from './App.style'
export const Toto = styled.div`
`;


// export const Button = styled.div<{isSending : boolean}>`
export const Button = styled.button`
  background-color  : ${AppTheme.colors.light};
  cursor: wait;
`;


  /* ${ props=>props.isSending ? "cursor: wait;" : "cursor: pointer"}; */
