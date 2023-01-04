import React, { useEffect, useState } from "react";
import getDataFetch from "../../api/getDataFetch";
import SliderType1 from "../../components/Main/MainSlider/SliderType1";
import SliderType2 from "../../components/Main/MainSlider/SliderType2";
import { ContentsBg, ContentsInner } from "../../GlobalStyle";

function Main() {
  const [slideItems, setSlideItems] = useState([]);

  useEffect(() => {
    const fetchGetData = async () => {
      const result = await getDataFetch("./slideData.json");
      setSlideItems(result);
    };
    fetchGetData();
  }, []);
  return (
    <ContentsBg bgColor="#fff">
      <ContentsInner>
        {slideItems.length && <SliderType1 slideItems={slideItems} />}
        {slideItems.length && <SliderType2 slideItems={slideItems} />}
      </ContentsInner>
    </ContentsBg>
  );
}

export default Main;
