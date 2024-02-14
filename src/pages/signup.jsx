import React, { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { createAccount } from "../api/sendData"; // Update the path accordingly
import Verify from "../components/verify";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const RegistrationForm = ({ setSignUpPage }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    password: "",
    gmail: "",
    education: [""],
    profile_pic: null,
    resume_file: null,
  });
  const [showVerify, setShowVerify] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isloading, setIsloading] = useState(false);

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume_file: e.target.files[0] });
  };
  const handleProfilePicChange = (e) => {
    setFormData({ ...formData, profile_pic: e.target.files[0] });
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    if (name === "education") {
      const updatedEducation = [...formData.education];
      updatedEducation[index] = value;
      setFormData({ ...formData, education: updatedEducation });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAddEducation = () => {
    setFormData({ ...formData, education: [...formData.education, ""] });
  };

  const handleRemoveEducation = (index) => {
    const updatedEducation = [...formData.education];
    updatedEducation.splice(index, 1);
    setFormData({ ...formData, education: updatedEducation });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsloading(true);
    try {
      const response = await createAccount(formData);
      console.log(response);

      if (response) {
        setShowVerify(true);
        setIsloading(false);
      }
      // Optionally, you can redirect or show a success message to the user.
    } catch (error) {
      setIsloading(false);
      console.error("Error submitting data:", error);

      // Handle specific error messages
      if (error.message === "User not found") {
        setErrorMessage("User not found. Please check your email.");
      } else if (error.message === "Invalid verification code") {
        setErrorMessage("Invalid verification code. Please try again.");
      } else {
        setErrorMessage(error.message);
      }
      // Handle error, show error message, etc.
    }
  };

  return (
    <div className={"  flex overflow-scroll flex-row justify-normal"}>
      <form
        onSubmit={handleSubmit}
        className={
          showVerify
            ? "hidden"
            : "w-[600px] pb-5 relative h-fit bg-white  rounded-xl border-t-4 pt-2 border-blue-700 mx-auto px-10 flex flex-col gap-3 "
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
            "text-xl font-roboto font-bold text-center mt-2 text-blue-600"
          }
        >
          Sign Up
        </h1>
        <label className=" gap-3 flex flex-row justify-between">
          <span className="text-gray-700 w-[15%] font-roboto my-auto font-semibold">
            Name:
          </span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => handleChange(e)}
            className=" mt-1 input input-base bg-transparent border border-slate-200  block w-full"
            required
          />
        </label>

        <label className=" gap-3 mb-2 flex flex-row justify-between">
          <span className="text-gray-700 w-[15%]  font-roboto my-auto font-semibold">
            Age:
          </span>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={(e) => handleChange(e)}
            className=" mt-1 input input-base bg-transparent border border-slate-200  block w-full"
            required
          />
        </label>

        <label className=" gap-3 mb-2 flex flex-row">
          <span className="text-gray-700 w-[15%]  font-roboto my-auto font-semibold">
            Gender:
          </span>
          <div className="mt-1">
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={(e) => handleChange(e)}
              required
              className="mr-2"
            />
            <label className="mr-4">Male</label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={(e) => handleChange(e)}
              required
              className="mr-2"
            />
            <label>Female</label>
          </div>
        </label>

        <label className=" gap-3 mb-2 flex flex-row">
          <span className="text-gray-700 w-[15%]  font-roboto my-auto font-semibold">
            Password:
          </span>
          <div className={"w-full relative"}>
            <input
              type={!showPassword ? "password" : "text"}
              name="password"
              value={formData.password}
              onChange={(e) => handleChange(e)}
              className=" mt-1 input input-base bg-transparent border border-slate-200  block w-full"
              required
            />
            <div
              className={"absolute right-5 top-5 my-auto text-base"}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </div>
          </div>
        </label>

        <label className=" gap-3 mb-2 flex flex-row">
          <span className="text-gray-700  w-[15%]  font-roboto my-auto font-semibold">
            Email:
          </span>

          <input
            type="email"
            name="gmail"
            value={formData.gmail}
            placeholder="Email"
            onChange={(e) => handleChange(e)}
            className=" mt-1 input input-base bg-transparent border border-slate-200  block w-full"
            required
          />
        </label>

        {/* Education Field */}
        <div className="mb-2">
          <span className="text-gray-700  font-roboto my-auto font-semibold">
            Education:
          </span>
          {formData.education.map((edu, index) => (
            <div key={index} className="flex mt-1">
              <input
                type="text"
                name="education"
                value={edu}
                onChange={(e) => handleChange(e, index)}
                className=" mt-1 input input-sm bg-transparent border border-slate-200  block w-full"
                required
              />
              {index > 0 && (
                <button
                  type="button"
                  className="ml-2 text-red-500"
                  onClick={() => handleRemoveEducation(index)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={handleAddEducation}
          >
            Add Education
          </button>
        </div>
        <div className={"flex flex-row"}>
          <label className="block mb-2">
            <span className="text-gray-700 font-roboto my-auto font-semibold">
              profile Image
            </span>
            <input
              type="file"
              name="profile_pic"
              onChange={handleProfilePicChange}
              className="form-input mt-1 block  w-full"
            />
          </label>
          <label className="block mb-2">
            <span className="text-gray-700 font-roboto my-auto font-semibold">
              Resume File:
            </span>
            <input
              type="file"
              name="resume_file"
              onChange={handleFileChange}
              className="form-input mt-1 block  w-full"
            />
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {!isloading ? (
            <div>submit</div>
          ) : (
            <span className="loading loading-spinner text-secondary"></span>
          )}
        </button>
        <div
          className={
            "text-sm font-roboto flex flex-row justify-between pr-5 py-2"
          }
        >
          <p>Already have an account?</p>
          <Link className={"text-blue-600 font-bold"} to={"/signin"}>
            Login
          </Link>
        </div>
        {errorMessage && (
          <p className={"text-error font-semibold text-sm font-roboto"}>
            {errorMessage}
          </p>
        )}
      </form>
      <div className={showVerify ? "block  mx-auto my-2 h-screen overflow-hidden " : "hidden"}>
        <Verify gmail_data={formData.gmail} setSignUpPage={setSignUpPage} />
      </div>
    </div>
  );
};

export default RegistrationForm;
