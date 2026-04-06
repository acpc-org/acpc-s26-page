import Image from "next/image";
import localFont from "next/font/local";
import { Anybody } from "next/font/google";

const minecraft = localFont({ src: "../../public/Minecraft.otf" });
const minecraftbold = localFont({ src: "../../public/Minecraft-Bold.otf" });
const anybody = Anybody({ subsets: ["latin"] });


export default function Home() {
  return (
    <div className="flex flex-col font-sans">
        <div className="md:hidden bg-red-600">
            <p className="text-white">Heads up, this experience will probably not display correctly on mobile devices.</p>
        </div>
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* For centered item, pass in className = "absolute gap-10 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2" */}
            <Image src={"/acpc s26 splash.svg"} className="absolute inset-0 w-full h-full object-cover object-center -z-10" alt={"ACPC Spring 2026"} width={1200} height={1200}></Image>
            <div className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2">
                <div className="flex flex-row gap-2 md:gap-10 ">
                    <div className="flex flex-col">
                        <p className={`${minecraft.className} text-4xl md:text-6xl text-white`}>20</p>
                        <p className={`${minecraft.className} text-4xl md:text-6xl text-white`}>26</p>
                    </div>
                    <div className="flex flex-col">
                        <p className={`${minecraftbold.className} text-4xl md:text-6xl text-white`}>SPRING</p>
                        <p className={`${minecraftbold.className} text-4xl md:text-6xl text-white`}>CONTEST</p>
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

        <div className="relative w-full overflow-hidden flex items-center justify-center">
            {/* For centered item, pass in className = "absolute gap-10 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2" */}
            <Image src={"/screen 2.svg"} className="w-full h-auto object-cover" alt={"Cave background"} width={1200} height={1200}></Image>
        </div>
        <div className="bg-[#3C3B3B] flex flex-col">
            <div className="flex flex-row items-center justify-between ml-8 mr-8">
                <Image src={"/cave 1.svg"} className="max-w-[48%] h-auto" alt={"Cave"} width={600} height={600}></Image>
                <div className="relative w-full max-w-[48%] flex items-center justify-center">
                    <Image src={"/upper rocks.svg"} className="w-full h-auto" alt={"Rocks"} width={600} height={600}></Image>
                    <div className="absolute inset-0 items-center justify-center flex flex-col">
                        <p className="text-white text-lg md:text-4xl text-center leading-snug font-semibold">What's this event about?</p>
                        <p className="text-white text-xs md:text-lg text-center leading-snug font-semibold">Welcome to the Aggie Competitive Programming Club's Spring 2026 contest!
                            Participants work together in teams (up to 3) to puzzle their way through programming problems (similar to the ones found on
                            LeetCode or CodeForces).
                        </p>
                        <p className="text-white text-xs md:text-lg text-center leading-snug font-semibold mt-2">
                            Compete for the chance to win prizes, enjoy free food, have fun with friends!
                        </p>

                    </div>
                </div>
            </div>
        </div>
        <div className="bg-[#3C3B3B] flex flex-col pt-16">
            <div className="flex flex-row items-center justify-between ml-8 mr-8">
                <div className="relative w-full max-w-[48%] flex items-center justify-center">
                    <Image src={"/lower rocks.svg"} className="w-full h-auto" alt={"Rocks"} width={600} height={600}></Image>
                    <div className="absolute inset-0 items-center justify-center flex flex-col">
                        <p className="text-white text-lg md:text-4xl text-center leading-snug font-semibold">Contest Overview</p>
                        <ul className="">
                            <li className="text-white text-xs md:text-lg text-center leading-none font-semibold mt-1 md:mt-2">
                                Over <span className="text-green-500 font-bold">$2,000</span> in prizes
                            </li>
                            <li className="text-white text-xs md:text-lg text-center leading-none font-semibold mt-1 md:mt-2">
                                Problems for absolute beginners & seasoned experts
                            </li>
                            <li className="text-white text-xs md:text-lg text-center leading-none font-semibold mt-1 md:mt-2">
                                40+ programming languages allowed
                            </li>
                            <li className="text-white text-xs md:text-lg text-center leading-none font-semibold mt-1 md:mt-2">
                                Open-internet (content must be published before contest start)
                            </li>
                            <li className="text-white text-xs md:text-lg text-center leading-none font-semibold mt-1 md:mt-2">
                                Lots of free pizza & snacks
                            </li>
                        </ul>
                    </div>
                </div>
                <Image src={"/cave 2.svg"} className="max-w-[48%] h-auto" alt={"Cave"} width={600} height={600}></Image>
            </div>
        </div>
        <div className="relative w-full overflow-hidden flex items-start justify-center">
            <Image src={"/screen 4.svg"} className="w-full h-auto object-cover" alt={"Nether background"} width={1200} height={1200}></Image>
        </div>
        <div className="bg-[#390C0C] flex flex-col mt-[-64]">
            <div className="relative ml-8 mr-8 flex flex-row align-top justify-start">
                {/* The image takes up 48% of the width */}
                <Image src={"/nether 1.svg"} className="w-[48%] h-auto relative z-10" alt={"Cave"} width={600} height={600}></Image>
                
                {/* The text content starts exactly halfway across the image */}
                <div className="absolute right-[10%] flex items-center justify-center z-20 bg-[#50000080] backdrop-blur-sm">
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-white text-lg md:text-4xl text-center leading-snug font-semibold">Schedule</p>
                        <ul className="">
                            <li className="text-white text-xs md:text-lg text-center leading-none font-semibold mt-1 md:mt-2">
                                Over <span className="text-green-500 font-bold">$2,000</span> in prizes
                            </li>
                            <li className="text-white text-xs md:text-lg text-center leading-none font-semibold mt-1 md:mt-2">
                                Problems for absolute beginners & seasoned experts
                            </li>
                            <li className="text-white text-xs md:text-lg text-center leading-none font-semibold mt-1 md:mt-2">
                                40+ programming languages allowed
                            </li>
                            <li className="text-white text-xs md:text-lg text-center leading-none font-semibold mt-1 md:mt-2">
                                Open-internet (content must be published before contest start)
                            </li>
                            <li className="text-white text-xs md:text-lg text-center leading-none font-semibold mt-1 md:mt-2">
                                Lots of free pizza & snacks
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}