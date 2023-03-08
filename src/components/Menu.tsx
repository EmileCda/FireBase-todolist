import { useStore } from "@nanostores/react";
import { Link } from "react-router-dom";
import { MenuStore, toggleMenu, toggleUser } from "../store/Menu.store";
import { SubscribeStore } from "../store/Subscription.store";
import {
  BottomBar,
  IconContainer,
  MenuBurger,
  MenuContainer,
  MenuItem,
  MenuItemDesc,
  MenuUser,
  ProfileContainer,
  ProfileItem,
  Title,
  TitleContainer,
  TitleMenu,
  UserInformation,
} from "../style/Menu.style";

export type TmenuItem = {
  name: string;
  icon: string;
  url: string;
};

const menuNav: TmenuItem[] = [
  { name: "Les TODOS", icon: "fa-solid fa-house", url: "/" },
  {
    name: "Nouvelle Liste",
    icon: "fa-solid fa-circle-plus",
    url: "/NewList",
  },
];

/**
 * this function is for displayin the user profile and push button for changing password
 *
 *
 */

export function DisplayProfile() {
  const {  isClickedUser } = useStore(MenuStore);
  const { userLogged, uid,email ,name} = useStore(SubscribeStore);
  console.log(userLogged)
  return (
    <>
    <ProfileContainer isClicked={isClickedUser}>
    <TitleContainer>
          <IconContainer>
            <Link to="#" onClick={toggleUser}>
              <i className="fa-solid fa-circle-xmark"></i>
            </Link>
          </IconContainer>
          <Title>
            <p>Mon Profil</p>
          </Title>
        </TitleContainer>
        <ProfileItem>
<p>Votre email : </p>
<p>{email}</p>
        </ProfileItem>
        <ProfileItem>
<p>Votre Nom : </p>
<p>{name}</p>
        </ProfileItem>
        <ProfileItem>
<p>Changer le mot de passe: </p>
<p>{name}</p>
        </ProfileItem>
    </ProfileContainer>
    </>
  );
}

/**
 * this function create one item for the menuNav
 * @param icone : the icon from Fontawsome
 * @param title : label to be display
 * @param url  : url for redirection
 * @returns a component item for menuNax
 */

export type AddNewMenuItemProp={
  icon : string, 
  title: string, 
  url : string,
}


export function AddNewMenuItem({icon,title,url}: AddNewMenuItemProp) {
  return (
    <>
      <MenuItem>
        <Link to={url} onClick={toggleMenu}>
          <MenuItemDesc>
            <IconContainer>
              <i className={icon}></i>
            </IconContainer>
            <TitleMenu>{title}</TitleMenu>
          </MenuItemDesc>
        </Link>
      </MenuItem>
    </>
  );
}

/**
 * this function display mene bar
 */
export default function Menu() {
  const { isClickedMenu, isClickedUser } = useStore(MenuStore);
  const { userLogged, uid } = useStore(SubscribeStore);
  return (
    <>
      <BottomBar>
        <MenuBurger onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </MenuBurger>
        <MenuUser onClick={toggleUser} isVisible={uid ? true : false}>
          <i className="fa-solid fa-user"></i>
        </MenuUser>
      </BottomBar>
    <DisplayProfile />
      <MenuContainer isClicked={isClickedMenu}>
        <TitleContainer>
          <IconContainer>
            <Link to="#" onClick={toggleMenu}>
              <i className="fa-solid fa-circle-xmark"></i>
            </Link>
          </IconContainer>
          <Title>
            <p>Menu</p>
          </Title>
        </TitleContainer>
        <ul>
          {menuNav.map((item: TmenuItem, index: number) => (
            <li key={index}>
              <AddNewMenuItem icon={item.icon} title={item.name} url={item.url} /> 
            </li>
          ))}
        </ul>
      </MenuContainer>
    </>
  );
}
