import styled from "styled-components";

export const ContactContainer = styled.div`
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

export const ContactContent = styled.div`
  height: calc(100% - 80px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: purple;
`;

export const ContactImg = styled.img``;

export const ContactFormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  width: 30rem;
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

  &:not(:disabled):hover {        // if button !disable do Hover.
    filter: brightness(0.8);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

