import Cursor from "./components/Cursor.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import HazardDivider from "./components/HazardDivider.jsx";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Cursor />
      <Nav />

      <main>
        <Hero />
        <Marquee />
        <HazardDivider />
        <About />
        <Experience />
        <HazardDivider />
        <Projects />
        <Skills />
        <HazardDivider />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
