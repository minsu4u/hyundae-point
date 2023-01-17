import styled, { css } from "styled-components";

export const Container = styled.article`
  padding: 80px 0 60px;
`;
export const CategoryWrap = styled.ul`
  display: flex;
  justify-content: center;
`;
export const Category = styled.li`
  cursor: pointer;
  display: inline-block;
  & > span {
    width: auto;
    height: 100%;
    font-family: "Noto Sans KR";
    font-weight: 700;
    font-size: 18px;
    color: #999;
    padding-bottom: 5px;
    position: relative;
    border-bottom: 2px solid transparent;
  }

  &:not(:last-child)::after {
    content: "";
    display: inline-block;
    width: 4px;
    height: 4px;
    background-color: #ccc;
    border-radius: 50%;
    margin: 0 40px;
    vertical-align: middle;
  }
  & > span {
    &:hover {
      color: #5f4ad8;
      border-bottom: 2px solid #5f4ad8;
    }
  }
  ${({ holding }) =>
    holding === "true" &&
    css`
      & > span {
        color: #5f4ad8;
        border-bottom: 2px solid #5f4ad8;
      }
    `}
`;
