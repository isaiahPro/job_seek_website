import React, { useEffect, useState } from "react";
import logoImage from "../../assets/logoimages/logo.png";
import { company_navbar } from "../../constants/com_data";
import { IoMdNotifications } from "react-icons/io";
import { Link } from "react-router-dom";
import { compActive, leftTinyFun } from "../../hook/store";
import ProfileImage from "../../assets/profile.jpg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
const Comp_navbar = () => {
  const [companyData, setCompanyData] = useState({});
  const activePage = compActive((state) => state.activePage);
  const [navbarDecr, setNavbarDecr] = useState(false);
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([
    "company_token",
    "company_data",
  ]);

  const logoutFunction = () => {
    removeCookie("company_token");
    navigate("/home");
  };
  useEffect(() => {
    if (cookies.company_data) {
      setCompanyData(cookies.company_data);
    }
  }, [cookies.company_data]);

  const { updateTiny } = leftTinyFun();
  return (
    <div className={"flex flex-row w-screen bg-[#f9fcff]"}>
      <div
        className={
          !navbarDecr
            ? "bg-[#d4e6ff] relative w-[20%] h-screen pt-7 pl-10 duration-200  "
            : "bg-[#d4e6ff] relative w-[7%] pl-5 h-screen pt-4 duration-200 "
        }
      >
        <div
          className={
            "absolute -right-3 top-[6%] bg-white p-1 text-xl rounded-full border-2"
          }
          onClick={() => {
            setNavbarDecr(!navbarDecr);
            updateTiny();
          }}
        >
          {navbarDecr ? <BsArrowRightShort /> : <BsArrowLeftShort />}
        </div>
        <div className={!navbarDecr ? "w-[60%] mx-5" : "w-[90%]"}>
          <img src={logoImage} alt="logo" />
        </div>
        <div className={"flex flex-col my-10 gap-3"}>
          {company_navbar.map((navbarlink, index) => (
            <div key={index}>
              <Link
                to={`${navbarlink.link}`}
                className={
                  activePage === navbarlink.link
                    ? "flex flex-row py-3 px-3 rounded-l-full w-full hover:text-blue-700 bg-white gap-2 text-base font-roboto"
                    : "flex flex-row py-3 px-3 hover:text-blue-700 gap-2 text-base font-roboto"
                }
              >
                <div className={!navbarDecr ? "my-auto " : "my-auto text-2xl"}>
                  <navbarlink.Icon />
                </div>
                {!navbarDecr && <div>{navbarlink.name}</div>}
              </Link>
            </div>
          ))}
          <div
            onClick={logoutFunction}
            className={
              "flex flex-row cursor-pointer py-3 px-3 hover:text-blue-700 gap-2 text-base font-roboto"
            }
          >
            <div className={!navbarDecr ? "my-auto " : "my-auto text-2xl"}>
              <FiLogOut />
            </div>
            {!navbarDecr && <div>Logout</div>}
          </div>
        </div>
      </div>
      <div
        className={
          !navbarDecr
            ? "w-[80%] pr-10 bg-white flex flex-row  justify-end h-[60px] border-b"
            : "w-[95%]  bg-white pr-10 flex flex-row  justify-end h-[60px] border-b"
        }
      >
        <div className={"flex flex-row gap-2 mt-1 "}>
          <div className={"text-3xl relative mt-4"}>
            <div
              className={
                "text-xs absolute -right-1 -top-1 bg-blue-500 text-white font-ubuntu text-center rounded-full h-[15px] w-[15px]"
              }
            >
              2
            </div>
            <CgMail />
          </div>
          <div className={"text-3xl relative mt-4 my-auto"}>
            <div
              className={
                "text-xs absolute -right-1 -top-1 bg-blue-500 text-white font-ubuntu text-center rounded-full h-[15px] w-[15px]"
              }
            >
              2
            </div>
            <IoMdNotificationsOutline />
          </div>
          <div className={"flex flex-row gap-2 "}>
            <div
              className={
                "w-[40px] h-[40px] my-auto overflow-hidden rounded-full border shadow-xl"
              }
            >
              <img src={ProfileImage} alt="profile_image" />
            </div>
            <div className={"my-auto text-base font-ubuntu"}>
              {companyData.admin_name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comp_navbar;
