import React from "react";
import "./testimonials.css";
import testImg from "../../../assets/img/test.jpg";
//* Importing Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
//* Importing Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//* importing Pagination modules
import { Pagination, Navigation } from "swiper/modules";
const TestimonialsData = [
  {
    id: 1,
    company: "CEO of P-Tech Consult",
    desc: "I find Okoye Moses has to be quite an interesting web Developer. He tries to get the job done and also tries to deliver the jobs fast and before deadline.",
  },
  {
    id: 2,
    company: "CEO of 55LIFT Consult",
    desc: "His the best Developer I have ever partnered with, he gets work done on time and makes the work always stand out. I highly recommend him for any project you wish to work on.",
  },
  {
    id: 3,
    company: "CEO of SPSK Corporate",
    desc: "Okoye Moses has been the best man I always call for any project idea and I do not know how but he gets to bring the creativity to LIFE, over highly recommend him.",
  },
];

const Testimonials = () => {
  return (
    <section className="service section">
      <h2 className="section__title">Testimonials</h2>
      <span className="section__subtitle">What My Clients Say</span>

      <Swiper
        className="test_cont"
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
      >
        {TestimonialsData.map((test) => {
          return (
            <SwiperSlide className="test_card" key={test.id}>
              <img
                className="test_img"
                src={testImg}
                width={100}
                height={100}
                alt="tech"
              />
              <h3 className="test_name">{test.company}</h3>
              <p className="test_desc">{test.desc}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
