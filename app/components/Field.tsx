"use client";

import { Cup } from "./Cup";

export function Field({ cupRef }: any) {
  return (
    <div className="relative basis-full border-4 border-black bg-green-800 pt-[25cqh] md:basis-1/4">
      <Cup cupRef={cupRef}></Cup>
    </div>
  );
}
