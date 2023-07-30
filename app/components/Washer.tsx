import { washerPosition } from "../interfaces/interfaces";
export function Washer({ x, y }: washerPosition) {
	return (
		<div
			className='flex justify-center items-center'
			style={{ top: y, left: x, position: "absolute" }}
		>
			<div
				className={`absolute w-7 h-7 bg-transparent border-8 box-border rounded-full border-blue-500`}
			></div>
			<div
				className={`absolute w-7 h-7 bg-transparent border-2 box-border rounded-full border-black`}
			></div>
			<div
				className={`absolute w-4 h-4 bg-transparent border-2 box-border rounded-full border-black`}
			></div>
		</div>
	);
}
