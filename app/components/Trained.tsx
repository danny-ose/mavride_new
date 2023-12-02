import React from "react";

const Trained = () => {
  return (
    <div className="flex flex-col justify-between sm:flex-row gap-10 sm:gap-32">
      <div className="md:w-[800px]">
        <h3 className="capitalize m-0 text-[32px] lg:text-[64px] text-midnightblue-200 mb-5">
          Trained and Certified
        </h3>
        <div className="text-dimgray mb-5 lg:text-[20px]">
          Driven by excellence, we support our team with top-tier training
          resources:
        </div>
        <div className="">
          <div className="">
            <div className="text-[14px] mt-2 text-dimgray font-extralight">
            <span className="font-bold">Driver training:</span> Comprehensive course for driver training and
              safety. ctaa.org/pass-online
            </div>
            <div className="text-[14px] mt-2 text-dimgray font-extralight">
              <span className="font-bold">CPR/First aid:</span> Certification for emergency readiness,
              redcross.org/take-a-class{" "}
            </div>
            <div className="text-[14px] mt-2 text-dimgray font-extralight">
              <span className="font-bold">Defensive driving:</span> Skills development for accident prevention.
              nsc.org{" "}
            </div>
            <div className="text-[14px] mt-2 text-dimgray font-extralight">
              Drug, alcohol, and background check: It is of extreme importance
              to us at Mavride to ensure the trustworthiness and professionalism
              of our staff before employment and randomly while still employed
              with us. occusscreen.com, c-dat.net{" "}
            </div>
          </div>
          <div className="bg-mediumblue-100 text-white text-center p-4 px-16 my-5 text-[16px] w-fit rounded ">
            Get Started
          </div>
        </div>
      </div>

      <div className="mt-5 sm:mt-0">
        <img className="w-full sm:min-w-[400px]" alt="" src="/trained.png" />
      </div>
    </div>
  );
};

export default Trained;
