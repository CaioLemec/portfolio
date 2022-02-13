
import {
  AboutContainer,
  MaxWidthLimitWrapper,
  AboutContent,
  DescriptionAboutWrapper,
  Description,
} from "./SectionAboutElements";
import SectionAboutMap from "./SectionAboutMap";

const SectionAbout = () => {

  return (
    <AboutContainer id="about">
      <MaxWidthLimitWrapper>
          <AboutContent>
          <SectionAboutMap />
          <DescriptionAboutWrapper>
          <Description>My name is Caio Lemec and I am a passionate self-taught front-end developer. I'm from Brazil, living in Rio de Janeiro and currently work as an intern in software developer. I started my career in engineering and marketing, but found in programming the passion I was looking for move forward.</Description>
          </DescriptionAboutWrapper>
          </AboutContent>
      </MaxWidthLimitWrapper>
    </AboutContainer>
  );
};

export default SectionAbout;
