import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">
        Welcome to KiliShop
        </h1>
        <p className="home-description">
        Discover a world of fashion, electronics, home goods, and more. Shop the latest trends, enjoy unbeatable deals, and experience exceptional customer service. Your one-stop destination for all your shopping needs!
        </p>

        <div className="home-buttons">
            <Link to = "signin"><button className="custom-button">Sign In</button></Link>
          <Link to = "signup" ><button className="custom-button">Sign Up</button></Link> 
        </div>
      </div>

      <div className="home-image-container">
        <img src="src/images/Home.jpg"className="home-image" />
      </div>
    </div>
  );
};

export default Home;
