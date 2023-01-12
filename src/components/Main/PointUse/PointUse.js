import React from "react";
import {
  PointImg,
  PointImgHeadTxt,
  PointImgSubTxt,
  Pointlist,
  PointlistWrap,
  PointUseContainer,
  SubTitle,
  Title,
} from "./Styled.PointUse";

function PointUse() {
  return (
    <PointUseContainer>
      <Title>
        포인트 쓰기
        <SubTitle>의미 있게 사용하는 가치있는 소비생활</SubTitle>
      </Title>
      <PointlistWrap>
        <Pointlist>
          <PointImg img="img_sect_use1.jpg"></PointImg>
          <PointImgHeadTxt>포인트샵</PointImgHeadTxt>
          <PointImgSubTxt>H.Point로 하는 즐거운 소비생활</PointImgSubTxt>
        </Pointlist>
        <Pointlist>
          <PointImg img="img_sect_use2.jpg"></PointImg>
          <PointImgHeadTxt>포인트기부</PointImgHeadTxt>
          <PointImgSubTxt>기부하는 당신이 세상의 영웅</PointImgSubTxt>
        </Pointlist>
        <Pointlist>
          <PointImg img="img_sect_use3.jpg"></PointImg>
          <PointImgHeadTxt>포인트선물</PointImgHeadTxt>
          <PointImgSubTxt>친구끼리 포인트 선물 어때요?</PointImgSubTxt>
        </Pointlist>
      </PointlistWrap>
    </PointUseContainer>
  );
}

export default PointUse;
