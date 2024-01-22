import { Route, Routes, useParams } from "react-router-dom";
import Home from "./router/Home";
import Layout from "./component/layout/Layout";
import NotFound from "./router/NotFound";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:params" element={<LayoutWrapper />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </RecoilRoot>
  );
}

const LayoutWrapper = () => {
  const { params = "" } = useParams<{ params: string }>();
  return <Layout params={params} />;
};

export default App;
