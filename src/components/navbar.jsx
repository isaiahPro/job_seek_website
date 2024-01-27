import { navbarlist } from "../constants/linkslist";
import logo from "../assets/logoimages/logo.png";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { updateSearch } from "../hook/store";
import "../style/style.css";
import { useEffect, useState } from "react";
import { popularSearches } from "../constants/linkslist";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const values = updateSearch((state) => state.values);
  const updateDisplay = updateSearch((state) => state.updateDisplay);
  const [hoverLink, setHoverLink] = useState({});
  const [signupHover, setSignupHover] = useState(false);
  const [searchList, setSearchList] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={
        "flex fixed h-[90px]  top-0 justify-center z-50 w-full bg-transparent ml-0"
      }
    >
      <div
        className={
          values ? "absolute bg-[rgba(0,0,0,.3)] h-screen w-full " : "hidden"
        }
      >
        <div
          className={
            " my-20 relative w-[60%] mx-auto shadow-md bg-[rgba(255,255,255,.98)] h-[400px] rounded-xl  py-28 px-32"
          }
        >
          <div
            onClick={updateDisplay}
            className={"absolute top-5 right-5 text-black text-2xl"}
          >
            <RxCross2 />
          </div>
          <div className={"relative w-[100%]"}>
            <input
              type="text"
              id="check"
              onFocus={() => {
                setSearchList(true);
              }}
              onBlur={() => {
                setSearchList(false);
              }}
              placeholder="Search Jobs"
              className={
                "absolute focus:border-b-0 focus:shadow-none my-auto  mx-auto border-2 shadow-md h-12 focus:outline-none px-5 w-full rounded-md "
              }
            />
            <div
              className={
                searchList
                  ? "text-black bg-white h-[200px] flex flex-col  overflow-y-scroll absolute border-t-0 mt-10 border-b rounded-b-sm w-full py-3"
                  : "hidden"
              }
            >
              {popularSearches.map((search, index) => (
                <Link
                  to={`/jobs?search=${search}`}
                  className={" hover:bg-blue-300 px-3 py-1"}
                  key={index}
                >
                  <p className={"text-black"}>{search}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          scrolled
            ? "containerToptoDown bg-white transition-transform ease-in duration-300 flex rounded-b-sm px-20 shadow-lg border font-ubuntu w-[90%] py-5 pb-0 flex-row justify-center"
            : " flex bg-[#f7f8fa]  rounded-b-sm px-20 -ml-20 font-ubuntu py-5  pb-0 flex-row w-[90%] justify-center"
        }
      >
        <div className={"h-fit mt-3"}>
          <img src={logo} alt="logo image" height={40} width={170} />
        </div>
        <div className={"flex flex-row gap-5 w-[100%] py-3 text-[16px] px-20"}>
          {navbarlist.map((item, index) => (
            <Link
              to={item.link}
              onMouseEnter={() => {
                setHoverLink({ ...hoverLink, [item.name]: true });
              }}
              onMouseLeave={() => {
                setHoverLink({ ...hoverLink, [item.name]: false });
              }}
              className={"hover relative h-fit"}
              key={index}
            >
              {item.name}
              <div
                className={
                  hoverLink[item.name]
                    ? "hoverLink absolute bottom-0 w-full h-0.5 bg-blue-700"
                    : "hidden"
                }
              ></div>
            </Link>
          ))}
        </div>
        <div className={"py-8"}>
          <IoSearch
            className={"text-blue-500 text-3xl -mt-5"}
            onClick={updateDisplay}
          />
        </div>
        <div className={"pt-2  text-blue-700 flex flex-row h-fit gap-1 mx-10"}>
          <Link
            to={"/signup"}
            onMouseEnter={() => {
              setSignupHover(true);
            }}
            onMouseLeave={() => {
              setSignupHover(false);
            }}
            className={
              signupHover
                ? "bg-blue-100  mr-2 relative flex flex-row gap-2 py-auto hover:opacity-90 px-5 py-2 h-fit text-[17px] rounded-md text-white "
                : "bg-blue-100 mr-2 relative flex flex-row gap-2 py-auto hover:opacity-90 px-5 py-2 h-fit text-[17px] rounded-md text-blue-900"
            }
          >
            signUp
            <div
              className={
                signupHover
                  ? "hoverLink absolute -z-10  rounded-md left-0 top-0 w-full h-full bg-slate-900"
                  : "hidden"
              }
            ></div>
          </Link>
          <Link
            to={"/signup"}
            className={
              "bg-blue-600 hover:scale-105 h-fit w-28 hover:opacity-90 px-5 py-2 rounded-md text-white text-[17px]"
            }
          >
            Post Job
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
