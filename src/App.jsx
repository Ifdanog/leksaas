import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";
import Yearsofexperience from "./components/Yearsofexperience";

function App() {
  return (
    <div>
      <Banner />
      <Yearsofexperience />
      <Portfolio />
      <Testimonial />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
