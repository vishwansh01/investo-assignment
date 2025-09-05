"use client";
import React, { Dispatch, SetStateAction } from "react";
// ${
//         toggled ? "justify-end" : ""
type Props = {
  setToggled: Dispatch<SetStateAction<boolean>>;
  toggled: boolean;
};
const ToggleButton = ({ setToggled, toggled }: Props) => {
  // const [toggled, setToggled] = useState(false);
  return (
    <button
      className={`toggleButton relative rounded-full transition-colors duration-300 ease-in-out`}
      onClick={() => {
        setToggled((t) => !t);
      }}
    >
      <div
        className={`absolute top-[3.5px] lg:top-[3px] left-1 w-3 h-3 rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out ${
          toggled ? "translate-x-4" : "translate-x-0"
        }`}
      ></div>
    </button>
  );
};

export default ToggleButton;
