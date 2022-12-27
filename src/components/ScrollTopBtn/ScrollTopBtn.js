import React from "react";
import { FaAngleUp } from "react-icons/fa";
import { ScrollBtn } from "./Styled.ScrollTopBtn";

function ScrollTopBtn() {
  // html 구조
  //   ScrollBtn(div)>FaAngleUp(svg)

  //   이벤트
  // 버튼 클릭
  // 1. ScrollBtn 클릭시 scroll 0으로 위치
  // 대상: window
  // 시점: click
  // 방법: window.scroll
  // 조건:
  // 값: top : 0
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <ScrollBtn onClick={scrollToTop}>
      <FaAngleUp />
    </ScrollBtn>
  );
}

export default ScrollTopBtn;
