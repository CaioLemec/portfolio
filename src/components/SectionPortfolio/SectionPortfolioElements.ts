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
  font-size: 2.5rem;
  text-align: left;
  font-weight: bold;
  margin-bottom: 30px;

  @media screen and (max-width: 1300px) {
    font-size: 2rem;
  }
`;

export const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  height: 100%;
  gap: 20px;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 375px) {
    grid-template-columns: 1fr;
  }
`;

export const PortfolioCard = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardTitle = styled.div`
  color: ${(props) => props.theme.colors.fontColor};
  margin-top: 1rem;
  font-size: 2.5rem;
  font-weight: bold;

  @media screen and (max-width: 1300px) {
    font-size: 1.5rem;
  }
`;

export const CardImg = styled.img`
    max-width: 100%;
`;
