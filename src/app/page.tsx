import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import Projects from "./components/Projetos/Projetos";
import Skills from "./components/Skills/Skills";

export default function Home() {
  return (
    <div>
      <main>
<HeroSection/>
<AboutMe/>
<Skills/>
<Projects/>
<Footer/>
      </main>
    </div>
  );
}
