import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({
    subsets: ["latin"],
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: "500",
});

const ResumeSection = () => {
    return (
        <div className="container w-full h-full flex justify-center md:justify-end">
            <div className="w-[350px] md:w-[840px] h-full md:h-[700px] bg-navFont mt-[820px] md:mt-2 md:-mx-7 md:ml-24 rounded-2xl md:pl-[75px] flex flex-col items-center md:items-start">
                <div className="w-[400px] md:w-[496px] h-[60px] flex items-center  justify-evenly md:justify-between mt-5">
                    <h2
                        className={`${poppins.className} font-medium text-[25px] md:text-[40px] text-[#0B0909]`}
                    >
                        Resume
                    </h2>
                    <div className="line w-[132px] md:w-[252px] h-[2px] bg-linear"></div>
                </div>

                <div className="education w-[300px] md:w-[636.23px] md:h-[323.14px]">
                    <div className={`w-[300px] md:w-[563.99px] h-[46.23px] flex gap-12 md:gap-[280px] mt-5`}>
                        <div className="w-[182.98px] h-[47px] flex gap-2 items-center">
                            <Image
                                className="w-[27.74px] h-[27.74px]"
                                src={"/edu-icon.svg"}
                                alt="education icon"
                                width={20}
                                height={20}
                            />
                            <h3
                                className={`${poppins.className} text-[20px] md:text-[27.74px] font-medium  text-customBlack`}
                            >
                                Education
                            </h3>
                        </div>

                        <div className="w-[194.98px] h-[47px] flex gap-2 items-center
                        ">
                            <Image
                                className="w-[27.74px] h-[27.74px]"
                                src={"/work-icon-2.svg"}
                                alt="work"
                                width={20}
                                height={20}
                            />
                            <h3
                                className={`${poppins.className} text-[20px] md:text-[27.74px] font-medium text-customBlack`}
                            >
                                Work
                            </h3>
                        </div>
                    </div>

                    <div className="cardsContainer flex flex-col gap-5 items-center md:grid md:grid-cols-2 md:gap-10 mt-5">
                        <div
                            className={`${raleway.className} w-[288.93px] h-[115.57px] flex flex-col pl-5 justify-center gap-2 bg-[#FFEED9] rounded-xl`}
                        >
                            <p className="text-[13.87px] font-normal text-[#1A1003] text-opacity-50">
                                2024-present
                            </p>
                            <h4 className="text-[13.87px] font-semibold text-customBlack">
                                Web Development
                            </h4>
                            <h4 className="text-[13.87px] font-medium text-customBlack">
                                GIAIC
                            </h4>
                        </div>

                        <div
                            className={`${raleway.className} w-[288.93px] h-[115.57px] flex flex-col pl-5 justify-center gap-2 bg-[#FFEED9] rounded-xl`}
                        >
                            <p className="text-[13.87px] font-normal text-[#1A1003] text-opacity-50">
                                2024-present
                            </p>
                            <h4 className="text-[13.87px] font-semibold text-customBlack">
                                Agentic AI
                            </h4>
                            <h4 className="text-[13.87px] font-medium text-customBlack">
                                Governor's Initiative for AI
                            </h4>
                        </div>

                        <div
                            className={`${raleway.className} w-[288.93px] h-[115.57px] flex flex-col pl-5 justify-center gap-2 bg-[#FFEED9] rounded-xl`}
                        >
                            <p className="text-[13.87px] font-normal text-[#1A1003] text-opacity-50">
                                2020-2021
                            </p>
                            <h4 className="text-[13.87px] font-semibold text-customBlack">
                                Graphics Designing
                            </h4>
                            <h4 className="text-[13.87px] font-medium text-customBlack">
                                APTECH
                            </h4>
                        </div>

                        <div
                            className={`${raleway.className} w-[288.93px] h-[115.57px] flex flex-col pl-5 justify-center gap-2 bg-[#FFE3BF] rounded-xl`}
                        >
                            <p className="text-[13.87px] font-normal text-[#1A1003] text-opacity-50">
                                2015-2016
                            </p>
                            <h4 className="text-[13.87px] font-semibold text-customBlack">
                                ACIT
                            </h4>
                            <h4 className="text-[13.87px] font-medium text-customBlack">
                                Apex Educator
                            </h4>
                        </div>
                    </div>

                    <div className="container flex flex-col w-[300px] md:w-[630px] md:h-[250px] mt-3">
                        <div className="skillsContainer flex flex-col md:flex md:flex-row items-start md:items-center gap-24">
                            <div className="leftSection flex flex-col gap-5 ml-3">
                            <h3
                                className={`${poppins.className} text-customBlack font-medium text-[27.74px] ml-3`}
                            >
                                Work Skills
                            </h3>
                                <div className="flex gap-5">
                                    <p className="w-[59px] h-[32px] bg-iconsBg rounded-lg text-customBlack text-[12px] font-normal flex items-center justify-center">
                                        Next.JS
                                    </p>
                                    <p className="w-[59px] h-[32px] bg-iconsBg rounded-lg text-customBlack text-[12px] font-normal flex items-center justify-center">
                                        React.JS
                                    </p>
                                    <p className="w-[80px] h-[32px] bg-iconsBg rounded-lg text-customBlack text-[12px] font-normal flex items-center justify-center">
                                        TypeScript
                                    </p>
                                </div>

                                <div className="flex justify-between">
                                    <p className="w-[59px] h-[32px] bg-iconsBg rounded-lg text-customBlack text-[12px] font-normal flex items-center justify-center">
                                        CSS3
                                    </p>
                                    <p className="w-[80px] h-[32px] bg-iconsBg rounded-lg text-customBlack text-[12px] font-normal flex items-center justify-center">
                                        Tailwind CSS
                                    </p>
                                    <p className="w-[59px] h-[32px] bg-iconsBg rounded-lg text-customBlack text-[12px] font-normal flex items-center justify-center">
                                        Figma
                                    </p>
                                </div>

                                <div className="flex justify-between">
                                    <p className="w-[60px] h-[32px] bg-iconsBg rounded-lg text-customBlack text-[12px] font-normal flex items-center justify-center">
                                        HTML5
                                    </p>
                                    <p className="w-[70px] h-[32px] bg-iconsBg rounded-lg text-customBlack text-[12px] font-normal flex items-center justify-center">
                                        JavaScript
                                    </p>
                                    <p className="w-[59px] h-[32px] bg-iconsBg rounded-lg text-customBlack text-[12px] font-normal flex items-center justify-center">
                                        Node.JS
                                    </p>
                                </div>

                                <div className="flex justify-between">
                                    <p className="w-[50px] h-[32px] bg-iconsBg rounded-lg text-customBlack text-[12px] font-normal flex items-center justify-center">
                                        GIT
                                    </p>
                                    <p className="w-[70px] h-[32px] bg-iconsBg rounded-lg text-customBlack text-[12px] font-normal flex items-center justify-center">
                                        Github
                                    </p>
                                    <p className="w-[59px] h-[32px] bg-iconsBg rounded-lg text-customBlack text-[12px] font-normal flex items-center justify-center">
                                        Vercel
                                    </p>
                                </div>
                            </div>

                            <div className="rightSection flex flex-col gap-5 -mt-[54px]">
                            <h3
                                className={`${poppins.className} text-customBlack font-medium text-[27.74px] ml-3`}
                            >
                                Soft Skills
                            </h3>
                                <div className="flex gap-5">
                                    <p className="w-[125px] h-[32px] bg-iconsBg rounded-lg text-customBlack text-[12px] font-normal flex items-center justify-center">
                                        Time Management
                                    </p>
                                    <p className="w-[81px] h-[32px] bg-iconsBg rounded-lg text-customBlack text-[12px] font-normal flex items-center justify-center">
                                        Mentorship
                                    </p>
                                </div>

                                <div className="flex gap-5">
                                    <p className="w-[179px] h-[32px] bg-iconsBg rounded-lg text-customBlack text-[12px] font-normal flex items-center justify-center">
                                        Impeccable Communication
                                    </p>
                                    <p className="w-[71px] h-[32px] bg-iconsBg rounded-lg text-customBlack text-[12px] font-normal flex items-center justify-center">
                                        Flexibility
                                    </p>
                                </div>

                                <div className="flex gap-5">
                                    <p className="w-[70px] h-[32px] bg-iconsBg rounded-lg text-customBlack text-[12px] font-normal flex items-center justify-center">
                                        Research
                                    </p>
                                    <p className="w-[58px] h-[32px] bg-iconsBg rounded-lg text-customBlack text-[12px] font-normal flex items-center justify-center">
                                        Research
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeSection;
