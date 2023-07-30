"use client";
import { Field } from "./Field";
import { Washer } from "./Washer";
import { useState } from "react";
import { washerPosition } from "../interfaces/interfaces";

export function Game() {
	const [washerPositions, setWasherPositions] = useState<washerPosition[]>([]);

	const clickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const pos = { x: e.clientX - 16, y: e.clientY - 16 };
		setWasherPositions((p) => [...p, pos]);
	};

	return (
		<div
			className='flex min-w-full min-h-full justify-center border-4 border-blue-500'
			onClick={clickHandler}
		>
			<Field></Field>
			{washerPositions.map((washerPosition) => {
				return (
					<Washer
						key={washerPosition.x}
						x={washerPosition.x}
						y={washerPosition.y}
					></Washer>
				);
			})}
		</div>
	);
}
