import React, { useState } from "react";
import {
  SliderContainer,
  SliderCount,
  SliderGauge,
  SliderImg,
  SliderNav,
  SliderNext,
  SliderPlayPause,
  SliderPrev,
  SliderProgressbar,
  SliderState,
  SliderTransForm,
  SliderTxt,
} from "./Styled.Slider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { VscDebugPause, VscPlay } from "react-icons/vsc";
import useInterval from "./useInterval";

function Slider({ slideItems }) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [slideReset, setSlideReset] = useState(false);
  const [slidePlay, setSlidePlay] = useState(true);

  let slideMaxLen = slideItems.length - 1;

  const cloneElement = () => {
    let prevData = {
      ...slideItems[slideMaxLen],
      id: slideItems[0].id - 1,
    };
    let nextData = {
      ...slideItems[0],
      id: slideItems[slideMaxLen].id + 1,
    };
    return [prevData, ...slideItems, nextData];
  };

  let newData = cloneElement();

  const pagNation = () => {
    if (!(currentIndex === 0 || currentIndex === 5)) return currentIndex;
    if (currentIndex === 0) return 4;
    if (currentIndex === 5) return 1;
  };
  const pagNationNum = pagNation();

  const sliderPrevHandler = (val) => {
    if (slideReset) setSlideReset(false);
    setCurrentIndex((preValue) => preValue - val);
    if (currentIndex < 2) {
      setTimeout(() => {
        setSlideReset(true);
        setCurrentIndex(4);
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

  let delayTime = slidePlay ? 2000 : null;

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

  const playPauseHandler = () => setSlidePlay(!slidePlay);

  useInterval(autoPlayEvent, delayTime);

  return (
    <SliderContainer>
      <SliderTransForm currentIndex={currentIndex} slideReset={slideReset}>
        {newData?.map((item) => (
          <SliderImg key={item.id} img={item.img}>
            <SliderTxt>
              <h1>{item.h1Txt}</h1>
              <p>{item.pTxt}</p>
            </SliderTxt>
          </SliderImg>
        ))}
      </SliderTransForm>
      <SliderNav>
        <SliderPrev onClick={() => sliderPrevHandler(1)}>
          <IoIosArrowBack />
        </SliderPrev>
        <SliderNext onClick={() => sliderNextHandler(1)}>
          <IoIosArrowForward />
        </SliderNext>
      </SliderNav>
      <SliderState>
        <SliderProgressbar>
          <SliderGauge pagNationNum={pagNationNum} />
        </SliderProgressbar>
        <SliderCount>
          <p>
            {pagNationNum}
            <span> - {slideMaxLen + 1}</span>
          </p>
        </SliderCount>
        <SliderPlayPause onClick={playPauseHandler}>
          {slidePlay ? <VscDebugPause /> : <VscPlay />}
        </SliderPlayPause>
      </SliderState>
    </SliderContainer>
  );
}

export default Slider;
