import { useState } from 'react'
import Navbar from '../components/Navbar';
import SectionContact from '../components/SectionContact';
import SectionPortfolio from '../components/SectionPortfolio';
import SectionAbout from '../components/SectionAbout';
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
         <SectionAbout />
         <SectionPortfolio />
         <SectionContact />
        </>
    )
}

export default Home
