import React from "react";
import { Nav, NavBtn, NavContainer } from "./Styled.BenefitPagination";

function BenefitPagination({ total, limit, page, setPage }) {
  const numOfPages = Math.ceil(total / limit);
  console.log(Array(numOfPages).fill());
  return (
    <Nav>
      <NavContainer>
        {Array(numOfPages)
          .fill()
          .map((_, idx) => (
            <NavBtn key={idx + 1}>
              <button
                onClick={() => setPage(idx + 1)}
                aria-current={page === idx + 1 ? "page" : null}
              >
                {idx + 1}
              </button>
            </NavBtn>
          ))}
      </NavContainer>
    </Nav>
  );
}

export default BenefitPagination;
