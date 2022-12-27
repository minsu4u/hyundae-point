import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import SubPage from "./SubPage/SubPage";

function Stack() {
  return (
    <div>
      Stack
      <button>
        <Link to="/Stack/SubPage">서브페이지 이동 버튼</Link>
      </button>
      {/* <Outlet /> */}
      <Routes>
        <Route path=":subname" element={<SubPage />} />
      </Routes>
    </div>
  );
}

export default Stack;
