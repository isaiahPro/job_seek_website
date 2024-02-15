import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
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
import ForgetPassword from "./pages/forgetPassword";
import Comp_navbar from "./components/company/navbar";
import Com_home from "./pages/companyDashboard/home";
import Com_Jobs from "./pages/companyDashboard/jobs";
import Com_profile from "./pages/companyDashboard/profile";
import Com_Alert from "./pages/companyDashboard/resumealert";
import Com_Password from "./pages/companyDashboard/changepass";
import Com_delete from "./pages/companyDashboard/delete";
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
  const showComNavbar = [
    "/company/profile",
    "/company/password",
    "/company/alert",
    "/company/home",
    "/company/job",
    "/company/delete",
  ];
  const isAuthenticated = false;
  const shouldShowComNavbar = showComNavbar.includes(pathname);
  const shouldShowNavbar = showNavbar.includes(pathname);
  const shouldShowFooter = showFooter.includes(pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      {shouldShowComNavbar && <Comp_navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/employes/details" element={<EmployeDetail />} />
        <Route path="/employers" element={<Employers />} />
        <Route path="/company/profile" element={<Com_profile />} />
        <Route path="/company/home" element={<Com_home />} />
        {/* <Route path="/company/job" element={<Com_Jobs />} /> */}
        <Route path="/company/alert" element={<Com_Alert />} />
        <Route path="/company/password" element={<Com_Password />} />
        <Route
          path="/company/job"
          element={isAuthenticated ? <Com_Jobs /> : <Navigate to="/signin" />}
        />
        <Route path="/company/delete" element={<Com_delete />} />

        {/* <Route path="/company/profile" element={<CompanyProfile />} /> */}
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
