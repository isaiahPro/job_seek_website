import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { FiSearch } from "react-icons/fi";
import { JobType } from "../constants/linkslist";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { jobList } from "../constants/linkslist";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
const Jobs = () => {
  const [jobTypeList, setJobTypeList] = useState(JobType);

  const handleCheckboxChange = (index) => {
    const updatedList = [...jobTypeList];
    updatedList[index].checked = !updatedList[index].checked;
    setJobTypeList(updatedList);
  };
  return (
    <div className={"bg-[#f7f8fa] pt-24"}>
      <div className={"mx-auto text-center pt-32"}>
        <p className={"text-3xl font-extrabold font-ubuntu"}>
          The Most Exciting Jobs
        </p>
        <p className={"my-5 text-xl font-mono font-bold"}>
          Home - <span className={"text-blue-700"}>Jobs Grid</span>
        </p>
      </div>
      <div className={"bg-white p-5 pt-32 flex flex-row w-full"}>
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
          <div className={"flex flex-row gap-5 py-10 flex-wrap"}>
            {jobList.map((item, index) => (
              <div
                key={index}
                className={
                  "relative shadow-xl mt-20 px-5 py-5 h-[300px] rounded-xl border shadow-blue-600 w-[45%]"
                }
              >
                <div
                  className={
                    "absolute -top-10 rounded-xl left-3 shadow-lg border border-slate-200 w-[100px] h-[100px] bg-white"
                  }
                >
                  <img src={item.image} alt={item.name} className={""} />
                </div>
                <p className={"text-center font-ubuntu text-green-700"}>
                  {item.day}
                </p>
                <div className={"my-20 flex flex-col gap-2"}>
                  <p className={"font-ubuntu text-base font-semibold"}>
                    {item.title}
                  </p>
                  <p>{item.location}</p>
                  <p className={"text-blue-500"}>{item.link}</p>
                  <div className={"w-full my-5 flex flex-row justify-between"}>
                    <div className={""}>
                      <span className={"font-bold font-ubuntu"}>
                        ${item.price}
                      </span>
                      <span className={"text-green-600 font-roboto font-bold"}>
                        /Hour
                      </span>
                    </div>
                    <Link
                      // to={`${item.link}`}
                      to={"/jobs/dynamic"}
                      className={"text-blue-500 font-bold"}
                    >
                      Browse Job
                    </Link>
                  </div>
                </div>

                <div
                  className={
                    "absolute right-5 top-3 bg-green-500 px-3 py-1 text-white font-semibold rounded-sm"
                  }
                >
                  {item.status}
                </div>
              </div>
            ))}
          </div>
          <div className={"flex justify-center my-10"}>
            <Stack spacing={2}>
              <Pagination count={10} variant="outlined" shape="rounded" />
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
