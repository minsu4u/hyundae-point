import React, { useEffect, useState } from "react";
import { ContentsInner } from "../../../GlobalStyle";
import CustomerCategory from "../../../components/Customer/CustomerCategory";
import CustomerInfoSearch from "../../../components/Customer/CustomerInfoSearch";
import CustomerPagination from "../../../components/Customer/CustomerPagination";
import CustomerQuestions from "../../../components/Customer/CustomerQuestions";
import CustomerSimpleCard from "../../../components/Customer/CustomerSimpleCard";
import getDataFetch from "../../../api/getDataFetch";

function Faq() {
  const [innerActivate, setInnerActivate] = useState(1);
  const [faqData, setFaqData] = useState([]);

  const tabTitle = [
    "전체",
    "회원",
    "포인트",
    "혜택",
    "친구",
    "APP",
    "충전",
    "포인트 기부",
    "포인트워크",
    "H.Point Pay",
  ];
  useEffect(() => {
    const fetchGetData = async () => {
      const result = await getDataFetch("/faqData.json");
      setFaqData(result);
    };

    fetchGetData();
  }, []);
  return (
    <>
      <CustomerCategory
        tabTitle={tabTitle}
        innerActivate={innerActivate}
        setInnerActivate={setInnerActivate}
      />
      <ContentsInner max="1284" min="280" pd="0 30px">
        <CustomerInfoSearch />
        <CustomerQuestions faqData={faqData} setFaqData={setFaqData} />
        <CustomerPagination />
        <CustomerSimpleCard />
      </ContentsInner>
    </>
  );
}

export default Faq;
