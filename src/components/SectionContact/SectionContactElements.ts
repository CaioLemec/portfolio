import styled from "styled-components";

export const HeroContainer = styled.div`
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.fontColor};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;
`
