import styled from "styled-components";

export const FooterWrapper = styled.div`
  background: ${(props) => props.theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  transform: translateY(-100%);
  margin: 0 auto;
  bottom: 0;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  justify-content: center;

  a {
    font-size: 25px;

    @media screen and (max-width: 550px) {
      display: none;
    }
  }

  @media screen and (max-width: 380px) {
    a {
      display: none;
    }
  }

  p {
    color: ${(props) => props.theme.colors.fontColor};
    font-size: 1rem;
    margin-right: 1rem;
    text-align: left;
    font-weight: 500;
    transform: translateY(25%);

    @media screen and (max-width: 1173px) {
      font-size: 0.85rem;
    }
  }
`;
