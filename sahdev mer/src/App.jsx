import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/HOME/Home";
import Icons from "./components/Icons";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Project from "./pages/Project";
import Contact from "./pages/Contect";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <Router>
      <div className="max-w-8xl mx-auto  bg-[#0e162e] text-white">
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Project />
        <Contact />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/icons" element={<Icons />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
