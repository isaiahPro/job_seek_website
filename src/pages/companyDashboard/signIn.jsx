import { useState } from "react";
import { Link } from "react-router-dom";
import { CompanyLogin } from "../../api/sendData";
import { useCookies } from "react-cookie";
import LogoImage from "../../assets/logoimages/logo.png";
import { useNavigate } from "react-router-dom";
export default function Com_SignIn() {
  const [email, setGmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isloading, setIsloading] = useState(false);
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([
    "company_token",
    "company_data",
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);

    try {
      const response = await CompanyLogin(email, password);
      if (response) {
        setGmail("");
        setPassword("");
        setIsloading(false);
        setCookie("company_token", response.token, { path: "/" });
        setCookie("company_data", response.company, { path: "/" });
        navigate("/company/home");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      setIsloading(false);
      if (error.message === "User not found") {
        setErrorMessage("User not found. Please check your email.");
      } else if (error.message === "Invalid verification code") {
        setErrorMessage("Invalid verification code. Please try again.");
      } else {
        setErrorMessage(error.error);
      }
    }
  };
  return (
    <div>
      <div className="flex min-h-full flex-1 w-[40%] mx-auto flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src={LogoImage}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium font-ubuntu leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  name="job_email"
                  type="email"
                  value={email}
                  onChange={(e) => setGmail(e.target.value)}
                  required
                  className="block px-5 w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className={"font-ubuntu"}>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-ubuntu font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    to="/company/forget-password"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  name="job_password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  required
                  className="block px-5 w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {!isloading ? (
                  <div>Sign In</div>
                ) : (
                  <span className="loading loading-spinner text-secondary"></span>
                )}
              </button>
            </div>
          </form>
          {errorMessage && (
            <p className={"text-error font-medium my-4 text-sm font-roboto"}>
              {errorMessage}
            </p>
          )}

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              to="/company/signup"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
