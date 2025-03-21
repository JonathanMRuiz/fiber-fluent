import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import WhatsappComponent from "./components/WhatsappComponent/WhatsappComponent";

// Lazy loading para las páginas
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

// Componente de Loading
const Loading = () => (
  <div className="flex items-center justify-center min-h-[80vh]">
    <span className="text-lg font-semibold">Loading...</span>
  </div>
);

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <WhatsappComponent />
      <Footer />
    </div>
  );
}

export default App;
