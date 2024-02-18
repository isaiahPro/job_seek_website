import { useState } from "react";
import { Link } from "react-router-dom";
import { CreateCompany } from "../../api/sendData";
import { BiHide, BiShow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
export default function Com_SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [adminName, setAdminName] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [companyDiscription, setCompanyDiscription] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isloading, setIsloading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);

    try {
      const response = await CreateCompany(
        PhoneNumber,
        companyName,
        adminEmail,
        companyDiscription,
        adminName,
        password
      );
      if (response) {
        setIsloading(false);
        navigate("/company/signin");
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
      <div className="flex min-h-full flex-1 w-[40%] mx-auto flex-col justify-center px-6 py-5 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create Your Account
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium font-ubuntu leading-6 text-gray-900"
              >
                Company Name:
              </label>
              <div className="mt-2">
                <input
                  name="CompanyName"
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                  className="block px-5 bg-[#dae1f0] text-black w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className={"font-ubuntu"}>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-ubuntu font-medium leading-6 text-gray-900"
                >
                  Admin Name:
                </label>
              </div>
              <div className="mt-2">
                <input
                  name="admin_name"
                  value={adminName}
                  onChange={(e) => setAdminName(e.target.value)}
                  type="text"
                  required
                  className="block bg-[#dae1f0] text-black px-5 w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className={"font-ubuntu"}>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="Email"
                  className="block text-sm font-ubuntu font-medium leading-6 text-gray-900"
                >
                  Company Email:
                </label>
              </div>
              <div className="mt-2">
                <input
                  name="admin_Email"
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                  type="email"
                  required
                  className="block bg-[#dae1f0] text-black px-5 w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
              </div>
              <div className="mt-2 relative">
                <input
                  name="job_password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={!showPassword ? "password" : "text"}
                  required
                  className="block px-5 w-full rounded-md border-0 py-1.5 bg-[#dae1f0] text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <div
                  className={"absolute right-3 top-2 text-base"}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <BiShow /> : <BiHide />}
                </div>
              </div>
            </div>
            <div className={"font-ubuntu"}>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="Phone Number"
                  className=" flex w-full flex-row justify-between text-sm font-ubuntu font-medium leading-6 text-gray-900"
                >
                  <p> Phone Number</p>
                  {phoneError && (
                    <p
                      className={"text-error font-medium  text-sm font-roboto"}
                    >
                      {phoneError}
                    </p>
                  )}
                </label>
              </div>
              <div className="mt-2">
                <input
                  name="phone_number"
                  onChange={(e) => {
                    const phoneNumberRegex = /^(09|07)\d{8}$/;
                    const inputNumber = e.target.value;
                    if (phoneNumberRegex.test(inputNumber)) {
                      setPhoneError("");
                      setPhoneNumber(e.target.value);
                    } else {
                      setPhoneError("Invalid Phone Number");
                    }
                  }}
                  type="phone"
                  required
                  className="block px-5 w-full rounded-md border-0 py-1.5 bg-[#dae1f0] text-blackshadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium font-ubuntu leading-6 text-gray-900"
              >
                About Company:
              </label>
              <div className="mt-2">
                <textarea
                  name="about Company"
                  cols="30"
                  rows="3"
                  type="text"
                  placeholder="what the comapny works on? what they do?"
                  value={companyDiscription}
                  onChange={(e) => setCompanyDiscription(e.target.value)}
                  required
                  className="block px-5 w-full rounded-md border-0 py-1.5 bg-[#dae1f0] text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {!isloading ? (
                  <div>Sign Up</div>
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

          <p className="mt-5 text-center text-sm text-gray-500">
            You have an account?{" "}
            <Link
              to="/company/signin"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              SignIn
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
