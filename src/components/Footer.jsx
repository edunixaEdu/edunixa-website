import React from "react";

function Footer() {
  return (
    <div className="flex h-max w-full flex-col items-center justify-evenly md:flex-row pb-10">
      <div className="flex   h-60 w-80 flex-row justify-between md:w-72 ">
        <div className="mx-2 flex flex-col justify-around text-white">
          <div className="flex items-center gap-x-2">
            <img
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
              className="h-16 w-16 "
            />
            <h1 className="text-xl font-bold">Skolar</h1>
          </div>
          <div className="flex flex-col gap-y-2">
            <div>Top-notch learning quality. Promised.</div>
            <div>
              Skolar ensures an exceptional standard of learning, all backed by
              mentors that have once filled the shoes you are now in.
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-60 w-80 flex-col items-center md:w-72 ">
        <div className=" mx-2 my-4 flex h-60 w-80 flex-col justify-between text-white md:w-72 ">
          <h1 className="text-xl font-bold">Company</h1>
          <p className=" text-slate-400 font-light">Terms & condition</p>
          <p className=" text-slate-400 font-light">Privacy policy</p>
          <p className=" text-slate-400 font-light">Refund policy</p>
          <p className=" text-slate-400 font-light">Help center</p>
          <p className=" text-slate-400 font-light">Blog</p>
          <p className=" text-slate-400 font-light">FAQS</p>
        </div>
      </div>
      <div className="flex h-60 w-80 flex-col items-center justify-evenly text-white md:w-72">
        <div className="mx-2 flex w-80 flex-col gap-y-2 md:w-72">
          <h1 className="text-xl font-bold">Address</h1>
          <p>
            112, BHIVE workspace B Block, AKR Tech Park, GB Palya Bangalore
            560068
          </p>
        </div>
        <div className="mx-2 flex w-80 flex-col gap-y-2 md:w-72">
          <h1 className="text-xl font-bold">Contact Us</h1>
          <div>
            <p className=" font-light">support@skolar.in</p>
            <p className=" font-light">+91 8105036846</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
