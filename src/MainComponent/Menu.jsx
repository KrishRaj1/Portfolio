import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Menu({ onClose }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose(); // Close the menu if clicking outside of it
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={menuRef}
      className=" fixed mt-14 top-0 right-0  sm:h-8  h-10   w-2/12 bg-black text-white flex flex-col justify-center md:-top-16 sm:-top-15  lg:top-6 items-center p-10"
    >
      <div className="flex flex-col items-center ">
        <Link to="https://krishraj-resume.tiiny.site/" onClick={onClose} className="w-full">
          <div className="h-3/12 w-11/12 bg-white text-black flex justify-center items-center font-semibold rounded-md p-1 ">
            My Resume
          </div>
        </Link>
        </div>
    </div>
  );
}

export default Menu;
