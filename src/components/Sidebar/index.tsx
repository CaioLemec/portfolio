import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./sidebarElements";

interface SidebarProps {
  isOpen: boolean;
  handleToggle: () => void;
}

function Sidebar({ isOpen, handleToggle }: SidebarProps) {
  return (
    <>
      <SidebarContainer isOpen={isOpen}>
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
            onClick={handleToggle}>
              Home
            </SidebarLink>
            <SidebarLink 
            to="about" 
            smooth={true}
            duration={500}
            spy={true}
            activeClass="isActive"
            offset={-80}
            onClick={handleToggle}>
              About
            </SidebarLink>
            <SidebarLink 
            to="portfolio"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="isActive"
            offset={-75} 
            onClick={handleToggle}>
              Portfolio
            </SidebarLink>
            <SidebarLink 
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="isActive"
            offset={-83} 
            onClick={handleToggle}>
              Contact Me
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
}

export default Sidebar;
