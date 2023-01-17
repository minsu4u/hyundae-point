import React from "react";
import { Category, CategoryWrap, Container } from "./Styled.CustomerCategory";

function CustomerCategory({ tabTitle, innerActivate, setInnerActivate }) {
  const tabClickHandler = (e) => {
    const val = parseInt(e.currentTarget.id);
    setInnerActivate(val);
  };
  const holdingVal = (idx) => (innerActivate === idx ? "true" : "");
  // todo
  // 1.탭 별 총 ??갯수 갱신, 탭 상태 갱신

  return (
    <Container>
      <CategoryWrap>
        {tabTitle.map((item, idx) => (
          <Category
            key={idx + 1}
            id={idx + 1}
            holding={holdingVal(idx + 1)}
            onClick={tabClickHandler}
          >
            <span>{item}</span>
          </Category>
        ))}
      </CategoryWrap>
    </Container>
  );
}

export default CustomerCategory;
