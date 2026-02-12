export default function BehavioralScience() {
  const links = [
    { n: "Road Mortality and Mitigating Measures (ID: 48)", u: "https://web.archive.org/web/paintedresearch.org/index.php?option=com_content&view=article&id=48" },
    { n: "Bio-Acoustic Signaling & Sneeze Voting (ID: 49)", u: "https://web.archive.org/web/paintedresearch.org/index.php?option=com_content&view=article&id=49" }
  ];
  return (
    <main className="min-h-screen bg-white p-12 font-serif text-slate-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black mb-8 border-l-8 border-blue-900 pl-6 uppercase">Behavioral Science</h1>
        <div className="space-y-4">
          {links.map((l, i) => (
            <a key={i} href={l.u} target="_blank" className="block p-6 bg-blue-50 border border-blue-200 hover:bg-blue-900 hover:text-white transition-all font-bold text-xl">{l.n}</a>
          ))}
        </div>
      </div>
    </main>
  );
}
