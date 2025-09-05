import React, { Dispatch, SetStateAction } from "react";
import ToggleButton from "./ToggleButton";
import Discount from "./Discount";

type Props = {
  setToggled: Dispatch<SetStateAction<boolean>>;
  toggled: boolean;
  width: number;
  dark: boolean;
};

const Hero = ({ setToggled, toggled, width, dark }: Props) => {
  return (
    <div className="flex ml-8 lg:ml-0 gap-4 items-center justify-center border-b-[#eaeefb] border-b-1 pb-14">
      <div className="text-[hsl(225_20%_60%)] font-semibold lg:font-bold text-[10px] lg:text-xs">
        Monthly Billing{" "}
      </div>
      <ToggleButton setToggled={setToggled} toggled={toggled} />
      <div className="text-[hsl(225_20%_60%)] font-semibold lg:font-bold text-[10px] lg:text-xs">
        Yearly Billing
      </div>
      <Discount dark={dark} width={width} />
    </div>
  );
};

export default Hero;
