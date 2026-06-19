import { offerConfig } from "./offerConfig";
import { useOfferCountdown } from "./useOfferCountdown";

export default function OfferBanner() {
  const time = useOfferCountdown();

  return (
    <div className="offerBanner">
      <div>{offerConfig.title}</div>

      <div>
        {!time.expired ? (
          <span>
            ⏳ {time.days}d {time.hours}h {time.minutes}m {time.seconds}s
          </span>
        ) : (
          <span>🔥 Oferta finalizada</span>
        )}
      </div>
    </div>
  );
}