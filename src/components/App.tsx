import { StrictMode } from "react";
import { BrowserRouter,  Route,  Routes } from "react-router-dom";
import { AppGlobalStyle} from "../style/App.style";
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
  // STATE : useState


  // ACTIONS

  //     setTimming (timming.push(performance))

  //   // EFFET : useEffect : counter
    // case isStarted === true


  return (
<StrictMode>
      <BrowserRouter>
        <AppGlobalStyle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Subscription" element={<Subscription />} />
            <Route path="/NewList" element={<NewList />} />
            <Route path="/TodoList" element={<TodoList />} />
            <Route path="/outputTest" element={<OutputTest />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
          <Menu />
      </BrowserRouter>
    </StrictMode>  );
}
