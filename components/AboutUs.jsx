import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Lottie from "lottie-react";
import LotiTeamwork from "../utils/lottiefiles/teamwork.json";
import LotiBuilding from "../utils/lottiefiles/building.json";
import Ingenuous from "../utils/lottiefiles/office.json";
const AboutUs = () => {
  const settings = {
    infinite: true,
    speed: 500,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

          initialSlide: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,

          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: true,
          cssEase: "linear",
        },
      },
    ],
  };
  return (
    <>
      <div className=" ">
        <Slider {...settings}>
          <div className="flex space-x-3  ">
            <div className=" bg-white  p-3 md:w-[90%]   mx-3  text-black rounded-xl">
              <Lottie
                animationData={Ingenuous}
                loop={true}
                className="w-[50%] md:w-[50%] pb-5"
              />
              <div className="text-center">
                <p>
                  Introducing Assets Management Service (AMS) - Simplify and
                  Enhance Your Asset Management
                </p>
              </div>
              <div className="text-center mt-4">
                <button className="bg-blue-500 text-white py-2 px-4 rounded">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="flex space-x-3 ">
            <div className="bg-white p-3 md:w-[90%]    mx-3 text-black rounded-xl">
              <Lottie
                animationData={LotiTeamwork}
                loop={true}
                className="w-[50%] md:w-[50%] pb-5"
              />
              <div className="text-center">
                <p>Ingenious Payment</p>
              </div>
              <div className="text-center mt-4">
                <button className="bg-blue-500 text-white py-2 px-4 rounded">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="bg-white p-3 md:w-[90%]  mx-3 text-black rounded-xl">
              <Lottie
                animationData={Ingenuous}
                loop={true}
                className="w-[50%] md:w-[50%] pb-5"
              />
              <div className="text-center">
                <p> EduCollabo Africa: Bridging the Education Divide</p>
              </div>
              <div className="text-center mt-4">
                <button className="bg-blue-500 text-white py-2 px-4 rounded">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="bg-white p-3 md:w-[90%]  mx-3 text-black rounded-xl">
              <div className="text-center"></div>
              <Lottie
                animationData={LotiTeamwork}
                loop={true}
                className="w-[50%] md:w-[50%]  pb-5"
              />
              <div className="text-center">
                <p> Ingenious MedTech: Revolutionizing Healthcare Access</p>
              </div>
              <div className="text-center mt-4">
                <button className="bg-blue-500 text-white py-2 px-4 rounded">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="bg-white p-3 md:w-[90%]  mx-3 text-black rounded-xl">
              <Lottie
                animationData={LotiTeamwork}
                loop={true}
                className="w-[50%] md:w-[50%]  pb-5"
              />
              <div className="text-center">
                <p>
                  {" "}
                  Ingenious AgriWave: Transforming Agriculture for Sustainable
                  Growth
                </p>
              </div>
              <div className="text-center mt-4">
                <button className="bg-blue-500 text-white py-2 px-4 rounded">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default AboutUs;
