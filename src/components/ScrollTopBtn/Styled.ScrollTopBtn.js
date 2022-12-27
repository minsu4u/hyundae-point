// 1.크기
// 2.위치
// 3.마진 패딩
// 4.폰트스타일
// 5.배경스타일
// 6.css 액션

import styled from "styled-components";

export const ScrollBtn = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5.142px 6.128px 12.35px 0.65px rgba(25, 48, 88, 0.3);
  border-radius: 50%;
  cursor: pointer;
  & > svg {
    font-size: 24px;
  }
`;
