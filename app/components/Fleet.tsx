import clsx from "clsx";
import React from "react";

const Fleet = () => {
  return (
    <div className="w-full">
      <div className="">
        <h1 className="text-center text-midnightblue-200 lg:text-[64px] m-0">Our fleet</h1>
        <div className="text-[16px] text-center text-[#4D506C] mb-10 lg:text-[20px]">
          With our meticulously curated fleet tailored to your specific needs,
          we ensure your journey is comfortable and in style.
        </div>
        <div className="flex relative flex-col md:flex-row gap-10 w-full justify-between">
          <Card
            title={"Ambulatory/Sedan"}
            desc="Non-emergency medical transport service for clients who have no other
            option of transportation."
            image="fleet-1"
          />
          <Card
            title={"Wheel Chair"}
            desc="Equipped for comfort and ensuring smooth transport for our handicapped/disabled clients, with professional, qualified, and emotionally intelligent drivers to assist our clients."
            image="fleet-2"
          />
          <Card
            title={"Medical Vehicle/Gurney"}
            desc="Outfitted with the latest in technology, onboard entertainment, a professional medical staff, and space for family members, our medical van is perfect for longer distances and special care needs."
            image="fleet-3"
          />
        </div>
      </div>
    </div>
  );
};

function Card({
  title,
  desc,
  image,
}: {
  title: string;
  desc: string;
  image: string;
}) {
  return (
    <div className="flex flex-col flex-1 w-full relative">
      <img src={`/${image}.png`} className="hidden lg:block w-full" alt="" />
      <img src={`/${image}-mob.png`} className="w-full lg:hidden" alt="" />
      <div>
        <h3 className="text-[20px] my-3 text-midnightblue-200">{title}</h3>
        <p className="text-[16px] text-[#4D506C] m-0">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default Fleet;
