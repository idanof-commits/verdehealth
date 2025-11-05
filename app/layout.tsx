export const metadata = {
  title: "VERDE HEALTH",
  description: "Персонализирани хранителни режими и проследяване",
};

import "./global.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bg">
      <body>
        <header className="bg-slate-900 text-white">
          <div className="container flex items-center gap-6 py-3">
            <a href="/" className="font-extrabold tracking-wide">VERDE HEALTH</a>
            <nav className="flex gap-4 text-slate-300">
              <a href="/intake" className="hover:text-white">Въпросник</a>
              <a href="/legal/privacy" className="hover:text-white">Политика</a>
              <a href="/legal/terms" className="hover:text-white">Условия</a>
            </nav>
          </div>
        </header>

        {children}

        <footer className="container py-10 text-slate-600">
          <div className="border-t border-slate-200 pt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} VERDE HEALTH</p>
            <div className="text-sm">
              <a className="hover:underline" href="/legal/privacy">Политика за поверителност</a>
              <span className="mx-2">·</span>
              <a className="hover:underline" href="/legal/terms">Условия за ползване</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
