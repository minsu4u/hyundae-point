import styled, { css } from "styled-components";

export const Nav = styled.div`
  padding-bottom: 150px;
`;
export const NavContainer = styled.ul`
  text-align: center;
`;
export const NavBtn = styled.li`
  display: inline-block;
  & > button {
    display: block;
    width: 42px;
    height: 42px;
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 16px;
    color: #999;
    line-height: 42px;
    text-align: center;
    background-color: unset;
    border: 0;
    &[aria-current] {
      font-weight: 700;
      color: #111;
    }
  }
`;
