import React from "react";
import {
  CardLink,
  CardTxtH1,
  CardTxtp,
  Container,
  SimpieCard,
  SimpieCardWrap,
} from "./Styled.CustomerSimpleCard";
import { CgChevronRightO } from "react-icons/cg";
import { IoChatbubbleSharp } from "react-icons/io5";

function CustomerSimpleCard() {
  return (
    <Container>
      <SimpieCardWrap>
        <SimpieCard>
          <CardLink to="">
            <CardTxtH1>
              <span>유선문의</span>
              <span>1800-2800</span>
            </CardTxtH1>
            <CardTxtp>
              <span>운영시간</span>
              <span>9:00 ~ 18:00</span>
            </CardTxtp>
          </CardLink>
        </SimpieCard>
        <SimpieCard>
          <CardLink to="">
            <CardTxtH1>
              <span>고객센터</span>
              <span>
                1:1 문의 <CgChevronRightO />
              </span>
            </CardTxtH1>
            <CardTxtp>
              <span>24시간 접수 가능</span>
            </CardTxtp>
          </CardLink>
        </SimpieCard>
        <SimpieCard>
          <CardLink to="" className="kakao">
            <IoChatbubbleSharp />
            <CardTxtH1>
              <span>카카오</span>
              <span>
                상담톡 문의 <CgChevronRightO />
              </span>
            </CardTxtH1>
            <CardTxtp>
              <span>별도의 앱 설치 없이</span>
              <span>실시간으로 간편하게 상담</span>
            </CardTxtp>
          </CardLink>
        </SimpieCard>
      </SimpieCardWrap>
    </Container>
  );
}

export default CustomerSimpleCard;
