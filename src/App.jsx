import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";
import Yearsofexperience from "./components/Yearsofexperience";

function App() {
  return (
    <>
      <Banner />
      <Yearsofexperience />
      <Skills />
      <Portfolio />
      <Testimonial />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
