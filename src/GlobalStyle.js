import styled, { createGlobalStyle, css } from "styled-components";
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
  padding-top: 120px;
`;
export const ContentsBg = styled.div`
  ${({ bgColor }) =>
    bgColor &&
    css`
      background-color: ${bgColor};
    `}
`;
export const ContentsInner = styled.div`
  position: relative;
  margin: 0 auto;
  ${(props) =>
    props &&
    css`
      max-width: ${props.max};
      min-width: ${props.min};
      padding: ${props.pd};
    `}
`;

export default GlobalStyle;
