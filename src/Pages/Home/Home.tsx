import Navbar from "../../Components/Navbar/Navbar";
import Carousel from "../../Components/Carousel/Carousel";

import "./Home.css";
import Footer from "../../Components/Footer/Footer";
import Signup from "../../Components/Signup/Signup";

const Home = () => {
    return (
      <>
        <Navbar />
        <div className="container">
          <div className="mainCentered">
            <Carousel />
            <Signup />
          </div>
        </div>
        <Footer />
      </>
    );
  };

export default Home;
