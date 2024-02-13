import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home";
import PageNotFound from "./pages/pagenotfound";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Jobs from "./pages/jobs";
import JobsDetail from "./pages/dynamicPages/jobsdetail";
import Employers from "./pages/employers";
import EmployeDetail from "./pages/dynamicPages/employedetail";
import Registration from "./pages/signup";
import SignIn from "./pages/signin";
function App() {
  const { pathname } = useLocation();
  const showNavbar = [
    "/",
    "/jobs",
    "/home",
    "/employes/details",
    "/employers",
    "/jobs/dynamic",
  ];
  const showFooter = [
    "/",
    "/jobs",
    "/home",
    "/employes/details",
    "/employers",
    "/jobs/dynamic",
  ];
  const shouldShowNavbar = showNavbar.includes(pathname);
  const shouldShowFooter = showFooter.includes(pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/employes/details" element={<EmployeDetail />} />
        <Route path="/employers" element={<Employers />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {shouldShowFooter && <Footer />}
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
