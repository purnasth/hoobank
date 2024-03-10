import React from "react";
import styles from "../style";
import { stats } from "../constants";

const Stats = () => {
  return (
    <>
      <section
        className={`flex items-center justify-between flex-col lg:flex-row flex-wrap sm:mb-20 mb-6 gap-10`}
      >
        {stats.map((stat, index) => (
          <div
            key={stat.id}
            className={`flex items-center justify-between sm:mb-0 mb-8 sm:mr-0 mr-8 gap-5 uppercase`}
          >
            <h3 className="font-poppins font-bold text-5xl text-white">
              {stat.value}
            </h3>
            <p className="font-poppins font-normal text-xl text-gradient">
              {stat.title}
            </p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Stats;
