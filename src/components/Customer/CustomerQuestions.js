import React from "react";
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
  return (
    <Container>
      <QuestionWrap>
        <Question>
          <Title openState="open">
            <em>[포인트워크]</em> 포인트워크 걷기 미션은 어떻게 하는 건가요?
          </Title>
          <Answer openState="open">
            함께 산책할 귀여운 캐릭터를 선택해주세요! 함께 매일 걷기 하신 후
            포인트워크 메인화면에서 젤리적립을 클릭하면 젤리를 받으실 수
            있습니다! 500보 당 5젤리가 적립됩니다. 매일 자정에 젤리와 걸음수가
            초기화되니, 젤리가 소멸되기 전에 적립해주세요!
          </Answer>
        </Question>
        <Question>
          <Title openState="close">
            <em>[포인트워크]</em> 포인트워크 걷기 미션은 어떻게 하는 건가요?
          </Title>
          <Answer openState="close">
            함께 산책할 귀여운 캐릭터를 선택해주세요! 함께 매일 걷기 하신 후
            포인트워크 메인화면에서 젤리적립을 클릭하면 젤리를 받으실 수
            있습니다! 500보 당 5젤리가 적립됩니다. 매일 자정에 젤리와 걸음수가
            초기화되니, 젤리가 소멸되기 전에 적립해주세요!
          </Answer>
        </Question>
      </QuestionWrap>
    </Container>
  );
}

export default CustomerQuestions;
