import styled from "styled-components";

export const ContactContainer = styled.div`
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.fontColor};
  width: 100%;
  height: calc(100vh - 80px);
  overflow: hidden;
  position: relative;
`;

export const MaxWidthLimitWrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  max-width: 1440px;
`;

export const ContactTitle = styled.div`
  color: ${(props) => props.theme.colors.fontColor};
  margin-top: 1rem;
  font-size: 1.125rem;
  text-align: left;
  font-weight: bold;
  margin-bottom: 1rem;
  position: absolute;
  top: 0;
  margin-top: 10%;

  @media screen and (min-width: 550px) {
    display: none;
  }
`;

export const ContactContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-right: 5rem;

  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

export const PaperPlanImg = styled.img`
  max-width: 500px;
  animation: isFloating 3s infinite;

  @media screen and (max-width: 1180px) {
    max-width: 400px;
  }

  @keyframes isFloating {
    0%,
    100% {
      transform: translateY(0%);
    }
    50% {
      transform: translateY(-5%);
    }
  }
`;

export const ContactFormWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const ContactInputTitle = styled.h1`
  font-size: 1.25rem;
  margin: 0.525rem 0;
  color: ${(props) => props.theme.colors.fontColor};
`;

export const ContactInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  width: 100%;
  border: 0;
  height: 3rem;
  padding: 1rem;
  border-radius: 0.25rem;
  color: ${(props) => props.theme.colors.fontColor};
  box-shadow: 0px 0px 22px 2px ${(props) => props.theme.colors.primary};
`;

export const ErrorText = styled.p`
  color: ${(props) => props.theme.colors.fontColor};
  margin: 0.45rem 0.45rem;
  font-weight: 400;
  font-size: 0.8rem;

  span {
    color: ${(props) => props.theme.colors.highLight};
    margin-left: 0.125rem;
    font-size: 1rem;
  }
`;

export const ContactArea = styled.textarea`
  background: rgba(255, 255, 255, 0.15);
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 0.25rem;
  resize: none;
  min-height: 10rem;
  color: ${(props) => props.theme.colors.fontColor};
  box-shadow: 0px 0px 22px 2px ${(props) => props.theme.colors.primary};
`;

export const SubmitInput = styled.input`
  display: flex;
  font-weight: bold;
  font-size: 1.025rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 0;
  margin: 1rem 0;
  height: 3rem;
  border-radius: 0.25rem;
  color: ${(props) => props.theme.colors.contrast};
  background: ${(props) => props.theme.colors.highLight};
  transition: 0.2s;

  &:not(:disabled):hover {
    /* if button !disable do Hover. */
    filter: brightness(0.8);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ErrorToastDiv = styled.div`
  position: absolute;
  top: 5rem;
  right: 0rem;
  color: ${(props) => props.theme.colors.contrast};
  background: #ea1220;
  width: 20rem;
  height: 4rem;
  border-radius: 0.25rem;
  display: flex;
  font-weight: bold;
  font-size: 1.025rem;
  align-items: center;
  justify-content: center;
  animation: PopingIn 8s linear;

  @keyframes PopingIn {
    0% {
      transform: translateX(100%);
    }
    10% {
      transform: translateX(0%);
    }
    20% {
      transform: translateX(0%);
    }
    30% {
      transform: translateX(0%);
    }
    40% {
      transform: translateX(0%);
    }
    50% {
      transform: translateX(0%);
    }
    60% {
      transform: translateX(0%);
    }
    70% {
      transform: translateX(0%);
    }
    80% {
      transform: translateX(0%);
    }
    90% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

export const SucessToastDiv = styled.div`
  position: absolute;
  top: 5rem;
  right: 0rem;
  color: ${(props) => props.theme.colors.contrast};
  background: #1ac247;
  width: 20rem;
  height: 4rem;
  border-radius: 0.25rem;
  display: flex;
  font-weight: bold;
  font-size: 1.025rem;
  align-items: center;
  justify-content: center;
  animation: PopingIn 8s linear;

  @keyframes PopingIn {
    0% {
      transform: translateX(100%);
    }
    10% {
      transform: translateX(0%);
    }
    20% {
      transform: translateX(0%);
    }
    30% {
      transform: translateX(0%);
    }
    40% {
      transform: translateX(0%);
    }
    50% {
      transform: translateX(0%);
    }
    60% {
      transform: translateX(0%);
    }
    70% {
      transform: translateX(0%);
    }
    80% {
      transform: translateX(0%);
    }
    90% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;
