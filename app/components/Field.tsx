"use client"
import { Cup } from "./Cup"
import { Washer } from "./Washer"
import { useState } from "react"
export function Field() { 
	const [mousePos, setMousePos] = useState({x:0,y:0})
	
	const clickHandler = function (e: MouseEvent) {
console.log(e)
		setMousePos({ x: e.clientX, y: e.clientY })
	 }
	
	return (
		<div
			className="relative basis-1/4 border-4 border-black bg-green-800"
			onClick={clickHandler}
		>
			<Cup></Cup>
			<Washer pos={mousePos}></Washer>
			<pre className="mt-10">{JSON.stringify(mousePos)}</pre>
		</div>
	)
}