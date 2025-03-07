import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../until";

const ProductCard = ({ id, img, title, text }) => {
  const maxLength = 67; // "Beef is the culinary name for meat from cattle, particularly skeletal muscle." uzunligi
  const truncatedText =
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <li
      className="flex flex-col items-center w-full max-w-[273px] py-[15px] px-[22px]"
      key={id}
    >
      <img
        className="mb-[19px]"
        src={img}
        width={147}
        height={147}
        alt={title}
      />
      <div>
        <h4 className="mb-[13px] text-[#3C3C3C] text-[18px] font-bold">
          {title}
        </h4>
        <p className="mb-[28px] text-[#667085] text-[12px] font-normal">
          {truncatedText}
        </p>
        <Link
          to={title}
          className="py-[6px] px-[16px] rounded-md bg-[#FCC647] text-[#FFF] text-[16px] font-semibold"
        >
          More
        </Link>
      </div>
    </li>
  );
};

export default ProductCard;
