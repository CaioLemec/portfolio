import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${(props) => props.theme.colors.background};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 1001;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo =
  styled(LinkR) &&
  styled(LinkS)`
    color: ${(props) => props.theme.colors.fontColor};
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
  `;

export const MobileIcon = styled.div`
  display: none;

  &:hover {
    color: ${(props) => props.theme.colors.highLight};
  }

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${(props) => props.theme.colors.fontColor};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: ${(props) => props.theme.colors.fontColor};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:active {
    border-bottom: 3px solid ${(props) => props.theme.colors.fontColor};
  }

  &:hover,
  &.isActive {
    border-bottom: 3px solid ${(props) => props.theme.colors.highLight};
    color: ${(props) => props.theme.colors.highLight};
    font-weight: bold;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.fontColor};

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled.button`
  background: transparent;
  white-space: nowrap;
  padding: 10px;
  color: ${(props) => props.theme.colors.fontColor};
  font-size: 16px;
  outline: none;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${(props) => props.theme.colors.fontColor};
  }
`;
