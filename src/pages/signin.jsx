import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiHide, BiShow } from "react-icons/bi";
import { LoginAccount } from "../api/sendData";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { RxCross2 } from "react-icons/rx";

const SignIn = ({ setSignUpPage }) => {
  const [isloading, setIsloading] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [showPassword, setShowPassword] = useState(false);
  const [gmail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);

    try {
      const response = await LoginAccount(gmail, password);

      console.log(response);
      if (response) {
        removeCookie("user_data");
        setCookie("user_data", response, { path: "/" });
        alert("login success full");
        setIsloading(false);
        navigate("/");
      }
      // Navigate to login page on success
      navigate("/");
    } catch (error) {
      console.error("Error submitting data:", error);
      setIsloading(false);

      // Handle specific error messages
      if (error.message === "User not found") {
        setErrorMessage("User not found. Please check your email.");
      } else if (error.message === "Invalid verification code") {
        setErrorMessage("Invalid verification code. Please try again.");
      } else {
        setErrorMessage("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className={"py-5 bg-transparent"}>
      <form
        onSubmit={handleSubmit}
        className={
          "w-[600px] relative px-10 py-20 bg-white border-2 flex flex-col gap-10 mx-auto mt-[3%] rounded-xl shadow-2xl shadow-blue-800"
        }
      >
        <div
          className={"absolute top-2 text-2xl right-3 bottom-0"}
          onClick={() => setSignUpPage(false)}
        >
          <RxCross2 />
        </div>
        <h1
          className={
            "text-center font-bold my-2 text-blue-700 font-roboto text-xl"
          }
        >
          Login Page{" "}
        </h1>
        <div className={"flex flex-row gap-4 mx-auto w-full"}>
          <label
            htmlFor="Email"
            className={"my-auto w-[15%] text-base font-robot font-semibold"}
          >
            Email:
          </label>
          <div className={"w-[80%] "}>
            <input
              required
              value={gmail}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className={
                "input w-full input-md border-blue-900 bg-white border"
              }
              name="email"
            />
          </div>
        </div>
        <div className={"flex flex-row gap-4 w-full mx-auto"}>
          <label
            htmlFor="Email"
            className={"my-auto w-[15%] text-base font-robot font-semibold"}
          >
            Password:
          </label>
          <div className={"w-[80%] relative"}>
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={!showPassword ? "password" : "text"}
              className={
                "input w-full input-md border-blue-900 bg-white border"
              }
              name="password"
            />
            <div
              className={"absolute right-3 top-4 text-xl"}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </div>
          </div>
        </div>
        <div className={"w-full flex flex-col gap-2"}>
          <div
            className={
              "w-full text-right pr-10 text-blue-500 font-roboto font-semibold"
            }
          >
            <Link to={"/forget-password"} className={"w-fit"}>
              <p>forget password?</p>
            </Link>
          </div>
          <button
            type="submit"
            className="bg-blue-500 w-full text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {!isloading ? (
              <div>Login</div>
            ) : (
              <span className="loading loading-spinner text-secondary"></span>
            )}
          </button>
          <div className={"flex flex-row justify-between px-3 my-2"}>
            <p>you don`t have account?</p>
            <div>
              {" "}
              <Link to={"/signup"}>
                <p className={"text-blue-700"}>signUp</p>
              </Link>
            </div>
          </div>
          {errorMessage && (
            <p className={"text-error font-semibold text-sm font-roboto"}>
              {errorMessage}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default SignIn;
