"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [showNo, setShowNo] = useState(false);

  const handleClick = () => {
    setShowNo(true);
  };

  return (
    <main className="relative min-h-dvh h-dvh flex flex-col justify-center items-center">
      {/* <Image
        src="/bg.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
      /> */}
      <div className="relative z-10">
        {!showNo && (
          <button
            onClick={handleClick}
            className="p-4 border border-black border-2 rounded-xl"
          >
            Is it Christmas???
          </button>
        )}
        {showNo && (
          <div className="flex flex-col gap-2">
            <div className="text-9xl mt-4 font-bold">NO</div>
            <button className="underline text-sm" onClick={() => setShowNo(false)}>Maybe it has changed...</button>
          </div>
        )}
      </div>
    </main>
  );
}