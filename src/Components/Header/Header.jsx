import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState('home')
  return (
    <header className="py-5  ">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to={"/"}>
            <img src="TammyFood.png" width={199} height={39} alt="site logo" />
          </Link>
          <ul className="flex items-center gap-[80px]">
            <li className={`${active === 'home' ? 'border-[#FCC647] text-[#FCC647]' : 'border-[transparent]'} text-[#3C3C3C] border-b-[3px] hover:border-[#FCC647] hover:text-[#FCC647] cursor-pointer`}>
              <a className=" text-[20px] font-bold" href="#Home" onClick={() => setActive('home')}>Home</a>
            </li>
            <li className={`${active === 'about' ? 'border-[#FCC647] text-[#FCC647]' : 'border-[transparent]'} text-[#3C3C3C] border-b-[3px] hover:border-[#FCC647] hover:text-[#FCC647] cursor-pointer`}>
              <a className="text-[20px] font-bold" href="#About" onClick={() => setActive('about')}>About US</a>
            </li>
            <li className={`${active === 'menu' ? 'border-[#FCC647] text-[#FCC647]' : 'border-[transparent]'} text-[#3C3C3C] border-b-[3px] hover:border-[#FCC647] hover:text-[#FCC647] cursor-pointer`}>
              <a className="text-[20px] font-bold" href="#Menu" onClick={() => setActive('menu')}>Menu</a>
            </li>
            <li className={`${active === 'contact' ? 'border-[#FCC647] text-[#FCC647]' : 'border-[transparent]'} text-[#3C3C3C] border-b-[3px] hover:border-[#FCC647] hover:text-[#FCC647] cursor-pointer`}>
              <a className="text-[20px] font-bold" href="#Contact" onClick={() => setActive('contact')}>Contact US</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
