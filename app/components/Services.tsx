import React from "react";

const Services = () => {
  return (
    <div className="flex flex-col justify-between sm:flex-row gap-10">
      <div className="">
        <h3 className="capitalize m-0 text-[32px] text-midnightblue-200 mb-5 lg:text-[64px]">
          Our Services
        </h3>
        <div className="text-dimgray mb-5 lg:text-[20px]">
          With technology at the heart of our services, we ensure seamless
          scheduling and real-time updates for every journey. Mavride offers a
          comprehensive range of non-emergency medical transportation services,
          including:
        </div>
        <div className="">
          <div className="">
            <div className="text-[14px] mt-2 text-dimgray font-extralight">
              Medical appointments (doctor visits, chemotherapy, dialysis)
            </div>
            <div className="text-[14px] mt-2 text-dimgray font-extralight">
              Hospital admissions/discharges
            </div>
            <div className="text-[14px] mt-2 text-dimgray font-extralight">
              Rehab centre support
            </div>
            <div className="text-[14px] mt-2 text-dimgray font-extralight">
              Adult care facilities
            </div>
            <div className="text-[14px] mt-2 text-dimgray font-extralight">
              Bedside-to-bedside accompainment
            </div>
            <div className="text-[14px] mt-2 text-dimgray font-extralight">
              Interstate medical transport
            </div>
            <div className="text-[14px] mt-2 text-dimgray font-extralight">
              Pharmacy pick-up
            </div>
            <div className="text-[14px] mt-2 text-dimgray font-extralight">
              And all other places our members get Medicaid/Medicare and Private
              health insurance services.
            </div>
          </div>
          <div className="bg-mediumblue-100 text-white text-center p-4 px-16 my-5 text-[16px] w-fit rounded ">
            Get Started
          </div>
        </div>
      </div>

      <div className="mt-5 sm:mt-0">
          <img className="w-full sm:min-w-[400px]" alt="" src="/services.png" />
        </div>
    </div>
  );
};

export default Services;
