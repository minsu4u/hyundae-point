import React, { useEffect, useState } from "react";
import getDataFetch from "../../api/getDataFetch";
import MainBenefit from "../../components/Main/MainBenefit/MainBenefit";
import SliderType1 from "../../components/Main/MainSlider/SliderType1";
import SliderType2 from "../../components/Main/MainSlider/SliderType2";
import { ContentsBg, ContentsInner } from "../../GlobalStyle";

function Main() {
  const [slideItems, setSlideItems] = useState([]);
  const [slideItems2, setSlideItems2] = useState([]);

  useEffect(() => {
    const fetchGetData = async () => {
      const result1 = await getDataFetch("./slideData.json");
      const result2 = await getDataFetch("./slideData2.json");
      setSlideItems(result1);
      setSlideItems2(result2);
    };
    fetchGetData();
  }, []);
  return (
    <>
      <ContentsBg bgColor="#fff">
        <ContentsInner>
          {slideItems.length && <SliderType1 slideItems={slideItems} />}
        </ContentsInner>
      </ContentsBg>
      <ContentsBg bgColor="#603de3" hg="780" pd="100px 0 110px">
        <ContentsInner max="1284" min="280">
          <MainBenefit />
        </ContentsInner>
      </ContentsBg>
      <ContentsBg bgColor="#5ccdb5">
        <ContentsInner max="1284" min="280">
          {slideItems2.length && <SliderType2 slideItems2={slideItems2} />}
        </ContentsInner>
      </ContentsBg>
    </>
  );
}

export default Main;
