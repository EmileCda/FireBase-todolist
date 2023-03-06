import styled from 'styled-components'
import { AppTheme } from './App.style'



export const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${AppTheme.colors.dark};

  position: fixed;
bottom: 0px;
left: 0px;
right : 0 ;
padding: 10px;

`

/** container for burger menu icone */
export const MenuBurger = styled.div`
i{
  font-size: 2rem;
  color:  ${AppTheme.colors.light};

}
cursor: pointer;
`

export const MenuUser = styled.div<{isVisible : boolean}>`

${ props=>props.isVisible ? "display : block" : "display : none"};
${ props=>props.isVisible ? "cursor: pointer;" : "cursor: none"};

i{
  font-size: 2rem;
  color:  ${AppTheme.colors.light};

}

`


/**
 * Container for the open menu
 */
export const MenuContainer = styled.div<{isClicked: boolean}>`
  background-color: ${AppTheme.colors.dark};
 color: ${AppTheme.colors.light};

  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: fixed;
  bottom: 50px;
  left: 0;
  transition: all 0.5s ease-out;
  border-radius: 0px 10px 0px 0px;
  margin-left : ${props=>props.isClicked ? "0%" : "-200%"};
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
`;


export const UserInformation = styled.div<{isClicked: boolean}>`
  background-color: ${AppTheme.colors.dark};
  color: ${AppTheme.colors.light};
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  position: fixed;
  bottom: 50px;
  left: 0;
  padding : 1rem;
  transition: all 0.5s ease-out;
  margin-left : ${props=>props.isClicked ? "0%" : "-200%"};
`;
