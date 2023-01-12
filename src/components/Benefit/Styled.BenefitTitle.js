import { Link } from "react-router-dom";
import styled from "styled-components";

// todo
// 1. 이벤트 타이틀
// 구조 Container>h1>h2>Tab>TabBtn>TabBtnLink
// 크기 > 위치 > 텍스트 > 이미지 > 효과

export const Container = styled.article`
  background: #4e2bf4;
  padding: 70px 0 50px;
  text-align: center;
`;
export const H1Txt = styled.h1`
  font-family: "SCDream";
  font-weight: 600;
  font-size: 50px;
  color: #fff;
  line-height: 0.9;
`;
export const H2Txt = styled.h2`
  font-family: "Noto Sans KR";
  font-weight: 400;
  font-size: 20px;
  color: #fff;
  line-height: 1.5;
  letter-spacing: -0.5px;
  margin-top: 25px;
  padding-bottom: 25px;
`;
export const Tab = styled.ul``;
export const TabBtn = styled.li`
  display: inline-block;
`;
export const TabBtnLink = styled(Link)`
  padding: 0 30px;
  font-size: 20px;
  color: ${({ activate }) => (activate ? "#111" : "#fff")};
  background-color: ${({ activate }) => (activate ? "#fff" : "transparent")};
  opacity: ${({ activate }) => (activate ? "1" : "0.5")};
  border-radius: 25px;
  display: inline-block;
  height: 50px;
  line-height: 50px;
  &:hover {
    opacity: ${({ activate }) => activate === false && "1"};
  }
`;
