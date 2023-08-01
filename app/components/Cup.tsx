"use client";

export function Cup({ cupRef }: any) {
  return (
    <div
      ref={cupRef}
      className="mx-auto h-12 w-12 rounded-full border-4 border-white bg-black"
    ></div>
  );
}
