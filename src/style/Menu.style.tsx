import styled from 'styled-components'
import { AppTheme } from './App.style'


/** container for burger menu icone */
export const MenuBuger = styled.div`

background-color: ${AppTheme.colors.dark};
position: fixed;
bottom: 0;
left: 0;

`

/**
 * Container for the open menu
 */
export const MenuContainer = styled.div`
  background-color: ${AppTheme.colors.dark};

  display: flex;
  /* flex-direction: column; */
  align-items: stretch;
  position: fixed;
  bottom: 50px;
  left: 0;
  margin : -100px
`

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
  }
  p {
    color: ${AppTheme.colors.light};
    font-size: 2rem;
    margin: 0;
    font-weight: bold;
  }
`

/**
 * Item for a menu element
 */
export const MenuItem = styled.p`
  font-size: .8rem;
  color: ${AppTheme.colors.light};
  padding: 1rem;
  margin: 0;
  a {
    text-decoration: none;
    outline: none;
    border: none;
    color: ${AppTheme.colors.light};
  }
`

