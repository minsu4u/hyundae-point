import React, { useState } from "react";
import {
  BenefitContainer,
  Contents1,
  MatchImgBox,
  QrList,
  Contents2,
  HeadingTitle,
  MatchImgBtn,
  AppDownLoadBtn,
  MatchImg,
  ImgCard,
  ImgEffect,
  PlatformIcon,
  QrImg,
  MatchImgBtns,
} from "./Styled.MainBenefit";

function MainBenefit() {
  const [matchImg, setMatchImg] = useState(1);
  const matchArray = Array.from(Array(4)).fill();
  return (
    <BenefitContainer>
      <Contents1>
        <MatchImgBox>
          <img src="./asset/image/img_sign_benefit0.png" alt="" />
          {matchArray.map((item, idx) => (
            <MatchImg key={idx}>
              <ImgCard
                src={`./asset/image/img_sign_benefit${idx + 1}.png`}
                alt={"imgCard" + idx}
              />
              <ImgEffect
                src={`./asset/image/img_benefit_obj${idx + 1}.png`}
                alt={"imgEffect" + idx}
              />
            </MatchImg>
          ))}
        </MatchImgBox>
        <QrList>
          <PlatformIcon platform="android">
            <QrImg src="./asset/image/img_android_qr.jpg" alt="" />
          </PlatformIcon>
          <PlatformIcon platform="ios">
            <QrImg src="./asset/image/img_ios_qr.jpg" alt="" />
          </PlatformIcon>
        </QrList>
      </Contents1>
      <Contents2>
        <HeadingTitle>
          H.Point APP 다운받고
          <br />
          <span>
            1분만에 <em>7,000P</em>를 겟!
          </span>
        </HeadingTitle>
        <MatchImgBtns>
          <MatchImgBtn icon="ic_benefit1.png">
            APP 첫 로그인
            <br />
            <em>1,000P</em>
          </MatchImgBtn>
          <span>평생회원 동의</span>
          <span>Push ON</span>
          <span>첫 적립 이벤트 참여</span>
        </MatchImgBtns>
        <AppDownLoadBtn>앱다운로드 바로가기</AppDownLoadBtn>
      </Contents2>
    </BenefitContainer>
  );
}

export default MainBenefit;
