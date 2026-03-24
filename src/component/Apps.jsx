import { useEffect, useState } from "react";

const Apps = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

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
        <h1 className="text-center text-2xl md:text-3xl font-bold">
          Our All Applications
        </h1>

        <p className="text-center mt-3 text-gray-500 text-sm md:text-base">
          Explore All Apps on the Market developed by us. We code for Millions
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

              <p className="text-sm text-gray-600 line-clamp-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apps;
