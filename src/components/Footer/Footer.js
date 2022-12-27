import React from "react";
import { Link } from "react-router-dom";
import {
  FooterContiner,
  FooterEtc,
  FooterLogo,
  FooterMenu,
  FooterMenuEtc,
  FooterSection,
  FooterSns,
  Instargram,
  Kakao,
  Youtube,
} from "./Styled.Footer";

function Footer() {
  return (
    <FooterSection>
      <FooterContiner>
        <FooterLogo to="/" />
        <FooterMenuEtc>
          <FooterMenu>
            <li>
              <Link to="/">이용약관</Link>
            </li>
            <li>
              <Link to="/">위치기반서비스 이용약관</Link>
            </li>
            <li>
              <Link to="/">개인정보처리방침</Link>
            </li>
            <li>
              <Link to="/">개인정보보호센터</Link>
            </li>
          </FooterMenu>
          <FooterEtc>
            <li>
              <dl>
                <dd>주식회사 현대백화점</dd>
                <dd>서울시 강남구 테헤란로98길 12</dd>
                <dd>고객센터 1800-2800</dd>
              </dl>
            </li>
            <li>
              © HYUNDAI DEPARTMENT STORE GROUP Co. Ltd. ALL RIGHTS RESERVED
            </li>
          </FooterEtc>
        </FooterMenuEtc>
        <FooterSns>
          <li>
            <Youtube to="/" />
          </li>
          <li>
            <Kakao to="/" />
          </li>
          <li>
            <Instargram to="/" />
          </li>
        </FooterSns>
      </FooterContiner>
    </FooterSection>
  );
}

export default Footer;
