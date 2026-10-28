export default function SectionHeader({ index, title, subtitle }: { index: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-12 border-b border-line pb-6 sm:mb-16">
      <div className="flex items-end justify-between gap-6">
        <h2 className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">{title}</h2>
        <span className="tick pb-2 text-muted">{index}</span>
      </div>
      {subtitle && <p className="mt-4 max-w-xl text-muted">{subtitle}</p>}
    </div>
  );
}
