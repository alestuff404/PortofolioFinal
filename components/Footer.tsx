import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-5 py-8 sm:flex-row sm:px-8">
        <p className="tick text-muted">© {new Date().getFullYear()} {profile.name}</p>
        <p className="tick text-muted">{profile.location}</p>
      </div>
    </footer>
  );
}
