import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterSection = styled.footer`
  position: relative;
  width: 100%;
  min-width: 280px;
  height: auto;
  background: #fff;
  border-top: 1px solid #e6e6e6;
  padding: 45px 0 60px;
`;
export const FooterContiner = styled.article`
  position: relative;
  max-width: 1284px;
  min-width: 280px;
  padding: 0 30px;
  margin: 0 auto;
  display: flex;
`;
export const FooterLogo = styled(Link)`
  width: 149px;
  height: 50px;
  display: block;
  background: url("./asset/image/logo2.png") no-repeat center;
  margin-right: 60px;
`;
export const FooterMenuEtc = styled.div``;
export const FooterMenu = styled.ul`
  display: flex;
  margin-bottom: 25px;
  & > li {
    margin-right: 35px;
    & > a {
      font-weight: 400;
      font-size: 16px;
      color: #333;
    }
    &:nth-child(3) > a {
      font-weight: 700;
    }
  }
`;
export const FooterEtc = styled.ul`
  & > li {
    font-weight: 400;
    font-size: 14px;
    color: #999;
    & > dl {
      & > dd {
        font-weight: 400;
        font-size: 14px;
        color: #999;
        position: relative;
        :not(:last-child) {
          margin-right: 10px;
          padding-right: 12px;
          ::before {
            content: "";
            display: block;
            position: absolute;
            right: 0;
            top: 50%;
            width: 2px;
            height: 2px;
            background: #999;
          }
        }
      }
    }
    :first-child {
      margin-bottom: 25px;
    }
  }
  & > li > dl {
    display: flex;
  }
`;

export const FooterSns = styled.ul`
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  & > li {
    &:not(:last-child) {
      margin-right: 10px;
    }
    & > a {
      display: block;
      width: 35px;
      height: 35px;
      background: no-repeat center;
    }
  }
`;
export const Youtube = styled(Link)`
  background-image: url("./asset/image/ft_sns_youtube.png") !important;
`;
export const Kakao = styled(Link)`
  background-image: url("./asset/image/ft_sns_kakao.png") !important;
`;
export const Instargram = styled(Link)`
  background-image: url("./asset/image/ft_sns_instagram.png") !important;
`;
