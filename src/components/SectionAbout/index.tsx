import { useState, useEffect } from "react";
import {
  AboutContainer,
  MaxWidthLimitWrapper,
  AboutContent,
  DescriptionAboutWrapper,
  DescriptionTitle,
  Description,
  WrapperResumeBtn,
  ResumeBtn,
} from "./SectionAboutElements";
import SectionAboutMap from "./SectionAboutMap";
import TechnologyBtn from "./TechnologyBtn";
import AOS from "aos";
import "aos/dist/aos.css";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

const downloadResumeBR =
  "https://drive.google.com/uc?export=download&id=1nqS2rf9Azpp1o_2L8wPTQ5R2rlbJmUXW";
const downloadResumeUS =
  "https://drive.google.com/uc?export=download&id=1nqS2rf9Azpp1o_2L8wPTQ5R2rlbJmUXW";

const SectionAbout = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/CaioLemec/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <AboutContainer id="about" data-aos="fade-right">
      <MaxWidthLimitWrapper>
        <AboutContent>
          <SectionAboutMap />
          <DescriptionAboutWrapper>
            <DescriptionTitle>About :</DescriptionTitle>
            <Description>
              My name is Caio Lemec and I am a passionate self-taught developer.
              I'm from Brazil, living in Rio de Janeiro and currently work as an
              intern in software developer. I started my career in engineering
              and marketing, but found in programming the passion I was looking
              for move forward.
            </Description>
            <DescriptionTitle>Stack :</DescriptionTitle>
            <Description>
              <TechnologyBtn />
            </Description>
            <DescriptionTitle>Repositories :</DescriptionTitle>
            <Description>
              Checkout my open source repositories:
              <a
                href="https://github.com/CaioLemec?tab=repositories"
                rel="noreferrer"
                target="_blank"
              >
                {repositories.length}
              </a>
            </Description>
            <DescriptionTitle>Resume :</DescriptionTitle>
            <WrapperResumeBtn>
              <ResumeBtn
                href={downloadResumeBR}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                en-US
              </ResumeBtn>
              <ResumeBtn
                href={downloadResumeUS}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                pt-BR
              </ResumeBtn>
            </WrapperResumeBtn>
          </DescriptionAboutWrapper>
        </AboutContent>
      </MaxWidthLimitWrapper>
    </AboutContainer>
  );
};

export default SectionAbout;
