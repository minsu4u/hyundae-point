import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppDownLoadModal from "../Modal/AppDownLoadModal";
import { HeaderListData } from "./HeaderListData";
import {
  Logo,
  Nav,
  NavBackground,
  NavBanner,
  NavBottom,
  NavContainer,
  NavHoverBackGround,
  NavMenuContainer,
  NavMenuList,
  NavTop,
  NavTopApp,
  SubMenuList,
} from "./Styled.Header";

function Header({ modalState, setModalState }) {
  const [Hover, setHover] = useState(false);
  // const [modalState, setModalState] = useState(false);
  const hoverStateChangeEvent = () => {
    setHover(true);
  };
  const leaveStateChangeEvent = () => {
    setHover(false);
  };
  const openModalHandler = () => {
    setModalState(true);
    console.log(modalState);
  };
  // todo
  // 1. app 팝업
  // app 버튼을 클릭하면 다음 동작이 이루어 진다.
  // @ 반투명 회색배경, AppDownLoadModal 창이 뜬다.
  // @ ModalClose 버튼을 누르면 창이 닫힌다.
  return (
    <>
      <NavHoverBackGround Hover={Hover} />
      <Nav Hover={Hover} onMouseLeave={leaveStateChangeEvent}>
        <NavContainer>
          <NavTop>
            <ul>
              <li>
                <Link to="/">로그인</Link>
              </li>
              <li>
                <Link to="/">회원가입</Link>
              </li>
              <NavTopApp onClick={openModalHandler}>APP</NavTopApp>
            </ul>
          </NavTop>
          <NavBottom>
            <Logo to="/" />
            <NavMenuContainer onMouseEnter={hoverStateChangeEvent}>
              <NavMenuList>
                {HeaderListData.map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.link} onClick={leaveStateChangeEvent}>
                      {item.title}
                    </Link>
                    {item.sub && (
                      <SubMenuList className="subMenuList">
                        {item.sub.map((item, idx) => (
                          <dd key={idx}>
                            <Link
                              to={item.link}
                              onClick={leaveStateChangeEvent}
                            >
                              {item.title}
                            </Link>
                          </dd>
                        ))}
                      </SubMenuList>
                    )}
                  </li>
                ))}
              </NavMenuList>
            </NavMenuContainer>
          </NavBottom>
        </NavContainer>
        <NavBackground className="navBackGround">
          <NavBanner></NavBanner>
        </NavBackground>
      </Nav>
    </>
  );
}

export default Header;
