import React from 'react';
import About from '../about/About';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Hero from '../herosection/Hero';
import Portfolio from '../portfolio/Portfolio';
import Service from '../services/Service';
import Testimonals from '../testimonals/Testimonals';

const Layout = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Service />
      <Portfolio />
      <Testimonals />
      <Contact />
      <Footer />
    </>
  );
};

export default Layout;
