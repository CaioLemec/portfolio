import { FaBars } from 'react-icons/fa'
import { BsSun, BsMoon } from 'react-icons/bs'
import { useTheme } from '../../hooks/theme';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements'

interface NavBarProps {
    handleToggle: () => void;
}

const Navbar = ({ handleToggle }: NavBarProps) => {

    const { toggleTheme, theme } = useTheme();

    const handleToggleTheme = () => {
        toggleTheme();
    }

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">Caio Lemec</NavLogo>
                    <MobileIcon onClick={handleToggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/">Resume</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects">Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="tools">Tools</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="certificades">Certificades</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn onClick={handleToggleTheme}>
                        {theme.name !== 'first' ?
                            (<NavBtnLink><BsMoon /></NavBtnLink>)
                            :
                            (<NavBtnLink><BsSun /></NavBtnLink>)}
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
