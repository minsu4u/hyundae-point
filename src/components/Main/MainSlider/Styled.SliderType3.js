import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const SliderContainer = styled.article`
  width: 100%;
  position: relative;
  margin: 0 auto;
  padding: 160px 0;
`;

export const SliderTitle = styled.h1`
  color: #111;
  font-family: "SCDream";
  font-weight: 600;
  font-size: 52px;
  margin-bottom: 70px;
`;
export const SliderSubTitle = styled.span`
  font-weight: 400;
  font-size: 20px;
`;

export const SliderTransFormCover = styled.div`
  width: 100%;
  max-width: 1224px;
  min-width: 280px;
  overflow: hidden;
  padding-top: 10px;
  margin: 0 auto;
`;
export const SliderTransForm = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  ${({ currentIndex, slideReset }) =>
    !slideReset
      ? css`
          transform: translateX(-${20 * currentIndex}%);
          transition: transform 0.3s linear;
        `
      : css`
          transform: translateX(-${20 * currentIndex}%);
          transition: none;
        `}
`;

export const SliderImgBox = styled.div`
  position: relative;
`;

export const SliderImg = styled.img`
  min-width: 408px;
  min-width: 208px;
  width: 208px;
  height: 100%;
`;
export const SliderImgLink = styled(Link)`
  position: relative;
  display: block;
  transition: transform 0.3s, -webkit-transform 0.3s;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    background: #000;
    opacity: 0;
    transition: 0.3s;
  }
`;

export const SliderTxt = styled.p`
  position: relative;
  white-space: pre-line;
  font-family: "SCDream";
  font-weight: 600;
  font-size: 30px;
  color: #111;
  text-align: center;
  margin-top: 30px;
`;
export const SliderSubTxt = styled.span`
  display: block;
  font-family: "Noto Sans KR";
  font-weight: 400;
  font-size: 18px;
  color: #999;
  letter-spacing: -0.8px;
  text-align: center;
`;

export const SliderNav = styled.div`
  & > button {
    cursor: pointer;
    position: absolute;
    border: 0;
    background: transparent;
    font-size: 40px;
    top: 50%;
    & > svg {
      fill: #fff;
    }
  }
`;
export const SliderPrev = styled.button`
  left: -40px;
`;
export const SliderNext = styled.button`
  right: -40px;
`;

export const ArrowIcon = styled.img`
  ${({ rotate }) =>
    rotate &&
    css`
      transform: rotate(${rotate}deg);
    `}
`;
