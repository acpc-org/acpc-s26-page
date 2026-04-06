import Image from "next/image";
import localFont from "next/font/local";
import { Anybody } from "next/font/google";

const minecraft = localFont({ src: "../../public/Minecraft.otf" });
const minecraftbold = localFont({ src: "../../public/Minecraft-Bold.otf" });
const anybody = Anybody({ subsets: ["latin"] });


export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-sans">
        <div className="md:hidden bg-red-600">
            <p className="text-white">Heads up, this experience will probably not display correctly on mobile devices.</p>
        </div>
        <div className="relative">
            {/* For centered item, pass in className = "absolute gap-10 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2" */}
            <Image src={"/acpc s26 splash.svg"} className="w-full" alt={"ACPC Spring 2026"} width={1200} height={1200}></Image>
            <div className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2">
                <div className="flex flex-row gap-2 md:gap-10 ">
                    <div className="flex flex-col">
                        <p className={`${minecraft.className} text-3xl md:text-6xl text-white`}>20</p>
                        <p className={`${minecraft.className} text-3xl md:text-6xl text-white`}>26</p>
                    </div>
                    <div className="flex flex-col">
                        <p className={`${minecraftbold.className} text-3xl md:text-6xl text-white`}>SPRING</p>
                        <p className={`${minecraftbold.className} text-3xl md:text-6xl text-white`}>CONTEST</p>
                    </div>
                </div>

                <div className="flex flex-row gap-3">
                    <div className="flex flex-row gap-1">
                        <Image src="/clock-small-flat.svg" alt="Clock icon" width={24} height={24}/>
                        <p className={`${anybody.className} text-black font-bold pt-1 text-sm md:text-xl`}>april 19th</p>
                    </div>
                    <div className="flex flex-row gap-1">
                        <Image src="/heart w border.svg" alt="Heart icon" width={24} height={24}/>
                        <p className={`${anybody.className} text-black font-bold pt-1 text-sm md:text-xl`}>petr 118</p>
                    </div>
                    <div className="flex flex-row gap-1">
                        <Image src="/hunger.svg" alt="Hunger icon" width={24} height={24}/>
                        <p className={`${anybody.className} text-black font-bold pt-1 text-sm md:text-xl`}>food + prizes</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
}
