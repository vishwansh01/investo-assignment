// import Image from "next/image";
"use client";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import { LuMoon, LuSun } from "react-icons/lu";

// import { BgPattern } from "./components/bgPattern";

export default function Home() {
  const [width, setWidth] = useState(1024);
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
  }, []);
  console.log(dark);
  return (
    <div
      className={`h-screen w-screen ${
        dark
          ? "bg-[linear-gradient(to_bottom,hsl(220,65%,5%)_0%,hsl(220,65%,3.52%)_50%,hsl(220,65%,10%)_100%)]"
          : "bg-[hsl(230_100%_99%)]"
      }`}
    >
      {/* <div> */}
      <div
        className={`absolute top-5 right-10 z-10 hover:cursor-pointer w-10 h-10 ${
          dark
            ? "bg-[#090e1f] border-1 border-blue-900"
            : "border-slate-200 border-1 hover:bg-slate-200"
        }  rounded-xl`}
      >
        {dark ? (
          <div
            className="w-full h-full flex items-center justify-center text-white rounded-xl"
            onClick={() => setDark(false)}
          >
            <LuSun />
          </div>
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            onClick={() => setDark(true)}
          >
            <LuMoon />
          </div>
        )}
      </div>
      <div
        className={`${
          !dark && "bg-[url(/bg-pattern.svg)]"
        }  relative top-0 left-0 h-[37%] lg:h-[57%] bg-[length:100%_100%] bg-no-repeat`}
      >
        <div className="w-full h-3/5 items-center gap-4 justify-center flex flex-col">
          <div className="flex h-3/5 gap-4 items-center justify-center flex-col bg-[url(/pattern-circles.svg)] bg-contain bg-no-repeat bg-center">
            <div
              className={`flex w-fit items-center text-center justify-center font-extrabold text-xl lg:text-3xl ${
                dark
                  ? "bg-gradient-to-r from-blue-600 to-white text-transparent bg-clip-text"
                  : "text-[hsl(227_35%_25%)]"
              }`}
            >
              Simple, traffic-based pricing
            </div>
            <div
              className={`${
                dark ? "text-white" : "text-[hsl(225_20%_60%)]"
              } text-sm lg:text-base flex w-fit justify-center font-medium lg:font-semibold`}
            >
              Sign-up for our 30-day trial.{width < 1024 && <br />} No credit
              card required.
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div>
        <Card dark={dark} />
      </div>
    </div>
  );
}
