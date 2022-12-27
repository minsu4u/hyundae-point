import React from "react";
import Slider from "../../components/Main/MainSlider/Slider";
import { ContentsBg, ContentsInner } from "../../GlobalStyle";

function Main() {
  // html
  // MainSection<section> > MainContents({bgColor, innerSection})<article>
  return (
    <ContentsBg bgColor="#fff">
      <ContentsInner>
        <Slider />
      </ContentsInner>
    </ContentsBg>
  );
}

export default Main;
