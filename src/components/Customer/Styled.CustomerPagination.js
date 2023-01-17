import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 120px;
  & > button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 16px;
    color: #999;
    line-height: 42px;
    text-align: center;
    border-radius: 50%;
    border: 0;
    & > svg {
      fill: #111;
      font-size: 34px;
    }
  }
`;
export const PrevBtn = styled.button``;
export const PaginationWrap = styled.ul`
  text-align: center;
  margin: 0 42px;
`;
export const PageNum = styled.li`
  display: inline-block;
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
`;
export const NextBtn = styled.button``;
