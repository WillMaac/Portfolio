import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projetos/Projetos";

export default function Home() {
  return (
    <div>
      <main>
<Hero/>
<AboutMe/>
<Projects/>
<Footer/>
      </main>
    </div>
  );
}
