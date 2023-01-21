import React from "react";
import { useParams } from "react-router-dom";
import Faq from "./Faq/Faq";
import Notice from "./Notice/Notice";

function PageContainer() {
  const { pages } = useParams();
  const renderPage = (val) => {
    switch (val) {
      case "Faq":
        return <Faq />;
      case "Notice":
        return <Notice />;
      default:
        return;
    }
  };
  return <>{renderPage(pages)}</>;
}

export default PageContainer;
