import "./global.css";
import React from "react";

export const metadata = {
  title: "VERDE HEALTH",
  description: "Персонализирани хранителни режими и проследяване",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bg">
      <body>
        <header className="bg-slate-900 text-white">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-6">
            <a href="/" className="font-extrabold tracking-wide">VERDE HEALTH</a>
            <nav className="flex gap-4 text-slate-300 text-sm">
              <a href="/intake" className="hover:text-white">Въпросник</a>
              <a href="/legal/privacy" className="hover:text-white">Политика</a>
              <a href="/legal/terms" className="hover:text-white">Условия</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mx-auto max-w-6xl px-4 py-8 text-slate-500 text-sm">
          © {new Date().getFullYear()} VERDE HEALTH
        </footer>
      </body>
    </html>
  );
}
