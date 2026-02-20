
import { Routes, Route } from "react-router-dom";
import SiteShell from "./components/SiteShell";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceAreas from "./pages/ServiceAreas";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <SiteShell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-areas" element={<ServiceAreas />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </SiteShell>
  );
}