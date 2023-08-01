import Image from "next/image";
import { Game } from "./components/Game";

export default function Home() {
  return (
    <main className="m-4 box-border flex h-[95cqh] flex-col justify-center border-8 border-black p-0 md:p-24">
      <Game></Game>
    </main>
  );
}
