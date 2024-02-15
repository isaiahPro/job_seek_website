import React, { useEffect } from "react";
import { compActive,leftTinyFun } from "../../hook/store";
import { useLocation } from "react-router-dom";

const Com_delete = () => {
  const { updateActivePage } = compActive();
  const { leftTiny } = leftTinyFun();

  const location = useLocation();
  useEffect(() => {
    updateActivePage(location.pathname);
  }, []);
  return (
    <div className={!leftTiny?"pt-[55px] pl-[20%]":"pt-[55px] pl-[7%] duration-200"}>
      <div className={"p-5"}>hello from home</div>
    </div>
  );
};

export default Com_delete;
