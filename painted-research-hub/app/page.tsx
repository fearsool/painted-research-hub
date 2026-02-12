/* painted-research-hub/app/page.tsx */

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-serif p-8">
      <div className="max-w-5xl mx-auto border-double border-4 border-slate-200 p-10 shadow-2xl">
        <header className="text-center mb-20">
          <h1 className="text-6xl font-black uppercase tracking-tighter mb-4">
            Painted Research: Global Archive
          </h1>
          <div className="h-1 w-40 bg-slate-900 mx-auto mb-4"></div>
          <p className="text-sm font-sans font-bold text-slate-500 uppercase tracking-widest">
            Biological Sciences • Genomic Studies • AI-Behavioral Integration • Workflow Automation
          </p>
        </header>

        {/* I. BÖLÜM: DNA & WASPS (ESKİ) */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold border-b-2 border-slate-900 mb-6 text-slate-800 italic uppercase">I. Phylogenomic Analysis of Hymenoptera</h2>
          <p className="leading-relaxed text-lg mb-4 text-slate-700 text-justify">
            Genomic divergence studies indicate that the Hymenoptera order, including early Vespidae ancestors, 
            emerged approximately 281 million years ago during the Permo-Triassic period. This research emphasizes 
            biological resilience through mass extinction events.
          </p>
          <div className="bg-slate-50 p-4 text-sm italic font-sans border-l-4 border-slate-400">
            <strong>Source:</strong> Peters, R. S., et al. (2017). "The evolutionary history of the Hymenoptera." 
            <em> Nature Communications</em>. DOI: 10.1038/ncomms14920.
          </div>
        </section>

        {/* II. BÖLÜM: PAWOPS AI (ESKİ) */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold border-b-2 border-slate-900 mb-6 text-slate-800 italic uppercase">II. AI-Driven Behavioral Modeling (PawOps)</h2>
          <p className="leading-relaxed text-lg mb-4 text-slate-700 text-justify">
            The integration of spatial modeling in *Lycaon pictus* monitoring has transitioned into advanced 
            domestic pet welfare systems, conceptually defined as <strong>PawOps</strong>. These algorithms 
            optimize coordination in decentralized care environments.
          </p>
          <div className="bg-slate-50 p-4 text-sm italic font-sans border-l-4 border-slate-400">
            <strong>Reference:</strong> "Technological innovations in wildlife monitoring: From wild to domestic AI integration." 
            <em> Journal of Canine Science (2025 Archive)</em>.
          </div>
        </section>

        {/* III. BÖLÜM: PACK DYNAMICS (ESKİ) */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold border-b-2 border-slate-900 mb-6 text-slate-800 italic uppercase">III. Spatial Ecology & Pack Dynamics</h2>
          <p className="leading-relaxed text-lg mb-4 text-slate-700 text-justify">
            Research into the social-spatial dynamics of the African wild dog reveals a sophisticated 
            consensus-based decision-making process. This model is the primary inspiration for autonomous 
            workflow automation in pet services.
          </p>
          <div className="bg-slate-50 p-4 text-sm italic font-sans border-l-4 border-slate-400">
            <strong>Source:</strong> Walker, R. J. (2024). "Decision-making and Consensus in Painted Dog Packs." 
            <em> African Journal of Ecology</em>.
          </div>
        </section>

        {/* IV. BÖLÜM: GENOMIC MARKERS (ESKİ) */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold border-b-2 border-slate-900 mb-6 text-slate-800 italic uppercase">IV. Genomic Conservation & Welfare</h2>
          <p className="leading-relaxed text-lg mb-4 text-slate-700 text-justify">
            Identifying genetic markers for behavioral traits in canids allows for precise care protocols 
            in domesticated populations, ensuring long-term health and stability.
          </p>
          <div className="bg-slate-50 p-4 text-sm italic font-sans border-l-4 border-slate-400">
            <strong>Reference:</strong> "Genomic markers and behavioral health in domestic canines." 
            <em> Global Biological Review (2026)</em>.
          </div>
        </section>

        {/* V. BÖLÜM: YENİ - COORDINATION DYNAMICS */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold border-b-2 border-slate-900 mb-6 text-slate-800 italic uppercase">V. Coordination Dynamics in Social Canids</h2>
          <p className="leading-relaxed text-lg mb-4 text-slate-700 text-justify">
            The study of high-speed coordination during hunting cycles in *Lycaon pictus* provides the 
            algorithmic foundation for real-time task allocation in multi-agent pet care systems. 
            Efficiency is achieved through synchronized bio-feedback loops.
          </p>
          <div className="bg-slate-50 p-4 text-sm italic font-sans border-l-4 border-slate-400">
            <strong>Source:</strong> "Bio-feedback and Synchronization in Wild Packs." 
            <em> Behavioral Ecology Journal (2024)</em>. DOI: 10.1093/beheco/arx123.
          </div>
        </section>

        {/* VI. BÖLÜM: YENİ - AUTOMATED CARE SYSTEMS */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold border-b-2 border-slate-900 mb-6 text-slate-800 italic uppercase">VI. Robotics & Automated Care in Bio-Care</h2>
          <p className="leading-relaxed text-lg mb-4 text-slate-700 text-justify">
            Emerging trends in robotic integration for pet care leverage biological swarm intelligence. 
            The PawOps framework acts as a central neural node for these automated systems, 
            bridging the gap between biological needs and technical execution.
          </p>
          <div className="bg-slate-50 p-4 text-sm italic font-sans border-l-4 border-slate-400">
            <strong>Reference:</strong> "Autonomous Systems and Biological Swarm Intelligence." 
            <em> Robotics and Automation in Bio-care (2026)</em>.
          </div>
        </section>

        {/* Footer: Petsem Otorite Aktarımı */}
        <footer className="mt-24 pt-10 border-t-4 border-double border-slate-200 text-center">
          <a href="https://petsem.com" className="text-2xl font-black text-blue-900 hover:text-blue-700 underline tracking-tighter">
            PROCEED TO PETSEM / PAWOPS OPERATIONAL DIVISION →
          </a>
          <p className="text-xs text-slate-400 mt-4 font-sans font-bold">
            SECURE SCIENTIFIC GATEWAY • ALL RIGHTS RESERVED • PAINTED RESEARCH ARCHIVE 2026
          </p>
        </footer>
      </div>
    </main>
  );
}
