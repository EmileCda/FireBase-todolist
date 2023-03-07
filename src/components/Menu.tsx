import { Link } from "react-router-dom";
import { MenuContainer,  MenuItem } from "../style/Menu.style";

/**
 * this function do ...
 */
export default function Menu() {
  return (
    <>
      {/* 4. le visuel---------------------------------- */}
      <h1> Menu</h1>
      <MenuContainer>
        <MenuItem>
          <Link to="/" >
            Accueil
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/Subscription" >
          Subscription
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/outputTest" >
          OutputTest
          </Link>
        </MenuItem>
      </MenuContainer>
    </>
  );
}
