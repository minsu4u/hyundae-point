import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Nav = styled.section`
  position: fixed;
  min-width: 280px;
  width: 100%;
  height: 120px;
  background-color: #fff;
  border-bottom: 1px solid #eeeeee;
  transition: border 0.3s;
  z-index: 1;
  ${(props) =>
    props.Hover
      ? css`
          .subMenuList {
            height: 332px;
          }
          .navBackGround {
            height: 640px;
          }
        `
      : css`
          .subMenuList {
            height: 0;
          }
          .navBackGround {
            height: 0;
          }
        `}
`;
export const NavContainer = styled.article`
  position: relative;
  max-width: 1284px;
  height: 100%;
  padding: 0px 30px 0 30px;
  margin: 0 auto;
`;
export const NavTop = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 40px;
  & > ul {
    display: flex;
    font-size: 13px;
    & > li {
      margin-left: 12px;
      & > a {
        color: #999;
      }
    }
  }
`;
export const NavTopApp = styled.li`
  cursor: pointer;
  font-weight: 600;
  color: #4e2bf4;
  background: url("./asset/image/ic_download1.png") no-repeat center right /
    auto;
  padding-right: 10px;
`;
export const NavBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;
export const Logo = styled(Link)`
  display: block;
  width: 90px;
  height: 31px;
  background: url("./asset/image/logo1.png") no-repeat 0 0 / auto;
`;

export const NavMenuContainer = styled.div`
  height: 100%;
`;
export const NavMenuList = styled.ul`
  display: flex;
  font-size: 22px;
  font-family: "SCDream";
  font-weight: 400;
  height: 100%;
  li {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    & > a {
      transition: 0.3s;
      position: relative;
      ::after {
        content: "";
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: transparent;
        position: absolute;
        right: -7px;
        top: 0px;
      }
    }
  }
  li:not(li:last-child) {
    padding-right: 80px;
  }
  li:hover {
    & > a {
      color: #4e2bf4;
      ::after {
        background-color: #4e2bf4;
      }
    }
  }
`;
export const SubMenuList = styled.dl`
  display: block;
  font-weight: 500;
  font-size: 16px;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 100px;
  transition: all 0.3s;
  dd {
    :not(:first-child) {
      margin-top: 20px;
    }
    :hover {
      a {
        color: #4e2bf4;
      }
    }
  }
`;

export const NavBackground = styled.article`
  background-color: #fff;
  max-width: 1920px;
  margin: 0 auto;
  height: 0;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  transition: all 0.5s;
`;
export const NavBanner = styled.div`
  width: 100%;
  height: 140px;
  background: url("./asset/image/H.point_gnbBanner.png") no-repeat center;
`;
export const NavHoverBackGround = styled.div`
  width: 100%;
  background: #000;
  opacity: 0;
  position: fixed;
  transition: all 0.2s;
  ${(props) =>
    props.Hover &&
    css`
      height: 100%;
      opacity: 0.5;
    `}
`;
