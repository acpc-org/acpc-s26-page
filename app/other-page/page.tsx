import Image from "next/image";
import localFont from "next/font/local";

const minecraft = localFont({ src: "../../public/Minecraft.otf" });
const minecraftbold = localFont({ src: "../../public/Minecraft-Bold.otf" });


export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-sans">
        <div>
            {/* For centered item, pass in className = "absolute gap-10 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2" */}
            <Image src={"/acpc s26 splash.svg"} className="w-full" alt={"ACPC Spring 2026"} width={1200} height={1200}></Image>
            <div className="absolute gap-10 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-row">
                <div className="flex flex-col">
                    <p className={`${minecraft.className} text-6xl text-white`}>20</p>
                    <p className={`${minecraft.className} text-6xl text-white`}>26</p>
                </div>
                <div className="flex flex-col">
                    <p className={`${minecraftbold.className} text-6xl text-white`}>SPRING</p>
                    <p className={`${minecraftbold.className} text-6xl text-white`}>CONTEST</p>
                </div>
            </div>
        </div>
    </div>
  );
}