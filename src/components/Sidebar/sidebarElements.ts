import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.nav<{ isOpen: boolean }>`
  position: fixed;
  z-index: 1005;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.background};
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: ${(props) => props.theme.colors.fontColor};

  &:hover {
    color: ${(props) => props.theme.colors.highLight};
    transition: 0.2s ease-in-out;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: ${(props) => props.theme.colors.fontColor};
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2 ease-in-out;
  color: ${(props) => props.theme.colors.fontColor};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.highLight};
    font-weight: bold;
  }
`;

export const SidebarFooter = styled.p`
  position: absolute;
  bottom: 1rem;
  margin: 0 auto;
  width: 100%;
  font-size: 0.9rem;
`;

export const SidebarBtn = styled.nav`
  position: absolute;
  top: 1rem;
  width: 100%;
  right: -1.5rem;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  color: ${(props) => props.theme.colors.fontColor};
`;

export const SidebarBtnLink = styled.button`
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
