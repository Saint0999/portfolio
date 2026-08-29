"use client";

import SideRays from "./SideRays";
import { usePrefersReducedMotion } from "@/lib/motionHooks";

/**
 * Light rays behind the hero. Full-bleed: the layer breaks out of the
 * max-w-4xl column so the fan reads as light across the page, not a panel.
 *
 * Colour is lifted from Invariant's own hero rays (#f2e3c8 at 0.9 saturation)
 * — the warm cream is the single chromatic thing on an otherwise neutral page,
 * and it is what the cool metallic headings are notionally being lit BY.
 *
 * saturation must stay above 0: the shader mixes toward greyscale by this
 * value, so at 0 it discards rayColor entirely and renders white no matter
 * what is passed in.
 */
export default function HeroRays() {
  // A continuously animating background is exactly what this setting is for,
  // and the WebGL context is never created when it is on.
  const reducedMotion = usePrefersReducedMotion();
  if (reducedMotion) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 left-1/2 z-0 w-screen -translate-x-1/2"
    >
      <SideRays
        origin="top-right"
        rayColor1="#f2e3c8"
        rayColor2="#f2e3c8"
        saturation={0.9}
        speed={0.6}
        intensity={1.8}
        spread={1.2}
        blend={0.6}
        falloff={2.0}
        rayTailColor="#8fbfb8"
        tailStrength={0.6}
        opacity={0.7}
      />
    </div>
  );
}
