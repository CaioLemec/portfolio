import { FaBars } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "../../hooks/theme";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

interface NavBarProps {
  handleToggle: () => void;
}

const Navbar = ({ handleToggle }: NavBarProps) => {
  const { toggleTheme, theme } = useTheme();

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            Caio Lemec
          </NavLogo>
          <MobileIcon onClick={handleToggle}>
            <FaBars />
          </MobileIcon>

          <NavMenu>

            <NavItem>
              <NavLinks
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="isActive"
                offset={-80}
              >
                Home
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="isActive"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="portfolio"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="isActive"
                offset={-80}
              >
                Portfolio
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="isActive"
                offset={-80}
              >
                Contact Me
              </NavLinks>
            </NavItem>

          </NavMenu>
          <NavBtn onClick={handleToggleTheme}>
            {theme.name !== "first" ? (
              <NavBtnLink>
                <BsMoon />
              </NavBtnLink>
            ) : (
              <NavBtnLink>
                <BsSun />
              </NavBtnLink>
            )}
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
