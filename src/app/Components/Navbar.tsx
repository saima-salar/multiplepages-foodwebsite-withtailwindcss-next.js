import Link from "next/link";
import Image from "next/image";
import React from "react";

import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="container pt-6 max-w-screen-2xl ">
      <div className="flex justify-between items-center ">
        <Image src="/logo.png" width={60} height={60} alt="logo" />
        <ul className="md:flex gap-8 items-center font-semibold text-[14px] hidden">
   
          <Link href="./home"><li>Home</li></Link>
          <Link href="./about"><li>About</li></Link>
          <Link href="./food"><li>Food</li></Link>
          <Link href="./contact"><li>Contact</li></Link>
          <button className="bg-accent text-white px-3 py-2 rounded-3xl">
            SignUp
          </button>
        </ul>

        <AiOutlineMenu className="md:hidden text-accent" size={30} />
      </div>
    </nav>
  );
};

export default Navbar;