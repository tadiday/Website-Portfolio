import React from "react";
import Link from "next/link"; // Import Link from Next.js
import { RiHome2Line } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { IoCodeWorkingSharp } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";

const NavBar = () => {
  return (
    <nav className="z-10 flex items-center justify-center w-full shadow-lg rounded-tl-2xl rounded-tr-2xl sm:rounded-tl-none sm:rounded-br-2xl bg-[var(--color-bar)]">
      <div className="flex flex-row sm:flex-col items-center my-4">
        <ul className="text-[20px] w-[100%] flex flex-row sm:flex-col gap-y-6 items-center font-thin symbol-color">
          <li className="py-[5px] px-7 sm:px-4 hover:rounded-full hover:bg-[color:var(--contact-button-hover)]">
            <Link href="#home" aria-label="Go to Home">
              <RiHome2Line />
            </Link>
          </li>
          <li className="py-[5px] px-7 sm:px-4 hover:rounded-full hover:bg-[color:var(--contact-button-hover)]">
            <Link href="#about" aria-label="Go to About">
              <IoPersonOutline />
            </Link>
          </li>
          <li className="py-[5px] px-7 sm:px-4 hover:rounded-full hover:bg-[color:var(--contact-button-hover)]">
            <Link href="#projects" aria-label="Go to Project">
              <IoCodeWorkingSharp />
            </Link>
          </li>
          <li className="py-[5px] px-7 sm:px-4 hover:rounded-full hover:bg-[color:var(--contact-button-hover)]">
            <Link href="#experience" aria-label="Go to Experience">
              <MdWorkOutline />
            </Link>
          </li>
          <li className="py-[5px] px-7 sm:px-4 hover:rounded-full hover:bg-[color:var(--contact-button-hover)]">
            <Link href="#contact" aria-label="Go to Contact">
              <MdOutlineMailOutline />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
