import { useStore } from "@nanostores/react";
import { Link } from "react-router-dom";
import { MenuStore, toggleMenu, toggleUser } from "../store/Menu.store";
import { SubscribeStore } from "../store/Subscription.store";
import { BottomBar, MenuBurger, MenuContainer, MenuItem, MenuUser, UserInformation } from "../style/Menu.style";


/**
 * this function display mene bar
 */
export default function Menu() {
  const {isClickedMenu, isClickedUser} = useStore(MenuStore);
  const {userLogged, uid} = useStore(SubscribeStore);
  return (
    <>
      <BottomBar>
        <MenuBurger onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </MenuBurger>
        <MenuUser onClick={toggleUser}  isVisible={userLogged ? true: false}>
          <i className="fa-solid fa-user"></i>
        </MenuUser>
      </BottomBar>
      <UserInformation isClicked={isClickedUser}>

      <p>user name : {userLogged} </p>
      <p>UID :{uid} </p>
      </UserInformation>
      <MenuContainer isClicked={isClickedMenu}>
        <MenuItem>
          <Link to="/" onClick={toggleMenu}>Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/Login" onClick={toggleMenu}>Login</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/Subscription" onClick={toggleMenu}>Subscription</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/NewList" onClick={toggleMenu}>New Todolist</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/outputTest" onClick={toggleMenu}>OutputTest</Link>
        </MenuItem>
      </MenuContainer>
    </>
  );
}
