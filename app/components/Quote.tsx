export default function Quote() {
  return (
    <div className="bg-[#F3F4FD] px-[15px] md:px-[30px] lg:py-[60px] py-10">
      <div className="md:max-w-[600px] mx-auto">
        <div className="text-[32px] font-bold text-center text-midnightblue-200">
          Request a quote{" "}
        </div>

        <div className="text-dimgray text-[16px] text-center my-5">
          Need an estimate for your transport needs? Simply fill out a quote
          request and we’ll handle the rest.
        </div>

        <div className="bg-mediumblue-100 text-white text-center w-fit p-3 mx-auto rounded px-10">
          Sign me up
        </div>
      </div>
    </div>
  );
}
