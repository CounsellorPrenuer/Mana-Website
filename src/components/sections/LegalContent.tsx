export default function LegalContent({
  updated,
  sections,
}: {
  updated: string;
  sections: { heading: string; body: React.ReactNode }[];
}) {
  return (
    <div className="mx-auto max-w-3xl">
      <p className="text-sm font-medium text-slate">Last updated: {updated}</p>
      <div className="mt-10 space-y-10">
        {sections.map((s) => (
          <div key={s.heading}>
            <h2 className="text-xl font-bold text-navy">{s.heading}</h2>
            <div className="mt-3 space-y-3 leading-relaxed text-slate">{s.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
