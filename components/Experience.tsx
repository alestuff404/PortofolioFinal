import { experience, leadership } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeader index="(02)" title="Experience" subtitle="Work, teaching, and leadership experience." />

        <ol className="divide-y divide-line border-b border-line">
          {experience.map((e) => (
            <Reveal key={e.role + e.org}>
              <li className="grid gap-4 py-8 md:grid-cols-[220px_1fr] md:gap-12">
                <p className="tick text-muted">{e.period}</p>
                <div>
                  <h3 className="text-xl font-medium tracking-tight sm:text-2xl">{e.role}</h3>
                  <p className="mt-1 text-accent">{e.org}</p>
                  <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-muted marker:text-line">
                    {e.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        <h3 className="tick mb-6 mt-20 text-muted">Leadership &amp; Organization</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {leadership.map((l) => (
            <Reveal key={l.org + l.period}>
              <div className="h-full rounded-2xl border border-line bg-bg p-6">
                <p className="tick text-muted">{l.period}</p>
                <h4 className="mt-3 text-lg font-medium tracking-tight">{l.org}</h4>
                <p className="text-sm text-accent">{l.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{l.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
