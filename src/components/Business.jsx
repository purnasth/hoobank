import React from "react";
import { features } from "../constants";
import Button from "./Button";

const Business = () => {
  return (
    <section className="flex items-center justify-between flex-col md:flex-row gap-40 mt-40">
      <div className="flex items-start justify-start flex-col gap-8">
        <h2 className="font-poppins font-semibold text-[2.75rem] text-white leading-14 w-full leading-relaxed">
          You do the business, <br /> we'll handle the money.
        </h2>
        <p className="text-dimWhite text-xl">
          Money is only a tool. It will take you wherever you wish, but it will
          not replace you as the driver. Money makes your life easier. If you're
          lucky to have it, you're lucky. It is usually people in the money
          business, finance, and international trade that are really rich.
        </p>

        <Button />
      </div>
      <div className="mt-20 flex items-center justify-between flex-col lg:flex-row flex-wrap sm:mb-20 mb-6 gap-10">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className="flex items-center justify-between sm:mb-0 mb-8 sm:mr-0 mr-8 gap-5 uppercase feature-card p-6 rounded-xl"
          >
            <div className="bg-dimBlue p-6 rounded-full">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-14 h-10 object-contain"
              />
            </div>
            <div className="my-4 px-4">
              <h3 className="font-poppins font-normal text-xl text-gradient">
                {feature.title}
              </h3>
              <p className="text-dimWhite mt-3 text capitalize">
                {feature.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Business;
