import React from "react";
import {
  Container,
  H1Txt,
  H2Txt,
  Tab,
  TabBtn,
  TabBtnLink,
} from "./Styled.BenefitTitle";

function BenefitTitle({ activate, setActivate }) {
  return (
    <Container>
      <H1Txt>이벤트</H1Txt>
      <H2Txt>특별한 이벤트, 매일매일 즐거운 혜택</H2Txt>
      <Tab>
        <TabBtn>
          <TabBtnLink
            to={"/benefit"}
            activate={activate === 1 ? "true" : ""}
            id="1"
            onClick={(e) => setActivate(parseInt(e.target.id))}
          >
            진행중인 이벤트
          </TabBtnLink>
        </TabBtn>
        <TabBtn>
          <TabBtnLink
            to={"/benefit"}
            activate={activate === 2 ? "true" : ""}
            id="2"
            onClick={(e) => setActivate(parseInt(e.target.id))}
          >
            당첨자 발표
          </TabBtnLink>
        </TabBtn>
      </Tab>
    </Container>
  );
}

export default BenefitTitle;
