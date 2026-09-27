import '../styles/Theme.css';
import AuroraBackground from '../components/Background';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import '../styles/HomeStyles.css';

export default function Home() {
  return (
    <>
      <AuroraBackground />
      <Navbar />
      <main className="home-main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
}