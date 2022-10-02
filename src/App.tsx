import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Charities from "./Pages/Charities/Charities";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Charities />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
