import React, { useEffect, useState } from "react";
import {
  Answer,
  Container,
  Question,
  QuestionWrap,
  Title,
} from "./Styled.CustomerQuestions";

function CustomerQuestions({ faqData, setFaqData }) {
  // todo
  // 1. 탭 혹은 검색된 데이터 갯수 만큼 Question 생성 데이터 속성별로 타이틀 내용, 앤써 내용 생성
  // 2. 클릭된 게시물만 오픈
  // 2-1. 클릭된 게시물 구분 방법
  // 클릭 시 다른 게시물이 열려있으면 닫히고 클릭한 게시물만 열림.
  // 열린 게시물을 클릭하면 닫힘.

  const clickStateHandler = (e, idx) => {
    // let selectTarget = e.currentTarget;
    // selectTarget.parentElement.removeAttribute("style");
    // selectTarget.parentElement.style = `height: ${selectTarget.offsetHeight}px;`;
    // setTimeout(() => {
    //   console.log(selectTarget);
    //   selectTarget.parentElement.style = `height: ${
    //     selectTarget.offsetHeight + selectTarget.nextElementSibling.offsetHeight
    //   }px;`;
    // }, 1000);

    const currentId = e.currentTarget.id;
    const selectItem = faqData.filter((obj) => obj.id === currentId);
    const openClose = faqData[idx].st === "open" ? "close" : "open";
    console.log(faqData.filter((obj) => obj.id === currentId));

    let copyItem = faqData.map((item) =>
      item.id !== selectItem[0].id
        ? { ...item, st: "close" }
        : { ...item, st: openClose }
    );
    setFaqData(copyItem);
  };

  return (
    <Container>
      <QuestionWrap>
        {faqData.map((item, idx) => (
          <Question data-sel="queDom" className="queDom">
            <Title
              id={item.id}
              openValue={item.st}
              onClick={(e) => clickStateHandler(e, idx)}
            >
              <em>[{item.category}]</em> {item.que}
            </Title>
            <Answer openValue={item.st}>{item.ans}</Answer>
          </Question>
        ))}
      </QuestionWrap>
    </Container>
  );
}

export default CustomerQuestions;
