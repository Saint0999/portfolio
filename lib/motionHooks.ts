import { useSyncExternalStore } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(callback: () => void) {
  const mql = window.matchMedia(REDUCED_MOTION_QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

/** True once the visitor has asked for reduced motion. False during SSR/static export. */
export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false,
  );
}

function subscribeOnce() {
  return () => {};
}

/**
 * True only after the client has hydrated. Use to gate client-only visual
 * state (e.g. an animation's hidden pre-state) so the server/static-export
 * markup always renders fully visible content.
 */
export function useHydrated(): boolean {
  return useSyncExternalStore(
    subscribeOnce,
    () => true,
    () => false,
  );
}
