import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { JobType } from "../constants/linkslist";
import { jobList } from "../constants/linkslist";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
const Employers = () => {
  const [jobTypeList, setJobTypeList] = useState(JobType);
  return (
    <div className={"bg-[#f7f8fa] pt-24"}>
      <div className={"mx-auto text-center pt-32"}>
        <p className={"text-3xl font-extrabold font-ubuntu"}>Employers List</p>
        <p className={"my-5 text-xl font-mono font-bold"}>
          Employ Page - <span className={"text-blue-700"}>Employers List</span>
        </p>
      </div>
      <div className={"bg-white p-5 pb-10 pt-16 flex flex-row w-full"}>
        <div className={"w-[30%] px-10 p-5 rounded-md shadow-sm bg-[#fcfcfc]"}>
          <div>
            <h1 className={"py-4 text-base font-ubuntu font-bold"}>Catagory</h1>
            <div
              className={
                "border bg-white flex flex-row justify-between w-[300px] p-4 shadow-sm border-slate-300 rounded-md "
              }
            >
              <select
                name="category"
                placeholder="category"
                defaultValue={""}
                className={"w-full h-full bg-transparent outline-none"}
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
                <option value="option5">Option 5</option>
              </select>
            </div>
          </div>
          <div>
            <h1 className={"py-4 text-base font-ubuntu font-bold"}>Keyword</h1>
            <div
              className={
                "border bg-white flex flex-row justify-between w-[300px] p-4 shadow-sm border-slate-300 rounded-md "
              }
            >
              <input
                type="text"
                name="keyword"
                placeholder="keyword"
                className={" bg-transparent w-[85%] font-ubuntu outline-none"}
              />
              <FiSearch className={"my-auto text-xl text-slate-500"} />
            </div>
          </div>
          <div>
            <h1 className={"py-4 text-base font-ubuntu font-bold"}>Location</h1>
            <div
              className={
                "border bg-white flex flex-row justify-between w-[300px] p-4 shadow-sm border-slate-300 rounded-md "
              }
            >
              <input
                type="text"
                name="location"
                placeholder="Location"
                className={" bg-transparent w-[85%] font-ubuntu outline-none"}
              />
              <HiOutlineLocationMarker
                className={"my-auto text-xl text-slate-500"}
              />
            </div>
          </div>
          <div className={"flex flex-col gap-2 py-10 w-full"}>
            {jobTypeList.map((item, index) => (
              <div
                key={index}
                className={
                  "flex p-2 text-base font-ubuntu text-slate-500 flex-row w-full pr-10 pl-3 justify-between"
                }
              >
                <div className={"flex gap-10 flex-row"}>
                  <input
                    type="checkbox"
                    name={item.name}
                    checked={item.checked || false}
                    className="checkbox"
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <p>{item.name}</p>
                </div>
                <p className={"my-auto text-blue-700"}>{item.number}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={"w-[67%] px-10"}>
          <div className={"flex flex-row justify-between"}>
            <p className={"text-base font-bold font-ubuntu"}>
              {" "}
              showing 2432 Jobs
            </p>
            <div className={"flex flex-row gap-5"}>
              <p className={"my-auto text-base font-bold font-ubuntu"}>
                Short By
              </p>
              <select className="select font-ubuntu text-sm select-sm my-auto border-slate-300 bg-transparent max-w-xs">
                <option disabled defaultValue={""}>
                  Most Recent
                </option>
                <option>Java</option>
                <option>Go</option>
                <option>C</option>
                <option>C#</option>
                <option>C++</option>
                <option>Rust</option>
                <option>JavaScript</option>
                <option>Python</option>
              </select>
            </div>
          </div>
          <div
            className={
              "w-[100%] flex flex-col gap-16 rounded-md px-10 sm:pl-4 sm:pt-52 sm:gap-5"
            }
          >
            {jobList.map((job, index) => (
              <Link
                to={"/employes/details"}
                key={index}
                className={
                  "bg-white h-[150px] relative z-10 w-[100%] sm:w-[97%] sm:h-[80px] "
                }
              >
                <div
                  className={
                    "overflow-hidden h-[140px] w-[150px] bg-white absolute left-5 top-10 shadow-xl shadow-blue-400 sm:h-[70px] sm:w-[70px] sm:top-5 sm:left-2 "
                  }
                >
                  <img src={job.image} alt="job" className={"object-contain"} />
                </div>
                <div className={"p-5 pl-48 pt-10 sm:pl-16 sm:scale-75 sm:pt-0"}>
                  <p className={"text-base font-semibold sm:text-sm"}>
                    {job.title}
                  </p>
                  <p className={"text-sm  pb-7 sm:text-xs sm:pb-0"}>
                    {job.location}
                  </p>
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
                  <div
                    className={"text-center font-bold font-roboto sm:text-xs"}
                  >
                    {job.price} / Month
                  </div>
                  <div className={"font-bold text-blue-600 sm:text-xs"}>
                    {job.jobType}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className={"flex justify-center my-10 mt-20"}>
            <Stack spacing={2}>
              <Pagination count={10} variant="outlined" shape="rounded" />
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employers;
