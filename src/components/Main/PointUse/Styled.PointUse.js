import styled from "styled-components";

export const PointUseContainer = styled.article``;

export const Title = styled.h1`
  color: #111;
  font-family: "SCDream";
  font-weight: 600;
  font-size: 52px;
  margin-bottom: 45px;
`;
export const SubTitle = styled.span`
  font-weight: 400;
  font-size: 20px;
`;

export const PointlistWrap = styled.ul`
  text-align: center;
`;
export const Pointlist = styled.li`
  display: inline-block;
  transition: all 0.3s;
  &:not(:last-child) {
    margin-right: 24px;
  }
  &:hover {
    transform: translateY(-10px);
  }
  &:hover > div:first-child {
    background-size: 104%;
  }
`;
export const PointImg = styled.div`
  background: ${({ img }) =>
    `url(./asset/image/${img}) no-repeat center / 100%`};
  width: 392px;
  height: 308px;
  border-radius: 16px;
  transition: all 0.3s;
`;
export const PointImgHeadTxt = styled.p`
  font-family: "SCDream";
  font-weight: 600;
  font-size: 30px;
  color: #111;
  text-align: center;
`;
export const PointImgSubTxt = styled.p`
  font-family: "Noto Sans KR";
  font-weight: 400;
  font-size: 18px;
  color: #999;
  letter-spacing: -0.8px;
  margin-top: 12px;
  text-align: center;
`;
