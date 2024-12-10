import Link from "next/link";
import React from "react";
import { Raleway } from "next/font/google";
import { AiOutlineHome } from "react-icons/ai";
import { MdDescription } from 'react-icons/md';
import { TbBriefcase2 } from "react-icons/tb";
import { RiContactsBook3Fill } from "react-icons/ri";

const raleway = Raleway({ subsets: ["latin"] });

const ResumeNav = () => {
  return (
    <nav className="w-full flex justify-center md:justify-end mt-3 md:pr-8">
      <div className="h-[100px] w-[403px] sm:w-[603px] md:w-[503px] bg-background rounded-2xl drop-shadow-md">
        <ul className="flex pt-[10px] justify-evenly">
          <li
            className={`${raleway} h-[80px] w-[80px] bg-iconsBg text-iconsColor text-opacity-50 rounded-2xl hover:bg-linear hover:text-navFont font-semibold text-[12px]`}
          >
            <Link
              className="w-full h-full flex flex-col items-center justify-center"
              href={"/"}
            >
              <AiOutlineHome className="text-[24px]" />
              Home
            </Link>
          </li>

          <li
            className={`${raleway} h-[80px] w-[80px] bg-linear text-navFont rounded-2xl font-semibold text-[12px]`}
          >
            <Link
              className="w-full h-full flex flex-col items-center justify-center"
              href={"/resume"}
            >
              <MdDescription className="text-[24px]" />
              Resume
            </Link>
          </li>

          <li
            className={`${raleway} h-[80px] w-[80px] bg-iconsBg text-iconsColor text-opacity-50 rounded-2xl hover:bg-linear hover:text-navFont font-semibold text-[12px]`}
          >
            <Link
              className="w-full h-full flex flex-col items-center justify-center"
              href={"/work"}
            >
              <TbBriefcase2 className="text-[24px]" />
              Work
            </Link>
          </li>

          <li
            className={`${raleway} h-[80px] w-[80px] bg-iconsBg text-iconsColor text-opacity-50 rounded-2xl hover:bg-linear hover:text-navFont font-semibold text-[12px]`}
          >
            <Link
              className="w-full h-full flex flex-col items-center justify-center"
              href={"/contact"}
            >
              <RiContactsBook3Fill className="text-[24px]" />
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default ResumeNav;
