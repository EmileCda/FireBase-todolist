import { useStore } from "@nanostores/react";
import { Link, Navigate } from "react-router-dom";
import { SubscribeStore } from "../store/Subscription.store";
import { AboutContainer } from "../style/About.style";
import { IconContainer, TexteContainer, Title, TitleContainer } from "../style/NewList.style";


/**
 * this function do ...
 */
export default function About() {

  return (
    <>
    <AboutContainer>
    <TitleContainer>
        <Link to="/">
          <IconContainer>
            <i className="fa-solid fa-chevron-left"></i>
          </IconContainer>
        </Link>
        <TexteContainer>
          <Title>About</Title>
        </TexteContainer>
        </TitleContainer>
      
      <img src="./src/image/Firebase-todolist.png" alt="Logo Application Firebase todolist " />
      </AboutContainer>
    </>
  );
}
