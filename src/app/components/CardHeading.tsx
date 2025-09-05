import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import HorizontalSlider from "./Test";

type Props = {
  price: number;
  views: number;
  toggled: boolean;
  setPrice: Dispatch<SetStateAction<number>>;
  setViews: Dispatch<SetStateAction<number>>;
  dark: boolean;
};

const CardHeading = ({
  price,
  views,
  toggled,
  setPrice,
  setViews,
  dark,
}: Props) => {
  // console.log(toggled, price * 9);
  const [width, setWidth] = useState(1024);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
  }, []);
  return (
    <div className="flex lg:flex-row flex-col justify-around items-center gap-4">
      <div
        className={` font-bold w-40 tracking-widest text-sm ${
          dark ? "text-white" : "text-[hsl(225_20%_60%)]"
        }`}
      >
        {toggled
          ? views * 12 >= 1000
            ? `${(views * 12) / 1000}M PAGEVIEWS`
            : `${views * 12}K PAGEVIEWS`
          : views == 1000
          ? "1M PAGEVIEWS"
          : `${views}K PAGEVIEWS`}
      </div>
      {width < 1024 && (
        <HorizontalSlider setPrice={setPrice} setViews={setViews} />
      )}
      <div className="flex gap-1">
        <div
          className={` min-w-28 text-4xl font-extrabold ${
            dark ? "text-white" : "text-[hsl(227_35%_25%)]"
          }`}
        >
          ${toggled ? price * 9 : price}.00
        </div>
        <div
          className={` font-semibold text-sm flex items-center #7F8791 ${
            dark ? "text-[#7F8791]" : "text-[hsl(225_20%_60%)]"
          }`}
        >
          /
        </div>
        <div className="text-[hsl(225_20%_60%)] font-semibold text-sm flex items-center">
          {toggled ? "year" : "month"}
        </div>
      </div>
    </div>
  );
};

export default CardHeading;
