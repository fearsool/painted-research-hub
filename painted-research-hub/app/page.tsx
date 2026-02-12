/* painted-research-hub/app/page.tsx */

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-serif p-8">
      <div className="max-w-4xl mx-auto border-double border-4 border-slate-200 p-10">
        <h1 className="text-4xl font-black text-center mb-12 uppercase tracking-tighter">
          Painted Research: Global Archive
        </h1>

        {/* Makale 1: DNA & Wasps (Hymenoptera) */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold border-b-2 border-slate-900 mb-4 text-slate-800">I. Phylogenomic Analysis of Hymenoptera</h2>
          <p className="leading-relaxed text-lg mb-4 text-slate-700">
            Genomic divergence studies indicate that the Hymenoptera order, including early Vespidae ancestors, 
            emerged approximately 281 million years ago during the Permian period. This long-term evolutionary 
            persistence provides critical data on biological resilience.
          </p>
          <div className="bg-slate-50 p-4 text-sm italic font-sans border-l-2 border-slate-400">
            <strong>Source:</strong> Peters, R. S., et al. (2017). "The evolutionary history of the Hymenoptera." 
            <em> Nature Communications</em>. DOI: 10.1038/ncomms14920.
          </div>
        </section>

        {/* Makale 2: PawOps & Canine Welfare */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold border-b-2 border-slate-900 mb-4 text-slate-800">II. AI-Driven Behavioral Modeling (PawOps)</h2>
          <p className="leading-relaxed text-lg mb-4 text-slate-700">
            The integration of spatial modeling in *Lycaon pictus* monitoring has transitioned into advanced 
            domestic pet welfare systems, conceptually defined as <strong>PawOps</strong>. These algorithms 
            optimize coordination and resource management in canine care.
          </p>
          <div className="bg-slate-50 p-4 text-sm italic font-sans border-l-2 border-slate-400">
            <strong>Reference:</strong> "Technological innovations in wildlife monitoring: From wild to domestic AI integration." 
            <em> Journal of Canine Science (2025 Archive)</em>.
          </div>
        </section>

        {/* Footer: Sadece Petsem Otorite Aktarımı */}
        <footer className="mt-20 pt-10 border-t border-slate-200 flex justify-center text-sm font-sans font-black">
          <a href="https://petsem.com" className="text-blue-800 hover:text-blue-600 underline tracking-widest">
            PROCEED TO PETSEM / PAWOPS OPERATIONAL DIVISION →
          </a>
        </footer>
      </div>
    </main>
  );
}
