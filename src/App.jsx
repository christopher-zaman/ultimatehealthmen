import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import MobileActionBar from "./components/layout/MobileActionBar";
import Team from "./pages/Team";
import ServicePage from "./pages/ServicePage";

function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      <Navbar />

      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/service/:slug" element={<ServicePage />} />
      </Routes>
    </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}

export default App;