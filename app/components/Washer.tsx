import { washerPosition } from "../interfaces/interfaces";
export function Washer({ x, y }: washerPosition) {
	return (
		<>
			<div
				className={`w-8 h-8 items-center justify-center bg-transparent border-8 box-border rounded-full border-blue-500`}
				style={{ top: y, left: x, position: "absolute" }}
			></div>
		</>
	);
}
