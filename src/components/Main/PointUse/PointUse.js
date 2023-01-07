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
        <PointlistWrap>
          <Pointlist>
            <PointImg></PointImg>
            <PointImgHeadTxt></PointImgHeadTxt>
            <PointImgSubTxt></PointImgSubTxt>
          </Pointlist>
        </PointlistWrap>
      </Title>
    </PointUseContainer>
  );
}

export default PointUse;
