import { profile } from "@/data/content";
import Reveal from "./Reveal";

export default function Contact() {
  const links = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "WhatsApp", value: profile.phone, href: profile.phoneHref },
    { label: "GitHub", value: profile.links.github.replace("https://", ""), href: profile.links.github },
    ...(profile.links.linkedin
      ? [{ label: "LinkedIn", value: profile.links.linkedin.replace("https://", ""), href: profile.links.linkedin }]
      : []),
  ];

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <p className="tick text-muted">(05) Contact</p>
        <h2 className="mt-6 max-w-4xl text-[clamp(2.4rem,7vw,5.5rem)] font-medium leading-[1] tracking-[-0.045em]">
          Let's build something <em className="text-accent [font-style:italic]">meaningful.</em>
        </h2>
        <p className="mt-6 max-w-xl text-lg text-muted">
          I'm looking for internship opportunities in software engineering, web developer, Project Manager/Management or AI/ML. Feel free to reach out anytime.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="tick mt-10 inline-flex items-center gap-3 rounded-md bg-accent px-7 py-4 text-white transition-opacity hover:opacity-90"
        >
          Say hello <span aria-hidden>→</span>
        </a>
      </Reveal>

      <ul className="mt-20 divide-y divide-line border-y border-line">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group grid gap-1 py-5 transition-colors hover:bg-surface/60 sm:grid-cols-[160px_1fr_auto] sm:items-center sm:gap-8 sm:px-3"
            >
              <span className="tick text-muted">{l.label}</span>
              <span className="min-w-0 break-words text-lg font-medium tracking-tight">{l.value}</span>
              <span aria-hidden className="hidden transition-transform group-hover:translate-x-1 sm:block">
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
