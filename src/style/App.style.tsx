/**
 *
 * * main style and common  style for the application
 */
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
/**
 * color theme from coolor.co
 * for the whole application
 */
export const AppTheme = {
  colors: {
    dark: "#075252",
    lessDark: "#4F4F4F",
    medium: "#557859",
    lessLight: "#F0F0F0AB",
    light: "#EDFFFB",
  },
  font: {
    regular: "Poppins, cursive",
    extra: "Lobster, cursive",
    Logo: "Lobster, cursive",
  },
  BorderRadius: "0.6rem",
};


export const App = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;
  align-items: center;
  margin : 1rem;
  padding: 1rem;
`;

/**
 * Contient le style globale de l'application
 */
export const AppGlobalStyle = createGlobalStyle`
  :root {
    background-color:${AppTheme.colors.light}
  }
  html, body, #root {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 100vw;
    min-height: 100vh;
    font-size: 18px;
  }
  * {
    box-sizing: border-box;
  }
  .hide{
    display: none;
  }
`;



