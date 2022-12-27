import styled, { css } from "styled-components";

export const AppDownLoadContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s;
  left: 0;
  top: 0;
  z-index: 1;
  ${(props) =>
    props.open &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`;

export const ModalContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 60px);
  max-width: 600px;
  border-radius: 25px;
  padding: 55px;
  background-color: #fff;
`;
export const ModalHeading = styled.div`
  margin-bottom: 45px;
  & > * {
    font-family: "SCDream";
  }
  & > h1 {
    font-size: 28px;
    margin-bottom: 20px;
  }
  & > p {
    font-size: 16px;
    color: #999;
  }
`;
export const Qrcord = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 53px;
  & > div {
    border: 1px solid #ccc;
    border-radius: 16px;
    width: calc(50% - 17.5px);
    height: 235px;
    & > img {
      margin: 40px auto 25px;
      display: block;
    }
    & > p {
      text-align: center;
      font-size: 22px;
      color: #111;
      font-weight: 700;
    }
  }
`;
export const AppSendContainer = styled.div`
  & > h2 {
    font-size: 22px;
    margin-bottom: 25px;
  }
`;
export const AppSend = styled.div`
  margin-bottom: 25px;
  & > div {
    display: flex;
    align-items: center;
    position: relative;
    background: #f5f5f5;
    border: 1px solid #f5f5f5;
    border-radius: 8px;
    height: 70px;
    padding: 0 30px;
    & > input {
      font-size: 18px;
      border: 0;
      display: inline-block;
      width: 100%;
      height: 100%;
      font-weight: 400;
      color: #111;
      background: transparent;
      &:focus {
        outline: none;
      }
      &::placeholder {
      }
    }
    & > button {
      width: 148px;
      color: #fff;
      font-size: 18px;
      font-weight: 600;
      text-align: center;
      line-height: 40px;
      background: #4e2bf4;
      border-radius: 8px;
      border: 0;
    }
  }
  ${(props) =>
    props.focus &&
    css`
      & > div {
        border-color: #4e2bf4;
        background: #fff;
      }
    `}
`;
export const AppSendNotification = styled.ul`
  & > li {
    font-size: 16px;
    color: #767676;
    position: relative;
    padding-left: 12px;
    :first-child {
      margin-bottom: 8px;
    }
    ::before {
      content: "";
      position: absolute;
      left: 0;
      top: 10px;
      width: 4px;
      height: 4px;
      background: #999;
      border-radius: 50%;
    }
  }
`;
export const ModalCloseBtn = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 35px;
  height: 35px;
  border: 0;
  font-size: 35px;
  background-color: transparent;
  cursor: pointer;
  & > svg {
    display: block;
  }
`;
