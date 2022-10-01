import Navbar from "../Components/Navbar/Navbar";
import Signup from "../Components/Signup/Signup";

const Charities = () => {
    return (
      <div>
        <Navbar />
        <div className="content">
          <h1>Charities</h1>
          <Signup />
        </div>
      </div>
    );
  };

export default Charities;
