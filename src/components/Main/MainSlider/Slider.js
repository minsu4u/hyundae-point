import React, { useCallback, useEffect, useRef, useState } from "react";
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

function Slider() {
  // 슬라이드 이벤트
  // #. 슬라이드 버튼을 누르면 슬라이드 너비 만큼 이동
  // 대상: SliderTransForm
  // 시점: SliderPrev click 후
  // 이벤트: SliderTransForm transform: translateX(`${SliderImg.넓이}`px)
  {
    // 타입
    // type: [
    //   {
    //     id: 1,
    //     wd: 1,
    //   },
    //   {},
    //   {},
    // ]
    // 아이디
    // 넓이
    // 이미지
    // 좌우 버튼
    // 페이지 네이션
  }
  const slideData = [
    {
      id: 1,
      img: "mainSlideImg1.png",
      h1Txt: "현대백화점그룹의 \n 다양한 제휴사를 만나보세요!",
      pTxt: "다양한 브랜드에서 적립하고 사용하는 \n 즐거운 일상의 H.Point!",
    },
    {
      id: 2,
      img: "mainSlideImg2.png",
      h1Txt: "새롭게 달라진 H.Point Web 사이트!!",
      pTxt: "Web에서 만나는 더 트랜디한 매거진, \n 핫이슈를 만나고 즐거운 혜택을 받아보세요.",
    },
    {
      id: 3,
      img: "mainSlideImg3.png",
      h1Txt: "일상을 바꾸는 \n 즐거운 소비습관",
      pTxt: "쇼핑이 미션이 되고, 걸음이 포인트가 되는 \n 즐거운 일상으로 초대합니다.",
    },
    {
      id: 4,
      img: "mainSlideImg4.png",
      h1Txt: "쿠폰 받고 할일 받는 \n 혜택 이벤트!",
      pTxt: "혼자 알기 아쉬운 이벤트, 친구에게 공유해보세요!",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(1);
  const [slideReset, setSlideReset] = useState(false);
  const [slidePlay, setSlidePlay] = useState(true);
  const pagNation = () => {
    if (!(currentIndex === 0 || currentIndex === 5)) return currentIndex;
    if (currentIndex === 0) return 4;
    if (currentIndex === 5) return 1;
  };
  const pagNationNum = pagNation();
  const slideMaxLen = slideData.length - 1;
  let interval;

  const cloneElement = () => {
    let prevData = {
      ...slideData[slideMaxLen],
      id: slideData[0].id - 1,
    };
    let nextData = { ...slideData[0], id: slideData[slideMaxLen].id + 1 };
    return [prevData, ...slideData, nextData];
  };
  const newData = cloneElement();

  const sliderPrevHandler = (direction) => {
    if (slideReset) setSlideReset(false);
    setCurrentIndex((preValue) => preValue - direction);
    if (currentIndex < 2) {
      setTimeout(() => {
        setSlideReset(true);
        setCurrentIndex(4);
      }, 300);
    }
  };
  const sliderNextHandler = (direction) => {
    if (slideReset) setSlideReset(false);
    setCurrentIndex((preValue) => preValue + direction);
    if (currentIndex > slideMaxLen) {
      setTimeout(() => {
        setSlideReset(true);
        setCurrentIndex(1);
      }, 300);
    }
  };

  const savedCur = useRef(1);
  const savedReset = useRef(false);

  const autoPlayEvent = () => {
    if (savedReset.current) setSlideReset(false);
    setCurrentIndex((savedCur.current += 1));
    if (savedCur.current > slideMaxLen + 1) {
      clearInterval(interval);
      console.log(interval, "1");
      setTimeout(() => {
        setSlideReset((savedReset.current = true));
        setCurrentIndex((savedCur.current = 1));
        autoPlay({ duration: 2000 });
      }, 1000);
    }
  };
  const autoPlay = ({ duration }) => {
    interval = setInterval(autoPlayEvent, duration);
  };

  const playPauseHandler = () => {
    setSlidePlay(!slidePlay);
    if (slidePlay) {
      clearInterval(interval);
      console.log(interval, "2");
    } else {
      autoPlay({ duration: 2000 });
    }
  };

  useEffect(() => {}, []);

  useEffect(() => {
    autoPlay({ duration: 2000 });
    return () => clearInterval(interval);
  }, []);

  return (
    <SliderContainer>
      <SliderTransForm currentIndex={currentIndex} slideReset={slideReset}>
        {newData.map((item) => (
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
            <span> - 4</span>
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
