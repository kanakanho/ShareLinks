import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import Home from "./router/Home";
import Layout from "./component/layout/Layout";
import { useEffect } from "react";
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
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://api.github.com/repos/${params}/ShareLinks`)
      .then((res) => {
        if (res.status !== 200) {
          navigate("/404");
        }
      })
      .catch(() => {
        navigate("/404");
      });
  }, [params, navigate]);
  return <Layout params={params} />;
};

export default App;
