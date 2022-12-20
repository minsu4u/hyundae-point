import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import SubPage from "./SubPage/SubPage";

function Stack() {
  return (
    <div>
      Stack
      <button>
        <Link to="SubPage">서브페이지 이동 버튼</Link>
      </button>
      <Routes>
        <Route path="SubPage" element={<SubPage />} />
      </Routes>
    </div>
  );
}

export default Stack;
