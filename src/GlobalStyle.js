import styled, { createGlobalStyle } from "styled-components";
import fonts from "./font";
// todo
// 1. GlobalStyle
// 2. container
const GlobalStyle = createGlobalStyle`
    ${fonts}
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Noto Sans KR', sans-serif;
        list-style: none;
        text-decoration: none;
        color: #000;
    }
`;

export const Container = styled.section`
  max-width: 1920px;
  min-width: 280px;
  margin: 0 auto;
  position: relative;
`;
export default GlobalStyle;
