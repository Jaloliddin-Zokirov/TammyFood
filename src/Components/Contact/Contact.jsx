import React from "react";

const Contact = () => {
  return (
    <section className="mb-[120px]" id="Contact">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-full max-w-[500px]"> 
            <h2 className="text-[#3C3C3C] text-[36px] font-bold mb-[24px]">To Get 15% Discount Download The App</h2>
            <p className="text-[#667085] text-[16px] font-normal mb-[30px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <div className="flex items-center gap-[20px]">
              <img className="cursor-pointer" src="googleplay.png" width={140} height={45} alt="Google Play image" />
              <img className="cursor-pointer" src="appstore.png" width={140} height={45} alt="App Store image" />
            </div>
          </div>
          <img src="App.png" width={575} height={575} alt="Aplication image" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
