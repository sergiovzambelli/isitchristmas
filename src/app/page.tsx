"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [showNo, setShowNo] = useState(false);
  const [isChristmas, setIsChristmas] = useState(false);

  const handleClick = () => {
    setShowNo(true);
  };

  const setChristmas = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;

    if (day === 25 && month === 12) {
      setIsChristmas(true);
    }
  }

  useEffect(() => {
    setChristmas();
  }, [showNo]);

  return (
    <main className="relative min-h-dvh h-dvh flex flex-col justify-center items-center">
      <div className="relative z-10">
        {!showNo && (
          <button
            onClick={handleClick}
            className="p-4 border-black border-2 rounded-xl text-xl xl:text-2xl"
          >
            Is it Christmas?
          </button>
        )}
        {showNo ? isChristmas ? (
          <div className="flex flex-col gap-2">
            <div className="text-9xl mt-4 font-bold">SI</div>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <div className="text-9xl mt-4 font-bold">NO</div>
            <button
              className="underline text-m"
              onClick={() => setShowNo(false)}
            >
              Maybe it has changed...
            </button>
          </div>
        ) : null}
      </div>
    </main>
  );
}
