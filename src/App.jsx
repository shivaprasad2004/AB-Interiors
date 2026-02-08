import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Inspiration from './components/Inspiration';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand-black min-h-screen text-white selection:bg-brand-orange selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Process />
        <Portfolio />
        <Inspiration />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
