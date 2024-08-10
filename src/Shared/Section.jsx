import { useState, useRef } from "react";
import Navbar from "./Navbar";
import Menu from "../MainComponent/Menu";

function Section() {
  const [menuOpen, setMenuOpen] = useState(false);

  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="h-screen bg-white">
      
      {menuOpen && <Menu onClose={handleMenuClick} />}
      <div className="min-h-20 bg-white flex">
        <div className="w-1/3 flex"></div>
      </div>
      <div className="h-2/3 bg-neutral-400 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/3 h-full flex justify-center items-center bg-black">
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dohv9bd7g/image/upload/v1720705092/IMAGE_2024-07-07_22_41_42_touzv8.jpg"
              alt="Krish"
              className="rounded-full h-64 w-64 shadow-md brightness-120 object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3 h-full bg-white flex flex-col justify-center items-center md:items-center p-5 ">
          <div className="font-ooohbaby text-4xl md:text-6xl text-center md:text-left mb-3">
            Hi, I am Krish.
          </div>
          <div className="font-mulish text-2xl md:text-4xl text-center md:text-left mb-3">
            Web Developer
          </div>
          <div className="font-mulish text-xl md:text-2xl text-center md:text-left">
            FrontEnd Developer / Backend Developer
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
