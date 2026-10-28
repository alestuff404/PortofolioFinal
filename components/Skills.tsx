import { skills, certifications } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeader index="(04)" title="Skills" subtitle="Tech stack, soft skills, and certifications." />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([group, items]) => (
            <Reveal key={group} className="bg-bg">
              <div className="h-full p-6">
                <h3 className="tick text-muted">{group}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <li key={s} className="rounded-md border border-line px-3 py-1.5 text-sm">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <h3 className="tick mb-6 mt-20 text-muted">Certifications</h3>
        <ul className="divide-y divide-line border-y border-line">
          {certifications.map((c) => (
            <li key={c.title} className="grid gap-1 py-4 sm:grid-cols-[160px_1fr_auto] sm:items-baseline sm:gap-8">
              <span className="tick text-muted">{c.date}</span>
              <span className="font-medium tracking-tight">{c.title}</span>
              <span className="text-sm text-muted">{c.issuer}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
