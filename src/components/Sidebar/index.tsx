
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
} from './sidebarElements'

interface SidebarProps {
    isOpen: boolean;
    handleToggle: () => void;
}

function Sidebar({ isOpen, handleToggle }: SidebarProps) {
    return (
        <>
            <SidebarContainer isOpen={isOpen} >
                <Icon>
                    <CloseIcon onClick={handleToggle}/>
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="resume" onClick={handleToggle}>
                            Resume
                        </SidebarLink>

                        <SidebarLink to="projects" onClick={handleToggle}>
                            Projects
                        </SidebarLink>

                        <SidebarLink to="tools" onClick={handleToggle}>
                            Tools
                        </SidebarLink>

                        <SidebarLink to="certificades" onClick={handleToggle}>
                            Certificades
                        </SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
