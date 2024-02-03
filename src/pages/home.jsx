import { useEffect, useState } from "react";
import JoinSearch from "../components/JoinSearch";
import promoPc1 from "../assets/logoimages/r-img1.png";
import promoPc2 from "../assets/logoimages/r-img2.png";
import { jobList, popularSearches } from "../constants/linkslist";
import { Link } from "react-router-dom";
import Image from "../assets/logoimages/icon-1.png";
import Image2 from "../assets/logoimages/icon-2.png";
import { howList } from "../constants/linkslist";
import CatagoriesSwiper from "../components/swiper";
import promoPc3 from "../assets/logoimages/gir-large.png";
import { FiUpload } from "react-icons/fi";
import CompaniesSwiper from "../components/catswiper";
import TestimonialsSwiper from "../components/testimonialswiper";
import BlogList from "../components/blogLIst";
import { blogList } from "../constants/linkslist";
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
    <div className={" overflow-hidden p-0 bg-white "}>
      <div className="font-ubuntu relative bg-[#f7f8fa] h-fit p-5 flex flex-row mt-0 pb-20 overflow-hidden sm:overflow-visible pt-28 w-full sm:flex-col sm:p-2 sm:pr">
        <div className="w-[47%] pt-20 pl-5 py-5 sm:z-10 sm:w-[100%]">
          <p className="text-2xl font-semibold my-4 sm:text-base">
            We have <span className="text-blue-700">209,000+</span> Live Jobs
          </p>
          <div className="text-7xl leading-[100px] my-6 font-semibold sm:text-3xl">
            Find the <span className={"text-blue-700"}>job</span> that fits your
            life
          </div>
          <p className="my-6 text-base">
            Type your keyword, then click search to find your perfect job
          </p>
          <div className={"mx-2 sm:w-full"}>
            <JoinSearch />
          </div>
          <div
            className={"flex font-semibold flex-row gap-2 text-sm line-clamp-1"}
          >
            Popular Searches:
            <div
              className={
                "flex font-normal flex-row gap-3 flex-wrap leading-tight"
              }
            >
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
            "absolute z-10 right-2 top-24 bg-white flex flex-row gap-1 justify-around px-3 pt-3 h-[80px] font-roboto rounded-sm py-5 w-[250px] sm:top-[500px] sm:w-[200px]"
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
      <div
        className={"pt-28 pb-10 text-center font-roboto sm:mt-40 sm:w-screen "}
      >
        <div className={"mx-auto"}>
          <div className="text-xl text-blue-600 font-bold">
            Working Progress
          </div>
          <h1 className={"my-4 text-5xl font-bold"}>How It Works</h1>
          <div
            className={
              "flex flex-row justify-between py-10 pt-20 pl-32 sm:flex-col sm:px-16 sm:pt-10 sm:pb-0"
            }
          >
            {howList.map((item, index) => (
              <div key={index} className={"py-16 relative"}>
                <div>
                  <div
                    style={{ backgroundColor: item.color }}
                    className={
                      "w-[80%]  rounded-md px-5 pl-10 py-2 text-white font-roboto font-semibold text-xl relative sm:w-[100%] sm:px-2"
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
                  <div
                    className={
                      "mt-14 w-[60%]  text-sm ml-1 text-left sm:w-[80%] sm:mt-10"
                    }
                  >
                    {item.description}
                  </div>
                </div>
                <div
                  className={
                    "absolute top-0 -left-10 text-5xl text-slate-200 font-bold"
                  }
                >
                  0{index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={""}>
        <div className={"flex flex-row justify-start sm:flex-col"}>
          <div className={"w-[40%] bg-[rgb(227,241,251,0.3)] px-5 py-20 sm:text-center sm:w-[100%] sm:py-5 sm:px-0"}>
            <p className={"font-bold text-xl pl-20 text-blue-700 sm:pl-0"}>
              Jobs by Categories
            </p>
            <p className={"my-5 pl-20 text-5xl font-bold sm:pl-0"}>
              Jobs by Categories
            </p>
          </div>
          <div className={"w-[50%] px-5 mt-5 py-20 text-base font-ubuntu font-semibold sm:font-normal sm:w-[100%] sm:py-0"}>
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
        className={
          "-mt-40 relative flex flex-row p-20 pb-72 bg-[#f6f7f9] h-[800px] sm:flex-col sm:h-[700px] sm:p-0 "
        }
      >
        <div className={"z-10 absolute left-14 w-[50%] sm:[100%] sm:bottom-[5%] sm:left-[50%]"}>
          <img src={promoPc3} alt="Promotional Image" className={"mx-auto"} />
        </div>
        <div
          className={
            "w-[50%] mr-20 h-[75%] absolute right-0 bg-blue-800 text-white rounded-xl shadow-xl p-10 sm:w-[100%] sm:my-5 sm:mx-0 sm:h-fit sm:pb-36"
          }
        >
          <p className={"text-2xl font-bold my-10"}>Explore New Life</p>
          <div
            className={
              "text-5xl font-semibold font-ubuntu leading-[60px] my-10 sm:text-xl"
            }
          >
            Don’t just find. be found put your CV in front of great employers
          </div>
          <p className={"text-base mb-5 font-ubuntu w-[90%]"}>
            Online job boards are the bridges that connect talent with
            opportunity, transcending geographical boundaries and opening doors
            to a world of possibilities.
          </p>
          <div
            className={
              "flex text-base hover:opacity-70 hover:cursor-pointer font-bold bg-slate-200 w-fit text-blue-700 p-2 rounded-md py-3 flex-row gap-2"
            }
          >
            <div>Upload your CV </div>
            <div className={"my-auto"}>
              <FiUpload />
            </div>
          </div>
        </div>
      </div>
      <div className={"p-10 text-center flex flex-col"}>
        <p className={"text-blue-600 text-xl my-2 font-semibold sm:text-base"}>
          Top companies
        </p>
        <h1 className={"text-5xl font-semibold mt-5 sm:text-3xl sm:mt-0"}>
          Get hired in top companies
        </h1>
        <div className={"my-20 sm:my-0"}>
          <CompaniesSwiper />
        </div>
      </div>
      <div className={"bg-[#f0f6fe] relative pb-20 w-full sm:w-screen"}>
        <div
          className={
            "border-[#dbe7f9] border-[120px] absolute top-36 -right-[150px] w-[700px] bg-[#f0f6fe] h-[700px] rounded-full"
          }
        ></div>
        <div className={"bg-white relative "}>
          <div
            className={
              "absolute bg-white shadow-2xl shadow-[black] rounded-xl px-5 py-7 left-[28%] -top-10 items-center flex flex-row gap-10 sm:left-2 sm:w-[95%] sm:gap-5 sm:px-1 sm:py-2"
            }
          >
            <div>
              <p
                className={
                  "text-[#3898e2] text-center text-2xl font-semibold text sm:text-xl"
                }
              >
                5M+
              </p>
              <p className={"text-base sm:text-xs text-center"}>millon day active users</p>
            </div>
            <div>
              <p
                className={"text-[#bc84ca]  text-2xl font-semibold text-center sm:text-xl"}
              >
                5M+
              </p>
              <p className={"text-base sm:text-xs text-center"}>millon day active users</p>
            </div>
            <div>
              <p
                className={"text-[#56d8b1]  text-2xl font-semibold text-center sm:text-xl"}
              >
                5M+
              </p>
              <p className={"text-base sm:text-xs text-center"}>millon day active users</p>
            </div>
          </div>
        </div>
        <div className={"absolute left-[30%] top-[10%] text-center sm:left-0 sm:w-full sm:top-[5%]"}>
          <p className={"text-xl font-semibold text-blue-700 py-5 sm:py-2 sm:pt-12"}>
            All Jobs Post
          </p>
          <div className={"text-5xl w-[500px] leading-relaxed font-semibold sm:text-2xl sm:w-[60%] sm:mx-auto"}>
            Find Your Career You Deserve it
          </div>
        </div>
        <div
          className={"pt-[400px] flex flex-col gap-16 rounded-md pl-[250px] sm:pl-4 sm:pt-52 sm:gap-5"}
        >
          {jobList.map((job, index) => (
            <div
              key={index}
              className={"bg-white h-[150px] relative z-10 w-[80%] sm:w-[97%] sm:h-[80px] "}
            >
              <div
                className={
                  "overflow-hidden h-[140px] w-[150px] bg-white absolute left-5 top-10 shadow-xl shadow-blue-400 sm:h-[70px] sm:w-[70px] sm:top-5 sm:left-2 "
                }
              >
                <img src={job.image} alt="job" className={"object-contain"} />
              </div>
              <div className={"p-5 pl-48 pt-10 sm:pl-16 sm:scale-75 sm:pt-0"}>
                <p className={"text-base font-semibold sm:text-sm"}>{job.title}</p>
                <p className={"text-sm  pb-7 sm:text-xs sm:pb-0"}>{job.location}</p>
                <Link to={job.link} className={"text-sm text-blue-700"}>
                  {job.link}
                </Link>
              </div>
              <div
                className={
                  "absolute top-10 flex flex-col gap-2 text-right items-end right-10 sm:scale-75 sm:top-0 sm:gap-1 sm:right-1"
                }
              >
                <div
                  className={
                    "text-sm text-white text-center w-fit py-1 px-3 ml-5 font-ubuntu bg-green-600 rounded-md sm:text-xs"
                  }
                >
                  {job.status}
                </div>
                <div className={"text-center font-bold font-roboto sm:text-xs"}>
                  {job.price} / Month
                </div>
                <div className={"font-bold text-blue-600 sm:text-xs"}>{job.jobType}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={"bg-white py-20 pb-0 px-20 sm:px-0"}>
        <p className={"text-xl font-bold my-5 text-blue-700 sm:text-center sm:my-2"}>
          Clients Testimonials
        </p>
        <p
          className={
            "text-5xl font-ubuntu w-[500px] leading-[70px] font-semibold sm:text-2xl sm:w-[250px] text-center sm:mx-auto"
          }
        >
          What Our Customers Say About Us
        </p>
        <div className={"my-20"}>
          <TestimonialsSwiper />
        </div>
      </div>
      <div className={"bg-[#f0f6fe] py-10 px-20 sm:px-0"}>
        <div className={"text-center mb-20 sm:mb-7"}>
          <p className={"text-blue-600 text-xl my-2 font-semibold"}>
            Our Blogs
          </p>
          <h1 className={"text-5xl font-semibold mt-5 sm:text-3xl sm:mt-0"}>Latest Article</h1>
        </div>
        <BlogList data={blogList} />
      </div>
    </div>
  );
};
export default HomePage;
