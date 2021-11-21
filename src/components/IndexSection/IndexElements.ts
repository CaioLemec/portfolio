import styled from "styled-components";

export const HeroContainer = styled.div`
    background: ${props => props.theme.colors.background};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    -o-object-fit: cover;
    background: ${props => props.theme.colors.background};
`

export const HeroContent = styled.div `
    z-index: 3;
    margin-top: 80px;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.div `
    color: ${props => props.theme.colors.fontColor};
    font-size: 4rem;
    text-align: center;
    font-weight: bold;

    @media screen and (max-width: 768px) {
       font-size: 3rem; 
    }

    @media screen and (max-width: 480px) {
       font-size: 2rem; 
    }
`

export const HeroP = styled.div `
    margin-top: 2rem;
    color: ${props => props.theme.colors.fontColor};
    font-size: 1.5rem;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
       font-size: 1.5rem; 
    }

    @media screen and (max-width: 480px) {
       font-size: 1rem; 
    }
`

export const HeroBtnWrapper = styled.div `
    margin-top: 2rem;
    display: flex;
    font-size: 30px;
    color: ${props => props.theme.colors.fontColor};
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
`

export const LinkBtnSocial = styled.a`
    color: ${props => props.theme.colors.fontColor};
    margin-right: 2rem;

    &:last-child {
        margin-right: 0;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        color: ${props => props.theme.colors.highLight};
    }
`

export const HeroDownloadResumeWrapper = styled.div `
    margin-top: 1rem;
    display: flex;
    font-size: 30px;
    color: ${props => props.theme.colors.fontColor};
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
`

export const LinkDownloadResume = styled.a`
    color: ${props => props.theme.colors.fontColor};
    font-size: 1rem;
    padding: 1rem 2rem;
    border-radius: 50px;
    background: ${props => props.theme.colors.highLight};
    font-weight: bold;
    cursor: pointer;
    transition: filter 0.2s ease-in-out;

    &:first-child {
        margin-right: 1rem;
    }

    &:active {
        transform: scale(0.9);
    }

    &:hover {
        filter: brightness(0.8);
        color: ${props => props.theme.colors.contrast};
        font-weight: bold;
    }
`


