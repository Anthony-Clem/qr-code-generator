import React from "react";

export default function Circle({ y_position, x_position }) {
  return (
    <div
      className={`bg-[#3685FF] size-[328px] rounded-full absolute -${y_position}-[180px] -${x_position}-[150px]`}
    />
  );
}
