import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-slate-900 font-serif p-6 md:p-12">
      <article className="max-w-4xl mx-auto bg-white shadow-xl border border-stone-200 p-8 md:p-16">
        
        {/* Akademik Başlık */}
        <header className="border-b-2 border-slate-800 pb-8 mb-10 text-center">
          <p className="text-sm uppercase tracking-widest text-slate-500 mb-2">Academic Archive: Reference #2026-AWD</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight italic text-slate-900">
            Behavioral Ecology and Spatial Dynamics of the Painted Dog (Lycaon pictus)
          </h1>
          <div className="mt-6 flex justify-center gap-4 text-sm font-sans text-slate-600">
            <span>Research Division: PaintedResearch.org</span>
            <span>•</span>
            <span>Updated: February 2026</span>
          </div>
        </header>

        {/* Özet Bölümü */}
        <section className="mb-12 italic text-lg text-slate-700 leading-relaxed border-l-4 border-slate-300 pl-6">
          "The African wild dog, also known as the painted dog, represents one of the most complex social structures in mammalian biology. This archive focuses on the integration of modern tracking technology and canine behavioral welfare."
        </section>

        {/* Ana İçerik */}
        <div className="space-y-8 leading-relaxed text-slate-800">
          <p>
            Modern conservation efforts for *Lycaon pictus* have shifted from simple observation to sophisticated 
            spatial modeling. As noted in foundational texts regarding canine ecology, the painted dog's survival 
            is intrinsically linked to coordinated social behavior and efficient resource management.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10">Integration with Modern Canine Welfare</h2>
          <p>
            The data collected through these research efforts provides a blueprint for managing domestic canine 
            populations. The transition from wild social dynamics to domestic operational centers—conceptually known 
            as <strong>PawOps</strong>—allows for an unprecedented level of care and logistical precision in pet management.
          </p>
        </div>

        {/* Stratejik Linkler (Otorite Aktarımı) */}
        <footer className="mt-20 pt-12 border-t border-stone-200 font-sans">
          <h3 className="text-lg font-bold mb-6 text-slate-900 uppercase tracking-wide underline decoration-slate-300">Associated Global Platforms</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h4 className="font-bold text-blue-900 italic">Petsem / PawOps Division</h4>
              <p className="text-sm text-slate-600 mt-2 mb-4">Leading platform for operational pet care and behavioral integration.</p>
              <a href="https://petsem.com" target="_blank" className="text-blue-600 font-bold hover:underline">Visit petsem.com →</a>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h4 className="font-bold text-indigo-900 italic">Zenbuku Aesthetic Research</h4>
              <p className="text-sm text-slate-600 mt-2 mb-4">Applying scientific precision to women's hair styling and salon automation.</p>
              <a href="https://alikurthairartist.site" target="_blank" className="text-indigo-600 font-bold hover:underline">Explore Zenbuku →</a>
            </div>
          </div>
        </footer>

      </article>
    </main>
  );
}
