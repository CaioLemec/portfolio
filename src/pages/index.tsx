import { useState } from 'react'
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import ProjectsSection from '../components/ProjectsSection';
import Sidebar from '../components/Sidebar';

const Home = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
         <Sidebar isOpen={isOpen} handleToggle={handleToggle} />
         <Navbar handleToggle={handleToggle} />   
         <HeroSection />
         <ProjectsSection />
        </>
    )
}

export default Home
