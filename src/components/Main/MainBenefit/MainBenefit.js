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
  MatchImgBtnActive,
} from "./Styled.MainBenefit";

function MainBenefit() {
  const [clickIdx, setClickIdx] = useState(1);
  const matchArray = Array.from(Array(4)).fill();
  const MatchImgBtnData = [
    {
      id: 1,
      txt: "APP 첫 로그인",
      point: "1,000P",
      icon: "benefit1.png",
    },
    {
      id: 2,
      txt: "평생회원 동의",
      point: "1,000P",
      icon: "benefit2.png",
    },
    {
      id: 3,
      txt: "Push ON",
      point: "2,000P",
      icon: "benefit3.png",
    },
    {
      id: 4,
      txt: "첫 적립 이벤트 참여",
      point: "3,000P",
      icon: "benefit4.png",
    },
  ];
  const btnClickHandler = (e) => {
    const num = parseInt(e.currentTarget.id);
    setClickIdx(num);
  };
  return (
    <BenefitContainer>
      <Contents1>
        <MatchImgBox>
          <img src="./asset/image/img_sign_benefit0.png" alt="" />
          {matchArray.map((item, idx) => (
            <MatchImg key={idx} clickOpacity={clickIdx === idx + 1}>
              <ImgCard
                src={`./asset/image/img_sign_benefit${idx + 1}.png`}
                alt={"imgCard" + idx}
              />
              <ImgEffect
                src={`./asset/image/img_benefit_obj${idx + 1}.png`}
                alt={"imgEffect" + idx}
                clickAni={clickIdx === idx + 1}
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
          {MatchImgBtnData.map((item, idx) =>
            item.id === clickIdx ? (
              <MatchImgBtnActive
                id={item.id}
                key={item.id}
                icon={item.icon}
                onClick={btnClickHandler}
              >
                {item.txt}
                <br />
                <em>{item.point}</em>
              </MatchImgBtnActive>
            ) : (
              <MatchImgBtn
                id={item.id}
                key={item.id}
                icon={item.icon}
                onClick={btnClickHandler}
              >
                {item.txt}
                <br />
                <em>{item.point}</em>
              </MatchImgBtn>
            )
          )}
        </MatchImgBtns>
        <AppDownLoadBtn>앱다운로드 바로가기</AppDownLoadBtn>
      </Contents2>
    </BenefitContainer>
  );
}

export default MainBenefit;
