import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

let refreshScheduled = false;

/**
 * ScrollTrigger positions get calculated at the moment each trigger is created. On a
 * page with several independent reveal sections plus async web fonts, later sections'
 * trigger points can be measured before the page's final layout settles (font swap
 * reflows everything below it), leaving those triggers permanently past their fire
 * point and their content stuck at opacity: 0. Refresh once fonts + full load settle.
 * Guarded so it only registers once no matter how many components call it.
 */
export function scheduleScrollTriggerRefresh() {
  if (refreshScheduled || typeof window === "undefined") return;
  refreshScheduled = true;

  const refresh = () => ScrollTrigger.refresh();

  if ("fonts" in document) {
    document.fonts.ready.then(refresh).catch(() => {});
  }
  if (document.readyState === "complete") {
    refresh();
  } else {
    window.addEventListener("load", refresh, { once: true });
  }
}

export { gsap, ScrollTrigger };
export { prefersReducedMotion } from "./motion";
