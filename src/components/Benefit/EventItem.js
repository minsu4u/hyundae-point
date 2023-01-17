import React, { useState } from "react";
import BenefitNullPage from "./BenefitNullPage";
import {
  Container,
  Dday,
  EventLink,
  Img,
  ImgBox,
  TxtBox,
} from "./Styled.EventItem";

function EventItem({
  eventData,
  filterData,
  filterState,
  offset,
  limit,
  setDataLength,
}) {
  const changeData = (stateStr) => {
    switch (stateStr) {
      case "제휴사별":
        return eventData;
      case filterState:
        return filterData;
      default:
        return eventData;
    }
  };
  const newData = changeData(filterState);
  setDataLength(newData.length);
  console.log(newData);
  return (
    <Container>
      {newData.length !== 0 ? (
        newData.slice(offset, offset + limit).map((item, idx) => (
          <EventLink key={item.id}>
            <ImgBox className="imgBox">
              <img src={"./asset/image/ratio_event.gif"} alt="" />
              <Img img={item.img}></Img>
            </ImgBox>
            <Dday>
              {item.dDayNum === "상시" ? "상시" : `D-${item.dDayNum}`}
            </Dday>
            <TxtBox>
              <h2>{item.title}</h2>
              <p>
                {item.startDay} ~ {item.endDay}
              </p>
            </TxtBox>
          </EventLink>
        ))
      ) : (
        <BenefitNullPage />
      )}
    </Container>
  );
}

export default EventItem;
