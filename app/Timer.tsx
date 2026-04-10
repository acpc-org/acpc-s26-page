"use client";

import { useState, useEffect } from "react";
import Countdown from "react-countdown";

export default function Timer({ date }: { date: Date | number | string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <span suppressHydrationWarning>--:--:--</span>;
  }

  const target = new Date(date).getTime();

  return (
    <Countdown
      date={target}
      renderer={({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          return <span suppressHydrationWarning>Complete</span>;
        }

        const h = String(hours).padStart(2, "0");
        const m = String(minutes).padStart(2, "0");
        const s = String(seconds).padStart(2, "0");

        if (days >= 1) {
          return (
            <span suppressHydrationWarning>
              {days}d {h}:{m}:{s}
            </span>
          );
        } else {
          return (
            <span suppressHydrationWarning>
              {h}:{m}:{s}
            </span>
          );
        }
      }}
    />
  );
}
