/** Standalone — deliberately has zero dependencies, so components that only need this
 * (Button, TiltCard) don't drag GSAP into their bundle. */
export function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
