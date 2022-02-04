import styled from "styled-components";

export const SocialBtnWrapper = styled.div `
    display: flex;
    font-size: 30px;
    color: ${props => props.theme.colors.fontColor};
    align-items: center;
`

export const SocialBtnLink = styled.a`
    color: ${props => props.theme.colors.fontColor};
    margin-right: 1.5rem;
    transform: translateY(25%);

    &:first-child {
        margin-left: 0;
    }

    &:last-child {
        margin-right: 0;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        color: ${props => props.theme.colors.highLight};
    }
`