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

export const AboutContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background:red
`;

