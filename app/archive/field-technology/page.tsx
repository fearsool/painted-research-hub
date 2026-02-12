export default function FieldTech() {
  const links = [
    { n: "Quantitative Photogrammetry (2021 Analysis)", u: "https://web.archive.org/web/paintedresearch.org/publications/2021-photogrammetry" },
    { n: "GPS Tracking & Spatial Mapping Archive", u: "https://web.archive.org/web/paintedresearch.org/research/gps-tracking" }
  ];
  return (
    <main className="min-h-screen bg-white p-12 font-serif text-slate-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black mb-8 border-l-8 border-emerald-900 pl-6 uppercase">Field Technology</h1>
        <div className="space-y-4">
          {links.map((l, i) => (
            <a key={i} href={l.u} target="_blank" className="block p-6 bg-emerald-50 border border-emerald-200 hover:bg-emerald-900 hover:text-white transition-all font-bold text-xl">{l.n}</a>
          ))}
        </div>
      </div>
    </main>
  );
}
