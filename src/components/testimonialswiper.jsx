import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style/testimonialstyle.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Testimonials } from "../constants/linkslist";
import { RiDoubleQuotesL } from "react-icons/ri";

export default function TestimonialsSwiper() {
  const splitCategories = (categories, groupSize) => {
    const result = [];
    for (let i = 0; i < categories.length; i += groupSize) {
      result.push(categories.slice(i, i + groupSize));
    }
    return result;
  };
  const categoryGroups = splitCategories(Testimonials, 2);

  return (
    <>
      <Swiper
       spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper pb-10"
      >
        {categoryGroups.map((group, groupIndex) => (
          <SwiperSlide
            key={groupIndex}
            className={
              " bg-white py-10 pb-28 px-5 flex gap-10 flex-row justify-around "
            }
          >
            {group.map((item, index) => (
              <div key={index} className={"flex flex-row gap-10 w-[fit]"}>
                <div className={""}>
                  <img src={item.image} className={""} />
                </div>
                <div
                  className={
                    "flex flex-col text-md gap-2 w-[200px] font-ubuntu"
                  }
                >
                  <div className={"mx-auto text-6xl text-slate-400"}>
                    <RiDoubleQuotesL className={"text-center"} />
                  </div>
                  <div>{item.description}</div>
                  <div>{item.name}</div>
                  <div>
                    <p>{item.job}</p>
                    <div className={"w-[50px] h-[2px] bg-slate-400"}></div>
                  </div>
                </div>
              </div>
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
