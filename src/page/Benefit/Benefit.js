import React, { useEffect, useState } from "react";
import getDataFetch from "../../api/getDataFetch";
import BenefitPagination from "../../components/Benefit/BenefitPagination";
import BenefitTitle from "../../components/Benefit/BenefitTitle";
import BenefitTopInfo from "../../components/Benefit/BenefitTopInfo";
import EventItem from "../../components/Benefit/EventItem";
import { ContentsBg, ContentsInner } from "../../GlobalStyle";

function Benefit() {
  const [eventData, setEventData] = useState([]);
  const [limit, setLimit] = useState(9);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    const fetchGetData = async () => {
      const result = await getDataFetch("./eventAlbumData.json");
      setEventData(result);
    };
    fetchGetData();
  }, []);

  return (
    <ContentsBg bgColor="#fff">
      <ContentsInner max="1920" min="280">
        {eventData && (
          <>
            <BenefitTitle />
            <ContentsInner max="1280" min="280" pd="0 30px">
              <BenefitTopInfo
                total={eventData.length}
                eventData={eventData}
                setEventData={setEventData}
              />
              <EventItem eventData={eventData} offset={offset} limit={limit} />
              <BenefitPagination
                total={eventData.length}
                limit={limit}
                page={page}
                setPage={setPage}
              />
            </ContentsInner>
          </>
        )}
      </ContentsInner>
    </ContentsBg>
  );
}

export default Benefit;
