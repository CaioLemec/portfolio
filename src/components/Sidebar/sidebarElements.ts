import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa'
import { Link as LinkS } from 'react-scroll';

export const SidebarContainer = styled.nav<{isOpen: boolean}>`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colors.background};
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0' )};
    top: ${({ isOpen}) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: ${props => props.theme.colors.fontColor};

    &:hover {
        color: ${props => props.theme.colors.highLight};
        transition: 0.2s ease-in-out;
    }
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: ${props => props.theme.colors.fontColor};
`

export const SidebarMenu = styled.ul `
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
    }

`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2 ease-in-out;
    color: ${props => props.theme.colors.fontColor};
    cursor: pointer;

    &:hover {
        color: ${props => props.theme.colors.highLight};
        font-weight: bold;
    }
`