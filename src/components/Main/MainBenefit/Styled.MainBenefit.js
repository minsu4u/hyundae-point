import styled, { css } from "styled-components";

export const BenefitContainer = styled.article`
  display: flex;
  justify-content: space-between;
`;
export const Contents1 = styled.div`
  position: relative;
  max-width: 560px;
  width: 46%;
`;
export const MatchImgBox = styled.article`
  position: relative;
`;
export const MatchImg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
`;
export const ImgCard = styled.img`
  z-index: 2;
  position: relative;
`;
export const ImgEffect = styled.img`
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
`;
export const QrList = styled.article`
  position: absolute;
  left: 0;
  bottom: 0;
  & > span:first-child {
    margin-right: 10px;
  }
`;
export const PlatformIcon = styled.span`
  display: inline-block;
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-color: #2e1e6a;
  background-position: center;
  cursor: pointer;
  &:hover {
    & > img {
      opacity: 1;
      visibility: visible;
    }
  }
  ${({ platform }) =>
    platform === "android"
      ? css`
          background-image: url(./asset/image/ic_android.png);
        `
      : css`
          background-image: url(./asset/image/ic_ios.png);
        `}
`;
export const QrImg = styled.img`
  opacity: 0;
  visibility: hidden;
  width: 94px;
  height: 94px;
  border: 3px solid #2e1e6a;
  position: absolute;
  bottom: 70px;
  left: 0;
  cursor: initial;
  transition: all 0.3s;
`;

export const Contents2 = styled.div`
  width: 560px;
`;
export const HeadingTitle = styled.div`
  font-family: "SCDream";
  font-weight: 600;
  font-size: 44px;
  color: #fff;
  white-space: pre-line;
  margin-bottom: 30px;
  & > span {
    color: #fff;
    font-size: 58px;
    & > em {
      color: #fff117;
      font-style: normal;
    }
  }
`;
export const MatchImgBtns = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;
export const MatchImgBtn = styled.span`
  display: inline-block;
  position: relative;
  border-radius: 16px;
  height: 120px;
  width: calc(50% - 10px);
  margin-top: 20px;
  padding-left: 98px;
  padding-top: 30px;
  font-family: "SCDream";
  font-weight: 600;
  font-size: 16px;
  color: #333;
  background-color: #fff;
  transition: border-color 0.2s, background-color 0.15s, box-shadow 0.15s,
    color 0.15s;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: 34px 30px;
  background-position: 40px 45px;
  & > em {
    font-style: normal;
    font-size: 36px;
    font-weight: 800;
    line-height: 1;
  }
  ${({ icon }) =>
    icon &&
    css`
      background-image: url(./asset/image/${icon});
    `}
`;

export const AppDownLoadBtn = styled.button`
  display: block;
  width: 320px;
  margin: 50px auto 0;
  background-color: #fff890;
  color: black;
  font-size: 24px;
  font-family: "SCDream";
  font-weight: 400;
  line-height: 70px;
  border: 0;
  border-radius: 8px;
`;
