import React from "react";

const Discount = ({ width, dark }: { width: number; dark: boolean }) => {
  return (
    <div
      className={` text-[10px] font-bold  w-fit px-1.5 py-0.5 flex items-center justify-center rounded-2xl ${
        dark
          ? "text-white bg-[#004be0]"
          : "text-[hsl(15_100%_70%)] bg-[hsl(14_92%_95%)]"
      }`}
    >
      {width > 1024 ? "25% discount" : "-25%"}
    </div>
  );
};

export default Discount;
