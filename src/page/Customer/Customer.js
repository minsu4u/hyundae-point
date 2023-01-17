import React, { useState } from "react";
import CustomerCategory from "../../components/Customer/CustomerCategory";
import CustomerInfoSearch from "../../components/Customer/CustomerInfoSearch";
import PageHeadingTitle from "../../components/PageHeadingTitle/PageHeadingTitle";
import { ContentsInner } from "../../GlobalStyle";
import CustomerPagination from "./CustomerPagination";
import CustomerQuestions from "./CustomerQuestions";

function Customer() {
  const [activate, setActivate] = useState(1);
  const [innerActivate, setInnerActivate] = useState(1);
  const tabBoxTitle = ["FAQ", "1:1문의", "공지사항", "상담톡문의"];
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
  return (
    <>
      <PageHeadingTitle
        hdTxt={"고객센터"}
        subTxt={"H.Point에 대해 궁금하신 점이 있다면\n무엇이든 물어보세요!"}
        tabBoxTitle={tabBoxTitle}
        activate={activate}
        setActivate={setActivate}
      />
      <CustomerCategory
        tabTitle={tabTitle}
        innerActivate={innerActivate}
        setInnerActivate={setInnerActivate}
      />
      <ContentsInner max="1284" min="280px" pd="0 30px">
        <CustomerInfoSearch />
        <CustomerQuestions />
        <CustomerPagination />
      </ContentsInner>
    </>
  );
}

export default Customer;
