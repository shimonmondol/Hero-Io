import { useEffect, useState } from "react";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState(""); // New: sort state

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
      setInstalledApps(apps);
      setLoading(false);
    }, 800);
  }, []);

  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
  };

  // Sort the apps by MB
  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortOrder === "low") return a.mb - b.mb;
    if (sortOrder === "high") return b.mb - a.mb;
    return 0;
  });

  return (
    <div className="bg-[#F5F5F5] py-10">
      <div className="max-w-6xl mx-auto">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        ) : installedApps.length === 0 ? (
          <h1 className="text-center font-semibold text-3xl pt-10 pb-40 text-black">
            No Apps Installed
          </h1>
        ) : (
          <>
            <div className="text-center">
              <h1 className="font-bold text-3xl">Your Installed Apps</h1>
              <p className="text-gray-500 mt-3">
                Explore All Trending Apps on the Market developed by us
              </p>
            </div>
            <div className="flex justify-between px-4 mt-10">
              <div>
                <h1 className="font-semibold text-2xl mt-3 mb-5">
                  {installedApps.length} Apps Found
                </h1>
              </div>
              <div>
                <form className="max-w-sm mx-auto mt-2">
                  <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="block w-full px-3 py-2.5 text-heading text-sm rounded-base bg-white shadow-xs placeholder:text-body border-none focus:outline-none focus:ring-0"
                  >
                    <option value="">Sort By Downloads</option>
                    <option value="low">Low to High</option>
                    <option value="high">High to Low</option>
                  </select>
                </form>
              </div>
            </div>
            <div className="max-w-6xl mx-auto gap-4 p-4">
              {sortedApps.map((app) => (
                <div
                  key={app.id}
                  className="flex p-4 bg-white justify-between rounded-lg shadow mb-4"
                >
                  <div className="flex">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-28 h-24 object-cover rounded"
                    />
                    <div className="ml-6 mt-4">
                      <h2 className="font-semibold">{app.title}</h2>
                      <div className="flex gap-3 lg:gap-6 mt-2 ">
                        <div className="flex">
                          <img
                            className="w-4 h-4 mt-1"
                            src="/src/assets/icon-downloads.png"
                            alt=""
                          />
                          <p className="text-gray-500 ml-2">{app.downloads}</p>
                        </div>
                        <div className="flex">
                          <img
                            className="w-4 h-4 mt-1"
                            src="/src/assets/icon-ratings.png"
                            alt=""
                          />
                          <p className="text-gray-500 ml-2">{app.ratingAvg}</p>
                        </div>
                        <div className="flex">
                          <p className="text-gray-500 ml-1">{app.mb} MB</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button
                      className="btn bg-red-600 text-white hover:bg-red-700"
                      onClick={() => handleUninstall(app.id)}
                    >
                      Uninstall
                    </button>
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
export default Installation;
