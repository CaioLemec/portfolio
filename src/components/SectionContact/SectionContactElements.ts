import styled from "styled-components";

export const ContactContainer = styled.div`
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.fontColor};
  width: 100%;
  height: 100vh;
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
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
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
  background-color: blue;
`;

export const ContactForm = styled.form`
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContactInputTitle = styled.h3`
  margin: 1rem 0;
  color: ${(props) => props.theme.colors.fontColor};
`;

export const ContactInput = styled.input``;

export const ContactArea = styled.textarea``;

export const ContactSubmitButton = styled.button``;

