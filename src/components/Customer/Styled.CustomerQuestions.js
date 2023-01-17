import styled from "styled-components";

export const Container = styled.article`
  margin-bottom: 80px;
`;
export const QuestionWrap = styled.ul``;
export const Question = styled.li`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 0 40px;
  font-family: "Noto Sans KR";
  font-weight: 700;
  font-size: 20px;
  letter-spacing: -0.5px;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  & > p::before {
    display: inline-block;
    position: absolute;
    left: 0;

    width: 32px;
    height: 32px;
    font-family: "SCDream";
    font-weight: 400;
    font-size: 15px;
    color: #fff;
    text-align: center;
    line-height: 32px;
    border-radius: 8px;
  }
`;
export const Title = styled.p`
  padding: 25px 0 25px 60px;
  position: relative;
  & > em {
    font-style: normal;
    color: #603de3;
    margin-right: 10px;
  }
  &::before {
    content: "Q";
    background-color: ${({ openState }) =>
      openState === "open" ? "#603de3" : "#999"};
    top: 25px;
  }
`;
export const Answer = styled.p`
  display: ${({ openState }) => (openState === "open" ? "block" : "none")};
  padding: 32px 0 50px 60px;
  position: relative;
  font-family: "Noto Sans KR";
  font-weight: 400;
  font-size: 18px;
  line-height: 34px;
  letter-spacing: -0.8px;
  &::before {
    content: "A";
    background-color: #ff481e;
    top: 32px;
  }
`;
