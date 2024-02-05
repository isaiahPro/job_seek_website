import React, { useState } from "react";
import jobImage from "../../assets/logoimages/pic1.jpg";
import { IoMdCheckmark } from "react-icons/io";
import { JobDetail } from "../../constants/linkslist";
import { Link } from "react-router-dom";
import MapDis from "../../components/mapdisplay";
import { IoCalendar } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoIosPerson } from "react-icons/io";
import { BiSolidShoppingBags } from "react-icons/bi";
import { BsGenderAmbiguous } from "react-icons/bs";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import { LiaTvSolid } from "react-icons/lia";

const JobsDetail = () => {
  const [job, setJob] = useState(JobDetail);
  return (
    <div className={"bg-[#f7f8fa] py-24"}>
      <div className={"mx-auto text-center pt-32"}>
        <p className={"text-3xl font-extrabold font-ubuntu"}>{job[0].title}</p>
        <p className={"my-5 text-xl font-mono font-bold"}>
          Home -{" "}
          <span className={"text-blue-700"}>
            Home - <span>Job Detail</span>
          </span>
        </p>
      </div>
      <div
        className={
          "bg-white px-20 p-5 pt-32 flex flex-row  justify-between w-full"
        }
      >
        <div className={"w-[65%]"}>
          <div className={"relative rounded-md"}>
            <img
              src={job[0].bannerImage}
              alt="banner image"
              className={"w-full rounded-md"}
            />
            <div
              className={
                "absolute text-base bg-green-700 px-2 py-1 rounded-sm text-white font-ubuntu top-3 left-5"
              }
            >
              New
            </div>
            <div
              className={
                "absolute w-[120px] shadow-lg overflow-hidden -bottom-16 rounded-md left-5"
              }
            >
              <img src={job[0].image} alt="jobimage" />
            </div>
          </div>
          <div className={"flex justify-end mr-5 mt-3 "}>
            <div
              className={
                "bg-blue-700 text-white  hover:scale-110 font-bold rounded-md w-fit px-5 py-3"
              }
            >
              Apply Now
            </div>
          </div>
          <div className={"text-base mt-10 font-ubuntu text-slate-800"}>
            <div className={" text-xl font-bold "}>
              {job[0].title}{" "}
              <span className={"text-green-600"}>{job[0].day}</span>
            </div>
            <div className={"flex flex-row gap-2 my-3"}>
              <HiOutlineLocationMarker className={"my-auto"} />
              <span>{job[0].location}</span>
            </div>
            <div className={"text-blue-700"}>
              <span>{job[0].link}</span>
              <span className={"text-green-600 font-bold ml-3"}>
                {job[0].offersalary}
              </span>
            </div>
            <div className={"mt-10"}>
              <p className={"text-xl font-bold mb-2"}>Job Description:</p>
              <p>{job[0].description}</p>
            </div>
            <div className={"mt-5"}>
              <p className={"text-xl font-bold mb-2"}>Requirments:</p>
              <div className={"flex flex-col gap-3"}>
                {job[0] &&
                  job[0].requirements &&
                  job[0].requirements.map((item, index) => {
                    return (
                      <div
                        className={"flex flex-row gap-3 font-semibold"}
                        key={index}
                      >
                        <IoMdCheckmark className={"my-auto text-blue-700"} />
                        <span> {item}</span>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className={"mt-5"}>
              <p className={"text-xl font-bold mb-2"}>Responsabilitys</p>
              <div className={"flex flex-col gap-3"}>
                {job[0] &&
                  job[0].responsibilities &&
                  job[0].responsibilities.map((item, index) => {
                    return (
                      <div
                        className={"flex flex-row gap-3 font-semibold"}
                        key={index}
                      >
                        <IoMdCheckmark className={"my-auto text-blue-700"} />
                        <span> {item}</span>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className={"mt-5"}>
              <h1 className={"font-ubuntu text-xl font-bold"}>Share Profile</h1>
              <div className={"flex flex-row gap-3 flex-wrap my-3"}>
                {job[0] &&
                  job[0].socialLinks &&
                  job[0].socialLinks.map((item, index) => {
                    return (
                      <div
                        className={
                          "bg-blue-700 hover:opacity-80 px-3 py-2 rounded-md text-white"
                        }
                        key={index}
                      >
                        <Link to={item.link}> {item.name}</Link>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className={"mt-5"}>
              <h1 className={"font-ubuntu mt-5 text-xl font-bold"}>Location</h1>
              <div className={"h-[400px] mt-5"}>
                <MapDis link={job[0].mapLink} />
              </div>
            </div>
          </div>
        </div>
        <div className={"w-[30%] px-10 p-5 rounded-md shadow-sm bg-[#fcfcfc]"}>
          <h1 className={"text-base font-bold font-ubuntu"}>Job Information</h1>
          <div
            className={
              "flex flex-row bg-white p-2 gap-5 my-5 font-ubuntu text-base"
            }
          >
            <IoCalendar className={"my-auto text-blue-700"} />{" "}
            <span>{job[0].dateposted} Date Posted</span>
          </div>
          <div
            className={
              "flex flex-row bg-white p-2 gap-5 my-5 font-ubuntu text-base"
            }
          >
            <TfiWrite className={"my-auto text-blue-700"} />{" "}
            <span>{job[0].applicants} Applicants</span>
          </div>

          <div
            className={
              "flex flex-row mt-20  p-2 gap-5 my-5 font-ubuntu text-base"
            }
          >
            <IoCalendar className={"my-auto text-blue-700"} />
            <div>
              <p className={"text-slate-500"}>Date Posted</p>
              <p>{job[0].dateposted}</p>
            </div>
          </div>
          <div className={"flex flex-row p-2 gap-5 my-5 font-ubuntu text-base"}>
            <HiOutlineLocationMarker
              className={"my-auto text-3xl text-blue-700"}
            />
            <div>
              <p className={"text-slate-500"}>Location</p>
              <p>{job[0].location}</p>
            </div>
          </div>
          <div className={"flex flex-row p-2 gap-5 my-5 font-ubuntu text-base"}>
            <IoIosPerson className={"my-auto text-2xl text-blue-700"} />
            <div>
              <p className={"text-slate-500"}>Job Title</p>
              <p>{job[0].title}</p>
            </div>
          </div>
          <div className={"flex flex-row p-2 gap-5 my-5 font-ubuntu text-base"}>
            <MdOutlineWatchLater className={"my-auto text-2xl text-blue-700"} />
            <div>
              <p className={"text-slate-500"}>Experience</p>
              <p>{job[0].experience}</p>
            </div>
          </div>
          <div className={"flex flex-row p-2 gap-5 my-5 font-ubuntu text-base"}>
            <BiSolidShoppingBags className={"my-auto text-2xl text-blue-700"} />
            <div>
              <p className={"text-slate-500"}>Qualification</p>
              <p>{job[0].qualification}</p>
            </div>
          </div>
          <div className={"flex flex-row p-2 gap-5 my-5 font-ubuntu text-base"}>
            <BsGenderAmbiguous className={"my-auto text-2xl text-blue-700"} />
            <div>
              <p className={"text-slate-500"}>Gender</p>
              <p>{job[0].Gender}</p>
            </div>
          </div>
          <div className={"flex flex-row p-2 gap-5 my-5 font-ubuntu text-base"}>
            <FaMoneyBill1Wave className={"my-auto text-xl text-blue-700"} />
            <div>
              <p className={"text-slate-500"}>offerSalary</p>
              <p>{job[0].offersalary}</p>
            </div>
          </div>
          <div>
            <h1 className={"text-base font-bold font-ubuntu"}>Job Skills</h1>
            <div className={"flex flex-row flex-wrap gap-4 pt-5"}>
              {job[0].jobskills.map((item, index) => {
                return (
                  <div
                    className={
                      "px-3 py-2  bg-slate-100 text-blue-700 font-ubuntu cursor-pointer rounded-sm"
                    }
                    key={index}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
          <div className={"bg-white my-10 relative shadow-2xl pb-4 rounded-md shadow-blue-700 pt-24 w-[350px] -ml-5 px-5"}>
            <div className={"absolute w-[100px] shadow-lg -top-5 left-2 "}>
              <img src={job[0].image} alt="img" />
            </div>
            <h1>{job[0].title}</h1>
            <div
              className={"flex flex-row p-2 gap-5 my-5 font-ubuntu text-base"}
            >
              <IoCalendar className={"my-auto text-xl text-blue-700"} />
              <div>
                <p className={"text-slate-500"}>Company</p>
                <p>{job[0].title}</p>
              </div>
            </div>
            <div
              className={"flex flex-row p-2 gap-5 my-5 font-ubuntu text-base"}
            >
              <IoIosPhonePortrait className={"my-auto text-xl text-blue-700"} />
              <div>
                <p className={"text-slate-500"}>{job[0].address[1].name}</p>
                <p>{job[0].address[1].link}</p>
              </div>
            </div>
            <div
              className={"flex flex-row p-2 gap-5 my-5 font-ubuntu text-base"}
            >
              <div className={"my-auto text-xl text-blue-700"}>@</div>
              <div>
                <p className={"text-slate-500"}>{job[0].address[0].name}</p>
                <p>{job[0].address[0].link}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsDetail;
