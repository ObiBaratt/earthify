import Navbar from "../Components/Navbar/Navbar";
import Signup from "../Components/Signup/Signup";

const Home = () => {
    return (
      <div>
        <Navbar />
        <div className="content">
          <h1>Home</h1>
          <Signup />
        </div>
      </div>
    );
  };

export default Home;
