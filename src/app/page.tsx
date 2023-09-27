"use client";
import { useState } from "react";

import Header from "@/components/header";
import Body from "@/components/body";

export default function Home() {
  const [navVisible, setNavVisible] = useState(true);
  return (
    <main className="flex flex-col h-screen">
      <Header setNavVisible={setNavVisible} />
      <Body navVisible={navVisible} />
    </main>
  );
}
