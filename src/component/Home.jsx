import GooglePlay from "../assets/GooglePlay.png";
import AppStore from "../assets/AppStore.png";
import Hero from "../assets/hero.png";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#F5F5F5]">
      <div>
        <h1 className="text-center text-4xl font-bold pt-12">
          We Build <br />
          <span className="text-purple-700 px-2 rounded leading-12">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-center text-gray-500 pt-4 px-2 text-sm sm:text-base leading-relaxed">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.
          <br className="hidden sm:block" />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
        <div className="flex justify-center gap-3 pt-6">
          <a href="https://play.google.com/store" target="_blank">
            <img className="h-10" src={GooglePlay} alt="Google Play" />
          </a>

          <a href="https://www.apple.com/app-store/" target="_blank">
            <img className="h-10" src={AppStore} alt="App Store" />
          </a>
        </div>
        <div className="flex justify-center items-center text-center pt-10">
          <img className="h-40 lg:h-80" src={Hero} alt="" />
        </div>
        <div className="bg-purple-600 text-center text-white pb-10">
          <h1 className="font-semibold text-2xl pt-10">
            Trusted by Millions, Built for You
          </h1>
          <div className="flex flex-col sm:flex-row text-center justify-center gap-10 sm:gap-36 pt-10">
            <div>
              <p className="text-[10px]">Total Downloads</p>
              <h1 className="font-bold text-3xl pt-2">29.6M</h1>
              <p className="text-[10px] pt-2">21% more than last month</p>
            </div>
            <div>
              <p className="text-[10px]">Total Reviews</p>
              <h1 className="font-bold text-3xl pt-2">906K</h1>
              <p className="text-[10px] pt-2">46% more than last month</p>
            </div>
            <div>
              <p className="text-[10px]">Active Apps</p>
              <h1 className="font-bold text-3xl pt-2">132+</h1>
              <p className="text-[10px] pt-2">31 more will Launch</p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h1>Treanding Apps</h1>
          <button onClick={() => navigate("/apps")} className="btn btn-primary">
            Primary
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
