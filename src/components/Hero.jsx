import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-2 px-4 bg-discount-gradient rounded-xl mb-2">
          <p
            className={`flex items-center gap-2 ${styles.paragraph} uppercase`}
          >
            <img
              src={discount}
              alt="Discount"
              className="w-8 h-8 object-contain"
            />
            <span className="text-white">20%</span> Discount for{" "}
            <span className="text-white"> 1 month </span> account
          </p>
        </div>

        <div className="flex">
          <h2
            className={`font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full`}
          >
            The Next <br /> <span className="text-gradient">Generation</span>{" "}
            <br /> Payment Method.
          </h2>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <p
          className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]`}
        >
          We provide the best way to learn new things, with our courses you can
          learn new things easily and quickly.
        </p>
      </div>

      <div className="flex-1 flex justify-center items-center md:mt-0 mt-10 relative">
        <img src={robot} alt="Robot" className="w-full object-contain" />

        <div className="absolute top-0 z-[0] w-2/5 h-1/3 pink__gradient" />
        <div className="absolute bottom-40 z-[1] w-3/4 h-3/4 white__gradient" />
        <div className="absolute bottom-20 right-20 z-[0] w-1/2 h-1/2 blue__gradient" />
      </div>

      <div className="ss:hidden flex mx-auto mt-10">
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
