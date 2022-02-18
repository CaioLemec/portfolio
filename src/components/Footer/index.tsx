import { FooterWrapper, FooterContainer } from "./FooterElements";

import SocialBtn from "../SectionHome/SocialBtn";

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <FooterContainer>
          <p> Made with ❤ by Caio Lemec </p>
          <SocialBtn />
        </FooterContainer>
      </FooterWrapper>
    </>
  );
};

export default Footer;
