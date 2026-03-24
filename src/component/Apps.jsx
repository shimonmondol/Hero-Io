import { useEffect, useState } from "react";
import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";
import AppError from "../assets/App-Error.png";
import { useNavigate } from "react-router";

const Apps = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/appdata.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="bg-[#F5F5F5] py-10">
      <div className="max-w-6xl mx-auto px-4">
        {filteredData.length === 0 ? (
          // ✅ ONLY IMAGE (no title, no paragraph)
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              {/* Image */}
              <img
                src={AppError}
                alt="No Apps Found"
                className="w-60 md:w-72 mx-auto"
              />
              {/* Text under image */}
              <h1 className="mt-10 text-4xl md:text-2xl font-bold text-gray-900">
                OPPS!! APP NOT FOUND
              </h1>
              <p className="mt-2 text-sm md:text-base text-gray-500 max-w-md ">
                The App you are requesting is not found on our system. please
                try another apps
              </p>
              {/* Button */}
              <button
                onClick={() => navigate("/")}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-6 transition cursor-pointer"
              >
                Go Back
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* ✅ Normal UI (unchanged) */}
            <h1 className="text-center text-2xl md:text-3xl font-bold">
              Our All Applications
            </h1>

            <p className="text-center mt-3 text-gray-500 text-sm md:text-base">
              Explore All Apps on the Market developed by us. We code for
              Millions
            </p>

            {/* Top Section */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-10 gap-4">
              <h1 className="text-lg md:text-2xl font-bold">
                ({filteredData.length}) Apps Found
              </h1>

              <input
                type="text"
                placeholder="Search Apps"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-72 focus:outline-none"
              />
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
              {filteredData.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition w-full"
                >
                  <img
                    className="rounded-xl w-full h-40 md:h-48 object-cover"
                    src={item.image}
                    alt={item.title}
                  />

                  <h5 className="mt-4 mb-2 text-base md:text-lg font-semibold">
                    {item.title}
                  </h5>

                  <div className="flex justify-between">
                    <div className="flex items-center border border-white bg-[#F1F5E8] px-2 py-1 rounded">
                      <img className="w-4 h-4" src={download} alt="" />
                      <h1 className="font-semibold text-sm ml-1 text-[#00D390]">
                        {item.downloads}
                      </h1>
                    </div>

                    <div className="flex items-center border border-white bg-[#F1F5E8] px-2 py-1 rounded">
                      <img className="w-4 h-4" src={rating} alt="" />
                      <h1 className="font-semibold text-sm ml-1 text-[#FF8811]">
                        {item.ratingAvg}
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Apps;
