import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarFooter,
  SidebarBtn,
  SidebarBtnLink,
} from "./sidebarElements";
import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "../../hooks/theme";

interface SidebarProps {
  isOpen: boolean;
  handleToggle: () => void;
}

function Sidebar({ isOpen, handleToggle }: SidebarProps) {
  const { toggleTheme, theme } = useTheme();

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <>
      <SidebarContainer isOpen={isOpen}>
      <SidebarBtn onClick={handleToggleTheme}>
              {theme.name !== "first" ? (
                <SidebarBtnLink>
                  <BsMoon />
                </SidebarBtnLink>
              ) : (
                <SidebarBtnLink>
                  <BsSun />
                </SidebarBtnLink>
              )}
            </SidebarBtn>
        <Icon>
          <CloseIcon onClick={handleToggle} />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="isActive"
              offset={-80}
              onClick={handleToggle}
            >
              Home
            </SidebarLink>
            <SidebarLink
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="isActive"
              offset={-80}
              onClick={handleToggle}
            >
              About
            </SidebarLink>
            <SidebarLink
              to="portfolio"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="isActive"
              offset={-75}
              onClick={handleToggle}
            >
              Portfolio
            </SidebarLink>
            <SidebarLink
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="isActive"
              offset={-83}
              onClick={handleToggle}
            >
              Contact Me
            </SidebarLink>
            <SidebarFooter> Made with ❤ by Caio Lemec </SidebarFooter>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
}

export default Sidebar;
