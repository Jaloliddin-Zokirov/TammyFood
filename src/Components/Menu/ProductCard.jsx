import React from "react";

const ProductCard = ({ id, img, title, text, price }) => {
  const maxLength = 67; // "Beef is the culinary name for meat from cattle, particularly skeletal muscle." uzunligi
  const truncatedText =
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

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
        <p className="mb-[12px] text-[#667085] text-[12px] font-normal">
          {truncatedText}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-[#3C3C3C] text-[16px] font-semibold">{price}</p>
          <button className="cursor-pointer">
            <img src="karzinka.svg" alt={title} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
