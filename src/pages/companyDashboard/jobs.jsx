import React, { useEffect } from "react";
import { compActive,leftTinyFun } from "../../hook/store";
import { useLocation } from "react-router-dom";


const Com_Jobs = () => {
  const { updateActivePage } = compActive();
  const { leftTiny } = leftTinyFun();

  const location = useLocation();
  useEffect(() => {
    updateActivePage(location.pathname);
  }, []);
  return (
    <div
    className={
      !leftTiny
        ? "top-[60px] left-[20%] w-[80%] h-[90vh] overflow-x-hidden  overflow-scroll absolute"
        : "top-[55px] left-[7%] w-[93%] h-[90vh] overflow-x-hidden  overflow-scroll absolute duration-200"
    }
  >
      <div className={"p-5"}>hello from home</div>
    </div>
  );
};

export default Com_Jobs;
``;
