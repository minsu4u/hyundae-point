import styled, { css } from "styled-components";

export const SliderContainer = styled.article`
  width: 100%;
  height: 780px;
  overflow: hidden;
`;
export const SliderTransForm = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
export const SliderImg = styled.div`
  min-width: 100%;
  height: 100%;

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
  width: 10%;
  height: 100%;
  background-color: #fff;
  transition: all 0.5s;
`;
export const SliderCount = styled.div`
  margin-right: 20px;
  & > p {
    font-family: "SCDream";
    font-weight: 600;
    font-size: 22px;
    color: #fff;
  }
`;
export const SliderPlayPause = styled.div`
  & > svg {
    font-size: 22px;
    fill: #fff;
    vertical-align: bottom;
  }
`;
