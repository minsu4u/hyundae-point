import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./page/Main/Main";
import Stack from "./page/Stack/Stack";
import Benefit from "./page/Benefit/Benefit";
import SubPage from "./page/Stack/SubPage/SubPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <p>헤더</p>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Stack" element={<Stack />} />
          <Route path="/Stack/SubPage/" element={<SubPage />} />
          <Route path="/Benefit" element={<Benefit />} />
        </Routes>
        <p>푸터</p>
      </BrowserRouter>
    </div>
  );
}

export default App;
