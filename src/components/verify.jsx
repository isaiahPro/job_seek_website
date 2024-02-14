// Verify.js
import React, { useState } from "react";
import { verifyAccount } from "../api/sendData";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "../pages/signin";
import { RxCross2 } from "react-icons/rx";

const Verify = ({ gmail_data, setSignUpPage }) => {
  const navigate = useNavigate();
  const gmail = gmail_data;
  const [verificationCode, setVerificationCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isloading, setIsloading] = useState(false);
  const [loginPage, setLoginPage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);

    try {
      const response = await verifyAccount(gmail, verificationCode);
      console.log(response);

      if (response) {
        toast.success(response.message);
        setIsloading(false);
      }
      // Navigate to login page on success
      setLoginPage(true);
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
    <div className={" px-10 relative "}>
      <form
        onSubmit={handleSubmit}
        className={
          loginPage
            ? "hidden"
            : "border relative bg-white  border-t-4 border-blue-600 p-12 rounded-xl flex flex-col gap-5 shadow-2xl my-40 "
        }
      >
        <div
          className={"absolute top-2 text-2xl right-3 bottom-0"}
          onClick={() => setSignUpPage(false)}
        >
          <RxCross2 />
        </div>
        <label
          htmlFor="verification code"
          className={"text-xl font-roboto font-semibold text-blue-700"}
        >
          Verification Code
        </label>
        <div className={"flex gap-4 flex-row"}>
          <input
            type="text"
            placeholder="verification code"
            className={"input input-xl text-sm text-white"}
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
          />
          <button
            type="submit"
            className={
              "px-4 py-2 rounded-md  mt-1 h-fit mx-auto bg-blue-700 text-white font-roboto text-semibold"
            }
          >
            {!isloading ? (
              <div>Verify</div>
            ) : (
              <span className="loading loading-spinner text-secondary"></span>
            )}
          </button>
        </div>
        {errorMessage && (
          <p className={"text-error font-semibold text-sm font-roboto"}>
            {errorMessage}
          </p>
        )}
        <p className={"text-info font-semibold text-sm font-roboto"}>
          *Check your gmail and add the verification code *
        </p>
      </form>
      <div className={loginPage ? " top-0  left-0 w-screen h-fit" : "hidden"}>
        <SignIn setSignUpPage={setSignUpPage} />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Verify;
