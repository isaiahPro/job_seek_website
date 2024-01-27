import { useEffect, useState } from "react";
import JoinSearch from "../components/JoinSearch";
import promoPc1 from "../assets/logoimages/r-img1.png";
import promoPc2 from "../assets/logoimages/r-img2.png";
import { popularSearches } from "../constants/linkslist";
import { Link } from "react-router-dom";
import Image from "../assets/logoimages/icon-1.png";
import Image2 from "../assets/logoimages/icon-2.png";
import { howList } from "../constants/linkslist";
import CatagoriesSwiper from "../components/swiper";
import promoPc3 from "../assets/logoimages/gir-large.png";
import { FiUpload } from "react-icons/fi";

const HomePage = () => {
  // const bears = useStore((state) => state.bears);
  const [displayPicIndex, setDisplayPicIndex] = useState(0);

  const images = [promoPc1, promoPc2];

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayPicIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the value (in milliseconds) to set the desired time interval

    return () => clearInterval(interval);
  }, [images.length]);

  const displayPic = images[displayPicIndex];
  return (
    <div className={" overflow-hidden p-0  "}>
      <div className="font-ubuntu relative bg-[#f7f8fa] h-fit p-5 flex flex-row mt-0 pb-20 overflow-hidden pt-28 w-full">
        <div className="w-[47%] pt-20 pl-5 py-5">
          <p className="text-2xl font-semibold my-4">
            We have <span className="text-blue-700">209,000+</span> Live Jobs
          </p>
          <div className="text-7xl leading-[100px] my-6 font-semibold">
            Find the <span className={"text-blue-700"}>job</span> that fits your
            life
          </div>
          <p className="my-6 text-base">
            Type your keyword, then click search to find your perfect job
          </p>
          <div className="mx-2">
            <JoinSearch />
          </div>
          <div
            className={"flex font-semibold flex-row gap-2 text-sm line-clamp-1"}
          >
            Popular Searches:
            <div className={"flex font-normal flex-row gap-3"}>
              {popularSearches.slice(0, 5).map((search, index) => (
                <Link to={`/jobs?search=${search}`} key={index}>
                  <span className="text-blue-700 ">{search}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div
          className={
            "absolute z-10 right-2 top-24 bg-white flex flex-row gap-1 justify-around px-3 pt-3 h-[80px] font-roboto rounded-sm py-5 w-[250px]"
          }
        >
          <div className={"h-[50px] w-[50px]"}>
            <img src={Image2} alt="Promotional Image" className={""} />
          </div>
          <div className={"flex flex-col"}>
            <div className={"text-4xl font-bold text-[#bc84ca]"}>98+</div>
            <div className={""}>Job For Countries</div>
          </div>
        </div>
        <div
          className={
            "absolute z-10 right-[450px] bottom-72 bg-white flex flex-row gap-1 justify-around px-3 pt-3 h-[80px] font-roboto rounded-sm py-5 w-[250px]"
          }
        >
          <div className={"h-[50px] w-[50px]"}>
            <img src={Image} alt="Promotional Image" className={""} />
          </div>
          <div className={"flex flex-col"}>
            <div className={"text-4xl font-bold text-[#3898e2]"}>12K+</div>
            <div className={""}>Companies Jobs</div>
          </div>
        </div>
        <div
          className={
            "w-[700px] absolute right-5 h-[700px] pt-20 bg-[#dae5f4] rounded-full"
          }
        >
          <div
            className={
              "w-[600px] align-middle mx-auto   bg-[#dae5f4] h-[600px] rounded-full"
            }
          >
            <div
              className={
                "w-[500px] align-middle mx-auto bg-[#b3cdec] rounded-full h-[500px] "
              }
            ></div>
          </div>
        </div>
        <div className="w-[47%] relative -z-5 ">
          <div className="transition-opacity absolute right-0 top-0 duration-500">
            <img src={displayPic} alt="Promotional Image" className={""} />
          </div>
        </div>
      </div>
      <div className={"pt-28 pb-10 text-center font-roboto "}>
        <div className={"mx-auto"}>
          <div className="text-xl text-blue-600 font-bold">
            Working Progress
          </div>
          <h1 className={"my-4 text-5xl font-bold"}>How It Works</h1>
          <div className={"flex flex-row justify-between py-10 pt-20 pl-32"}>
            {howList.map((item, index) => (
              <div key={index} className={"py-16 relative"}>
                <div>
                  <div
                    style={{ backgroundColor: item.color }}
                    className={
                      "w-[80%] rounded-md px-5 pl-10 py-2 text-white font-roboto font-semibold text-xl relative"
                    }
                  >
                    <p className={"ml-20"}>{item.title}</p>
                    <div
                      className={
                        "absolute left-1 top-7 bg-white p-2 rounded-lg shadow-xl shadow-[#d3e9f8]"
                      }
                    >
                      <img
                        src={item.img}
                        alt="Promotional Image"
                        className={""}
                      />
                    </div>
                  </div>
                  <div className={"mt-14 w-[60%] text-sm ml-1 text-left"}>
                    {item.description}
                  </div>
                </div>
                <div
                  className={
                    "absolute top-0 -left-10 text-5xl text-slate-200 font-bold"
                  }
                >
                  0{index}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={""}>
        <div className={"flex flex-row justify-start"}>
          <div className={"w-[40%] bg-[rgb(227,241,251,0.3)] px-5 py-20"}>
            <p className={"font-bold text-xl pl-20 text-blue-700"}>
              Jobs by Categories
            </p>
            <p className={"my-5 pl-20 text-5xl font-bold"}>
              Jobs by Categories
            </p>
          </div>
          <div className={"w-[50%] px-5 mt-5 py-20 text-md font-ubuntu"}>
            A job board is an online platform that connects job seekers with
            employers. It serves as a centralized hub for job postings and
            applications, making it easier for both parties to find and fill job
            positions.
          </div>
        </div>
        <div>
          <CatagoriesSwiper />
        </div>
      </div>
      <div
        className={"-mt-40 relative flex flex-row p-20 pb-72 bg-[#f6f7f9] h-[800px] "}
      >
        <div className={"z-10 absolute left-14 w-[50%]"}>
          <img src={promoPc3} alt="Promotional Image" className={"mx-auto"} />
        </div>
        <div
          className={
            "w-[50%] mr-20 h-[75%] absolute right-0 bg-blue-800 text-white rounded-xl shadow-xl p-10"
          }
        >
          <p className={"text-2xl font-bold my-10"}>Explore New Life</p>
          <div
            className={
              "text-5xl font-semibold font-ubuntu leading-[60px] my-10"
            }
          >
            Don’t just find. be found put your CV in front of great employers
          </div>
          <p className={"text-base mb-5 font-ubuntu w-[90%]"}>
            Online job boards are the bridges that connect talent with
            opportunity, transcending geographical boundaries and opening doors
            to a world of possibilities.
          </p>
          <div className={"flex text-base hover:opacity-70 hover:cursor-pointer font-bold bg-slate-200 w-fit text-blue-700 p-2 rounded-md py-3 flex-row gap-2"}>
            <div>Upload your CV </div>
            <div className={"my-auto"}>
              <FiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
