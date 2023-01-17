import React from "react";
import { useParams } from "react-router-dom";
import Faq from "./Faq/Faq";
import Que from "./Que/Que";

function PageContainer() {
  const { pages } = useParams();
  const renderPage = (val) => {
    switch (val) {
      case "Faq":
        return <Faq />;
      case "Que":
        return <Que />;

      default:
        return;
    }
  };
  return <>{renderPage(pages)}</>;
}

export default PageContainer;
