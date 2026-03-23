import { Route, Routes } from "react-router";
import Layout from "./component/Layout";
import Home from "./component/Home";
import Apps from "./component/Apps";
import Installation from "./component/Installation";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/installation" element={<Installation />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
