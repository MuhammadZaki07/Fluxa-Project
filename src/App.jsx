import { useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Aos from "aos";
import About from "./components/About";
import Work from "./components/Work";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Talk from "./components/Talk";
function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      // once: true,
    });
  }, []);
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Services />
      <Talk />
      <Footer />
    </>
  );
}

export default App;
