import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useCookies } from "react-cookie";
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
import Com_SignIn from "./pages/companyDashboard/signIn";
import { useEffect, useState } from "react";
import { CheckLogin } from "./api/sendData";
import Com_SignUp from "./pages/companyDashboard/signup";
import Com_ForgetPassword from "./pages/companyDashboard/forgetPassword";
function App() {
  const [cookies] = useCookies(["company_token"]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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

  const shouldShowComNavbar = showComNavbar.includes(pathname);
  const shouldShowNavbar = showNavbar.includes(pathname);
  const shouldShowFooter = showFooter.includes(pathname);
  useEffect(() => {
    const verifyAuthentication = async () => {
      const response = await CheckLogin(cookies.company_token);
      if (!response) {
        setIsAuthenticated(false);
      }
      setIsAuthenticated(true);
    };
    verifyAuthentication();
  }, [cookies]);
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
        <Route path="/company/signin" element={<Com_SignIn />} />
        <Route path="/company/signup" element={<Com_SignUp />} />
        <Route path="/company/forget-password" element={<Com_ForgetPassword />} />

        <Route
          path="/company/password"
          element={
            isAuthenticated ? (
              <Com_Password />
            ) : (
              <Navigate to="/company/signin" />
            )
          }
        />
        <Route
          path="/company/profile"
          element={
            isAuthenticated ? (
              <Com_profile />
            ) : (
              <Navigate to="/company/signin" />
            )
          }
        />
        <Route
          path="/company/alert"
          element={
            isAuthenticated ? <Com_Alert /> : <Navigate to="/company/signin" />
          }
        />
        <Route
          path="/company/home"
          element={
            isAuthenticated ? <Com_home /> : <Navigate to="/company/signin" />
          }
        />
        <Route
          path="/company/job"
          element={
            isAuthenticated ? <Com_Jobs /> : <Navigate to="/company/signin" />
          }
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
