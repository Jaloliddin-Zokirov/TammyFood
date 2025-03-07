import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-[#232233] pt-[200px] pb-[18px]">
      <div className="container">
        <div>
          <div className="absolute -top-[120px] left-[50%] transform translate-x-[-50%] w-full max-w-[1170px] flex items-center justify-between py-[65px] px-[98px] rounded-[30px] bg-white">
            <div className="flex items-center gap-4">
              <img src="Email.png" width={100} height={100} alt="email icon" />
              <p className="text-[#23233] text-[28px] font-semibold">
                info@youremail.com
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="Call.png"
                width={100}
                height={100}
                alt="telephone icon"
              />
              <a
                className="text-[#23233] text-[28px] font-semibold"
                href="tel:+8803216559985"
              >
                +880 321 655 9985
              </a>
            </div>
          </div>
          <div className="border-b-2 pb-[52px] border-white mb-[18px] flex items-start justify-between flex-wrap">
            <div className="w-full max-w-[331px]">
              <Link to={"/"}>
                <img
                  className="mb-[16px]"
                  src="TammyFoodFooter.png"
                  width={200}
                  height={25}
                  alt="Tammy Food logo"
                />
              </Link>
              <p className="text-white text-[14px] font-normal mb-[16px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <ul className="flex items-center gap-7">
                <li>
                  <a href="" target="_blanck">
                    <img
                      src="facebook.png"
                      width={24}
                      height={24}
                      alt="facebook icon"
                    />
                  </a>
                </li>
                <li className="w-0.5 h-[24px] bg-white"></li>
                <li>
                  <a href="" target="_blanck">
                    <img
                      src="instagram.png"
                      width={24}
                      height={24}
                      alt="instagram icon"
                    />
                  </a>
                </li>
                <li className="w-0.5 h-[24px] bg-white"></li>
                <li>
                  <a href="" target="_blanck">
                    <img
                      src="twitter.png"
                      width={24}
                      height={24}
                      alt="twitter icon"
                    />
                  </a>
                </li>
                <li className="w-0.5 h-[24px] bg-white"></li>
                <li>
                  <a href="" target="_blanck">
                    <img
                      src="youtube.png"
                      width={24}
                      height={24}
                      alt="youtube icon"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-white text-[25px] font-bold uppercase mb-[11px]">
                quick link
              </p>
              <ul className="flex flex-col gap-[12px]">
                <li>
                  <a
                    className="text-white text-[16px] font-semibold"
                    href="#About"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="text-white text-[16px] font-semibold"
                    href="#Menu"
                  >
                    Menu
                  </a>
                </li>
                <li>
                  <a
                    className="text-white text-[16px] font-semibold"
                    href="#Deliver"
                  >
                    Deliver
                  </a>
                </li>
                <li>
                  <a
                    className="text-white text-[16px] font-semibold"
                    href="#Contact"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full max-w-[315px]">
              <p className="text-white text-[25px] font-bold mb-[11px] uppercase">
                news letter
              </p>
              <p className="text-white text-[16px] font-normal mb-[33px]">
                Subscribe our newsletter to get our latest update & news
              </p>
              <label className="relative">
                <input
                  className="w-full max-w-[369px] py-[13px] pl-[18px] pr-[54px] bg-white rounded-[4px]"
                  type="email"
                  name=""
                  placeholder="Your email address"
                  required
                />
                <button className="absolute -top-[13.5px] right-[2px]">
                  <img
                    src="SendArrow.svg"
                    width={52}
                    height={46}
                    alt="Send Arrow icon"
                  />
                </button>
              </label>
            </div>
          </div>
          <p className="flex items-center justify-center gap-[10px] text-white text-[16px] font-normal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4ZM12 7C13.82 7 15.413 7.973 16.288 9.428L14.574 10.457C14.3043 10.0072 13.9213 9.63605 13.4634 9.38045C13.0055 9.12484 12.4885 8.99374 11.9641 9.00023C11.4397 9.00672 10.9262 9.15056 10.4747 9.41742C10.0232 9.68428 9.6496 10.0648 9.39107 10.5211C9.13254 10.9774 8.99815 11.4935 9.00128 12.0179C9.00442 12.5424 9.14498 13.0568 9.40895 13.51C9.67292 13.9632 10.0511 14.3392 10.5057 14.6007C10.9603 14.8621 11.4756 14.9998 12 15C12.5181 15.0003 13.0275 14.8664 13.4785 14.6112C13.9294 14.356 14.3065 13.9883 14.573 13.544L16.288 14.572C15.726 15.5106 14.8716 16.239 13.8559 16.6453C12.8402 17.0517 11.7192 17.1137 10.6649 16.8217C9.61058 16.5298 8.68114 15.9 8.01914 15.029C7.35713 14.1581 6.99912 13.094 7 12C7 9.24 9.24 7 12 7Z"
                fill="white"
              />
            </svg>{" "}
            Copyright 2021 .Tammy Food. All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
