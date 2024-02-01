import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../style/catswiper.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { companyList } from "../constants/linkslist";
import { Link } from "react-router-dom";

export default function CompaniesSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper py-20"
      >
        {companyList.map((company, index) => (
          <SwiperSlide key={index}>
            <Link to={company.link} className={"text-black hover:text-blue-700"}>
              <div>
                <img src={company.img} alt="Company Logo" />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
