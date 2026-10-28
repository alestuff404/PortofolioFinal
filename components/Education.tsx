import { education, achievements } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeader index="(03)" title="Education" subtitle="Academic background and achievements." />

      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <h3 className="tick mb-6 text-muted">Academic</h3>
          <ul className="divide-y divide-line border-y border-line">
            {education.map((e) => (
              <Reveal key={e.title}>
                <li className="py-6">
                  <p className="tick text-muted">{e.period}</p>
                  <h4 className="mt-2 text-xl font-medium tracking-tight">{e.title}</h4>
                  <p className="text-accent">{e.place}</p>
                  {e.note && <p className="mt-2 text-sm text-muted">{e.note}</p>}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="tick mb-6 text-muted">Achievements</h3>
          <ul className="divide-y divide-line border-y border-line">
            {achievements.map((a) => (
              <Reveal key={a.title}>
                <li className="py-6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="tick text-muted">{a.date}</p>
                    <span className="tick rounded-full border border-line px-2.5 py-0.5 text-muted">{a.level}</span>
                  </div>
                  <h4 className="mt-2 text-lg font-medium leading-snug tracking-tight">{a.title}</h4>
                  <p className="mt-1 text-sm text-muted">{a.note}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
