import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Shared/Navbar';
import Home from './MainComponent/Home';
import Project from './MainComponent/Project';
import Skills from './MainComponent/Skills';
import About from './MainComponent/AboutComponent';
import Menu from './MainComponent/Menu';
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar onClick={handleMenuClick} />
        {menuOpen && <Menu />}
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/project' element={<Project />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Navigate to='/home' />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
