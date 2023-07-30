export function Washer({ pos }) { 
	
	return (
		<>
			<div
				className={`w-8 h-8 items-center justify-center bg-transparent border-8 box-border rounded-full border-blue-500`}
				style={{"top" : pos.y, "left" : pos.x, "position" : "absolute"}}
			>
			</div>
			<pre>{JSON.stringify(pos.y)}</pre>
			</>
	)
}