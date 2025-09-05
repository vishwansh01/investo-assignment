"use client";

import { Dispatch, SetStateAction, useState } from "react";
type Props = {
  setPrice: Dispatch<SetStateAction<number>>;
  setViews: Dispatch<SetStateAction<number>>;
};

export default function HorizontalSlider({ setPrice, setViews }: Props) {
  // const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);
  const [isHolding, setIsHolding] = useState(false);
  const [value, setValue] = useState(20);
  // const [price, setPrice] = useState(8);

  return (
    <div className="w-5/6 lg:w-full max-w-3xl mx-auto flex items-center justify-center">
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => {
          setValue(Number(e.target.value));
          if (Number(e.target.value) >= 0 && Number(e.target.value) <= 20) {
            setPrice(8);
            setViews(10);
          }
          if (Number(e.target.value) > 20 && Number(e.target.value) <= 40) {
            setPrice(12);
            setViews(50);
          }
          if (Number(e.target.value) > 40 && Number(e.target.value) <= 60) {
            setPrice(16);
            setViews(100);
          }
          if (Number(e.target.value) > 60 && Number(e.target.value) <= 80) {
            setPrice(24);
            setViews(500);
          }
          if (Number(e.target.value) > 80) {
            setPrice(36);
            setViews(1000);
          }
        }}
        className={isHolding ? "holding" : ""}
        style={{
          background: `linear-gradient(to right, #a5f3eb  ${value}%, #eaeefb ${value}%)`,
          cursor: isHolding
            ? "url('/cursor-hand-grab.svg') 6 6, grabbing"
            : "url('/hand-pointer.svg') 6 6, pointer",
        }}
        onMouseDown={() => {
          setIsHolding(true);
        }}
        onMouseUp={() => setIsHolding(false)}
        onMouseLeave={() => setIsHolding(false)}
        onTouchStart={() => setIsHolding(true)}
        onTouchEnd={() => setIsHolding(false)}
        aria-label="custom-slider"
      />
    </div>
  );
}
