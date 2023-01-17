import React from "react";
import {
  Container,
  H1Txt,
  H2Txt,
  Tab,
  TabBtn,
} from "./Styled.PageHeadingTitle";

function PageHeadingTitle({
  hdTxt,
  subTxt,
  tabBoxTitle,
  activate,
  setActivate,
}) {
  // todo
  // 1.탭 별 총 ??갯수 갱신, 탭 상태 갱신
  return (
    <Container>
      <H1Txt>{hdTxt}</H1Txt>
      <H2Txt>{subTxt}</H2Txt>
      <Tab>
        {tabBoxTitle.map((item, idx) => (
          <TabBtn
            key={idx + 1}
            id={idx + 1}
            activate={activate === idx + 1 ? "true" : ""}
            onClick={(e) => setActivate(parseInt(e.currentTarget.id))}
          >
            <button>{item}</button>
          </TabBtn>
        ))}
      </Tab>
    </Container>
  );
}

export default PageHeadingTitle;
