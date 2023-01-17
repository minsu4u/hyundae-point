import React from "react";
import {
  Container,
  H1Txt,
  H2Txt,
  Tab,
  TabBtn,
  TabLink,
} from "./Styled.PageHeadingTitle";

function PageHeadingTitle({
  hdTxt,
  subTxt,
  tabBoxTitle,
  activate,
  setActivate,
}) {
  // todo
  // 1. FAQ, 1:1문의, 공지사항 link 페이지 구성
  return (
    <Container>
      <H1Txt>{hdTxt}</H1Txt>
      <H2Txt>{subTxt}</H2Txt>
      <Tab>
        {tabBoxTitle.map((item, idx) => (
          <TabBtn
            key={idx + 1}
            id={idx + 1}
            onClick={(e) => setActivate(parseInt(e.currentTarget.id))}
          >
            <TabLink
              to={item.link}
              activate={activate === idx + 1 ? "true" : ""}
            >
              <button>{item.txt}</button>
            </TabLink>
          </TabBtn>
        ))}
      </Tab>
    </Container>
  );
}

export default PageHeadingTitle;
