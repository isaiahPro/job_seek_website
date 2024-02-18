import React, { useState, useEffect } from "react";
import { compActive, leftTinyFun } from "../../hook/store";
import { useLocation } from "react-router-dom";
import { IoBagHandle } from "react-icons/io5";
import { jobDetailINput } from "../../constants/com_data";

const Com_home = () => {
  const { updateActivePage } = compActive();
  const { leftTiny } = leftTinyFun();

  const location = useLocation();
  useEffect(() => {
    updateActivePage(location.pathname);
  }, []);

  // State variables to store form data
  const [formData, setFormData] = useState({});

  // Handle input changes and update state
  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      className={
        !leftTiny
          ? "top-[60px] left-[20%] w-[80%] h-[90vh] overflow-x-hidden  overflow-scroll absolute"
          : "top-[55px] left-[7%] w-[93%] h-[90vh] overflow-x-hidden  overflow-scroll absolute duration-200"
      }
    >
      <div className={"min-h-screen pr-20 "}>
        <div className={"p-10 pb-5"}>
          <p className={"text-3xl font-mono"}>Post a Job</p>
          <p className={"my-2 font-ubuntu text-base text-blue-500"}>
            Job Submission Form
          </p>
        </div>
        <div className={" bg-white w-full mx-10 rounded-t-md"}>
          <div className={" mt-0 m-5 rounded-lg"}>
            <div
              className={
                "flex flex-row p-5 py-5 border-b gap-2 text-xl font-ubuntu font-semibold"
              }
            >
              <IoBagHandle className={"my-auto"} />
              <p>Job Details</p>
            </div>
          </div>
          <form className={"pb-10"} onSubmit={handleSubmit}>
            <div
              className={
                "flex flex-row flex-wrap justify-between  w-full px-10 py-5"
              }
            >
              {jobDetailINput.map((item, index) => (
                <div key={index} className={"w-[27%] mb-10"}>
                  {item.type === "text" ||
                  item.type === "email" ||
                  item.type === "number" ? (
                    <div
                      className={"flex flex-col gap-2 font-ubuntu text-base"}
                    >
                      <p>{item.name}</p>
                      <div
                        className={
                          "border-b bg-[#f0f6fe] px-2 flex flex-row gap2"
                        }
                      >
                        <item.icon
                          className={" text-xl text-blue-500 my-auto "}
                        />
                        <input
                          required={item.required}
                          className={
                            "w-full text-sm p-3 bg-transparent rounded-sm outline-none "
                          }
                          name={item.name}
                          value={formData[item.name] || ""}
                          defaultValue={
                            item.defaultValue !== undefined
                              ? item.defaultValue
                              : ""
                          }
                          type={item.type}
                          placeholder={item.placeholder}
                          onChange={(e) =>
                            handleInputChange(item.name, e.target.value)
                          }
                        />
                      </div>
                    </div>
                  ) : item.type === "select" ? (
                    <div
                      className={"flex flex-col gap-2 font-ubuntu text-base"}
                    >
                      <p>{item.name}</p>
                      <div
                        className={
                          "border-b bg-[#f0f6fe] px-2 flex flex-row gap2"
                        }
                      >
                        <item.icon
                          className={" text-xl text-blue-500 my-auto "}
                        />
                        <select
                          className={
                            "w-full text-sm p-3 rounded-sm  outline-none border-b bg-[#f0f6fe]"
                          }
                          required={item.required}
                          name={item.name}
                          value={formData[item.name] || ""}
                          onChange={(e) =>
                            handleInputChange(item.name, e.target.value)
                          }
                        >
                          {item.options.map((option, index2) => (
                            <option
                              key={index2}
                              className={"py-2"}
                              value={option}
                            >
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  ) : item.type === "textarea" ? (
                    <div
                      className={
                        "flex flex-col w-[600px] overflow-hidden rounded-md gap-2 font-ubuntu text-base"
                      }
                    >
                      <p>{item.name}</p>
                      <div
                        className={"border-b bg-[#f0f6fe] px-2 flex flex-row"}
                      >
                        <textarea
                          className={
                            "w-full text-sm p-3 rounded-sm  outline-none bg-transparent "
                          }
                          name={item.name}
                          placeholder={item.placeholder}
                          value={formData[item.name] || ""}
                          type="text"
                          id=""
                          cols="30"
                          rows="3"
                          required={item.required}
                          onChange={(e) =>
                            handleInputChange(item.name, e.target.value)
                          }
                        ></textarea>
                      </div>
                    </div>
                  ) : item.type === "datetime-local" ? (
                    <div
                      className={"flex flex-col gap-2 font-ubuntu text-base"}
                    >
                      <p>{item.name}</p>
                      <div
                        className={
                          "border-b bg-[#f0f6fe] px-2 flex flex-row gap2"
                        }
                      >
                        <item.icon
                          className={" text-xl text-blue-500 my-auto "}
                        />
                        <input
                          required={item.required}
                          className={
                            "w-full text-sm outline-none p-3 bg-transparent "
                          }
                          name={item.name}
                          value={formData[item.name] || ""}
                          type="date"
                          onChange={(e) =>
                            handleInputChange(item.name, e.target.value)
                          }
                        />
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
            <div className={"w-full px-10 py-5"}>
              <div
                className={
                  "flex flex-col w-[600px] overflow-hidden rounded-md gap-2 font-ubuntu text-base"
                }
              >
                <p>Description</p>
                <div className={"border-b bg-[#f0f6fe] px-2 flex flex-row"}>
                  <textarea
                    className={
                      "w-full text-sm p-3 rounded-sm  outline-none bg-transparent "
                    }
                    name="description"
                    placeholder="Greeetings! We are Galaxy Software development company. We are looking for a full stack developer. We are looking for a full stack developer..."
                    value={formData["description"] || ""}
                    type="text"
                    id=""
                    cols="30"
                    rows="3"
                    required
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                  ></textarea>
                </div>
              </div>
            </div>
            <button type="submit" className={"text-center w-full "}>
              <p
                className={
                  "bg-blue-700 text-white font-roboto font-bold hover:opacity-90 w-fit mx-auto px-4 py-3 rounded-md "
                }
              >
                Publish Job
              </p>
            </button>
          </form>

          {/* Access the form data */}
        </div>
      </div>
    </div>
  );
};

export default Com_home;
