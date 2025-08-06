import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Sync dark mode class with HTML root
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <ScrollToTop />
                  <Hero />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <ScrollToTop />
                  <About />
                </>
              }
            />
            <Route
              path="/projects"
              element={
                <>
                  <ScrollToTop />
                  <Projects />
                </>
              }
            />
            <Route
              path="/skills"
              element={
                <>
                  <ScrollToTop />
                  <Skills />
                </>
              }
            />
            <Route
              path="/resume"
              element={
                <>
                  <ScrollToTop />
                  <Resume darkMode={darkMode} />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <ScrollToTop />
                  <Contact />
                </>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
