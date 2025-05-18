import { Link } from "react-router-dom"; // Import Link from react-router-dom
import video1 from "../assets/video1.mp4";
import video4 from "../assets/video4.mp4";
import video3 from "../assets/video3.mp4";

const HeroSection = () => {
  return (
    <div id="Home" className="flex flex-col items-center mt-6 lg:mt-10">
      <h1 className="text-4xl sm:text-6xl lg:text-5xl text-center tracking-wide text-black">
        Empowering <span className="bg-gradient-to-r from-green-500 to-green-900 text-transparent bg-clip-text">Farmers</span> with Intelligent Crop Predictions
      </h1>
      <p className="mt-10 text-lg text-center text-black max-w-4xl">
        Yield Vision harnesses advanced analytics to deliver precise crop predictions based on soil and area data. 
        Our platform empowers farmers to make informed decisions, optimize yields, and cultivate sustainable practices 
        for a productive harvest.
      </p>

      <div className="flex mt-10 justify-center flex-col lg:flex-row">
        {/* First video container */}
        <div className="relative w-full lg:w-1/2 mx-2 my-4 lg:my-0">
          <video autoPlay loop muted className="rounded-lg w-full border border-green-700 shadow-green-400" src={video1}></video>
          <Link to="/form" className="absolute bottom-2 right-2 mr-2 bg-gradient-to-r from-green-500 to-green-900 py-2 px-4 rounded-md text-white">
            Start for Free
          </Link>
        </div>
        {/* Second video container */}
        {/* <div className="relative w-full lg:w-1/2 mx-2 my-4 lg:my-0">
          <video autoPlay loop muted className="rounded-lg w-full border border-green-700 shadow-green-400" src={video4}></video>
          <Link to="/dashboard" className="absolute bottom-2 right-2 mr-2 bg-gradient-to-r from-green-500 to-green-900 py-2 px-4 rounded-md text-white">
            Dashboard
          </Link>
        </div> */}
        <div className="relative w-full lg:w-1/2 mx-2 my-4 lg:my-0">
          <video autoPlay loop muted className="rounded-lg w-full border border-green-700 shadow-green-400" src={video3}></video>
          <Link to="/fertilizer-form" className="absolute bottom-2 right-2 mr-2 bg-gradient-to-r from-green-500 to-green-900 py-2 px-4 rounded-md text-white">
            Fertilizers
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
