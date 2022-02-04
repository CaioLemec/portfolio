
import {
  Nav,
  NavbarContainer,
} from "./FooterElements";

import SocialBtn from "../SectionAbout/SocialBtn";

const Footer = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <p> Made with ❤ by Caio Lemec </p>
          <SocialBtn />
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Footer;
