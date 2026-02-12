export default function PublicationsPage() {
  const links = [
    { n: "Full Bibliography (1972-2026)", u: "https://web.archive.org/web/paintedresearch.org/research/publications" },
    { n: "Download Full PDF Archive", u: "https://f0cb68858481.usrfiles.com/ugd/c79abb_6a969a07ec3f43c6ace27b7fe5dcf980.pdf" },
    { n: "1972 Naja Feeding Archive", u: "https://web.archive.org/web/paintedresearch.org/publications/1972-naja" }
  ];
  return (
    <main className="min-h-screen bg-white p-12 font-serif text-slate-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black mb-8 border-l-8 border-slate-900 pl-6 uppercase">Publications Archive</h1>
        <div className="space-y-4">
          {links.map((l, i) => (
            <a key={i} href={l.u} target="_blank" className="block p-6 bg-slate-50 border border-slate-200 hover:bg-slate-900 hover:text-white transition-all font-bold text-xl">{l.n}</a>
          ))}
        </div>
      </div>
    </main>
  );
}
