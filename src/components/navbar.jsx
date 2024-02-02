import { navbarlist } from "../constants/linkslist";
import logo from "../assets/logoimages/logo.png";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { updateSearch } from "../hook/store";
import "../style/style.css";
import { useEffect, useRef, useState } from "react";
import { popularSearches } from "../constants/linkslist";
import { RxCross2 } from "react-icons/rx";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const values = updateSearch((state) => state.values);
  const updateDisplay = updateSearch((state) => state.updateDisplay);
  const [searchDisplay, setSearchDisplay] = useState(false);
  const [hoverLink, setHoverLink] = useState({});
  const [signupHover, setSignupHover] = useState(false);
  const [searchList, setSearchList] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const divRef = useRef(null);
  const mobileNavRef = useRef(null);
  const searchdivRef = useRef(null);
  const [isHidden, setIsHidden] = useState(true);

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
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (!divRef.current || !divRef.current.contains(event.target)) &&
        (!mobileNavRef.current || !mobileNavRef.current.contains(event.target))
      ) {
        setIsHidden(false);
      } else {
        setIsHidden(true);
      }

      if (
        !searchdivRef.current &&
        !searchdivRef.current.contains(event.target)
      ) {
        setSearchList(false);
      }
    };

    const handleScroll = () => {
      setIsHidden(false);
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={
        "flex fixed h-[90px] md:h-[80px] sm:h-[60px] md:left-0  top-0 justify-center sm:justify-start z-50 w-full bg-transparent ml-0"
      }
    >
      <div
        className={
          searchDisplay
            ? "absolute bg-[rgba(0,0,0,.3)] h-screen w-full sm:z-20 sm:w-screen "
            : "hidden"
        }
      >
        <div
          ref={searchdivRef}
          className={
            " my-20 relative w-[60%] sm:w-[90%] sm:px-5 mx-auto shadow-md bg-[rgba(255,255,255,.98)] h-[400px] rounded-xl  py-28 px-32"
          }
        >
          <div
            onClick={() => setSearchDisplay(false)}
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
                "absolute focus:border-b-0 bg-white focus:shadow-none my-auto  mx-auto border-2 shadow-md h-12 focus:outline-none px-5 w-full rounded-md "
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
            ? "containerToptoDown  bg-white flex px-20 shadow-lg border font-ubuntu w-[90%]  md:w-fit py-5 pb-0 flex-row sm:justify-between sm:w-screen justify-center sm:px-5 md:justify-between md:px-10 sm:py-1"
            : " flex bg-[#f7f8fa] px-20 font-ubuntu w-[90%]  md:w-[100%] py-5 pb-0 flex-row sm:w-screen justify-center rounded-b-sm sm:justify-between -ml-20 md:ml-0 md:px-5 md:py-2 sm:ml-0 sm:px-5 sm:py-0 "
        }
      >
        <div className={"h-fit mt-3"}>
          <img
            src={logo}
            alt="logo image"
            height={40}
            width={170}
            className={"md:w-[100px] sm:w-[100px] "}
          />
        </div>
        <div
          ref={divRef}
          className={
            isHidden
              ? "sm:absolute sm:left-0 sm:top-0 sm:w-[30%] sm:py-10 sm:px-10 sm:bg-[rgba(40,40,43,0.9)] sm:h-screen sm:text-white"
              : "sm:hidden"
          }
        >
          <div
            className={
              "flex flex-row md:text-sm sm:containerToptoDown md:px-4 sm sm:flex-col sm:gap-7 gap-5 w-[100%] md:w-[60%] py-3 text-[16px] px-20 sm:px-3  "
            }
          >
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
          <div
            className={
              "pt-2  text-blue-700 hidden sm:flex flex-col mt-32 gap-5  h-fit md:justify-between sm:justify-start  sm:w-fit sm:ml-3 mx-10 md:ml-3"
            }
          >
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
                  ? "bg-blue-100  mr-2 relative flex flex-row gap-2 py-auto hover:opacity-90 px-5 py-2 h-fit text-[17px] rounded-md text-white  md:text-xs sm:text-xs"
                  : "bg-blue-100 mr-2 relative flex flex-row gap-2 py-auto hover:opacity-90 px-5 py-2 h-fit text-[17px] rounded-md text-blue-900 md:text-xs sm:text-xs"
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
                "bg-blue-600 hover:scale-105 h-fit w-28 hover:opacity-90 px-5 py-2 rounded-md  text-white text-[17px] md:text-xs md:w-20 md:px-0 md:text-center sm:text-xs sm:w-20 sm:px-0 sm:text-center"
              }
            >
              Post Job
            </Link>
            <div
              onClick={() => {
                setSearchDisplay(true);
                setIsHidden(false);
              }}
              className={"w-fit hidden mt-10 sm:inline-flex "}
            >
              <IoSearch className={"text-blue-500 my-auto text-2xl"} />{" "}
              <span className={"text-white  mx-3"}>Search</span>
            </div>
          </div>
        </div>
        <div className={"py-8 md:hidden sm:hidden"}>
          <IoSearch
            className={"text-blue-500 text-3xl -mt-5"}
            onClick={() => {
              setSearchDisplay(true);
            }}
          />
        </div>
        <div
          className={
            "pt-2  text-blue-700 sm:hidden flex flex-row h-fit gap-1 md:justify-between sm:justify-start  sm:w-fit sm:ml-3 mx-10 md:ml-3"
          }
        >
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
                ? "bg-blue-100  mr-2 relative flex flex-row gap-2 py-auto hover:opacity-90 px-5 py-2 h-fit text-[17px] rounded-md text-white  md:text-xs sm:text-xs"
                : "bg-blue-100 mr-2 relative flex flex-row gap-2 py-auto hover:opacity-90 px-5 py-2 h-fit text-[17px] rounded-md text-blue-900 md:text-xs sm:text-xs"
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
              "bg-blue-600 hover:scale-105 h-fit w-28 hover:opacity-90 px-5 py-2 rounded-md  text-white text-[17px] md:text-xs md:w-20 md:px-0 md:text-center sm:text-xs sm:w-20 sm:px-0 sm:text-center"
            }
          >
            Post Job
          </Link>
        </div>
        <div
          ref={mobileNavRef}
          className={"hidden sm:block text-4xl mt-[7px] -ml-8"}
          onClick={() => {
            setIsHidden(false);
          }}
        >
          {!isHidden ? <HiMenu /> : <RxCross2 />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
