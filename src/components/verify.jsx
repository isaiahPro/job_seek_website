// Verify.js
import React, { useState } from "react";
import { verifyAccount } from "../api/sendData";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Verify = ({ gmail_data }) => {
  const navigate = useNavigate();
  const gmail = gmail_data;
  const [verificationCode, setVerificationCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await verifyAccount(gmail, verificationCode);
      console.log(response);
      if (response) {
        toast.success(response.message);
      }
      // Navigate to login page on success
      navigate("/signin");
    } catch (error) {
      console.error("Error submitting data:", error);

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
    <div className={"py-20 pr-40 "}>
      <form
        onSubmit={handleSubmit}
        className={
          "border p-12 rounded-xl flex flex-col gap-5 shadow-2xl my-40 "
        }
      >
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
            Submit
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
      <ToastContainer />
    </div>
  );
};

export default Verify;
