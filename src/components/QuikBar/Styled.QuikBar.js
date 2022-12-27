import { Link } from "react-router-dom";
import styled from "styled-components";

// 1.크기
// 2.위치
// 3.마진 패딩
// 4.폰트스타일
// 5.배경스타일
// 6.css 액션
export const QuikBarSection = styled.aside`
  position: fixed;
  right: 0;
  bottom: 50%;
  transform: translateY(50%);
  border-radius: 20px 0 0 20px;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 5.142px 6.128px 12.35px 0.65px rgba(25, 48, 88, 0.3);
`;
export const QuikBarContainer = styled.article``;
export const Quick = styled.div`
  width: 80px;
  padding: 23px 0 22px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  text-align: center;
  background-color: #4e2bf4;
  & > svg {
    font-size: 24px;
    display: block;
    margin: 0 auto;
    fill: #fff;
  }
`;
export const QuikBarMenu = styled.ul`
  & > li {
    & > a {
      width: 80px;
      display: block;
      padding: 23px 0 22px;
      font-size: 16px;
      font-weight: 500;
      color: #444;
      text-align: center;

      & > svg {
        font-size: 24px;
        display: block;
        margin: 0 auto;
        color: #444;
      }
      &:hover {
        color: #4e2bf4;
        & > svg {
          fill: #4e2bf4;
        }
      }
    }
  }
`;
export const QuickJoin = styled(Link)``;
export const QuickEvent = styled(Link)``;
export const QuickCustomer = styled(Link)``;
