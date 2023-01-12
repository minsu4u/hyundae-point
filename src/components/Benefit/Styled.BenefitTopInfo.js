import { Link } from "react-router-dom";
import styled from "styled-components";

// todo
// 1. 이벤트 인포
// 구조 Container> ProgressState + Category
// 구조 ProgressState
// 구조 Category > Selects + SearchBar
// 구조 Selects > option
// 구조 SearchBar > input + button
// 크기 > 위치 > 텍스트 > 이미지 > 효과

export const Container = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 70px 0 0;
  margin-bottom: 60px;
`;
export const ProgressState = styled.p`
  font-family: "Noto Sans KR";
  font-weight: 400;
  font-size: 18px;
  color: #111;
  & > em {
    font-weight: 700;
    font-style: normal;
  }
`;
export const Category = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Selects = styled.div`
  width: 200px;
  margin-right: 10px;
  & > select {
    width: 100%;
    height: 50px;
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 16px;
    color: #666;
    padding: 0 34px 0 20px;
    border: 1px solid #ccc;
    vertical-align: middle;
    border-radius: 8px;
    background-image: url("https://www.h-point.co.kr/assets/app/img/common/ic_arrow1.png");
    background-repeat: no-repeat;
    background-size: auto;
    background-position: calc(100% - 20px) 50%;
    appearance: none;
    outline: none;
    &:focus {
      border-color: #4e2bf4;
    }
  }
  & > select > option {
  }
`;
export const SearchBar = styled.div`
  position: relative;
  width: 200px;
  & > input {
    width: 100%;
    height: 50px;
    padding: 0 40px 0 20px;
    font-family: "Noto Sans KR";
    font-weight: 700;
    font-size: 16px;
    color: #333;
    padding: 0 20px;
    border: 1px solid #f5f5f5;
    vertical-align: middle;
    background: #f5f5f5;
    border-radius: 8px;
    outline: none;
    &:focus {
      border-color: #4e2bf4;
    }
  }
  & > button {
    border: 0;
    background-color: transparent;
    font-size: 20px;
    position: absolute;
    top: 12px;
    right: 12px;
    cursor: pointer;
  }
`;
