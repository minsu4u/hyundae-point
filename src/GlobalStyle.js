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
  ${({ ...props }) =>
    props.bgColor &&
    css`
      height: ${props.hg}px;
      background-color: ${props.bgColor};
    `}
`;
export const ContentsInner = styled.div`
  position: relative;
  margin: 0 auto;
  ${(props) =>
    props &&
    css`
      max-width: ${props.max}px;
      min-width: ${props.min}px;
      padding: ${props.pd};
    `}
`;

export default GlobalStyle;
