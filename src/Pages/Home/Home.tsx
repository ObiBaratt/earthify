import Navbar from "../../Components/Navbar/Navbar";
import Signup from "../../Components/Signup/Signup";
import Carousel from "../../Components/Carousel/Carousel";

import "./Home.css";

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
      </>
    );
  };

export default Home;
