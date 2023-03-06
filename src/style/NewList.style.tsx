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
`;
