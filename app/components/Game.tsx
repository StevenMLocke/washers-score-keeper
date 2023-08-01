"use client";
import { Field } from "./Field";
import { Washer } from "./Washer";
import React, { useState, useRef, useMemo, useEffect } from "react";
import { washerPositions } from "../interfaces/interfaces";

export function Game() {
  const [washerPositions, setwasherPositions] = useState<washerPositions[]>([]);

  const cupRef = useRef<HTMLDivElement>(null);

  const cupCenter = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cupDims = cupRef.current?.getBoundingClientRect();
    console.log(cupDims);
    cupCenter.current.x =
      Math.round((cupDims.left + cupDims?.width / 2) * 1000) / 1000;
    cupCenter.current.y =
      Math.round((cupDims.top + cupDims?.height / 2) * 1000) / 1000;
  }, [cupRef]);

  const clickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const pos = {
      x: e.clientX,
      y: e.clientY,
      distanceToCenter:
        Math.round(
          Math.hypot(
            e.clientX - cupCenter.current.x,
            e.clientY - cupCenter.current.y,
          ) * 1000,
        ) / 1000,
    };
    setwasherPositions((p) => [...p, pos]);
  };

  const clearHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setwasherPositions([]);
  };

  return (
    <>
      <div
        className="@container flex min-h-full min-w-full justify-center border-4 border-blue-500"
        onClick={clickHandler}
      >
        <div className="w-1/3 border-2 border-red-600">
          <pre>{JSON.stringify(cupCenter, null, 2)}</pre>
          <pre>{JSON.stringify(washerPositions, null, 2)}</pre>
        </div>
        <Field cupRef={cupRef}></Field>

        {washerPositions.map((washerProp, i) => {
          return (
            <Washer
              key={i}
              x={washerProp.x}
              y={washerProp.y}
              throwNum={i}
              distanceToCenter={washerProp.distanceToCenter}
            ></Washer>
          );
        })}
      </div>
      <button className="btn btn-outline" onClick={clearHandler}>
        Clear
      </button>
    </>
  );
}
