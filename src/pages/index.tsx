import { useState } from "react";
import Navbar from "../components/Navbar";
import SectionContact from "../components/SectionContact";
import SectionPortfolio from "../components/SectionPortfolio";
import SectionHome from "../components/SectionHome";
import Sidebar from "../components/Sidebar";
import SectionAbout from "../components/SectionAbout";

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} handleToggle={handleToggle} />
      <Navbar handleToggle={handleToggle} />
      <SectionHome />
      <SectionAbout />
      <SectionPortfolio />
      <div style={{padding: '10px'}}></div>
      <SectionContact />
    </>
  );
};

export default Home;
