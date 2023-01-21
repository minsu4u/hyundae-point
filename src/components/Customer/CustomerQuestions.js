import React, { useRef, useState } from "react";
import {
  Answer,
  Container,
  Question,
  QuestionWrap,
  Title,
} from "./Styled.CustomerQuestions";

function CustomerQuestions() {
  // todo
  // 1. 탭 혹은 검색된 데이터 갯수 만큼 Question 생성 데이터 속성별로 타이틀 내용, 앤써 내용 생성
  // 2. 클릭된 게시물만 오픈
  // 2-1. 클릭된 게시물 구분 방법
  // 클릭 시 다른 게시물이 열려있으면 닫히고 클릭한 게시물만 열림.
  // 열린 게시물을 클릭하면 닫힘.
  const mock = [
    {
      id: 1,
      name: "close",
    },
    {
      id: 2,
      name: "close",
    },
    {
      id: 3,
      name: "close",
    },
  ];
  const [changeData, setChangeData] = useState(mock);
  const [openCloseState, setOpenCloseState] = useState(false);
  const [openState, setOpenState] = useState(1);

  const clickStateHandler = (e) => {
    const idx = parseInt(e.currentTarget.id);
    const selectItem = changeData.filter((obj) => obj.id === idx);
    const openClose = changeData[idx - 1].name === "open" ? "close" : "open";
    let copyItem = changeData.map((item) =>
      item.id !== selectItem[0].id
        ? { ...item, name: "close" }
        : { ...item, name: openClose }
    );
    setChangeData(copyItem);
  };

  return (
    <Container>
      <QuestionWrap>
        {changeData.map((item, idx) => (
          <Question>
            <Title
              id={idx + 1}
              openValue={item.name}
              data-open="close"
              onClick={(e) => clickStateHandler(e)}
            >
              <em>[{item.name}]</em> 포인트워크 걷기 미션은 어떻게 하는 건가요?
            </Title>
            <Answer>
              함께 산책할 귀여운 캐릭터를 선택해주세요! 함께 매일 걷기 하신 후
              포인트워크 메인화면에서 젤리적립을 클릭하면 젤리를 받으실 수
              있습니다! 500보 당 5젤리가 적립됩니다. 매일 자정에 젤리와 걸음수가
              초기화되니, 젤리가 소멸되기 전에 적립해주세요!
            </Answer>
          </Question>
        ))}
        {/* <Question>
          <Title id="1" data-open="close" onClick={clickStateHandler}>
            <em>[포인트워크]</em> 포인트워크 걷기 미션은 어떻게 하는 건가요?
          </Title>
          <Answer>
            함께 산책할 귀여운 캐릭터를 선택해주세요! 함께 매일 걷기 하신 후
            포인트워크 메인화면에서 젤리적립을 클릭하면 젤리를 받으실 수
            있습니다! 500보 당 5젤리가 적립됩니다. 매일 자정에 젤리와 걸음수가
            초기화되니, 젤리가 소멸되기 전에 적립해주세요!
          </Answer>
        </Question>
        <Question>
          <Title id="2" data-open="close" onClick={clickStateHandler}>
            <em>[포인트워크]</em> 포인트워크 걷기 미션은 어떻게 하는 건가요?
          </Title>
          <Answer>
            함께 산책할 귀여운 캐릭터를 선택해주세요! 함께 매일 걷기 하신 후
            포인트워크 메인화면에서 젤리적립을 클릭하면 젤리를 받으실 수
            있습니다! 500보 당 5젤리가 적립됩니다. 매일 자정에 젤리와 걸음수가
            초기화되니, 젤리가 소멸되기 전에 적립해주세요!
          </Answer>
        </Question> */}
      </QuestionWrap>
    </Container>
  );
}

export default CustomerQuestions;
