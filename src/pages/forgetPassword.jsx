import React, { useState } from "react";
import { changePassword, sendVerification } from "../api/sendData";
import { BiHide, BiShow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isloading, setIsloading] = useState(false);
  const [isloading2, setIsloading2] = useState(false);
  const navigate = useNavigate();
  const [verificationCode, setVerificationCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [verify_page, setVerify_page] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit1 = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsloading(true);
    try {
      const response = await sendVerification(email);
      console.log(response);
      if (response) {
        setVerify_page(true);
        setIsloading(false);
      }
      // Navigate to login page on success
    } catch (error) {
      console.error("Error submitting data:", error);
      setIsloading(false);

      // Handle specific error messages
      if (error.message === "User not found") {
        setErrorMessage("User not found. Please check your email.");
      } else if (error.message === "Invalid verification code") {
        setErrorMessage("Invalid verification code. Please try again.");
      } else {
        setErrorMessage(error.message);
      }
    }
  };
  const handleSubmit2 = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsloading2(true);
    try {
      const response = await changePassword(
        email,
        verificationCode,
        newPassword
      );
      if (response) {
        alert("Password changed successfully");
        setIsloading2(false);
        navigate("/signin");
      }
      // Navigate to login page on success
    } catch (error) {
      console.error("Error submitting data:", error);
      setIsloading2(false);

      // Handle specific error messages
      if (error.message === "User not found") {
        setErrorMessage("User not found. Please check your email.");
      } else if (error.message === "Invalid verification code") {
        setErrorMessage("Invalid verification code. Please try again.");
      } else {
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <div className={"pt-20"}>
      {verify_page ? (
        <div>
          <form
            onSubmit={handleSubmit2}
            className={
              " mx-auto shadow-2xl rounded-2xl shadow-blue-700 w-[50%] pt-20 pb-10 "
            }
          >
            <div className={"px-20 flex flex-row justify-center"}>
              <label
                htmlFor="email"
                className={"text-base font-ubuntu w-[80px] my-auto mx-5"}
              >
                Code:
              </label>
              <input
                type="text"
                name="verificationCode"
                required
                value={verificationCode}
                onChange={(e) => {
                  setVerificationCode(e.target.value);
                }}
                className={
                  "input input-base bg-transparent rounded-md border w-[70%] border-slate-300"
                }
              />
            </div>
            <div className={"px-20 flex flex-row justify-center mt-5"}>
              <label
                htmlFor="email"
                className={"text-base font-ubuntu my-auto mx-5"}
              >
                NewPassword:
              </label>
              <div className={"w-full relative "}>
                <input
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  type={!showPassword ? "password" : "text"}
                  className={
                    "input w-full input-md  bg-white border  rounded-md border-slate-300"
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
            <button
              type="submit"
              className={"mx-auto mt-10 text-center w-full"}
            >
              {!isloading ? (
                <div
                  className={
                    "text-base font-semibold text-center bg-blue-700 w-fit mx-auto p-2 text-white rounded-md hover:opacity-85 font-ubuntu "
                  }
                >
                  Update Password
                </div>
              ) : (
                <span className="loading loading-spinner text-secondary"></span>
              )}
            </button>
            {errorMessage && (
              <p
                className={
                  "text-error mx-36 mt-7 font-semibold text-sm font-roboto"
                }
              >
                {errorMessage}
              </p>
            )}
          </form>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit1}
          className={
            " mx-auto shadow-2xl rounded-2xl shadow-blue-700 w-[50%] pt-20 pb-10 "
          }
        >
          <div className={"mx-auto"}>
            <label
              htmlFor="email"
              className={"text-xl font-ubuntu my-auto mx-5"}
            >
              Email:
            </label>
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className={
                "input input-base bg-transparent rounded-md border w-[70%] border-slate-300"
              }
              id=""
            />
          </div>
          <button type="submit" className={"mx-auto mt-10 text-center w-full"}>
            {!isloading ? (
              <div
                className={
                  "text-base font-semibold text-center bg-blue-700 w-fit mx-auto p-2 text-white rounded-md hover:opacity-85 font-ubuntu "
                }
              >
                Send Verification
              </div>
            ) : (
              <span className="loading loading-spinner text-secondary"></span>
            )}
          </button>
          {errorMessage && (
            <p
              className={
                "text-error mt-7 font-semibold text-sm pl-40 font-roboto"
              }
            >
              {errorMessage}
            </p>
          )}
        </form>
      )}
    </div>
  );
};

export default ForgetPassword;
