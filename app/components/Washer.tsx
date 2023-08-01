import { washerPositions } from "../interfaces/interfaces";

export function Washer({ x, y, throwNum = 0 }: washerPositions) {
  return (
    <div
      className="flex items-center justify-center"
      style={{ top: y, left: x, position: "absolute" }}
    >
      <div
        className={`absolute box-border h-7 w-7 rounded-full border-8 ${
          throwNum % 2 === 0 ? "border-blue-500" : "border-red-500"
        } bg-transparent`}
      ></div>
      <div
        className={`absolute box-border h-7 w-7 rounded-full border-2 border-black bg-transparent`}
      ></div>
      <div
        className={`absolute box-border h-4 w-4 rounded-full border-2 border-black bg-transparent`}
      ></div>
    </div>
  );
}
