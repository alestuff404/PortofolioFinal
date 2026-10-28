import { profile, stats, marquee } from "@/data/content";
import ImageSlot from "./ImageSlot";

const CV_URL = "/images/nanda-valeri-cv.pdf";

export default function Hero() {
  const items = [...marquee, ...marquee];

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      {/* square grid background */}
      <div aria-hidden className="hero-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 pb-14 pt-28 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.4fr_1fr]">
          {/* Text */}
          <div>
            <p className="tick mb-8 flex items-center gap-2 text-muted">
              <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-accent" />
              {profile.status}
            </p>

            <h1 className="max-w-3xl text-[clamp(2.5rem,6.5vw,5.25rem)] font-medium leading-[1] tracking-[-0.045em]">
              <span className="whitespace-pre-line">
                {profile.headline.before}
              </span>{" "}
              <em className="text-accent [font-style:italic]">
                {profile.headline.accent}
              </em>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{profile.intro}</p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="tick inline-flex w-full items-center justify-center gap-3 rounded-md bg-accent px-6 py-3.5 text-white transition-opacity hover:opacity-90 sm:w-auto"
              >
                View projects <span aria-hidden>↓</span>
              </a>
              <a
                href="#contact"
                className="tick inline-flex w-full items-center justify-center gap-3 rounded-md border border-line px-6 py-3.5 transition-colors hover:bg-surface sm:w-auto"
              >
                Say hello <span aria-hidden>→</span>
              </a>
              <a
                href={CV_URL}
                target="_blank"
                rel="noreferrer"
                download
                className="tick inline-flex w-full items-center justify-center gap-3 rounded-md border border-line px-6 py-3.5 transition-colors hover:bg-surface sm:w-auto"
              >
                Download CV <span aria-hidden>↓</span>
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="relative flex flex-col items-center lg:items-end">
            <div
              aria-hidden
              className="glow pointer-events-none absolute left-1/2 top-[44%] h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80 sm:h-[460px] sm:w-[460px] lg:left-auto lg:right-[-40px] lg:translate-x-0"
            />
            <ImageSlot
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              label="Add your photo"
              position="top"
              className="relative z-10 h-60 w-60 rounded-full border-[6px] border-bg shadow-xl sm:h-72 sm:w-72 lg:h-80 lg:w-80"
            />
            <p className="tick relative z-10 mt-6 text-center text-muted lg:text-right">
              {profile.location}
              <br />
              {profile.role}
            </p>
          </div>
        </div>

        <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-bg px-5 py-5">
              <dt className="tick text-muted">{s.label}</dt>
              <dd className="mt-2 text-2xl font-medium tracking-tight sm:text-3xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* tech stack marquee */}
      <div className="relative overflow-hidden border-y border-line bg-surface/60 py-3.5" aria-hidden>
        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
          {items.map((t, i) => (
            <span key={i} className="tick flex items-center gap-8 text-muted">
              {t}
              <span className="text-accent">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
