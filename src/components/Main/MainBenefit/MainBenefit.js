import React from "react";
import {
  BenefitContainer,
  Contents1,
  MatchImgBox,
  QrList,
  Contents2,
  HeadingTitle,
  MatchImgBtn,
  AppDownLoadBtn,
} from "./Styled.MainBenefit";

function MainBenefit() {
  return (
    <BenefitContainer>
      <Contents1>
        <MatchImgBox></MatchImgBox>
        <QrList></QrList>
      </Contents1>
      <Contents2>
        <HeadingTitle>
          H.Point APP 다운받고
          <br />
          <span>
            1분만에 <em>7,000P</em>를 겟!
          </span>
        </HeadingTitle>
        <MatchImgBtn>
          <span>APP 첫 로그인</span>
          <span>평생회원 동의</span>
          <span>Push ON</span>
          <span>첫 적립 이벤트 참여</span>
        </MatchImgBtn>
        <AppDownLoadBtn>앱다운로드 바로가기</AppDownLoadBtn>
      </Contents2>
    </BenefitContainer>
  );
}

export default MainBenefit;
