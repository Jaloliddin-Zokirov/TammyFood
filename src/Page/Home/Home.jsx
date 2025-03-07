import React from "react";
import About from "../../Components/About/About";
import Menu from "../../Components/Menu/Menu";
import Contact from "../../Components/Contact/Contact";
import Deliver from "../../Components/Target/Target";

const Home = () => {
  return (
    <>
      <section className="relative py-[120px]" id="Home">
        <div className="container">
          <div className="flex items-center">
            <div className="w-full max-w-[573px]">
              <span className="inline-block rounded-[7px] p-[9px] bg-[#FFF2D4] text-[#F4B41B] font-semibold text-[17px] mb-[12px]">
                Fast Delivery
              </span>
              <h1 className="text-[#3C3C3C] text-[48px] font-bold mb-[12px]">
                Discover Your Favourite Food and{" "}
                <span className="text-[#FFC12F]">Test Forever</span>
              </h1>
              <p className="text-[#667085] text-[16px] font-normal mb-[27px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <div>
                <a
                  className="py-[15px] px-[25px] bg-[#FFC12F] rounded-[48px] text-white font-medium text-[19px] cursor-pointer inline-block"
                  href="#Menu"
                >
                  Get Started
                </a>
              </div>
            </div>
            <div>
              <img
                className="absolute top-[13%] left-[38%]"
                src="home.png"
                alt="test forever image"
              />
              <img
                className="absolute bottom-[24%] left-[36%]"
                src="Shape.png"
                alt="shape before image"
              />
            </div>
          </div>
        </div>
      </section>
      <About />
      <Menu />
      <Deliver />
      <Contact />
    </>
  );
};

export default Home;
