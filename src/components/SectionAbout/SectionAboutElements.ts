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

export const Description = styled.div`
  color: ${(props) => props.theme.colors.fontColor};
  text-align: center;
  font-size: 1rem;
  text-align: left;
  font-weight: bold;

  @media screen and (max-width: 1173px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 375px) {
    font-size: 1rem;
  }
`;

