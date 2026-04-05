import Image from "next/image";
import localFont from "next/font/local";

const minecraft = localFont({ src: "../../public/Minecraft.otf" });

export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-sans">
        <div>
            <Image src={"/acpc s26 splash.svg"} className="w-full" alt={"ACPC Spring 2026"} width={1200} height={1200}></Image>
            <p className={`${minecraft.className} absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-center`}>TEST</p>
        </div>
    </div>
  );
}