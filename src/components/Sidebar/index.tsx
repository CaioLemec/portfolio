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
            <SidebarLink to="home" onClick={handleToggle}>
              Home
            </SidebarLink>
            <SidebarLink to="about" onClick={handleToggle}>
              About
            </SidebarLink>
            <SidebarLink to="portfolio" onClick={handleToggle}>
              Portfolio
            </SidebarLink>
            <SidebarLink to="contact" onClick={handleToggle}>
              Contact Me
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
}

export default Sidebar;
