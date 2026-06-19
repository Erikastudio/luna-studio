import { useEffect, useState } from "react";
import { offerConfig } from "./offerConfig";

export function useOfferCountdown() {
  const target = new Date(offerConfig.endDate).getTime();

  const [timeLeft, setTimeLeft] = useState(getTime());

  function getTime() {
    const now = new Date().getTime();
    const distance = target - now;

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / (1000 * 60)) % 60),
      seconds: Math.floor((distance / 1000) % 60),
      expired: distance <= 0,
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return timeLeft;
}