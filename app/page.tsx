import Timer from "./Timer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
        <div className="rounded-xl flex flex-col justify-start border-2 overflow-hidden">
            <div className="pl-2 pr-2 flex flex-row items-center justify-between align-middle h-12 bg-[repeating-linear-gradient(45deg,#dfdfdf_0_20px,#f5f5f5_20px_40px)] dark:bg-[repeating-linear-gradient(45deg,#090909_0_20px,#262626_20px_40px)]">
                <p className="font-semibold text-2xl">Under Construction</p>
            </div>
            <div className="p-2">
                <p className="w-0 min-w-full leading-snug">The ACPC Spring 2026 contest page is still under development.</p>
            </div>
            <div className="w-fit p-2 mx-2 mb-2 rounded-lg flex flex-col">
                <p className="uppercase font-semibold text-sm opacity-60 mb-[-4]">Contest starts in:</p>
                <p className="text-lg font-semibold"><Timer date={new Date("2026-04-19T13:00:00-05:00")} /></p>
            </div>
        </div>

    </div>
  );
}
