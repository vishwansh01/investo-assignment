import Image from "next/image";
import React from "react";

const ListComp = () => {
  return (
    <div className="flex flex-col items-center lg:items-baseline justify-center gap-2">
      <div className="flex gap-3 items-center justify-center text-[12px] font-semibold tracking-wide text-[hsl(225_20%_60%)] ">
        <Image src={"/icon-check.svg"} height={10} width={10} alt="tick" />
        <div>Unlimited websites</div>
      </div>
      <div className="flex gap-3 items-center justify-center text-[12px] font-semibold tracking-wide text-[hsl(225_20%_60%)] ">
        <Image src={"/icon-check.svg"} height={10} width={10} alt="tick" />
        <div>100% data ownership</div>
      </div>
      <div className="flex gap-3 items-center justify-center text-[12px] font-semibold tracking-wide text-[hsl(225_20%_60%)] ">
        <Image src={"/icon-check.svg"} height={10} width={10} alt="tick" />
        <div>Email reports</div>
      </div>
    </div>
  );
};

export default ListComp;
