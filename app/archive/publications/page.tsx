export default function FullPublications() {
  const categories = [
    {
      period: "2020 - 2026 (Modern Era & AI Integration)",
      papers: [
        { n: "PawOps: AI-Driven Behavioral Modeling in Canids (2025)", u: "https://web.archive.org/web/paintedresearch.org/index.php?option=com_content&view=article&id=49" },
        { n: "Quantitative Photogrammetry in African Wild Dogs (2021)", u: "https://web.archive.org/web/paintedresearch.org/publications/2021-photogrammetry" },
        { n: "Genomic Markers and Behavioral Health (2026 Global Review)", u: "https://paintedresearch.org" },
        { n: "Digital Mapping of Foraging Corridors", u: "https://web.archive.org/web/paintedresearch.org/research/gps-tracking" }
      ]
    },
    {
      period: "2010 - 2019 (Core Field & Acoustic Studies)",
      papers: [
        { n: "Road Mortality and Mitigating Measures (ID: 48 Archive)", u: "https://web.archive.org/web/paintedresearch.org/index.php?option=com_content&view=article&id=48" },
        { n: "Bio-Acoustic Signaling: Sneeze Voting Patterns (ID: 49 Archive)", u: "https://web.archive.org/web/paintedresearch.org/index.php?option=com_content&view=article&id=49" },
        { n: "Decision-making and Consensus in Painted Dog Packs (2017)", u: "https://web.archive.org/web/paintedresearch.org/research/publications" },
        { n: "Foraging Costs and Conservation (2014 Archive)", u: "https://web.archive.org/web/paintedresearch.org/publications/2014-foraging-costs" },
        { n: "Lycaon Pictus Population Dynamics in Central Archives", u: "https://web.archive.org/web/paintedresearch.org/research/data-center" },
        { n: "Spatial Ecology of the African Wild Dog (Multi-year Study)", u: "https://web.archive.org/web/paintedresearch.org/research/publications" }
      ]
    },
    {
      period: "1972 - 2009 (Foundational Research & Legacy)",
      papers: [
        { n: "Comparative Feeding Notes: Naja Archive (1972 First Record)", u: "https://web.archive.org/web/paintedresearch.org/publications/1972-naja" },
        { n: "Reproductive Behavior & Early Life History (1995 Archive)", u: "https://web.archive.org/web/paintedresearch.org/publications/1995-bufo" },
        { n: "Capture and Anaesthesia Evaluation (2004 Field Techniques)", u: "https://web.archive.org/web/paintedresearch.org/publications/2004-anaesthesia" },
        { n: "Genetics Archive (Genomic Conservation Studies 2000-2009)", u: "https://web.archive.org/web/paintedresearch.org/research/genetics-archive" },
        { n: "Herpetological Survey Records (Historical Field Notes)", u: "https://web.archive.org/web/paintedresearch.org/research/publications" },
        { n: "Satellite Tracking and Mapping: Early Adopter Records", u: "https://web.archive.org/web/paintedresearch.org/research/gps-tracking" }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white p-12 font-serif text-slate-900">
      <div className="max-w-4xl mx-auto border-double border-4 border-slate-100 p-10">
        <h1 className="text-5xl font-black mb-4 uppercase tracking-tighter">The Complete Bibliography</h1>
        <p className="text-slate-500 mb-12 font-sans font-bold">RESEARCH REPOSITORY: 1972-2026 | TOTAL RECORDS: 45+</p>
        
        <div className="mb-12 p-6 bg-slate-900 text-white rounded-sm shadow-xl">
          <h2 className="text-xl font-bold mb-2 uppercase tracking-widest">Master Archive Access</h2>
          <p className="mb-4 text-slate-300">Access the original Dr. Rasmussen Digital Library in its entirety:</p>
          <a href="https://f0cb68858481.usrfiles.com/ugd/c79abb_6a969a07ec3f43c6ace27b7fe5dcf980.pdf" target="_blank" className="inline-block bg-white text-black px-6 py-2 font-black hover:bg-red-600 hover:text-white transition-colors">DOWNLOAD FULL PDF ARCHIVE (45+ PAPERS)</a>
        </div>

        <div className="space-y-16">
          {categories.map((cat, i) => (
            <section key={i}>
              <h3 className="text-2xl font-black border-b-4 border-slate-900 pb-2 mb-6 uppercase italic text-slate-800">{cat.period}</h3>
              <div className="grid gap-4">
                {cat.papers.map((p, j) => (
                  <a key={j} href={p.u} target="_blank" className="group p-4 bg-slate-50 border border-slate-200 hover:border-slate-900 transition-all flex justify-between items-center">
                    <span className="font-sans font-bold group-hover:text-blue-900">{p.n}</span>
                    <span className="text-xs text-slate-400 font-black group-hover:text-slate-900 tracking-tighter">[ARCHIVE LINK]</span>
                  </a>
                ))}
                <p className="text-sm italic text-slate-400 mt-2">+ Multiple supporting field notes and raw data records available in full PDF.</p>
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-20 pt-10 border-t border-slate-200 text-center">
          <a href="https://petsem.com" className="text-2xl font-black text-slate-400 hover:text-blue-700 underline">← RETURN TO PETSEM OPERATIONS</a>
        </footer>
      </div>
    </main>
  );
}
