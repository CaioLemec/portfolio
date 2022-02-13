import styled from "styled-components";

export const AboutContainer = styled.div`
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.fontColor};
  width: 100%;
  height: calc(100vh + 80px);
  position: relative;
`;

export const MaxWidthLimitWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0 30px;
  max-width: 1440px;
`;

export const AboutBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
  background: ${(props) => props.theme.colors.background};
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
  font-size: 4rem;
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

export const SubDescriptionTitle = styled.div`
  color: ${(props) => props.theme.colors.fontColor};
  font-size: 2rem;
  opacity: 0.8;
  text-align: left;
  font-weight: bold;
  margin: 10px 0;

  @media screen and (max-width: 1000px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 375px) {
    font-size: 0.8rem;
  }
`;

export const MyPictureWrapper = styled.div`
  margin-top: 80px;
  margin-bottom: 80px;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.fontColor};
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;

  @media screen and (max-width: 871px) {
    display: none;
  }
`;

export const MyPictureContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 6px;
  background: ${(props) => props.theme.colors.background};
  border-radius: 100%;

  :before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    border: 6px solid ${(props) => props.theme.colors.background};
    border-radius: 100%;
    border-top-color: ${(props) => props.theme.colors.highLight};
    animation: isRotating 3s infinite;
  }

  @keyframes isRotating {
    to {
      transform: rotate(2turn);
    }
  }
`;

export const MyPicture = styled.img`
  border-radius: 100%;
`;
