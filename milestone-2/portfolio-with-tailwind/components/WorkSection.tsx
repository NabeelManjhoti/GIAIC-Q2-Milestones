"use client";

import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

const WorkSection = () => {
  return (
    <div className="container w-full h-full flex justify-center md:justify-end">
      <div className="w-[350px] md:w-[840px] h-full md:h-[700px] bg-navFont mt-[820px] md:mt-2 md:-mx-7 md:ml-24 rounded-2xl md:pl-[75px] flex flex-col items-center md:items-start">
        <div className="w-[400px] md:w-[496px] h-[60px] flex items-center  justify-evenly md:justify-between mt-5">
          <h2
            className={`${poppins.className} font-medium text-[25px] md:text-[40px] text-[#0B0909]`}
          >
            Work
          </h2>
          <div className="line w-[132px] md:w-[252px] h-[2px] bg-linear"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-36">
          <div className="w-[260px] h-[300px] md:w-[280px] bg-[#FFEED9] rounded-xl flex flex-col items-center justify-start pt-1">
            <Image
              className="mt-1 rounded-xl"
              src={"/portfolio-1.jpg"}
              width={250}
              height={0}
              alt="portfolio"
            />
            <Link
              target="blank"
              href={"https://milestone-5-pink-eight.vercel.app/"}
            >
              <button
                className={`${poppins.className} text-customWhite font-normal ml-40 mt-2 w-[80px] h-[25px] rounded-lg bg-linear text-[12px]`}
              >
                Live Project
              </button>
            </Link>
          </div>

          <div className="w-[260px] h-[300px] md:w-[280px] bg-[#FFEED9] rounded-xl flex flex-col items-center justify-center pt-1">
            <Image
              className="mt-1 rounded-xl"
              src={"/portfolio-2.png"}
              width={500}
              height={0}
              alt="portfolio"
            />
            <Link target="blank" href={"https://furniro-by-nabeel.vercel.app/"}>
              <button
                className={`${poppins.className} text-customWhite font-normal ml-40 mt-16 w-[80px] h-[25px] rounded-lg bg-linear text-[12px]`}
              >
                Live Project
              </button>
            </Link>
          </div>

          {/* <div className="w-[260px] h-[300px] md:w-[280px] bg-[#FFEED9] rounded-xl flex flex-col items-center justify-center pt-1">
            <p className={`${poppins.className} text-lg md:text-xl font-bold`}>
              Many Exiting Projects <br /> Coming Soon...
            </p>
          </div> */}
          {/* <div className='w-[300px] h-[300px] bg-[#FFE3BF]'></div>
          <div className='w-[300px] h-[300px] bg-[#FFE3BF]'></div> */}
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
