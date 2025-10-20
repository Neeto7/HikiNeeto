import Footer from "./components/footer/Footer";
import SkillsGrid from "./components/gallerygrid/skillGrid";
import Hero from "./components/hero/hero";
import Home from "./components/home/home";
import Parallax from "./components/parallax/Parallax";
import ProjectsSection from "./components/ProjectSection/ProjectSection";
import ScrollReveal from "./components/scrollreveal/scrollReveal";






const Hikineeto = () => {
  return (
    <div>
       <Home/>
       <SkillsGrid/>
       <ScrollReveal/>
       <Hero/>
       <ProjectsSection/>
       <Parallax/>
       <Footer/>
      
       
      
    </div>

  );
};
export default Hikineeto;