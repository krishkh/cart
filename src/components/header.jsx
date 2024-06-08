import React from "react";
import { NavLink, Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="w-full dark:bg-gray-200 dark:text-icon-color relative overflow-hidden flex flex-col items-start justify-start pt-0 px-0box-border gap-[3px] cursor-auto leading-[normal] tracking-[normal]">
        <div className="self-stretch flex flex-row items-start justify-center pt-[15px] px-5 pb-3.5 box-border max-w-full text-left text-[64px] font-oswald">
          <div className="h-[124px] w-[1450px] relative hidden max-w-full" />
          <div className="h-[95px] w-[528px] relative tracking-[0.3em] inline-block whitespace-nowrap max-w-full z-[1]">
            KAIZEN CART
          </div>
        </div>
      </div>
      <nav className="flex justify-end gap-10 py-2 px-5 dark:bg-gray-200 border-[2px] border-solid border-white dark:text-gray-100 font-oswald">
        <NavLink className="" to="items">
          Item Section
        </NavLink>
        <Link className="" to="about">
          About us
        </Link>
      </nav>
    </>
  );
}

export default Header;
