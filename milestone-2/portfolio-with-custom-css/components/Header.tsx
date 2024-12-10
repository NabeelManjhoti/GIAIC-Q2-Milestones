import { IoMoonOutline } from "react-icons/io5";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin-ext"],
  weight: "400",
});

const Header = () => {
  return (
    <div className="haider-container">
      <h1
        className={`${pacifico.className} text-[24px] font-normal text-customBlack`}
      >
        Nabeel <span className="text-linear ml-1">Ali</span>
      </h1>
      <div className="flex items-center justify-center h-[56px] w-[56px] rounded-full bg-background shadow-md">
        <IoMoonOutline className="h-[19.12px] w-[19.12px] cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
