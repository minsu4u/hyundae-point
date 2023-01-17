import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: url(./asset/image/ic_caution1.png) no-repeat top center;
  padding-top: 110px;
  padding-bottom: 150px;
  & > p {
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 30px;
    color: #111;
    text-align: center;
  }
`;

function BenefitNullPage() {
  return (
    <Container>
      <p>당첨자 발표가 없습니다.</p>
    </Container>
  );
}

export default BenefitNullPage;
