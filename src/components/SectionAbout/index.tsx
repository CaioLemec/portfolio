
import {
  AboutContainer,
  MaxWidthLimitWrapper,
  AboutContent,
} from "./SectionAboutElements";
import SectionAboutMap from "./SectionAboutMap";

const SectionAbout = () => {

  return (
    <AboutContainer id="about">
      <MaxWidthLimitWrapper>
          <AboutContent>
          <SectionAboutMap />
          <SectionAboutMap />
          </AboutContent>
      </MaxWidthLimitWrapper>
    </AboutContainer>
  );
};

export default SectionAbout;
