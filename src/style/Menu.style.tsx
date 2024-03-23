import styled from "styled-components";
import { AppTheme } from "./App.style";

export const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${AppTheme.colors.dark};

  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0;
  padding: 10px;
`;

/** container for burger menu icone */
export const MenuBurger = styled.div`
  i {
    font-size: 2rem;
    color: ${AppTheme.colors.light};
  }
  cursor: pointer;
`;

export const MenuUser = styled.div<{ isVisible: boolean }>`
  ${(props) => (props.isVisible ? "display : block" : "display : none")};
  ${(props) => (props.isVisible ? "cursor: pointer;" : "cursor: none")};

  i {
    font-size: 2rem;
    color: ${AppTheme.colors.light};
  }
`;

/**
 * Container for the open menu
 */
export const MenuContainer = styled.div<{ isClicked: boolean }>`
  background-color: ${AppTheme.colors.dark};
  color: ${AppTheme.colors.light};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  position: absolute;
  min-width: 100vw;
  min-height: 100vh;
  top: 0;
  left: 0;
  transition: all 0.5s ease-out;
  border-radius: 0px 10px 0px 0px;
  margin-left: ${(props) => (props.isClicked ? "0%" : "-200%")};
  ul {
    list-style: none;
    padding: ${AppTheme.BorderRadius};
  }
  li {
    padding: ${AppTheme.BorderRadius};
  }
`;

/**
 * Container for the open menu
 */
export const ProfileContainer = styled.div<{ isClicked: boolean }>`
  background-color: ${AppTheme.colors.dark};
  color: ${AppTheme.colors.light};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  position: absolute;
  min-width: 100vw;
  min-height: 100vh;
  top: 0;
  left: 0;
  transition: all 0.5s ease-out;
  border-radius: 0px 10px 0px 0px;
  margin-left: ${(props) => (props.isClicked ? "0%" : "-200%")};
  ul {
    list-style: none;
    padding: ${AppTheme.BorderRadius};
  }
  li {
    padding: ${AppTheme.BorderRadius};
  }
`;


/**
 * Header for the menu
 */
export const MenuHeader = styled.div`
  display: flex;
  padding: 1rem;
  color: ${AppTheme.colors.light};
  align-items: center;
  i {
    font-size: 1.4rem;
    display: flex;
    margin-right: 1rem;
    color: ${AppTheme.colors.light};
    font-size: 2rem;

  }
  p {
    color: ${AppTheme.colors.light};
    font-size: 2rem;
    margin: 0;
    font-weight: bold;
  }
`;

/**
 * Item for a menu element
 */
export const MenuItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 2rem;
  padding: ${AppTheme.BorderRadius};
  color: ${AppTheme.colors.light};
  a {
    text-decoration: none;
    outline: none;
    border: none;
    color: ${AppTheme.colors.light};
  }
  :hover {
    color: ${AppTheme.colors.lessLight};
    background-color: ${AppTheme.colors.medium};
  }
`;

export const UserInformation = styled.div<{ isClicked: boolean }>`
  background-color: ${AppTheme.colors.dark};
  position: absolute;
  min-width: 100vw;
  min-height: 100vh;
  top: 0;
  left: 0;
  color: ${AppTheme.colors.light};
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  padding: 1rem;
  transition: all 0.5s ease-out;
  margin-left: ${(props) => (props.isClicked ? "0%" : "-200%")};
  opacity: 0.6;
`;

export const MenuItemDesc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleMenu = styled.div``;

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


/**
 * Item for a menu element
 */
export const ProfileItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.5rem;
  padding: ${AppTheme.BorderRadius};
  color: ${AppTheme.colors.light};
  a {
    text-decoration: none;
    outline: none;
    border: none;
    color: ${AppTheme.colors.light};
  }
  :hover {
    color: ${AppTheme.colors.lessLight};
    background-color: ${AppTheme.colors.medium};
  }
`;