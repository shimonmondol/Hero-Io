import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

const Apps = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/public/appdata.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="bg-[#F5F5F5] py-10">
      <div className="max-w-6xl mx-auto pl-6">
        <h1 className="text-center text-3xl font-bold">Our All Applications</h1>
        <p className="text-center mt-3 text-gray-500">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        {/* Grid layout */}
        <div className="flex justify-between mt-10">
          ({filteredData.length}) Apps Found
          <input
            type="text"
            placeholder="Search Apps"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input border border-gray-300 focus:border-none focus:outline-none focus:ring-0 mr-3"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="bg-white w-full p-4 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition"
            >
              <img
                className="rounded-xl w-50 h-50 object-cover"
                src={item.image}
                alt={item.title}
              />
              <h5 className="mt-4 mb-2 text-lg font-semibold">{item.title}</h5>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apps;
