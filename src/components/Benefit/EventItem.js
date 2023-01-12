import React, { useState } from "react";
import {
  Container,
  Dday,
  EventLink,
  Img,
  ImgBox,
  TxtBox,
} from "./Styled.EventItem";

function EventItem({ eventData, offset, limit }) {
  const prevEndDays = eventData.map((item) => item.endDay);
  const endDays = prevEndDays.map((item) => item.replaceAll(".", "-"));

  const DdayFn = endDays.map((item) => {
    const today = new Date();
    const dDay = new Date(`${item} 00:00:00`);
    const gapNum = dDay - today;
    const dDayNum = Math.ceil(gapNum / (1000 * 60 * 60 * 24));

    return item === "2023-12-31" ? "상시" : dDayNum;
  });

  const eventDataAddDday = eventData.map((item, idx) => ({
    ...item,
    dDayNum: DdayFn[idx],
  }));

  return (
    <Container>
      {eventDataAddDday.slice(offset, offset + limit).map((item, idx) => (
        <EventLink key={item.id}>
          <ImgBox className="imgBox">
            <img src={"./asset/image/ratio_event.gif"} alt="" />
            <Img img={item.img}></Img>
          </ImgBox>
          <Dday>{item.dDayNum === "상시" ? "상시" : `D-${DdayFn[idx]}`}</Dday>
          <TxtBox>
            <h2>{item.title}</h2>
            <p>
              {item.startDay} ~ {item.endDay}
            </p>
          </TxtBox>
        </EventLink>
      ))}
    </Container>
  );
}

export default EventItem;
