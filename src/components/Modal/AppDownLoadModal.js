import React, { useState } from "react";
import {
  AppDownLoadContainer,
  AppSend,
  AppSendContainer,
  AppSendNotification,
  ModalCloseBtn,
  ModalContainer,
  ModalHeading,
  Qrcord,
} from "./Styled.AppDownLoadModal";
import { MdClose } from "react-icons/md";

function AppDownLoadModal({ open, close }) {
  const [focus, setFocus] = useState(false);
  const focusHandler = () => {
    setFocus(!focus);
  };
  const modalCloseHandler = () => {
    close(false);
  };
  return (
    <AppDownLoadContainer open={open}>
      <ModalContainer>
        <ModalHeading>
          <h1>H.Point APP 이동하기</h1>
          <p>편리하게 현대백화점그룹을 즐기는 방법 H.Point와 함께하세요!</p>
        </ModalHeading>
        <Qrcord>
          <div>
            <img src="./asset/image/img_android_qr.jpg" alt="android_qr" />
            <p>Android OS</p>
          </div>
          <div>
            <img src="./asset/image/img_ios_qr.jpg" alt="ios_qr" />
            <p>iOS</p>
          </div>
        </Qrcord>
        <AppSendContainer>
          <h2>APP 설치 URL 보내기</h2>
          <AppSend focus={focus}>
            <div>
              <input
                type="text"
                placeholder="휴대폰 번호 입력"
                onFocus={focusHandler}
                onBlur={focusHandler}
              />
              <button>동의 후 전송</button>
            </div>
          </AppSend>
          <AppSendNotification>
            <li>APP 설치 URL 전송을 위해 고객님 휴대폰 번호를 수집합니다.</li>
            <li>수집된 정보는 문자 발송 완료 후 즉시 삭제됩니다.</li>
          </AppSendNotification>
        </AppSendContainer>
        <ModalCloseBtn onClick={modalCloseHandler}>
          <MdClose />
        </ModalCloseBtn>
      </ModalContainer>
    </AppDownLoadContainer>
  );
}

export default AppDownLoadModal;
