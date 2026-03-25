import { useLocation } from "react-router";
import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";
import review from "../assets/icon-review.png";

const AppDetail = () => {
  const location = useLocation();
  const { item } = location.state; // this is the passed item

  return (
    <div className="bg-[#F5F5F5] pb-20">
      <div className="flex max-w-6xl mx-auto pl-6 pt-16">
        <div>
          <img className="w-60 h-60" src={item.image} alt="" />
        </div>
        <div className="pl-10">
          <h1 className="font-bold text-2xl">{item.title}</h1>
          <p className="mt-2 text-gray-500">
            Developed by
            <span className="text-blue-600 font-medium pl-2">
              {item.companyName}
            </span>
          </p>
          <div className="flex gap-16">
            <div>
              <img className="w-5 mt-5" src={download} alt="" />
              <p className="mt-2 text-xs text-gray-500">Downloads</p>
              <h1 className="font-bold text-2xl">{item.downloads}</h1>
            </div>
            <div>
              <img className="w-5 mt-5" src={rating} alt="" />
              <p className="mt-2 text-xs text-gray-500">Average Ratings</p>
              <h1 className="font-bold text-2xl">{item.ratingAvg}</h1>
            </div>
            <div>
              <img className="w-6 mt-5" src={review} alt="" />
              <p className="mt-2 text-xs text-gray-500">Total Reviews</p>
              <h1 className="font-bold text-2xl">{item.reviews}</h1>
            </div>
          </div>
          <button className="btn bg-green-600 text-white mt-6">
            Install Now ({item.mb} MB)
          </button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pl-6 pt-16">
        <h1 className="font-semibold text-xl">Description</h1>
        <p className="mt-6 text-gray-600">{item.description}</p>
      </div>
    </div>
  );
};

export default AppDetail;
