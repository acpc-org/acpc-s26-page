import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Timer from "@/app/Timer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ACPC Spring 2026",
  description: "ACPC Spring 2026 Contest Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        {/* Desktop Navbar */}
        <div className="z-50 p-1 pl-3 items-center gap-3 flex-row overflow-hidden rounded-md border-2 hidden md:flex fixed bottom-[1%] left-[50%] -translate-x-1/2 bg-[#ffffff90] dark:bg-[#00000090] backdrop-blur-xs">
          <a href="#home" className="text-md transition-all opacity-70 active:opacity-50 hover:opacity-100">Home</a>
          <a href="#about" className="text-md transition-all opacity-70 active:opacity-50 hover:opacity-100">About</a>
          <a href="#schedule" className="text-md transition-all opacity-70 active:opacity-50 hover:opacity-100">Schedule</a>
          <a href="#prizes" className="text-md transition-all opacity-70 active:opacity-50 hover:opacity-100">Prizes</a>
          <div className="border-1 rounded-md overflow-hidden flex flex-row items-stretch">
            <p suppressHydrationWarning className="text-md ml-1 mr-1 font-semibold flex items-center"><Timer date={new Date("2026-04-19T13:00:00-05:00")} /></p>
            <a href="https://tx.ag/uva2aoc" className="flex items-center px-2 transition-all text-md p-1 text-white font-semibold bg-blue-600 hover:bg-blue-500 active:bg-blue-700">Register</a>
          </div>

        </div>


        {/* Mobile Navbar */}
        <div className="z-50 p-1 pl-2 items-center justify-between gap-2 flex-row overflow-hidden flex md:hidden fixed bottom-[0%] left-[50%] w-full -translate-x-1/2 bg-[#ffffff90] dark:bg-[#00000090] backdrop-blur-xs">
          <div className="flex flex-row items-center gap-2">
            <a href="#home" className="text-sm transition-all opacity-70 active:opacity-50 hover:opacity-100">Home</a>
            <a href="#about" className="text-sm transition-all opacity-70 active:opacity-50 hover:opacity-100">About</a>
            <a href="#schedule" className="text-sm transition-all opacity-70 active:opacity-50 hover:opacity-100">Schedule</a>
            <a href="#prizes" className="text-sm transition-all opacity-70 active:opacity-50 hover:opacity-100">Prizes</a>
          </div>
          <div className="border-1 rounded-md overflow-hidden flex flex-row items-stretch">
            <p suppressHydrationWarning className="text-xs ml-1 mr-1 font-semibold flex items-center"><Timer date={new Date("2026-04-19T13:00:00-05:00")} /></p>
            <a href="https://tx.ag/uva2aoc" className="flex items-center px-2 transition-all text-sm p-1 text-white font-semibold bg-blue-600 hover:bg-blue-500 active:bg-blue-700">Register</a>
          </div>

        </div>


      </body>

    </html>
  );
}