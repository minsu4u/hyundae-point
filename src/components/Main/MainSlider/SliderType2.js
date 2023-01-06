import React, { useState } from "react";
import {
  SliderContainer,
  SliderCount,
  SliderGauge,
  SliderImg,
  SliderImgBox,
  SliderImgGroup,
  SliderImgLink,
  SliderNav,
  SliderNext,
  SliderPlayPause,
  SliderPrev,
  SliderProgressbar,
  SliderSizeImg,
  SliderState,
  SliderTitle,
  SliderTransForm,
  SliderTransFormCover,
  SliderTxt,
} from "./Styled.SliderType2";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { VscDebugPause, VscPlay } from "react-icons/vsc";
import useInterval from "./useInterval";

function SliderType2({ slideItems2, setMouseOver }) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [slideReset, setSlideReset] = useState(false);
  const [slidePlay, setSlidePlay] = useState(true);

  let slideMaxLen = slideItems2.length - 1;

  const cloneElement = () => {
    let prevData = {
      ...slideItems2[slideMaxLen],
      id: slideItems2[0].id - 1,
    };
    let nextData = {
      ...slideItems2[0],
      id: slideItems2[slideMaxLen].id + 1,
    };
    return [prevData, ...slideItems2, nextData];
  };

  let newData = cloneElement();

  const pagNation = () => {
    if (!(currentIndex === 0 || currentIndex === 4)) return currentIndex;
    if (currentIndex === 0) return 3;
    if (currentIndex === 4) return 1;
  };
  const pagNationNum = pagNation();

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

  const backgroundChangeHandler = (pos) => {
    setMouseOver(pos);
  };
  return (
    <SliderContainer>
      <SliderTitle>지금 가장 인기 있는 이벤트</SliderTitle>
      <SliderTransFormCover>
        <SliderTransForm currentIndex={currentIndex} slideReset={slideReset}>
          {newData?.map((item) => (
            <SliderImgGroup key={item.id}>
              <SliderImgBox>
                <SliderImgLink
                  to="/"
                  onMouseOver={() => backgroundChangeHandler("left")}
                  onMouseOut={() => setMouseOver("")}
                >
                  <SliderSizeImg src="./asset/image/ratio_event.gif" alt="" />
                  <SliderImg img={item.order[0].img} />
                </SliderImgLink>
                <SliderTxt>{item.order[0].pTxt}</SliderTxt>
              </SliderImgBox>
              <SliderImgBox>
                <SliderImgLink
                  to="/"
                  onMouseOver={() => backgroundChangeHandler("right")}
                  onMouseOut={() => setMouseOver("")}
                >
                  <SliderSizeImg src="./asset/image/ratio_event.gif" alt="" />
                  {item.id === 3 ? (
                    <p>더 많은 이벤트 보러가기</p>
                  ) : (
                    <SliderImg img={item.order[1].img} />
                  )}
                </SliderImgLink>
                <SliderTxt>{item.order[1].pTxt}</SliderTxt>
              </SliderImgBox>
            </SliderImgGroup>
          ))}
        </SliderTransForm>
      </SliderTransFormCover>
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

export default SliderType2;
