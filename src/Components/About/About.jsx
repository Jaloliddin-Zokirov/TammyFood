import React from "react";

const About = () => {
  return (
    <section className="pt-[60px] pb-[120px]" id="About">
      <div className="container">
        <div className="w-full max-w-[500px] mx-auto mb-[40px]">
          <h2 className="text-[#3C3C3C] font-bold text-[36px] text-center mb-[15px]">
            How it works
          </h2>
          <p className="text-[#667085] font-normal text-[14px] text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry
          </p>
        </div>
        <ul className="relative flex items-center justify-between">
          <li className="flex flex-col items-center text-center w-full max-w-[300px]">
            <img
              className="w-[88px] h-[88px] mb-[39px]"
              width={88}
              height={88}
              src="order.png"
              alt="order icon"
            />
            <h3 className="mb-[20px] text-[#3C3C3C] text-[20px] font-semibold">
              Order Now{" "}
            </h3>
            <p className="text-[#667085] text-[14px] font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry{" "}
            </p>
          </li>
          <li className="flex flex-col items-center text-center w-full max-w-[300px] mt-[64px]">
            <div className="absolute top-[30%] left-[22%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="213"
                height="44"
                viewBox="0 0 213 44"
                fill="none"
              >
                <path
                  d="M0.5 1C41 24 101.6 58.5 212 34.5"
                  stroke="#667085"
                  strokeDasharray="5 5"
                />
              </svg>
            </div>
            <img
              className="w-[88px] h-[88px] mb-[39px]"
              width={88}
              height={88}
              src="deliver.png"
              alt="deliver icon"
            />
            <h3 className="mb-[20px] text-[#3C3C3C] text-[20px] font-semibold">
              Get Delivery{" "}
            </h3>
            <p className="text-[#667085] text-[14px] font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry{" "}
            </p>
            <div className="absolute top-[16%] right-[22%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="213"
                height="44"
                viewBox="0 0 213 44"
                fill="none"
              >
                <path
                  d="M1 42.6406C41.5 19.6406 102.1 -14.8594 212.5 9.14062"
                  stroke="#667085"
                  strokeDasharray="5 5"
                />
              </svg>
            </div>
          </li>
          <li className="flex flex-col items-center text-center w-full max-w-[300px]">
            <img
              className="w-[88px] h-[88px] mb-[39px]"
              width={88}
              height={88}
              src="payment.png"
              alt="payment icon"
            />
            <h3 className="mb-[20px] text-[#3C3C3C] text-[20px] font-semibold">
              Payment
            </h3>
            <p className="text-[#667085] text-[14px] font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
