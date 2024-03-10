import { Link } from "react-router-dom";
import styled from "styled-components";
import { AppTheme } from "./App.style";

export const AboutContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
  background-color: ${AppTheme.colors.dark};
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: ${AppTheme.BorderRadius};
  cursor: pointer;
  img{
    max-width: 80vw;
  }
  h1{
    font-family: ${AppTheme.font.extra};
    font-size: 3rem;
  }
`;
