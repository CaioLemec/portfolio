import styled from "styled-components";

export const AboutContainer = styled.div`
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.fontColor};
  width: 100%;
  height: calc(100vh - 80px);
  overflow: hidden;
`;

export const MaxWidthLimitWrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  max-width: 1440px;
`;

export const AboutContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DescriptionAboutWrapper = styled.div`
  margin-top: 80px;
  color: ${(props) => props.theme.colors.fontColor};
  flex: 1;
  flex-direction: column;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 0 30px;
  z-index: 2;

  @media screen and (max-width: 871px) {
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 1000px) {
    flex: 2;
  }

`;

export const DescriptionTitle = styled.div`
  color: ${(props) => props.theme.colors.fontColor};
  text-align: center;
  font-size: 1.5rem;
  text-align: left;
  font-weight: bold;
  margin-bottom: 2rem;

  @media screen and (max-width: 1173px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 375px) {
    font-size: 0.9rem;
  }
`;

export const Description = styled.div`
  color: ${(props) => props.theme.colors.fontColor};
  text-align: center;
  font-size: 1rem;
  text-align: left;
  font-weight: bold;
  margin-bottom: 2rem;

  @media screen and (max-width: 1173px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 0.6rem;
  }

  @media screen and (max-width: 375px) {
    font-size: 0.5rem;
  }
`;

export const WrapperResumeBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const ResumeBtn = styled.a`
  width: 100%;
  text-decoration: none;
  display: flex;
  font-weight: bold;
  font-size: 1.025rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 0;
  height: 3rem;
  border-radius: 0.25rem;
  color: ${(props) => props.theme.colors.contrast};
  background: ${(props) => props.theme.colors.highLight};
  transition: 0.2s;

  &:last-child {
    margin-left: 2rem;
  }

  &:hover {   
    filter: brightness(0.8);
  }
`;


