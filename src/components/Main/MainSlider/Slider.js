import React from "react";
import {
  SliderContainer,
  SliderCount,
  SliderGauge,
  SliderImg,
  SliderNav,
  SliderNext,
  SliderPlay,
  SliderPlayPause,
  SliderPrev,
  SliderProgressbar,
  SliderState,
  SliderTransForm,
} from "./Styled.Slider";

function Slider() {
  return (
    <SliderContainer>
      <SliderTransForm>
        <SliderImg></SliderImg>
      </SliderTransForm>
      <SliderNav>
        <SliderPrev></SliderPrev>
        <SliderNext></SliderNext>
      </SliderNav>
      <SliderState>
        <SliderProgressbar>
          <SliderGauge />
        </SliderProgressbar>
        <SliderCount>
          <div>1 - 4</div>
        </SliderCount>
        <SliderPlayPause>
          <SliderPlay />
        </SliderPlayPause>
      </SliderState>
    </SliderContainer>
  );
}

export default Slider;
