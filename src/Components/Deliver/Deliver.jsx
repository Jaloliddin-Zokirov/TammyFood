import React from "react";

const Deliver = () => {
  return (
    <section className="mb-[120px]" id="Deliver">
      <div className="container">
        <div className="flex items-center justify-around flex-wrap">
          <img
            src="target.png"
            width={466}
            height={822}
            alt="fast delivery image"
          />
          <div className="w-full max-w-[510px]">
            <span className="inline-block py-[10px] px-[18px] rounded-md bg-[#FFEFC8] text-[#EF9737] text-[14px] font-semibold mb-[13px ]">
              Our Target{" "}
            </span>
            <h2 className="text-[#535353] text-[36px] font-bold mb-[25px]">
              We Earn Your Trust and are Diligent in Your Case
            </h2>
            <p className="mb-[30px] text-[#667085] text-[16px] font-normal">
              When an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
            </p>
            <p className="mb-[30px] text-[#667085] text-[16px] font-normal">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
            <a
              className="inline-block py-[16px] px-[19px] rounded-md bg-[#FCC647] text-[#FFF] text-[16px] font-semibold"
              href="#Menu"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deliver;
