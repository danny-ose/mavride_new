export default function Vetted() {
    return (
        <div className="">
            <div className="text-[32px] text-midnightblue-200 font-bold text-center lg:text-[64px]">We’re vetted and trusted</div>
            <div className="text-dimgray text-[16px] my-5 text-center lg:text-[20px]">
            At Mavride we are committed to ensuring that we not only provide transportation but are qualified to operate in the industry having obtained every required license from our private, local, state, and federal partners. We have also been vetted at the highest security level in the country and have been approved to provide Non-Emergency Medical Transport to every resident in this country who needs our services.
            </div>
            <div>
                <img src="/vetted-mob.png" className="w-full sm:hidden" alt="" />
                <img src="/vetted.png" className="w-full hidden sm:block" alt="" />
            </div>
        </div>
    )
}