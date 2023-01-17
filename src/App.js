import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Main from "./page/Main/Main";
import Customer from "./page/Customer/Customer";
import Benefit from "./page/Benefit/Benefit";
import GlobalStyle, { Container } from "./GlobalStyle";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import AppDownLoadModal from "./components/Modal/AppDownLoadModal";
import QuikBar from "./components/QuikBar/QuikBar";
import ScrollTopBtn from "./components/ScrollTopBtn/ScrollTopBtn";

function App() {
  const [modalState, setModalState] = useState(false);
  const [scrollTopBtnState, setScrollTopBtnState] = useState(false);

  //   이벤트
  // 버튼 노출
  // 1. scrolltop이 화면 높이 보다 크면 스크롤버튼 보이기
  // 대상: window
  // 시점: scroll
  // 방법: if
  // 조건: window.screenY > window.innerHeight
  // 값: setScrollTopBtnState(true)
  useEffect(() => {
    const scrollBtnShowHandler = () => {
      if (window.scrollY > 600) {
        setScrollTopBtnState(true);
      } else {
        setScrollTopBtnState(false);
      }
    };
    window.addEventListener("scroll", scrollBtnShowHandler);
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Header modalState={modalState} setModalState={setModalState} />
        <Container>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Benefit/*" element={<Benefit />} />
            <Route path="/Customer/*" element={<Customer />} />
          </Routes>
        </Container>
        <Footer />
        <AppDownLoadModal open={modalState} close={setModalState} />
        <QuikBar />
        <ScrollTopBtn scrollTopBtnState={scrollTopBtnState} />
      </BrowserRouter>
    </div>
  );
}

export default App;
