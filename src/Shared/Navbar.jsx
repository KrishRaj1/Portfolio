import { useState, useRef, useEffect } from 'react';
import { Icon } from '@iconify/react';
import TextWithHover from './TextWithHover';
import IconShared from './IconShared';
import { Link } from 'react-router-dom';
import Menu from '../MainComponent/Menu';

function Navbar({ scrollToSection, refs }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false); // Close the menu if clicking outside of it
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <div className="h-1/12 w-full bg-white flex flex-auto flex-col text-black p-0 overflow-auto">
        <div className="flex flex-col md:flex-row justify-center w-full h-full m-0 p-5">
          <div className="flex justify-center md:justify-normal space-x-4 w-full md:w-6/12 mb-4 md:mb-0">
            {/* Add other navigation items here if needed */}
          </div>

          <div className="flex justify-around items-center font-semibold w-full md:w-4/12 mb-4 md:mb-0">
            <Link to="/home" onClick={() => scrollToSection(refs.homeRef)}>
              <TextWithHover text={"Home"} />
            </Link>
            <Link to="/project" onClick={() => scrollToSection(refs.projectRef)}>
              <TextWithHover text={"Projects"} />
            </Link>
            <Link to="/skills" onClick={() => scrollToSection(refs.skillsRef)}>
              <TextWithHover text={"Skills"} />
            </Link>
            <Link to="/about" onClick={() => scrollToSection(refs.aboutRef)}>
              <TextWithHover text={"About"} />
            </Link>
            <div className="hidden md:block border-r-2 border-black h-3/4"></div>
          </div>

          <div className="flex space-x-5 justify-center md:justify-normal items-center w-full md:w-1/5 mb-4 md:mb-0">
            <Link to="https://www.instagram.com/krishraj031?igsh=YzljYTk1ODg3Zg==">
              <IconShared icon={"skill-icons:instagram"} fontsize={20} />
            </Link>
            <Link to="https://github.com/KrishRaj1">
              <IconShared icon={"skill-icons:github-light"} fontsize={20} />
            </Link>
            <Link to="https://leetcode.com/Krish_Raj1">
              <IconShared
                icon={"arcticons:leetcode"}
                fontsize={20}
                style={{ background: "black", borderRadius: "20%", color: "white" }}
              />
            </Link>
            <Link to="https://x.com/ShivhareRa83065?t=DQX9ridOfEiCNfSDyAjOvw&s=35">
              <IconShared icon={"skill-icons:twitter"} fontsize={20} />
            </Link>
            <Link to="https://www.linkedin.com/in/krish-raj-shivhare-7a4806251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <IconShared icon={"devicon:linkedin"} fontsize={20} />
            </Link>
          </div>

          <div className="flex w-full md:w-1/12 items-center justify-center md:justify-normal">
            <Icon 
              icon="icon-park-outline:hamburger-button" 
              style={{ color: "black" }} 
              fontSize={25} 
              onClick={handleMenuClick} // Trigger menu toggle
            />
          </div>
        </div>
      </div>
      
      {menuOpen && (
        <div ref={menuRef}>
          <Menu onClose={() => setMenuOpen(false)} />
        </div>
      )}
    </div>
  );
}

export default Navbar;
