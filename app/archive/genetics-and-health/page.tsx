export default function GeneticsHealth() {
  const links = [
    { n: "Genetics Archive (Genomic Conservation)", u: "https://web.archive.org/web/paintedresearch.org/research/genetics-archive" },
    { n: "Capture & Anaesthesia Evaluation", u: "https://web.archive.org/web/paintedresearch.org/publications/2004-anaesthesia" }
  ];
  return (
    <main className="min-h-screen bg-white p-12 font-serif text-slate-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black mb-8 border-l-8 border-red-900 pl-6 uppercase">Genetics & Health</h1>
        <div className="space-y-4">
          {links.map((l, i) => (
            <a key={i} href={l.u} target="_blank" className="block p-6 bg-red-50 border border-red-200 hover:bg-red-900 hover:text-white transition-all font-bold text-xl">{l.n}</a>
          ))}
        </div>
      </div>
    </main>
  );
}
