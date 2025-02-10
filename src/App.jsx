import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Features from './components/Features';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Services from './components/Services';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Preloader from './components/Preloader'; // Import Preloader component

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading
  }, []);

  return (
    <div className="min-h-screen">
      <Preloader isLoading={isLoading} /> {/* Pass isLoading prop to Preloader */}
      {!isLoading && (
        <>
          <Header />
          <main>
            <Hero />
            <Partners />
            <Features />
            <Services />
            <Stats />
            <Process />
            <Testimonials />
            <FAQ />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
