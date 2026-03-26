import { useEffect, useState } from "react";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="bg-[#F5F5F5] py-10">
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
          <div className="text-center pt-10">
            <h1 className="font-bold text-3xl">Your Installed Apps</h1>
            <p className="text-gray-500 mt-3">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>

          <div className="max-w-6xl mx-auto gap-4 p-4 pt-10">
            {installedApps.map((app) => (
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
                  <div className="ml-6 mt-2">
                    <h2 className="font-semibold">{app.title}</h2>

                    <div className="flex gap-6 mt-2">
                      <p className="text-gray-500">{app.downloads}</p>
                      <p className="text-gray-500">{app.ratingAvg}</p>
                      <p className="text-gray-500">{app.mb} MB</p>
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
  );
};

export default Installation;
