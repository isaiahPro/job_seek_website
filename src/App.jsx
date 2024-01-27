import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home";
import PageNotFound from "./pages/pagenotfound";
import Navbar from "./components/navbar";
import Footer from "./pages/footer";

function App() {
  const { pathname } = useLocation();
  const showNavbar = [""];
  const showFooter = [""];
  const shouldHideNavbar = showNavbar.includes(pathname);
  const shouldHideFooter = showFooter.includes(pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/catagories" element={<Catagories />} />
        <Route path="/category/:catagoryID" element={<MainCat />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {!shouldHideFooter && <Footer />}
    </>
  );
}

function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default Root;
