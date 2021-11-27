import game from "../../images/1.png";
import wb from "../../images/2.png";
import chat from "../../images/3.png";
import aufood from "../../images/4.png";
import omini from "../../images/5.png";
import crypto from "../../images/6.png";
import Hover from "react-3d-hover";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import {
  PortfolioContainer,
  MaxWidthLimitWrapper,
  PortfolioContent,
  PortfolioTitle,
  PortfolioGrid,
  PortfolioCard,
  CardDescription,
  CardTitle,
  CardButton,
  CardButtonWrapper,
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
              <CardDescription>
                <CardTitle>See at Github</CardTitle>
                <CardButtonWrapper
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/CaioLemec/Aufood"
                >
                  <CardButton />
                </CardButtonWrapper>
              </CardDescription>
              <Hover scale={1.1} perspective={900} speed={500}>
                <CardImg src={aufood} />
              </Hover>
            </PortfolioCard>
            <PortfolioCard>
              <CardDescription>
                <CardTitle>See at Github</CardTitle>
                <CardButtonWrapper
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/CaioLemec/Omni-tech"
                >
                  <CardButton />
                </CardButtonWrapper>
              </CardDescription>
              <Hover scale={1.1} perspective={900} speed={500}>
                <CardImg src={omini} />
              </Hover>
            </PortfolioCard>
            <PortfolioCard>
              <CardDescription>
                <CardTitle>See at Github</CardTitle>
                <CardButtonWrapper
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/CaioLemec/crypto-monitor"
                >
                  <CardButton />
                </CardButtonWrapper>
              </CardDescription>
              <Hover scale={1.1} perspective={900} speed={500}>
                <CardImg src={crypto} />
              </Hover>
            </PortfolioCard>
            <PortfolioCard>
              <CardDescription>
                <CardTitle>See at Github</CardTitle>
                <CardButtonWrapper
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/CaioLemec/association-game"
                >
                  <CardButton />
                </CardButtonWrapper>
              </CardDescription>
              <Hover scale={1.1} perspective={900} speed={500}>
                <CardImg src={game} />
              </Hover>
            </PortfolioCard>
            <PortfolioCard>
              <CardDescription>
                <CardTitle>See at Github</CardTitle>
                <CardButtonWrapper
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/CaioLemec/chat_app"
                >
                  <CardButton />
                </CardButtonWrapper>
              </CardDescription>
              <Hover scale={1.1} perspective={900} speed={500}>
                <CardImg src={chat} />
              </Hover>
            </PortfolioCard>
            <PortfolioCard>
              <CardDescription>
                <CardTitle>See at Github</CardTitle>
                <CardButtonWrapper
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/CaioLemec/web_scraper"
                >
                  <CardButton />
                </CardButtonWrapper>
              </CardDescription>
              <Hover scale={1.1} perspective={900} speed={500}>
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
