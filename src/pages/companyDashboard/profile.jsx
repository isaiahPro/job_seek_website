import React, { useEffect, useState } from "react";
import { compActive, leftTinyFun } from "../../hook/store";
import { useLocation } from "react-router-dom";

const Com_profile = () => {
  const { updateActivePage } = compActive();
  const { leftTiny } = leftTinyFun();

  const location = useLocation();
  
  // Initialize the state with an empty string
  const [email, setEmail] = useState("");

  useEffect(() => {
    updateActivePage(location.pathname);
  }, [location.pathname, updateActivePage]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div
    className={
      !leftTiny
        ? "top-[60px] left-[20%] w-[80%] h-[90vh] overflow-x-hidden  overflow-scroll absolute"
        : "top-[55px] left-[7%] w-[93%] h-[90vh] overflow-x-hidden  overflow-scroll absolute duration-200"
    }
  >
      <div className={"p-5"}>
        <p className={"text-3xl font-mono"}>Profile</p>
        <p className={"my-2 font-ubuntu text-base text-blue-500"}>
          Company Profile
        </p>
        <input
          type="datetime-local"
          name="email"
          value={email}  // Ensure the input value is controlled by state
          onChange={handleEmailChange}
          placeholder="Enter your email"
        />
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default Com_profile;
