import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Shared/Navbar';
import Home from './MainComponent/Home';
import Project from './MainComponent/Project';
import Skills from './MainComponent/Skills';
import About from './MainComponent/AboutComponent';
import Footer from './Shared/Footer';
import Contact from './MainComponent/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App min-h-screen bg-white dark:bg-neutral-950 dark:text-white flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/project' element={<Project />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<Navigate to='/home' />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
