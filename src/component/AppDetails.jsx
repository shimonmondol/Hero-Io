import { useLocation } from "react-router";
import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";
import review from "../assets/icon-review.png";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from "recharts";

const AppDetail = () => {
  const location = useLocation();
  const { item } = location.state;

  const data = [
    { name: "Jan", value: 30 },
    { name: "Feb", value: 50 },
    { name: "Mar", value: 40 },
    { name: "Apr", value: 70 },
  ];

  return (
    <div className="bg-[#F5F5F5] pb-20">
      <div className="flex flex-col lg:flex-row max-w-6xl mx-auto px-4 lg:pl-6 pt-10 lg:pt-16">
        <div className="flex justify-center lg:block">
          <img
            className="w-60 h-50 lg:h-60 object-cover"
            src={item.image}
            alt=""
          />
        </div>
        <div className="mt-6 lg:mt-0 lg:pl-10 text-center lg:text-left">
          <h1 className="font-bold text-xl lg:text-2xl">{item.title}</h1>
          <p className="mt-2 text-gray-500 text-sm lg:text-base">
            Developed by
            <span className="text-blue-600 font-medium pl-2">
              {item.companyName}
            </span>
          </p>
          <div className="flex justify-center lg:justify-start gap-6 lg:gap-16 mt-4">
            <div className="text-center lg:text-left">
              <img className="w-5 mt-5 mx-auto lg:mx-0" src={download} alt="" />
              <p className="mt-2 text-xs text-gray-500">Downloads</p>
              <h1 className="font-bold text-lg lg:text-2xl">
                {item.downloads}
              </h1>
            </div>
            <div className="text-center lg:text-left">
              <img className="w-5 mt-5 mx-auto lg:mx-0" src={rating} alt="" />
              <p className="mt-2 text-xs text-gray-500">Average Ratings</p>
              <h1 className="font-bold text-lg lg:text-2xl">
                {item.ratingAvg}
              </h1>
            </div>
            <div className="text-center lg:text-left">
              <img className="w-6 mt-5 mx-auto lg:mx-0" src={review} alt="" />
              <p className="mt-1 text-xs text-gray-500">Total Reviews</p>
              <h1 className="font-bold text-lg lg:text-2xl">{item.reviews}</h1>
            </div>
          </div>
          <button className="btn bg-green-600 text-white mt-6 w-full lg:w-auto">
            Install Now ({item.mb} MB)
          </button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pl-6 pt-16">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
          <ReferenceLine
            y={50}
            stroke="red"
            strokeDasharray="5 5"
            label="Target"
          />
        </LineChart>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-6 pt-8 sm:pt-10 lg:pt-16">
        <h1 className="font-semibold text-lg sm:text-lg md:text-xl">
          Description
        </h1>
        <p className="mt-3 sm:mt-4 md:mt-6 text-gray-600 text-sm sm:text-sm md:text-base">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default AppDetail;
