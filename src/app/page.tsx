import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projetos/Projetos";
import Skills from "./components/Skills/Skills";

export default function Home() {
  return (
    <div>
      <main>
<Hero/>
<AboutMe/>
<Skills/>
<Projects/>
<Footer/>
      </main>
    </div>
  );
}
