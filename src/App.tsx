import { BrowserRouter, Routes, Route } from "react-router-dom";

// eslint-disable-next-line
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";

// eslint-disable-next-line
import Charities from "./Pages/Charities/Charities";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/charities" element={<Charities />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
