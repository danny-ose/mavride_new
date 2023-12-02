export default function Contact() {
  return (
    <div>
      <div className="text-[32px] font-bold lg:text-[64px] text-center text-midnightblue-200">
        Contact Us
      </div>

      <div className="text-dimgray text-[16px] lg:text-[20px] text-center my-5">
        Ready to schedule your next trip or do you just have questions? Connect
        with us:
      </div>

      {/* <form className="flex relative flex-col w-full lg:w-[500px] mx-auto">
                <input type="text" placeholder="Fullname" className="border border-1 mb-3 p-4 rounded"/>
                <input type="text" placeholder="Email" className="border mb-3 p-4 rounded"/>
                <textarea placeholder="Details of enquiry" rows={10} className="border m-0 mb-3 p-4 rounded"/>
                <div className="bg-mediumblue-100 text-white text-center w-[90%] p-3 mx-auto rounded">
                    Send
                </div>
            </form> */}
      <div className="">
        <div className="text-center">
          <div className="text-[14px] mt-2 text-dimgray font-extralight">
            <span className="font-bold">Email address:</span> info@mavride.net
          </div>
          <div className="text-[14px] mt-2 text-dimgray font-extralight">
            <span className="font-bold">Phone:</span> 281-985-9981
          </div>
          <div className="text-[14px] mt-2 text-dimgray font-extralight">
            <span className="font-bold">Address:</span> 440 Louisiana Str Ste
            900, Houston Texas 77002
          </div>
        </div>
        <form
          method="post"
          action="mailto:info@mavride.net?subject=subject&message=message"
        >
          <button className="block bg-mediumblue-100 mx-auto text-white text-center p-4 px-16 my-5 text-[16px] w-fit rounded ">
            Mail us
          </button>
        </form>
      </div>
    </div>
  );
}
