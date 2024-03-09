import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <button
      className={`${styles.flexCenter} w-28 h-28 rounded-full bg-blue-gradient text-base font-medium font-poppins`}
    >
      Get <br /> Started{" "}
      <img
        src={arrowUp}
        alt="up arrow icon"
        className={`w-8 h-8 object-contain`}
        style={{
          filter:
            "brightness(0) saturate(100%) invert(5%) sepia(36%) saturate(891%) hue-rotate(179deg) brightness(105%) contrast(109%)",
        }}
      />
    </button>
  );
};

export default GetStarted;
