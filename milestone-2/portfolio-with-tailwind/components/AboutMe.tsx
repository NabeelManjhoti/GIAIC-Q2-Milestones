import React from "react";
import { Poppins } from "next/font/google";
import { Raleway } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

const raleway = Raleway({
  subsets: ["latin"],
});

const AboutMe = () => {
  return (
    <div className="container w-full h-full flex justify-center md:justify-end">
      <div className="w-[350px] md:w-[840px] h-full md:pt-[25px] bg-navFont mt-[840px] md:mt-2 md:-mx-7 md:ml-24 rounded-2xl md:pl-[75px] flex flex-col items-center md:items-start">
        <div className="w-[400px] md:w-[496px] h-[60px] flex items-center  justify-evenly md:justify-between mt-5">
          <h2
            className={`${poppins.className} font-medium text-[25px] md:text-[40px] text-[#0B0909]`}
          >
            ABOUT ME
          </h2>
          <div className="line w-[132px] md:w-[252px] h-[2px] bg-linear"></div>
        </div>

        <p
          className={`w-[320px] md:w-[674px] h-[120px] text-customBlack ${raleway.className} text-[12px] md:text-[16px] font-medium mt-1 md:mt-3`}
        >
          Hello there! I'm thrilled to welcome you to my portfolio. I am a
          passionate and versatile NextJS developer with a keen interest in
          exploring the latest cutting-edge technologies. My journey in the
          world of web development has been nothing short of exhilarating, and I
          constantly strive to enhance my skills and embrace emerging trends in
          the industry.
        </p>

        <h3
          className={`${poppins.className} font-medium text-[25px] md:text-[32px] text-customBlack mt-3 md:mt-0`}
        >
          What I do!
        </h3>

        <div className="card-container flex flex-col items-center mt-3 md:mt-5 md:grid md:grid-cols-2 gap-5 md:gap-12 md:pb-1">
          <div
            className={`w-[333px] h-[169px] bg-pink rounded-3xl flex flex-col pl-5 pt-3`}
          >
            <div className="w-[260px] h-[24px] flex items-center gap-3">
              <Image
                src={"/code-icon.svg"}
                alt="code icon"
                width={24}
                height={24}
              />
              <h3
                className={`${poppins.className} text-[24px] font-semibold text-customBlack`}
              >
                Web Development
              </h3>
            </div>
            <p
              className={`${raleway.className} text-[14px] font-normal w-[283px]`}
            >
              As a developer, I find myself most captivated by the power and
              flexibility of NEXT.js. I'm always eager to dive into new projects
              that leverage NEXT.js and discover innovative ways to create fast,
              scalable, and user-friendly applications.
            </p>
          </div>

          <div
            className={`w-[333px] h-[169px] bg-customWhite rounded-3xl flex flex-col pl-5 pt-3`}
          >
            <div className="w-[260px] h-[24px] flex items-center gap-3">
              <Image
                src={"/app-icon.svg"}
                alt="app icon"
                width={24}
                height={24}
              />
              <h3
                className={`${poppins.className} text-[24px] font-semibold text-customBlack`}
              >
                App Development
              </h3>
            </div>
            <p
              className={`${raleway.className} text-[14px] font-normal w-[283px]`}
            >
              With a focus on user-centric design and cutting-edge technologies,
              I thrive on building intuitive and efficient apps that make a
              positive impact on people's lives. Let's turn ideas into reality
              and shape the future together.
            </p>
          </div>

          <div
            className={`w-[333px] h-[169px] bg-customWhite rounded-3xl flex flex-col pl-5 pt-3`}
          >
            <div className="w-[260px] h-[24px] flex items-center gap-3">
              <Image
                src={"/ux-icon.svg"}
                alt="ux icon"
                width={24}
                height={24}
              />
              <h3
                className={`${poppins.className} text-[24px] font-semibold text-customBlack`}
              >
                UI/UX Designing
              </h3>
            </div>
            <p
              className={`${raleway.className} text-[14px] font-normal w-[283px] mt-3`}
            >
              Crafting visually appealing and intuitive user interfaces that
              offer a delightful user experience is something I'm truly fanatic
              about.
            </p>
          </div>

          <div
            className={`w-[333px] h-[169px] bg-pink rounded-3xl flex flex-col pl-5 pt-3`}
          >
            <div className="w-[260px] h-[24px] flex items-center gap-3">
              <Image
                src={"/mentor-icon.svg"}
                alt="code icon"
                width={30}
                height={24}
              />
              <h3
                className={`${poppins.className} text-[24px] font-semibold text-customBlack`}
              >
                Mentorship
              </h3>
            </div>
            <p
              className={`${raleway.className} text-[14px] font-normal w-[283px] mt-3`}
            >
              I have also found great joy in sharing my knowledge with others.
              Being a technical mentor allows me to give back to the community
              that has supported me throughout my career.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
