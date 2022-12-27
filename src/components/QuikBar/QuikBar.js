import React from "react";
import {
  Quick,
  QuickCustomer,
  QuickEvent,
  QuickJoin,
  QuikBarContainer,
  QuikBarMenu,
  QuikBarSection,
} from "./Styled.QuikBar";
import { VscSmiley } from "react-icons/vsc";
import { SlLogin } from "react-icons/sl";
import {
  RiDownloadLine,
  RiCalendarEventFill,
  RiCustomerService2Fill,
} from "react-icons/ri";

function QuikBar() {
  // html 구조
  // QuikBarSection(aside)>QuikBarContainer(div)>Quick(div)+QuikBarMenu(ul)>li>Link
  return (
    <QuikBarSection>
      <QuikBarContainer>
        <Quick>
          <VscSmiley />
          Quick
        </Quick>
        <QuikBarMenu>
          <li>
            <QuickJoin to="/">
              <SlLogin />
              Join
            </QuickJoin>
          </li>
          <li>
            <QuickJoin to="/">
              <RiDownloadLine />
              앱다운
            </QuickJoin>
          </li>
          <li>
            <QuickEvent to="/">
              <RiCalendarEventFill />
              이벤트
            </QuickEvent>
          </li>
          <li>
            <QuickCustomer to="/">
              <RiCustomerService2Fill />
              고객센터
            </QuickCustomer>
          </li>
        </QuikBarMenu>
      </QuikBarContainer>
    </QuikBarSection>
  );
}

export default QuikBar;
