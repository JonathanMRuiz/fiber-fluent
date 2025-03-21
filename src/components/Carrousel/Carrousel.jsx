import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-scroll";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import EasyStreetImage from "../../assets/easystreet.jpeg";
import Carrousel_1 from "../../assets/carrousel_1.png";
import Carrousel_3 from "../../assets/night_work_2.jpg";

const slides = [
  {
    type: "video",
    src: "https://fiberfluent.com/wp-content/uploads/2025/01/Fiber-Fluent-White-BG-Video.mp4",
  },
  {
    image: EasyStreetImage,
    title: "Seamless Connectivity",
    description: "Advanced infrastructure for faster and more reliable wireless coverage.",
    link: "installation",
  },
  {
    image: Carrousel_1,
    title: "Reliable and Efficient Utility Installations",
    description: "Expertise in underground networks for communication and power.",
    link: "services",
  },
  {
    image: Carrousel_3,
    title: "Nighttime Precision, Lasting Impact",
    description: "Expert underground installations with minimal daytime disruption.",
    link: "night_work",
  },
];

const Carrousel = () => {
  return (
    <div className="relative w-full h-[60vh] sm:h-[85vh]">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        loop
        className="w-full h-full"
        onSlideChange={(swiper) => {
          if (slides[swiper.realIndex].type === 'video') {
            swiper.params.autoplay.delay = 10000;
          } else {
            swiper.params.autoplay.delay = 5000;
          }
          swiper.autoplay.start();
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {slide.type === "video" ? (
              <video
                src={slide.src}
                autoPlay
                muted
                className="w-full object-cover h-[50vh] sm:h-[85vh]"
              />
            ) : (
              <div
                className="w-full h-[60vh] sm:h-[85vh] bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-40 text-white text-center px-4">
                  <h2 className="text-lg sm:text-3xl font-bold">{slide.title}</h2>
                  <p className="text-sm sm:text-lg mt-2">{slide.description}</p>
                  <Link
                    to={slide.link}
                    smooth={true}
                    duration={500}
                    className="mt-4 text-lg font-semibold text-yellow-400 cursor-pointer"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  );
};

export default Carrousel;