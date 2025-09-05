"use client";
import React, { useEffect, useState } from "react";
import CardHeading from "./CardHeading";
// import Slider from "./SlideBar";
// import SlideBar from "./SlideBar";
import HorizontalSlider from "./Test";
import Hero from "./Hero";
import HeroBottom from "./HeroBottom";

const Card = ({ dark }: { dark: boolean }) => {
  const [width, setWidth] = useState(1024);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
  }, []);
  const [price, setPrice] = useState(8);
  const [views, setViews] = useState(10);
  const [toggled, setToggled] = useState(false);
  return (
    <div
      className={` w-screen h-screen absolute top-0 left-0 flex items-end justify-center`}
    >
      <div className={`w-screen h-4/5 flex items-center justify-center`}>
        <div
          className={`w-10/12 h-4/5 lg:w-1/3 lg:h-2/3 flex flex-col justify-evenly shadow-2xl rounded-xl ${
            dark ? "bg-[#080c15]" : "bg-white"
          }`}
        >
          <CardHeading
            price={price}
            views={views}
            toggled={toggled}
            setPrice={setPrice}
            setViews={setViews}
            dark={dark}
          />
          {/* <SlideBar /> */}
          {width >= 1024 && (
            <HorizontalSlider setPrice={setPrice} setViews={setViews} />
          )}
          <Hero
            dark={dark}
            setToggled={setToggled}
            toggled={toggled}
            width={width}
          />
          <HeroBottom dark={dark} />
        </div>
      </div>
    </div>
  );
};

export default Card;
