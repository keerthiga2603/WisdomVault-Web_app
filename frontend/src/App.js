import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import Voice from "./pages/Voice";
import Cultural from "./pages/Cultural";
import About from "./pages/About";
import AppDownload from "./pages/AppDownload";
import Confirmation from "./pages/Confirmation";
import Contact from "./pages/Contact";
import Preview from "./pages/Preview";
import Start from "./pages/Start";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/voice" element={<Voice />} />
        <Route path="/cultural" element={<Cultural />} />
        <Route path="/about" element={<About />} />
        <Route path="/download" element={<AppDownload />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;