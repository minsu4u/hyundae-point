import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import PageHeadingTitle from "../../components/PageHeadingTitle/PageHeadingTitle";
import PageContainer from "./PageContainer";

function Customer() {
  const [activate, setActivate] = useState(1);
  const tabBoxTitle = [
    { txt: "FAQ", link: "/Customer/Faq" },
    { txt: "1:1문의", link: "" },
    { txt: "공지사항", link: "/Customer/Notice" },
    { txt: "상담톡문의", link: "/" },
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
      <Routes>
        <Route path=":pages" element={<PageContainer />} />
      </Routes>
    </>
  );
}

export default Customer;
