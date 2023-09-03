import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MAIN from "./pages/MAIN";
import { useEffect } from "react";
import Payment from "./pages/Payment";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import AdminPanel from "./pages/Admin";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MAIN />} />
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/product/:id" element={<Product/>}/>
      <Route path="/admin" element={<AdminPanel/>}/>
    </Routes>
  );
}
export default App;
