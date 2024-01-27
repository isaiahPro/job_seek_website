import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { catagoryList } from "../constants/linkslist";
import "../style/swiperstyle.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CatagoriesSwiper() {
  const [cat, setCat] = useState({});

  const handleMouseEnter = (index) => {
    setCat((prevCat) => ({
      ...prevCat,
      [index]: true,
    }));
  };

  const handleMouseLeave = (index) => {
    setCat((prevCat) => ({
      ...prevCat,
      [index]: false,
    }));
  };

  // Splitting the catagoryList into groups of four
  const splitCategories = (categories, groupSize) => {
    const result = [];
    for (let i = 0; i < categories.length; i += groupSize) {
      result.push(categories.slice(i, i + groupSize));
    }
    return result;
  };

  const categoryGroups = splitCategories(catagoryList, 4);

  return (
    <div className={"relative pb-20"}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mb-20 "
      >
        <div
          className={
            "py-20 pl-20 pr-10  pb-40 bg-[rgb(227,241,251,0.3)] flex flex-row justify-between "
          }
        >
          {categoryGroups.map((group, groupIndex) => (
            <SwiperSlide key={groupIndex} className={" bg-[rgb(227,241,251,0.3)] py-10 pb-28"}>
              {group.map((item, index) => (
                <Link
                  key={index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  className={
                    "bg-white overflow-hidden border relative h-[140px] w-[20%] mx-5 py-10  rounded-lg shadow-xl shadow-[#d3e9f8]"
                  }
                  to={item.link}
                >
                  <div>
                    <div
                      className={"text-blue-700 absolute px-2 z-50 text-5xl"}
                    >
                      {item.icon}
                    </div>
                    <div className={"absolute top-7 z-10 right-[30%] "}>
                      <div
                        className={
                          "pb-2 bg-blue-700 z-10 text-center p-1 text-white rounded-md font-semibold"
                        }
                      >
                        <span className={"font-ubuntu font-normal"}>
                          {item.count}
                        </span>{" "}
                        Jobs
                      </div>
                      <div className={"my-1 z-10 font-semibold"}>
                        {item.name}
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      cat[index]
                        ? "w-[120px] translate-x-[240px] rotate-[-45deg] transition-all duration-500 translate-y-[-50px] absolute -left-12 -top-20 bg-[rgb(211,233,248,0.7)] h-[350px] rounded-full"
                        : "w-[140px] z-0 hover:translate-x-[240px] transition-all duration-500 hover:translate-y-[-50px] absolute -left-14 top-0 bg-[rgb(230,239,246,0.7)] h-[140px] rounded-full"
                    }
                  ></div>
                  <div
                    className={
                      cat[index]
                        ? "w-[120px] translate-x-[240px] rotate-[-45deg] transition-all duration-500 translate-y-[-50px] absolute -left-12 -top-20 bg-[rgb(211,233,248,0.7)] h-[350px] rounded-full"
                        : "w-[130px] z-0 mt-1 hover:translate-x-[240px] transition-all duration-500 hover:translate-y-[-50px] absolute -left-14 top-0 bg-[rgb(211,233,248,0.7)] h-[130px] rounded-full"
                    }
                  ></div>
                </Link>
              ))}
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <div className={"absolute right-16 hover:opacity-90 cursor-pointer bottom-44 z-10 bg-blue-700 w-fit px-3 py-2 text-white font-semibold rounded-md"}>AllCatagories</div>
    </div>
  );
}
