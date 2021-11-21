import video_bv from "../../videos/video_bv.mp4";
import video_wv from "../../videos/video_wv.mp4";
import { ThemeContext } from "styled-components";
import { useContext } from "react";
import { BsGithub, BsTwitter, BsLinkedin, BsEnvelope } from "react-icons/bs";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  LinkBtnSocial,
  HeroDownloadResumeWrapper,
  LinkDownloadResume,
} from "./IndexElements";

const IndexSection = () => {
  const theme = useContext(ThemeContext);

  return (
    <HeroContainer id="home">
      <HeroBg>
        {theme.name === "first" ? (
          <VideoBg autoPlay loop muted src={video_bv} />
        ) : (
          <VideoBg autoPlay loop muted src={video_wv} />
        )}
      </HeroBg>
      <HeroContent>
        <HeroH1>Caio Lemec</HeroH1>
        <HeroP>
          I started my career in engineering and marketing, but found in
          programming the passion I was looking for to move forward.
        </HeroP>
        <HeroBtnWrapper>
          <LinkBtnSocial
            rel="noreferrer"
            target="_blank"
            href="https://github.com/CaioLemec"
          >
            <BsGithub />
          </LinkBtnSocial>
          <LinkBtnSocial
            rel="noreferrer"
            target="_blank"
            href="https://twitter.com/CaioLemec"
          >
            <BsTwitter />
          </LinkBtnSocial>
          <LinkBtnSocial
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/caiolemec/"
          >
            <BsLinkedin />
          </LinkBtnSocial>
          <LinkBtnSocial
            rel="noreferrer"
            target="_blank"
            href="mailto:caiolemec@gmail.com"
          >
            <BsEnvelope />
          </LinkBtnSocial>
        </HeroBtnWrapper>
        <HeroP>Download Resume</HeroP>
        <HeroDownloadResumeWrapper>
          <LinkDownloadResume>
            {" "}
            {/*disponibilizar download*/}
            pt-BR
          </LinkDownloadResume>
          <LinkDownloadResume>
            {" "}
            {/*disponibilizar download*/}
            en-US
          </LinkDownloadResume>
        </HeroDownloadResumeWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default IndexSection;
