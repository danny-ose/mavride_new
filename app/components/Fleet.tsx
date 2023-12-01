import React from "react";

const Fleet = () => {
  return (
    <div className=" bg-white w-full h-[517.69rem] overflow-hidden text-left text-[2rem] text-midnightblue-200 font-space-grotesk">
      <div className="absolute top-[196.16rem] left-[calc(50%_-_180px)] w-[22.5rem] flex flex-col items-center justify-start gap-[1.13rem]">
        <b className="relative capitalize">Our fleet</b>
        <div className="self-stretch relative text-[1rem] text-dimgray text-center">
          With our meticulously curated fleet tailored to your specific needs,
          we ensure your journey is comfortable and in style.
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[4rem] text-[1.25rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
            <img
              className="self-stretch relative rounded-2xl max-w-full overflow-hidden h-[15.5rem] shrink-0 object-cover"
              alt=""
              src="/rectangle-5@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
              <b className="self-stretch relative">Ambulatory/Sedan</b>
              <div className="self-stretch relative text-[1rem] text-dimgray">
                Non-emergency medical transport service for clients who have no
                other option of transportation.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
            <img
              className="self-stretch relative rounded-2xl max-w-full overflow-hidden h-[15.5rem] shrink-0 object-cover"
              alt=""
              src="/rectangle-6@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
              <b className="self-stretch relative">Wheel Chair</b>
              <div className="self-stretch relative text-[1rem] text-dimgray">
                Equipped for comfort and ensuring smooth transport for our
                handicapped/disabled clients, with professional, qualified, and
                emotionally intelligent drivers to assist our clients.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
            <img
              className="self-stretch relative rounded-2xl max-w-full overflow-hidden h-[15.5rem] shrink-0 object-cover"
              alt=""
              src="/rectangle-7@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
              <b className="self-stretch relative">Medical Vehicle/Gurney</b>
              <div className="self-stretch relative text-[1rem] text-dimgray">
                Outfitted with the latest in technology, onboard entertainment,
                a professional medical staff, and space for family members, our
                medical van is perfect for longer distances and special care
                needs.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fleet;
