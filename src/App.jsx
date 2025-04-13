import AboutUs from "./components/about/AboutUs";
import ContactUs from "./components/contact/ContactUs";
import Footer from "./components/footer/Footer";
import GallerySection from "./components/gallery/Gallery";
import HeroText from "./components/home/HeroText";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import ServicesSection from "./components/services/Services";

function App() {

  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <AboutUs />
      <ServicesSection />
      <GallerySection />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
