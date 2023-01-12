import React from "react";
import {
  Category,
  Container,
  InnerContainer,
  ProgressState,
  SearchBar,
  Selects,
} from "./Styled.BenefitTopInfo";
import { HiOutlineSearch } from "react-icons/hi";

function BenefitTopInfo({ total, eventData, setEventData }) {
  const categoryHandler = ({ target: { value } }) => {
    const val = eventData.filter(
      (item) => value.includes(item.category) === true
    );
    console.log(value);
  };
  return (
    <Container>
      <ProgressState>
        진행중인 이벤트 <em>{total}건</em>
      </ProgressState>
      <Category>
        <Selects>
          <select onChange={categoryHandler}>
            <option selected>제휴사별</option>
            <option value="백화점/아울렛/더현대닷컴">
              백화점/아울렛/더현대닷컴
            </option>
            <option value="현대Hmall/현대홈쇼핑">현대Hmall/현대홈쇼핑</option>
            <option value="현대백화점 면세점">현대백화점 면세점</option>
            <option value="리바트/H위크몰">리바트/H위크몰</option>
            <option value="한섬">한섬</option>
            <option value="현대그린푸드">현대그린푸드</option>
            <option value="현대렌탈케어">현대렌탈케어</option>
            <option value="현대드림투어">현대드림투어</option>
            <option value="hpoint">H.Point</option>
          </select>
        </Selects>
        <SearchBar>
          <input type="text" placeholder="검색어 입력" />
          <button>
            <HiOutlineSearch />
          </button>
        </SearchBar>
      </Category>
    </Container>
  );
}

export default BenefitTopInfo;
