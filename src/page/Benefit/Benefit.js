import React, { useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import getDataFetch from "../../api/getDataFetch";
import BenefitNullPage from "../../components/Benefit/BenefitNullPage";
import BenefitPagination from "../../components/Benefit/BenefitPagination";
import BenefitTitle from "../../components/Benefit/BenefitTitle";
import BenefitTopInfo from "../../components/Benefit/BenefitTopInfo";
import EventItem from "../../components/Benefit/EventItem";
import { ContentsBg, ContentsInner } from "../../GlobalStyle";

function Benefit() {
  const [activate, setActivate] = useState(1);
  const [searchState, setSearchState] = useState("");
  const [eventData, setEventData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [dataLength, setDataLength] = useState(2);
  const [filterState, setFilterState] = useState("제휴사별");
  const [limit, setLimit] = useState(9);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    const fetchGetData = async () => {
      const result = await getDataFetch("./eventAlbumData.json");

      const endDays = result.map((item) => item.endDay.replaceAll(".", "-"));
      const DdayFn = endDays.map((item) => {
        const today = new Date();
        const dDay = new Date(`${item} 00:00:00`);
        const gapNum = dDay - today;
        const dDayNum = Math.ceil(gapNum / (1000 * 60 * 60 * 24));

        return item === "2023-12-31" ? "상시" : dDayNum;
      });

      const dDayNum = result.map((item, idx) => ({
        ...item,
        dDayNum: DdayFn[idx],
      }));
      setEventData(dDayNum);
    };

    fetchGetData();
  }, []);

  return (
    <ContentsBg bgColor="#fff">
      <ContentsInner max="1920" min="280">
        {eventData && (
          <>
            <BenefitTitle activate={activate} setActivate={setActivate} />
            <ContentsInner max="1280" min="280" pd="0 30px">
              <BenefitTopInfo
                total={dataLength}
                eventData={eventData}
                filterData={filterData}
                searchState={searchState}
                setFilterData={setFilterData}
                setFilterState={setFilterState}
                setSearchState={setSearchState}
              />
              {activate === 1 ? (
                <>
                  <EventItem
                    eventData={eventData}
                    filterData={filterData}
                    filterState={filterState}
                    offset={offset}
                    limit={limit}
                    setDataLength={setDataLength}
                  />
                  <BenefitPagination
                    total={dataLength}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                  />
                </>
              ) : (
                <BenefitNullPage />
              )}
            </ContentsInner>
          </>
        )}
      </ContentsInner>
    </ContentsBg>
  );
}

export default Benefit;
