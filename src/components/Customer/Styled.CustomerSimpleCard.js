import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.article`
  padding-bottom: 200px;
`;
export const SimpieCardWrap = styled.ul``;
export const SimpieCard = styled.li`
  position: relative;
  display: inline-block;
  width: calc((100% - 50px) / 3);
  height: 250px;
  vertical-align: middle;

  &:not(:last-child) {
    margin-right: 24px;
  }
`;
export const CardLink = styled(Link)`
  display: block;
  background-color: ${({ className }) =>
    className === "kakao" ? "#ffe600" : "#fff"};
  width: 100%;
  height: 100%;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  box-shadow: 5px 6px 12px 1px rgba(25, 48, 88, 0.1);
  padding: 35px 30px;
  ${({ className }) =>
    className === "kakao" &&
    css`
      & > svg {
        position: absolute;
        font-size: 56px;
        right: 34px;
        bottom: 53px;
      }
    `}
`;
export const CardTxtH1 = styled.h1`
  font-family: "Noto Sans KR";
  font-weight: 700;
  font-size: 26px;
  color: #111;
  letter-spacing: -0.5px;
  margin-bottom: 20px;
  & > span {
    display: flex;
    align-items: center;
  }
  & > span:last-child {
    font-size: 36px;
    position: relative;
    & > svg {
      font-size: 30px;
      margin-top: 8px;
      margin-left: 12px;
    }
  }
`;
export const CardTxtp = styled.p`
  & > span {
    display: block;
  }
`;
