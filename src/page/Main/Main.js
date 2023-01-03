import React, { useEffect, useState } from "react";
import getDataFetch from "../../api/getDataFetch";
import Slider from "../../components/Main/MainSlider/Slider";
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
        {slideItems.length && (
          <Slider slideItems={slideItems} setSlideItems={setSlideItems} />
        )}
      </ContentsInner>
    </ContentsBg>
  );
}

export default Main;
