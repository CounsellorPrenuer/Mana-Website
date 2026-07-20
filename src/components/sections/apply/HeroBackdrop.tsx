/** Pure-CSS mesh-gradient + grain backdrop for the orientation hero. No JS, no canvas — GPU transforms only. */
export default function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-32 -left-24 h-[30rem] w-[30rem] rounded-full bg-royal/[0.08] blur-[100px] animate-blob-drift-a" />
      <div className="absolute top-6 -right-28 h-[26rem] w-[26rem] rounded-full bg-magenta/[0.06] blur-[110px] animate-blob-drift-b" />
      <div className="absolute -bottom-40 left-1/3 h-[24rem] w-[24rem] rounded-full bg-gold/[0.07] blur-[100px] animate-blob-drift-c" />
      <div className="bg-grain absolute inset-0 opacity-[0.035] mix-blend-multiply" />
    </div>
  );
}
