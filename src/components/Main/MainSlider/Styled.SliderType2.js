import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const SliderContainer = styled.article`
  width: 100%;
  height: 780px;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  padding: 120px 0 90px;
`;

export const SliderTitle = styled.h1`
  color: #fff;
  font-family: "SCDream";
  font-weight: 800;
  font-size: 52px;
  margin-bottom: 50px;
`;
export const SliderTransForm = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  ${({ currentIndex, slideReset }) =>
    !slideReset
      ? css`
          transform: translateX(-${100 * currentIndex}%);
          transition: transform 0.3s linear;
        `
      : css`
          transform: translateX(-${100 * currentIndex}%);
          transition: none;
        `}
`;

export const SliderImgGroup = styled.div`
  display: flex;
  justify-content: center;
  min-width: 100%;
`;
export const SliderImgBox = styled.div`
  width: calc(50% - 25px);
  position: relative;
  &:first-child {
    margin-right: 25px;
  }
`;

export const SliderSizeImg = styled.img`
  width: 100%;
`;

export const SliderImg = styled.div`
  min-width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 5px 10px 3px rgba(31, 31, 31, 0.2);
  position: absolute;
  left: 0;
  top: 0;
  ${(props) =>
    props.img &&
    css`
      background: url("./asset/image/${props.img}") no-repeat center / cover;
    `}
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
  &:hover {
    &::after {
      opacity: 0.3;
    }
    transform: translateY(-10px);
  }
`;

export const SliderTxt = styled.div`
  position: relative;
  white-space: pre-line;
  font-family: "SCDream";
  font-weight: 800;
  font-size: 26px;
  color: #fff;
  text-align: center;
  margin-top: 50px;
`;

export const SliderNav = styled.div`
  & > button {
    cursor: pointer;
    position: absolute;
    border: 0;
    background: transparent;
    font-size: 40px;
    top: 50%;
    transform: translateY(-50%);
    & > svg {
      fill: #fff;
    }
  }
`;
export const SliderPrev = styled.button`
  left: 30px;
`;
export const SliderNext = styled.button`
  right: 30px;
`;
export const SliderState = styled.div`
  position: absolute;
  right: 30px;
  top: 160px;
  display: flex;
  align-items: center;
`;
export const SliderProgressbar = styled.div`
  width: 140px;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.5);
  overflow: hidden;
  margin-right: 8px;
`;
export const SliderGauge = styled.div`
  height: 100%;
  background-color: #fff;
  transition: all 0.5s;
  ${({ pagNationNum }) =>
    pagNationNum &&
    css`
      width: ${25 * pagNationNum}%;
    `}
`;
export const SliderCount = styled.div`
  margin-right: 20px;
  & > p,
  & > p > span {
    font-family: "SCDream" !important;
    font-weight: 600 !important;
    font-size: 22px !important;
    color: #fff !important;
    & > span {
      opacity: 0.5;
    }
  }
`;
export const SliderPlayPause = styled.div`
  & > svg {
    font-size: 22px;
    fill: #fff;
    vertical-align: bottom;
  }
`;
