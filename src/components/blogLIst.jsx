import React from "react";

const BlogList = ({ data }) => {
  const blogList = data;
  return (
    <div className={"flex flex-row justify-around sm:flex-col sm:px-5 sm:gap-10 "}>
      {blogList.map((item, index) => (
        <div
          key={index}
          className={
            "w-[350px] h-[540px] relative flex flex-col  gap-5 bg-slate-50 px-2 py-2 rounded-md sm:w-full "
          }
        >
          <div
            className={
              "w-[300px] absolute left-5 -top-3 mx-auto overflow-hidden h-[300px] shadow-blue-600 shadow-lg rounded-md sm:left-2 sm:w-[290px] sm:h-[290px]"
            }
          >
            <img
              src={item.image}
              alt=""
              className={"w-full h-full object-cover"}
            />
          </div>
          <div className={"font-roboto absolute bottom-3"}>
            <div className={"flex flex-row justify-between pr-10 my-3"}>
              <p
                className={
                  " bg-blue-950 rounded-r-full absolute bottom-[160px] text-white px-7 -left-2 py-2"
                }
              >
                {item.date}
              </p>

              <p className={"absolute font-extrabold font-serif text-base text-blue-900 right-[60px] bottom-[167px] sm:right-[40px]"}>
                By <span className={"text-black"}>{item.name}</span>
              </p>
            </div>
            <div className={"flex flex-col font-ubuntu"}>
              <p className={"font-bold text-xl mb-2"}>{item.blogtitle}</p>
              <p className={"line-clamp-3"}>{item.description}</p>
              <button className={"text-left mt-2 text-blue "}>Read More</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
