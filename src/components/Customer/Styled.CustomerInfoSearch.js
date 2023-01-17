import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
`;
export const Total = styled.div`
  font-size: 18px;
  color: #111;
  & > p {
    & > em {
      font-style: normal;
      font-weight: bold;
    }
  }
`;
export const Search = styled.div`
  position: relative;
  width: 252px;
`;
export const SearchInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 40px 0 20px;
  font-family: "Noto Sans KR";
  font-weight: 700;
  font-size: 16px;
  color: #333;
  padding: 0 20px;
  border: 1px solid #f5f5f5;
  vertical-align: middle;
  background: #f5f5f5;
  border-radius: 8px;
  outline: none;
  &:focus {
    border-color: #4e2bf4;
  }
`;
export const Ent = styled.button`
  border: 0;
  background-color: transparent;
  font-size: 20px;
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
`;
