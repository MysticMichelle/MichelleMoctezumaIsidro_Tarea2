import HeaderModule from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Interests from "./Components/Interests/Interests";
import CV from "./Components/CV/CV";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
    <>
      <HeaderModule />
      <main className="main">
        <Hero />
        <Interests />
        <CV />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}