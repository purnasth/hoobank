import React from "react";
import { apple, bill, google } from "../assets";

const Billing = () => {
  return (
    <>
      <section id="product" className="relative my-20">
        <div className="flex items-center justify-between gap-10">
          <div className="flex">
            <img
              src={bill}
              alt="Billing"
              className="w-full h-full relative z-10"
            />
            <div className="absolute z-[3] -left-2/3 top-0 w-1/2 h-1/2 rounded-full white__gradient" />
            <div className="absolute z-[0] -left-1/2 bottom-0 w-1/2 h-1/2 rounded-full pink__gradient" />
          </div>

          <div className="flex flex-col w-full md:w-3/4">
            <h3 className="font-poppins font-semibold text-[2.75rem] text-white leading-14 leading-relaxed">
              Easily control your <br /> billing & invoicing.
            </h3>

            <p className="text-dimWhite text-xl my-10">
              Money is only a tool. It will take you wherever you wish, but it
              will not replace you as the driver. Money makes your life easier.
              If you're lucky to have it, you're lucky. It is usually people in
              the money business, finance, and international trade that are
              really rich.
            </p>
            <div className="flex flex-row flex-wrap gap-10">
              <img
                src={apple}
                alt="apple"
                className="w-48 h-auto object-contain cursor-pointer"
              />
              <img
                src={google}
                alt="google"
                className="w-48 h-auto object-contain cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Billing;
