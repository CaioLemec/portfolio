import styled from "styled-components";

export const PortfolioContainer = styled.div`
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.fontColor};
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export const MaxWidthLimitWrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  max-width: 1440px;
`;

export const PortfolioContent = styled.div`
  padding: 20px 0px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PortfolioTitle = styled.div`
  color: ${(props) => props.theme.colors.fontColor};
  margin-top: 1rem;
  font-size: 2rem;
  text-align: left;
  font-weight: bold;
  margin-bottom: 30px;

  @media screen and (max-width: 1300px) {
    font-size: 1rem;
  }
`;

export const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  height: 100%;
  gap: 40px;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 555px) {
    grid-template-columns: 1fr;
  }
`;

export const PortfolioCard = styled.div`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0px 0px 22px 2px ${(props) => props.theme.colors.primary};
`;

export const CardDescription = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 15%;
  bottom: 0;
  border-radius: 0 0 20px 20px;
  background: rgba(255, 255, 255, 0.15);
  z-index: 2;
`;

export const CardTitle = styled.div`
  color: ${(props) => props.theme.colors.fontColor};
  width: 100%;
  height: 100%;
  border-radius: 0 0 20px 0;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 900px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 555px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 375px) {
    font-size: 0.8rem;
  }
`;

export const CardButtonWrapper = styled.a`
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 0 0 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  color: ${(props) => props.theme.colors.fontColor};



  &:hover {
    background-color: ${(props) => props.theme.colors.highLight};
    transition: 0.2s ease-in-out;

    .icon-button {
      color: ${(props) => props.theme.colors.contrast};
    }
  }

  &:active {
    transform: scale(1.05);
  }
`;

export const CardImg = styled.img`
  max-width: 100%;
`;

