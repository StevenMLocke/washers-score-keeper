import Image from "next/image";
import { Game } from "./components/Game";

export default function Home() {
	return (
		<main className='flex min-h-screen p-24 justify-center border-black border-8 m-4'>
			<Game></Game>
		</main>
	);
}

//className="flex min-h-screen flex-col gap-2 p-24 border-black border-8 m-4"
