"use client";
import { useState } from "react";
import NavBar from "@/components/navbar";
import Main from "@/components/main";
import clsx from "clsx";

const Body = () => {
  const [navVisible, setNavVisible] = useState(true);
  return (
    <div className="flex h-full">
      <div className="flex w-full">
        <NavBar navVisible={navVisible} setNavVisible={setNavVisible} />
        <Main navVisible={navVisible} setNavVisible={setNavVisible} />
      </div>
    </div>
  );
};

export default Body;
