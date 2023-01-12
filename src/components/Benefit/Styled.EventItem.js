import { Link } from "react-router-dom";
import styled from "styled-components";

// todo
// 1. 이벤트 인포
// 구조 Container(div)> ImgBox + TxtBox
// 구조 ImgBox(div) > img + Dday
// 구조 TxtBox(div) > h2 + p

// css 크기 > 위치 > 텍스트 > 이미지 > 효과

export const Container = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 56px;
`;
export const EventLink = styled(Link)`
  position: relative;
  width: calc((100% - 50px) / 3);
  display: inline-block;
  border-radius: 16px;
  border: 1px solid #ddd;
  overflow: hidden;
  box-shadow: 5px 6px 12px 1px rgba(25, 48, 88, 0.1);
  transition: all 0.3s;
  margin: 0 24px 24px 0;
  &:nth-child(3n) {
    margin-right: 0;
  }
  &:hover {
    transform: translateY(-5px);
    & > .imgBox > div {
      background-size: 103%;
    }
  }
`;
export const ImgBox = styled.div`
  width: 100%;
  position: relative;
  & > img {
    width: 100%;
  }
`;
export const Img = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${({ img }) =>
    img && `url(./asset/image/benefit/${img}) no-repeat center top / 100%`};
  transition: all 0.3s;
`;
export const Dday = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 72px;
  height: 43px;
  font-family: "SCDream";
  font-weight: 400;
  font-size: 18px;
  color: #fff;
  line-height: 43px;
  text-align: center;
  border-radius: 8px;
  background: #603de3;
`;
export const TxtBox = styled.div`
  position: relative;
  height: 160px;
  padding: 35px 30px 0 40px;
  & > h2 {
    margin-bottom: 40px;
    font-family: "SCDream";
    font-weight: 400;
    font-size: 18px;
    color: #333;
    line-height: 1;
  }
  & > p {
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 16px;
    color: #999;
  }
`;
