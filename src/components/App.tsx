import { useStore } from "@nanostores/react";
import { StrictMode } from "react";
import { BrowserRouter,  Navigate,  Route,  Routes } from "react-router-dom";
import { MenuStore } from "../store/Menu.store";
import { AppGlobalStyle} from "../style/App.style";
import About from "./About";
import Home from "./Home";
import Login from "./Login";
import Menu from "./Menu";
import NewList from "./NewList";
import OutputTest from "./OutputTest";
import Subscription from "./Subscription";
import TodoList from "./TodoList";

/**
 * main component for the application
 * @returns
 *
 */
export default function App() {

  return (
<StrictMode>
      <BrowserRouter>
        <AppGlobalStyle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Subscription" element={<Subscription />} />
            <Route path="/NewList" element={<NewList />} />
            <Route path="/TodoList" element={<TodoList />} />
            <Route path="/OutputTest" element={<OutputTest />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/About" element={<About />} />
          </Routes>
          <Menu />

      </BrowserRouter>
    </StrictMode>  );
}
