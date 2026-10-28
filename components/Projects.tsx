import { projects } from "@/data/content";
import ImageSlot from "./ImageSlot";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeader
        index="(01)"
        title="Projects"
        subtitle="Selected work, from AI platforms to client websites."
      />

      <div className="space-y-20 sm:space-y-28">
        {projects.map((p, i) => {
          const imageRight = i % 2 === 1;
          return (
            <Reveal key={p.title}>
              <article className="grid items-center gap-6 lg:grid-cols-12 lg:gap-0">
                {/* Screenshot */}
                <div
                  className={`lg:row-start-1 lg:col-span-7 ${imageRight ? "lg:col-start-6" : "lg:col-start-1"}`}
                >
                  <ImageSlot
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    label="Add screenshot"
                    position="top"
                    className="aspect-[16/10] w-full rounded-lg shadow-lg"
                  />
                </div>

                {/* Text */}
                <div
                  className={`relative z-10 lg:row-start-1 lg:col-span-5 ${
                    imageRight ? "lg:col-start-1 lg:text-left" : "lg:col-start-8 lg:text-right"
                  }`}
                >
                  <p className="tick text-accent">{p.tag}</p>
                  <h3 className="mt-2 text-2xl font-medium tracking-[-0.03em] sm:text-3xl">{p.title}</h3>

                  <div
                    className={`mt-5 rounded-lg bg-surface p-6 text-left shadow-lg ${
                      imageRight ? "lg:-mr-24" : "lg:-ml-24 lg:text-right"
                    }`}
                  >
                    {p.highlight && (
                      <p className="tick mb-3 text-accent">
                        <span aria-hidden>★</span> {p.highlight}
                      </p>
                    )}
                    <p className="leading-relaxed text-muted">{p.description}</p>
                  </div>

                  <ul className={`mt-5 flex flex-wrap gap-x-4 gap-y-2 ${imageRight ? "" : "lg:justify-end"}`}>
                    {p.tech.map((t) => (
                      <li key={t} className="tick text-muted">
                        {t}
                      </li>
                    ))}
                  </ul>

                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="tick mt-5 inline-flex items-center gap-2 underline-offset-4 hover:underline"
                    >
                      View on GitHub <span aria-hidden>↗</span>
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
