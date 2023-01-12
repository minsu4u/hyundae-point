import React, { useState } from "react";
import {
  Container,
  H1Txt,
  H2Txt,
  Tab,
  TabBtn,
  TabBtnLink,
} from "./Styled.BenefitTitle";

function BenefitTitle() {
  const [activate, setActivate] = useState(true);
  return (
    <Container>
      <H1Txt>이벤트</H1Txt>
      <H2Txt>특별한 이벤트, 매일매일 즐거운 혜택</H2Txt>
      <Tab>
        <TabBtn>
          <TabBtnLink to={"/"} activate={activate && activate.toString()}>
            진행중인 이벤트
          </TabBtnLink>
        </TabBtn>
        <TabBtn>
          <TabBtnLink to={"/"} activate={!activate ? activate : ""}>
            당첨자 발표
          </TabBtnLink>
        </TabBtn>
      </Tab>
    </Container>
  );
}

export default BenefitTitle;
