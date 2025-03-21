import { Routes, Route } from "react-router-dom";
//Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import WhatsappComponent from "./components/WhatsappComponent/WhatsappComponent";



function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Container para envolver las páginas */}
      
        <Routes>      
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      <WhatsappComponent/>
      <Footer />
    </div>
  );
}

export default App;
