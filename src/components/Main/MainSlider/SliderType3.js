import React, { useState } from "react";
import {
  ArrowIcon,
  SliderContainer,
  SliderImg,
  SliderImgBox,
  SliderImgLink,
  SliderNav,
  SliderNext,
  SliderPrev,
  SliderSubTitle,
  SliderSubTxt,
  SliderTitle,
  SliderTransForm,
  SliderTransFormCover,
  SliderTxt,
} from "./Styled.SliderType3";
import useInterval from "./useInterval";

function SliderType3({ slideItems3 }) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [slideReset, setSlideReset] = useState(false);

  let slideMaxLen = slideItems3.length - 1;

  const cloneElement = () => {
    let prevData = {
      ...slideItems3[slideMaxLen],
      id: slideItems3[0].id - 1,
    };
    let nextData = {
      ...slideItems3[0],
      id: slideItems3[slideMaxLen].id + 1,
    };
    return [prevData, ...slideItems3, nextData];
  };

  let newData = cloneElement();

  const sliderPrevHandler = (val) => {
    if (slideReset) setSlideReset(false);
    setCurrentIndex((preValue) => preValue - val);
    if (currentIndex < 2) {
      setTimeout(() => {
        setSlideReset(true);
        setCurrentIndex(3);
      }, 300);
    }
  };
  const sliderNextHandler = (val) => {
    if (slideReset) setSlideReset(false);
    setCurrentIndex((preValue) => preValue + val);
    if (currentIndex > slideMaxLen) {
      setTimeout(() => {
        setSlideReset(true);
        setCurrentIndex(1);
      }, 300);
    }
  };

  let delayTime = 2000;

  const autoPlayEvent = () => {
    if (slideReset) setSlideReset(false);
    setCurrentIndex(currentIndex + 1);
    if (currentIndex > slideMaxLen) {
      delayTime = null;
      setTimeout(() => {
        setSlideReset(true);
        setCurrentIndex(1);
        delayTime = 2000;
      }, 1000);
    }
  };

  // useInterval(autoPlayEvent, delayTime);

  return (
    <SliderContainer>
      <SliderTitle>
        포인트 쌓기
        <SliderSubTitle>즐거움이 매일매일 쌓이는 포인트 플레이</SliderSubTitle>
      </SliderTitle>
      <SliderTransFormCover>
        <SliderTransForm currentIndex={currentIndex} slideReset={slideReset}>
          {newData?.map((item) => (
            <SliderImgBox key={item.id}>
              <SliderImgLink to="/">
                <SliderImg src={`asset/image/${item.img}`} />
              </SliderImgLink>
              <SliderTxt>{item.hdTxt}</SliderTxt>
              <SliderSubTxt>{item.pTxt}</SliderSubTxt>
            </SliderImgBox>
          ))}
        </SliderTransForm>
      </SliderTransFormCover>
      <SliderNav>
        <SliderPrev onClick={() => sliderPrevHandler(1)}>
          <ArrowIcon src="./asset/image/ic_arrow5.png" />
        </SliderPrev>
        <SliderNext onClick={() => sliderNextHandler(1)}>
          <ArrowIcon src="./asset/image/ic_arrow5.png" rotate="180" />
        </SliderNext>
      </SliderNav>
    </SliderContainer>
  );
}

export default SliderType3;
