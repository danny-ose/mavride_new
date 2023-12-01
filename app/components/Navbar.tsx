import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="relative bg-white w-full h-[517.69rem] overflow-hidden text-left text-[2rem] text-midnightblue-200 font-space-grotesk">
      <div className="absolute top-[1rem] left-[1.88rem] rounded-2xl box-border w-[22.5rem] flex flex-row items-center justify-between border-[1px] border-solid border-darkblue">
        <div className="rounded-tl-2xl rounded-tr-none rounded-br-none rounded-bl-2xl bg-mediumblue-200 flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.69rem]">
          <Image
            className="relative rounded-md w-[1.25rem] h-[1.31rem]"
            alt=""
            src="/vector.svg"
            width={20}
            height={21}
          />
          <Image
            className="relative w-[4.13rem] h-[1.13rem]"
            alt=""
            src="/mavride.svg"
            width={66}
            height={18}
          />
        </div>
        <div className="rounded-tl-none rounded-tr-2xl rounded-br-2xl rounded-bl-none bg-mediumblue-100 flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
          <Image
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/grid.svg"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
