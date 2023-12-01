import Image from "next/image";
import React from "react";
import Button from "./Button";

const About = () => {
  return (
    <div>
      <div className="bg-midnightblue-200 text-white p-4 rounded-13xl md:w-full md:flex">
        <div className="">
          <h1 className="text-[32px] font-bold">About Us</h1>
          <p className="text-base md:w-[65%]">
            We don't just transport you to your appointments; we are a part of
            your health journey. Our mission, vision, and values reflect our
            dedication:
          </p>

          <Button
            className="text-mediumblue-100 bg-ghostwhite font-bold md:mt-20"
            type="button"
            title="Book a ride"
          />
        </div>

        <div>
          <img src="image-14@2x.png" alt="" className="w-full mt-6" />
        </div>
      </div>

      <div>
        <img src="safety.svg" alt="" className="mt-5" />
        <h2 className="text-midnightblue-200">Mission</h2>
        <p>
          "To provide reliable, compassionate, and accessible transportation
          services, enriching the lives of our members with safe, timely, and
          comfortable journeys."
        </p>
      </div>
    </div>
  );
};

export default About;
