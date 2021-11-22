import game from "../../images/1.png";
import wb from "../../images/2.png";
import chat from "../../images/3.png";
import aufood from "../../images/4.png";
import omini from "../../images/5.png";
import crypto from "../../images/6.png";
import Hover from "react-3d-hover";

import {
  PortfolioContainer,
  MaxWidthLimitWrapper,
  PortfolioContent,
  PortfolioTitle,
  PortfolioGrid,
  PortfolioCard,
  CardTitle,
  CardImg,
} from "./SectionPortfolioElements";

const SectionPortfolio = () => {
  return (
    <PortfolioContainer id="portfolio">
      <MaxWidthLimitWrapper>
        <PortfolioContent>
          <PortfolioTitle>Last projects...</PortfolioTitle>
          <PortfolioGrid>
            <PortfolioCard>
              <CardTitle>Aufood</CardTitle>
              <Hover scale={1.1} perspective={900} speed={500}>
                <CardImg src={aufood} />
              </Hover>
            </PortfolioCard>
            <PortfolioCard>
              <CardTitle>Omini</CardTitle>
              <Hover scale={1.2} perspective={900} speed={500}>
                <CardImg src={omini} />
              </Hover>
            </PortfolioCard>
            <PortfolioCard>
              <CardTitle>Crypto</CardTitle>
              <Hover scale={1.2} perspective={900} speed={500}>
                <CardImg src={crypto} />
              </Hover>
            </PortfolioCard>
            <PortfolioCard>
              <CardTitle>Association Game</CardTitle>
              <Hover scale={1.2} perspective={900} speed={500}>
                <CardImg src={game} />
              </Hover>
            </PortfolioCard>
            <PortfolioCard>
              <CardTitle>Chat App</CardTitle>
              <Hover scale={1.2} perspective={900} speed={500}>
                <CardImg src={chat} />
              </Hover>
            </PortfolioCard>
            <PortfolioCard>
              <CardTitle>Web Scrapper</CardTitle>
              <Hover scale={1.2} perspective={900} speed={500}>
                <CardImg src={wb} />
              </Hover>
            </PortfolioCard>
          </PortfolioGrid>
        </PortfolioContent>
      </MaxWidthLimitWrapper>
    </PortfolioContainer>
  );
};

export default SectionPortfolio;
