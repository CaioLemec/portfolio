import styled from "styled-components";

export const AboutContainer = styled.div`
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.fontColor};
  width: 100%;
  height: 100vh;
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
  flex: 2;
  flex-direction: column;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  z-index: 2;
`;

export const DescriptionTitle = styled.div`
  color: ${(props) => props.theme.colors.fontColor};
  font-size: 4rem;
  text-align: center;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const DescriptionTxt = styled.div`
  margin-top: 2rem;
  color: ${(props) => props.theme.colors.fontColor};
  font-size: 1.5rem;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const DownloadResumeWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  font-size: 30px;
  color: ${(props) => props.theme.colors.fontColor};
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
`;

export const LinkDownloadResume = styled.a`
  color: ${(props) => props.theme.colors.fontColor};
  font-size: 1rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  background: ${(props) => props.theme.colors.highLight};
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
    color: ${(props) => props.theme.colors.contrast};
    font-weight: bold;
  }
`;

export const MyPictureWrapper = styled.div`
  margin-top: 80px;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.fontColor};
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
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
