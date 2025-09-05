import React from "react";
import ListComp from "./List";

const HeroBottom = ({ dark }: { dark: boolean }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-around gap-4">
      <ListComp />
      <button
        className={`${
          dark
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : "hover:text-white text-[hsl(226_100%_87%)] bg-[hsl(227_35%_25%)]"
        } hover:cursor-pointer p-3 tracking-wide px-8 rounded-3xl text-xs font-bold`}
      >
        Start my trial
      </button>
    </div>
  );
};

export default HeroBottom;
