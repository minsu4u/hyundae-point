import React from "react";
import {
  Container,
  Ent,
  Search,
  SearchInput,
  Total,
} from "./Styled.CustomerInfoSearch";
import { HiOutlineSearch } from "react-icons/hi";

// todo
// 1.총 ??건 갯수 , 검색어 입력 및 이벤트 처리
function CustomerInfoSearch() {
  return (
    <Container>
      <Total>
        <p>
          총 <em>108건</em>
        </p>
      </Total>
      <Search>
        <SearchInput
          type="text"
          placeholder="검색어를 입력해주세요."
        ></SearchInput>
        <Ent>
          <HiOutlineSearch />
        </Ent>
      </Search>
    </Container>
  );
}

export default CustomerInfoSearch;
