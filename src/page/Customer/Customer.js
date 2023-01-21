import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import getDataFetch from "../../api/getDataFetch";
import PageHeadingTitle from "../../components/PageHeadingTitle/PageHeadingTitle";
import PageContainer from "./PageContainer";

function Customer() {
  const [activate, setActivate] = useState(1);
  const [faqData, setFaqData] = useState([]);

  const tabBoxTitle = [
    { txt: "FAQ", link: "/Customer/Faq" },
    { txt: "1:1문의", link: "" },
    { txt: "공지사항", link: "/Customer/Notice" },
    { txt: "상담톡문의", link: "/" },
  ];
  useEffect(() => {
    const fetchGetData = async () => {
      const result = await getDataFetch("/faqData.json");
      console.log(result);
      setFaqData(result);
    };

    fetchGetData();
  }, []);
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
