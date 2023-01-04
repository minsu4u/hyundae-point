import styled, { css } from "styled-components";

export const SliderContainer = styled.article`
  width: 100%;
  height: 780px;
  overflow: hidden;
  position: relative;
`;
export const SliderTransForm = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
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
export const SliderImg = styled.div`
  min-width: 100%;
  height: 100%;
  position: relative;
  ${(props) =>
    props.img &&
    css`
      background: url("./asset/image/${props.img}") no-repeat center / cover;
    `}
`;
export const SliderTxt = styled.div`
  position: absolute;
  left: 85px;
  top: 50%;
  transform: translateY(-50%);
  white-space: pre-line;
  h1 {
    color: #fff;
    font-size: 60px;
    font-weight: 800px;
    line-height: 80px;
    margin-bottom: 60px;
  }
  p {
    color: #fff;
    font-size: 22px;
    font-weight: 400px;
    line-height: 34px;
  }
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
  left: 80px;
  bottom: 180px;
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
