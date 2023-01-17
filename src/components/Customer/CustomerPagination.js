import React from "react";
import {
  NextBtn,
  PageNum,
  PaginationWrap,
  PrevBtn,
  Container,
} from "./Styled.CustomerPagination";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function CustomerPagination() {
  // todo
  // 1. 검색 또는 필터된 데이터 갯수 기반 페이지 넘버 생성 페이지 갯수 10이상 일때 next 보임 10페이지 넘었은 상태에서 10페이지 이상 페이지가 있으면  next , prev 보임 아니면 next 안보이고, prev 만 보임.
  //2. 페이지 번호 누르면 게시물 10개 단위로 랜더
  // 3. prev next 방향키 누르면 페이지 번호 10+1개 단위로 변경 게시물도 해당 페이지에 맞게 랜더
  return (
    <Container>
      <PrevBtn>
        <BiChevronLeft />
      </PrevBtn>
      <PaginationWrap>
        <PageNum aria-current={/* page === idx + 1 ? "page" : null */ "page"}>
          1
        </PageNum>
        <PageNum aria-current={null}>2</PageNum>
        <PageNum aria-current={null}>3</PageNum>
      </PaginationWrap>
      <NextBtn>
        <BiChevronRight />
      </NextBtn>
    </Container>
  );
}

export default CustomerPagination;
