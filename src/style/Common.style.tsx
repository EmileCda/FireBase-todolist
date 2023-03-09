/**this styled component is for some common  used in different screen  */

import { Link } from "react-router-dom";
import styled from "styled-components";
import { AppTheme } from "./App.style";


export const MyLink = styled(Link)`
  text-decoration: none;
  color: ${AppTheme.colors.dark};
`;



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
