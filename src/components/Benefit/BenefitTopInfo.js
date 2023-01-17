import React from "react";
import {
  Category,
  Container,
  ProgressState,
  SearchBar,
  Selects,
} from "./Styled.BenefitTopInfo";
import { HiOutlineSearch } from "react-icons/hi";

function BenefitTopInfo({
  total,
  eventData,
  filterData,
  searchState,
  setFilterState,
  setFilterData,
  setSearchState,
}) {
  // const categoryHandler = ({ target: { value } }) => {
  const categoryHandler = (elmVal) => {
    const valueType = typeof elmVal === "string" ? elmVal : elmVal.target.value;
    const val = eventData.filter(
      (item) => item.category.includes(valueType) === true
    );
    setFilterState(valueType);
    setFilterData(val);
    console.log(val);
  };
  const onChangeHandler = (e) => {
    setSearchState(e.target.value.toLowerCase());
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
          <input
            type="text"
            placeholder="검색어 입력"
            onChange={onChangeHandler}
          />
          <button onClick={() => categoryHandler(searchState)}>
            <HiOutlineSearch />
          </button>
        </SearchBar>
      </Category>
    </Container>
  );
}

export default BenefitTopInfo;
