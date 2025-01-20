import "./App.css";
import Header from "./components/header/Header";
import About from "./components/ScrollPages/about/About";
import Contact from "./components/ScrollPages/contact/Contact";
import Home from "./components/ScrollPages/home/Home";
import Portfolio from "./components/ScrollPages/portfolio/port";
import Qualifications from "./components/ScrollPages/qualifications/Qualifications";
import Services from "./components/ScrollPages/services/Services";
import Skills from "./components/ScrollPages/skills/Skills";
import Testimonials from "./components/ScrollPages/testimonials/Testimonials";
import ScrollBtn from "./components/scrollupbtn/ScrollBtn";

function App() {
  return (
    <>
      <Header />
      <main className="mainCont">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualifications />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <ScrollBtn />
    </>
  );
}

export default App;
