import styled from 'styled-components';

export const Nav = styled.nav`
    background: ${props => props.theme.colors.background};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    bottom: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`