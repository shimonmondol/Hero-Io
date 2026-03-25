import { Route, Routes } from "react-router";
import Layout from "./component/Layout";
import Home from "./component/Home";
import Apps from "./component/Apps";
import AppDetails from "./component/AppDetails";
import Installation from "./component/Installation";
import NotFound from "./component/NotFound";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/apps/:id" element={<AppDetails />} />
        <Route path="/installation" element={<Installation />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;