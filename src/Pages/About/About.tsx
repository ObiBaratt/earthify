import Navbar from "../../Components/Navbar/Navbar";
import Signup from "../../Components/Signup/Signup";

const About = () => {
    return (
      <div>
        <Navbar />
        <div className="content">
          <h1>About</h1>
          <Signup />
        </div>
      </div>
    );
  };

export default About;
