import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
// @ts-ignore Next.js handles this global stylesheet import.
import "./globals.css";

export const metadata: Metadata = {
  title: "Nanda Valeri — Web Developer & AI Enthusiast",
  description:
    "Portfolio of Nanda Valeri, Informatics student at UMN. Full-stack web developer, AI/ML enthusiast, and project manager. Open to internships.",
};

// Apply the saved theme before first paint to avoid a flash
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.setAttribute('data-theme',t)}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
