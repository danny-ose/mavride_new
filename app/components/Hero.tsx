import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="">
      <div className="">
        <h1 className="text-midnightblue-100 lg:text-[64px] lg:text-center m-0">
          Your Journey To Wellness
        </h1>
        <p className="text-[14px] lg:text-[20px] lg:text-center text-dimgray">
          Welcome to Mavride, your trusted partner in Non-Emergency Medical
          Transport (NEMT). Powered by cutting-edge technology and a steadfast
          commitment to providing safe, secure, and stylish transportation
          services, we ensure you arrive on time for your healthcare
          appointments. Experience the ease and peace of mind that comes with
          scheduling a ride through Mavride with a guaranteed promise of care.
        </p>
      </div>
      <img className="mt-4 md:hidden w-full" alt="" src="/rectangle-4@2x.png" />
      <img className="mt-4 w-full hidden md:inline" alt="" src="/rectangle_full.png" />
    </div>
  );
};

export default Hero;
