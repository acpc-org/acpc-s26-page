"use client";

import Countdown, { CountdownRenderProps } from "react-countdown";
import { useState, useEffect } from "react";

const renderer = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
  if (completed) {
    return <span>00:00:00</span>;
  }

  const h = String(hours).padStart(2, "0");
  const m = String(minutes).padStart(2, "0");
  const s = String(seconds).padStart(2, "0");

  if (days >= 1) {
    return <span>{days}d {h}:{m}:{s}</span>;
  } else {
    return <span>{h}:{m}:{s}</span>;
  }
};

export default function Timer({ date }: { date: Date | number | string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Return a placeholder or empty span during SSR to avoid hydration mismatch
  if (!mounted) {
    return <span>--:--:--</span>;
  }

  return <Countdown date={date} renderer={renderer} />;
}
