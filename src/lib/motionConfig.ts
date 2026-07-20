/** Shared motion constants for the orientation page — one motion language, reused everywhere. */

export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export const SPRING_SOFT = { type: "spring", stiffness: 260, damping: 24, mass: 0.6 } as const;

export const SPRING_SNAPPY = { type: "spring", stiffness: 420, damping: 32 } as const;

export const SPRING_GLIDE = { type: "spring", stiffness: 120, damping: 20, mass: 0.8 } as const;
