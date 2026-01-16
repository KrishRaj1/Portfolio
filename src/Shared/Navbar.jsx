import { useState, useRef, useEffect } from 'react';
import { Icon } from '@iconify/react';
import TextWithHover from './TextWithHover';
import IconShared from './IconShared';
import { Link, NavLink } from 'react-router-dom';
import Menu from '../MainComponent/Menu';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const menuRef = useRef(null);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="relative">
      <div className="w-full bg-white dark:bg-neutral-900 dark:text-white text-black p-0 overflow-auto shadow-sm">
        <div className="flex flex-col md:flex-row justify-center w-full m-0 p-5">
          <div className="flex justify-center md:justify-normal space-x-4 w-full md:w-6/12 mb-4 md:mb-0">
            {/* brand */}
            <NavLink to="/home" className="font-ooohbaby text-2xl" aria-label="Go to home">Krish Raj</NavLink>
          </div>

          <div className="flex justify-around items-center font-semibold w-full md:w-4/12 mb-4 md:mb-0">
            <NavLink to="/home">
              <TextWithHover text={"Home"} />
            </NavLink>
            <NavLink to="/project">
              <TextWithHover text={"Projects"} />
            </NavLink>
            <NavLink to="/skills">
              <TextWithHover text={"Skills"} />
            </NavLink>
            <NavLink to="/about">
              <TextWithHover text={"About"} />
            </NavLink>
            <NavLink to="/contact">
              <TextWithHover text={"Contact"} />
            </NavLink>
            <div className="hidden md:block border-r-2 border-black dark:border-white h-3/4"></div>
          </div>

          <div className="flex space-x-5 justify-center md:justify-end items-center w-full md:w-2/12 mb-4 md:mb-0">
            <button
              aria-label="Toggle theme"
              className="rounded-full border px-2 py-1 text-sm dark:border-neutral-700"
              onClick={() => setIsDark((v) => !v)}
            >
              {isDark ? 'Light' : 'Dark'}
            </button>
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
            <div className="flex items-center">
              <Icon
                icon="icon-park-outline:hamburger-button"
                style={{ color: "currentColor" }}
                fontSize={25}
                onClick={handleMenuClick}
              />
            </div>
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
