import Link from "next/link";
export default function ArchiveHub() {
  const cats = [
    { t: "Academic Publications", p: "/archive/publications", d: "Full list of 47 peer-reviewed publications (1972-2026)." },
    { t: "Behavioral Science", p: "/archive/behavioral-science", d: "Bio-acoustic signaling and pack dynamics studies." },
    { t: "Field Technology", p: "/archive/field-technology", d: "GPS tracking and photogrammetry data." },
    { t: "Genetics & Health", p: "/archive/genetics-and-health", d: "Genomic conservation and veterinary techniques." },
    { t: "Education & Outreach", p: "/archive/education", d: "Junior Rangers and community archives." }
  ];
  return (
    <main className="min-h-screen bg-slate-50 p-8 font-serif text-slate-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-black mb-12 border-b-8 border-slate-900 pb-6 uppercase italic">Archive Hub</h1>
        <div className="grid gap-6">
          {cats.map((c) => (
            <Link href={c.p} key={c.p} className="group p-8 bg-white border-2 border-slate-200 hover:border-slate-900 transition-all">
              <h2 className="text-3xl font-bold group-hover:text-blue-800 underline">{c.t}</h2>
              <p className="text-slate-600 mt-3 text-lg">{c.d}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
