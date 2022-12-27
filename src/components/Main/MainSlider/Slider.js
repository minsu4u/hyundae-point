import React from "react";
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
  return (
    <SliderContainer>
      <SliderTransForm>
        <SliderImg img="mainSlideImg1.png">
          <SliderTxt>
            <h1>
              현대백화점그룹의
              <br />
              다양한 제휴사를 만나보세요!
            </h1>
            <p>
              다양한 브랜드에서 적립하고 사용하는
              <br />
              즐거운 일상의 H.Point!
            </p>
          </SliderTxt>
        </SliderImg>
        <SliderImg img="mainSlideImg1.png"></SliderImg>
      </SliderTransForm>
      <SliderNav>
        <SliderPrev>
          <IoIosArrowBack />
        </SliderPrev>
        <SliderNext>
          <IoIosArrowForward />
        </SliderNext>
      </SliderNav>
      <SliderState>
        <SliderProgressbar>
          <SliderGauge />
        </SliderProgressbar>
        <SliderCount>
          <p>1 - 4</p>
        </SliderCount>
        <SliderPlayPause>
          <VscDebugPause />
          {/* <VscPlay /> */}
        </SliderPlayPause>
      </SliderState>
    </SliderContainer>
  );
}

export default Slider;
