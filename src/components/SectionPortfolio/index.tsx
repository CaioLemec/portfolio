import game from "../../images/1.png";
import wb from "../../images/2.png";
import chat from "../../images/3.png";
import aufood from "../../images/4.png";
import omini from "../../images/5.png";
import crypto from "../../images/6.png";
import Hover from "react-3d-hover";
import { FaArrowRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  PortfolioContainer,
  MaxWidthLimitWrapper,
  PortfolioContent,
  PortfolioTitle,
  PortfolioGrid,
  PortfolioCard,
  CardDescription,
  CardTitle,
  CardButtonWrapper,
  CardImg,
} from "./SectionPortfolioElements";
import { useEffect } from "react";

const SectionPortfolio = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <PortfolioContainer id="portfolio" data-aos="fade-right">
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
                  <FaArrowRight className="icon-button"  size ={25}/>
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
                  <FaArrowRight className="icon-button"  size ={25}/>
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
                  <FaArrowRight className="icon-button"  size ={25}/>
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
                  <FaArrowRight className="icon-button"  size ={25}/>
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
                  <FaArrowRight className="icon-button"  size ={25}/>
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
                  <FaArrowRight className="icon-button"  size ={25}/>
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
