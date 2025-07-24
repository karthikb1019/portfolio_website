import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Achievements = () => {
  const images = [
    "image9.jpg",
    "image10.jpg",
    "image11.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full mt-16 px-4">
      {/* Heading with icon */}
      <div
        className="flex items-center gap-3 bg-white/10 px-6 py-4 rounded-xl border border-white/10 shadow-md mb-8"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <span className="text-2xl">🏆</span>
        <h2 className="text-xl md:text-2xl font-bold text-white">Achievements & Medals</h2>
      </div>

      {/* Carousel */}
      <div className="w-full max-w-[1100px]" data-aos="fade-up">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="rounded-2xl w-full h-[21rem] object-cover shadow-2xl"
                loading="lazy"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Achievements;
