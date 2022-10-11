import Navbar from "../../Components/Navbar/Navbar";
import Carousel from "../../Components/Carousel/Carousel";

import "./Home.css";
import Footer from "../../Components/Footer/Footer";
import Signup from "../../Components/Signup/Signup";

import { useState } from "react";

const Home = () => {
  const [hidden, setHidden] = useState(true);
    return (
      <>
        <Navbar />
        <div className="container">
          <div className="mainCentered">
            <Carousel hidden={hidden} setHidden={setHidden} />
            {!hidden && <Signup />}
          </div>
        </div>
        <Footer />
      </>
    );
  };

export default Home;
