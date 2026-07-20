import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

let refreshScheduled = false;

/**
 * ScrollTrigger positions get calculated at the moment each trigger is created. On a
 * page with async web fonts, a trigger created before fonts swap can be measured
 * against pre-final-layout DOM. Refresh once fonts + full load settle. Guarded so it
 * only registers once no matter how many components call it.
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
