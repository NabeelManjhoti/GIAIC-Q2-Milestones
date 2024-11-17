import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { Raleway } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

const raleway = Raleway({
  subsets: ["latin"],
})

const ContactSection = () => {
  return (
    <div className="container w-full h-full flex justify-center md:justify-end">
      <div className="w-[350px] md:w-[840px] h-full md:h-[700px] bg-navFont mt-[820px] md:mt-2 md:-mx-7 md:ml-24 rounded-2xl md:pl-[75px] flex flex-col items-center md:items-start">
        <div className="w-[400px] md:w-[496px] h-[60px] flex items-center  justify-evenly md:justify-between mt-5">
          <h2
            className={`${poppins.className} font-medium text-[25px] md:text-[40px] text-[#0B0909]`}
          >
            Contact
          </h2>
          <div className="line w-[132px] md:w-[252px] h-[2px] bg-linear"></div>
        </div>

        <div className="flex flex-col md:flex md:flex-row mt-3 gap-10 md:gap-9">
          <div className="w-[333px] h-[150] bg-[#FFEED9] rounded-2xl flex flex-col justify-center pl-7 gap-3">
            <div className="flex gap-3">
              <Image src={"/phone.svg"} alt="phone" width={24} height={24} />
              <p
                className={`${poppins.className} font-medium text-customBlack`}
              >
                Phone:{" "}
              </p>
            </div>
            <p className={`ml-8 ${poppins.className} text-[14px] font-medium`}>
              +923338538388
            </p>
          </div>

          <div className="w-[333px] h-[150] bg-customWhite rounded-2xl flex flex-col justify-center pl-7 gap-3">
            <div className="flex gap-3">
              <Image src={"/e-mail.svg"} alt="phone" width={24} height={24} />
              <p
                className={`${poppins.className} font-medium text-customBlack`}
              >
                Email:{" "}
              </p>
            </div>
            <p
              className={`ml-8 ${poppins.className} text-[14px] font-medium text-customBlack`}
            >
              nabeelalimanjhoti@gmail.com
            </p>
          </div>
        </div>

        <div className="w-[333px] md:w-[700px] md:h-[392px] bg-[#F8FBFB] md:mt-5 rounded-2xl flex flex-col items-center justify-center gap-5">
          <div className={`${poppins.className} w-[280px] md:w-[599px] md:h-[88px]`}>
            <p className="font-normal text-[16px]">
              I am always open to discussing{" "}
              <span className="font-bold">
                new projects, opportunities in tech world, partnerships
              </span>{" "}
              and more so mentorship.{" "}
            </p>
          </div>

          <div className="name w-[280px] md:w-[579px] md:h-[39px] flex flex-col gap-3">
            <p className={`${poppins.className} text-[16px] font-semibold text-customBlack`}>Name:</p>
            <div className="line w-[280px] md:w-[579px] h-[1px] bg-[#B5B5B5]"></div>
          </div>

          <div className="email w-[280px] md:w-[579px] md:h-[39px] flex flex-col gap-3">
            <p className={`${poppins.className} text-[16px] font-semibold text-customBlack`}>Email:</p>
            <div className="line w-[280px] md:w-[579px] h-[1px] bg-[#B5B5B5]"></div>
          </div>

          <div className="message w-[280px] md:w-[579px] md:h-[39px] flex flex-col gap-3">
            <p className={`${poppins.className} text-[16px] font-semibold text-customBlack`}>Message:</p>
            <div className="line w-[280px] md:w-[579px] h-[1px] bg-[#B5B5B5]"></div>
          </div>

          <button className={`w-[80px] md:w-[101px] h-[30px] md:h-[40px] border-2 border-linear rounded-full ${raleway.className} md:text-[12px] text-[8px] font-semibold text-customBlack mr-[200px] md:mr-[480px] mt-0 md:mt-3`}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
