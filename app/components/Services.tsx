import React from "react";

const Services = () => {
  return (
    <div className="relative bg-white w-full h-[517.69rem] overflow-hidden text-left text-[2rem] text-midnightblue-200 font-space-grotesk">
      <div className="absolute top-[278rem] left-[calc(50%_-_180px)] w-[22.5rem] flex flex-col items-start justify-start gap-[4rem]">
        <div className="self-stretch flex flex-col items-start justify-start">
          <b className="self-stretch relative capitalize">Our Services</b>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] text-[1rem] text-dimgray">
            <div className="self-stretch relative font-medium">
              With technology at the heart of our services, we ensure seamless
              scheduling and real-time updates for every journey. Mavride offers
              a comprehensive range of non-emergency medical transportation
              services, including:
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] text-[0.88rem]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                <div className="self-stretch relative">
                  Medical appointments (doctor visits, chemotherapy, dialysis)
                </div>
                <div className="self-stretch relative">
                  Hospital admissions/discharges
                </div>
                <div className="self-stretch relative">
                  Rehab centre support
                </div>
                <div className="self-stretch relative">
                  Adult care facilities
                </div>
                <div className="self-stretch relative">
                  Bedside-to-bedside accompainment
                </div>
                <div className="self-stretch relative">
                  Interstate medical transport
                </div>
                <div className="self-stretch relative">Pharmacy pick-up</div>
                <div className="self-stretch relative">
                  And all other places our members get Medicaid/Medicare and
                  Private health insurance services.
                </div>
              </div>
              <div className="rounded bg-mediumblue-100 flex flex-row items-center justify-start py-[1rem] px-[4rem] text-[1rem] text-ghostwhite">
                <div className="relative font-medium">Get started</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch relative h-[20.44rem]">
          <img
            className="absolute top-[0rem] left-[0rem] rounded-lg w-[12.12rem] h-[6.78rem] object-cover"
            alt=""
            src="/rectangle-8@2x.png"
          />
          <img
            className="absolute top-[6.93rem] left-[0rem] rounded-lg w-[12.12rem] h-[12.02rem] object-cover"
            alt=""
            src="/rectangle-10@2x.png"
          />
          <img
            className="absolute top-[0rem] left-[12.28rem] rounded-lg w-[10.23rem] h-[10.14rem] object-cover"
            alt=""
            src="/rectangle-9@2x.png"
          />
          <img
            className="absolute top-[10.29rem] left-[12.28rem] rounded-lg w-[10.23rem] h-[10.14rem] object-cover"
            alt=""
            src="/rectangle-11@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
