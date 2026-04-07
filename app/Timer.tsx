"use client";

import { useState, useEffect } from "react";

export default function Timer({ date }: { date: Date | number | string }) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const update = () => setNow(Date.now());
    
    update(); // Sync immediately on mount
    
    const interval = setInterval(update, 1000);

    // Update when tab comes back into focus or visibility changes
    // This resolves the issue where the timer freezes after navigating away and back
    window.addEventListener("focus", update);
    document.addEventListener("visibilitychange", update);

    return () => {
      clearInterval(interval);
      window.removeEventListener("focus", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  const target = new Date(date).getTime();
  const diff = target - now;

  if (diff <= 0) {
    return <span suppressHydrationWarning>Complete</span>;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const h = String(hours).padStart(2, "0");
  const m = String(minutes).padStart(2, "0");
  const s = String(seconds).padStart(2, "0");

  if (days >= 1) {
    return <span suppressHydrationWarning>{days}d {h}:{m}:{s}</span>;
  } else {
    return <span suppressHydrationWarning>{h}:{m}:{s}</span>;
  }
}
