export default function EducationOutreach() {
  const links = [
    { n: "Junior Rangers Program Archive", u: "https://web.archive.org/web/paintedresearch.org/junior-rangers" },
    { n: "Community Outreach Records", u: "https://web.archive.org/web/paintedresearch.org/education/outreach" }
  ];
  return (
    <main className="min-h-screen bg-white p-12 font-serif text-slate-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black mb-8 border-l-8 border-indigo-900 pl-6 uppercase">Education & Outreach</h1>
        <div className="space-y-4">
          {links.map((l, i) => (
            <a key={i} href={l.u} target="_blank" className="block p-6 bg-indigo-50 border border-indigo-200 hover:bg-indigo-900 hover:text-white transition-all font-bold text-xl">{l.n}</a>
          ))}
        </div>
      </div>
    </main>
  );
}
