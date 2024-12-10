import Image from "next/image";
import React from "react";
import { Raleway } from "next/font/google";
import { LuDownload } from "react-icons/lu";

const raleway = Raleway({ subsets: ["latin"] });

const Details = () => {
  return (
    <div className="h-[800px] w-[350px] md:w-[400px] ml-[37px] md:ml-[56px] flex items-end absolute md:mt-2 mt-32 mr-2 md:mr-0">
      <div className="flex flex-col items-center h-[700px] w-[350px] md:w-[400px] bg-navFont rounded-2xl">
        <Image
          className="rounded-3xl absolute -mt-[100px]"
          src={"/profile-picture.svg"}
          alt="profile picture"
          height={200}
          width={200}
        />
        <h2
          className={`${raleway.className} font-bold text-[#0B0909] text-[28.42px] z-50 mt-28`}
        >
          Nabeel Ali
        </h2>
        <h3
          className={`${raleway.className} font-medium text-[16px] mt-2 text-silver`}
        >
          NextJS Developer
        </h3>
        <ul className="w-[296px] h-[61.66px] mt-5 flex items-center justify-between">
          <li className="w-[60.03px] h-[61.19px] bg-customWhite rounded-lg flex items-center justify-center">
            <a target="blank" href="https://www.facebook.com/devnabeelali">
              <Image
                src={"/fb-icon.svg"}
                alt="facebook icon"
                height={19.84}
                width={10.42}
              />
            </a>
          </li>

          <li className="w-[60.03px] h-[61.19px] bg-customWhite rounded-lg flex items-center justify-center">
            <a
              target="blank"
              href="https://www.linkedin.com/in/nabeel-ali-329541291/"
            >
              <Image
                src={"/linkedin-icon.svg"}
                alt="linkedin icon"
                height={15.76}
                width={14.88}
              />
            </a>
          </li>

          <li className="w-[60.03px] h-[61.19px] bg-customWhite rounded-lg flex items-center justify-center">
            <a href="#">
              <Image
                src={"/twitter-icon.svg"}
                alt="twitter icon"
                height={16.85}
                width={13.7}
              />
            </a>
          </li>

          <li className="w-[60.03px] h-[61.19px] bg-customWhite rounded-lg flex items-center justify-center">
            <a target="blank" href="https://github.com/NabeelManjhoti">
              <Image
                src={"/github-icon.svg"}
                alt="github icon"
                height={16.54}
                width={16.13}
              />
            </a>
          </li>
        </ul>

        <div className="w-[350px] h-[350px] md:bg-background mt-6 rounded-xl flex flex-col items-center">
          <div className="phone w-[256px] h-[63px] flex items-center gap-10 mt-3">
            <Image
              src={"/phone-icon.svg"}
              alt="phone icon"
              width={12}
              height={20}
            />
            <div
              className={`${raleway.className} text-[14px] font-semibold w-[101px] h-[45px]`}
            >
              <p className="text-silver">Phone</p>
              <p>+923338538388</p>
            </div>
          </div>
          <div className="line flex flex-col justify-end w-[256px] h-[1px] bg-lineBg mt-3 mr-10"></div>

          <div className="email w-[256px] h-[63px] flex items-center gap-10 mt-3">
            <Image
              src={"/email-icon.svg"}
              alt="email icon"
              width={20}
              height={19.36}
            />
            <div
              className={`${raleway.className} text-[14px] font-semibold w-[101px] h-[45px] -ml-2`}
            >
              <p className="text-silver">Email</p>
              <p>nabeelalimanjhoti@gmail.com</p>
            </div>
          </div>
          <div className="line flex flex-col justify-end w-[256px] h-[1px] bg-lineBg mt-3 mr-10"></div>

          <div className="location w-[256px] h-[63px] flex items-center gap-10 mt-3">
            <Image
              src={"/location-icon.svg"}
              alt="location icon"
              width={23.5}
              height={23.5}
            />
            <div
              className={`${raleway.className} text-[14px] font-semibold w-[200px] h-[45px] -ml-3`}
            >
              <p className="text-silver">Location</p>
              <p>Karachi, Pakistan</p>
            </div>
          </div>
          <div className="line flex flex-col justify-end w-[256px] h-[1px] bg-lineBg mt-3 mr-10"></div>

          <button
            className={`w-[185px] h-[44px] bg-linear mt-5 rounded-3xl flex items-center justify-center gap-2 text-customWhite ${raleway.className} font-semibold text-[12px]`}
          >
            <LuDownload className="h-[16px] w-[16px]" />
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
