"use client";

import { ReactNode, useState } from "react";
import Header from "@/components/header";
import NavBar from "@/components/navbar";
import clsx from "clsx";

const homeLayout = ({ children }: { children: ReactNode }) => {
  const [navVisible, setNavVisible] = useState(true);
  return (
    <div className="overflow-hidden">
      <Header setNavVisible={setNavVisible} />
      <div className="flex w-full h-full">
        <NavBar navVisible={navVisible} />
        <div
          className={clsx(
            "transition-all duration-300",
            navVisible ? "md:ml-[300px]" : "ml-0"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default homeLayout;
