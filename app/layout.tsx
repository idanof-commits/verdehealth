export const metadata = {
  title: "VERDE HEALTH",
  description: "Персонализирани хранителни режими и проследяване",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bg">
      <body style={{ margin: 0, background: "#FAFAF5", color: "#111" }}>
        <header style={{ padding: "12px 16px", background: "#0f172a", color: "#fff" }}>
          <div style={{ maxWidth: 1040, margin: "0 auto", display: "flex", gap: 16, alignItems: "center" }}>
            <a href="/" style={{ color: "#fff", textDecoration: "none", fontWeight: 800 }}>VERDE HEALTH</a>
            <nav style={{ display: "flex", gap: 12 }}>
              <a href="/intake" style={{ color: "#cbd5e1" }}>Въпросник</a>
              <a href="/legal/privacy" style={{ color: "#cbd5e1" }}>Политика</a>
              <a href="/legal/terms" style={{ color: "#cbd5e1" }}>Условия</a>
            </nav>
          </div>
        </header>
        {children}
        <footer style={{ padding: "24px 16px", color: "#475569" }}>
          <div style={{ maxWidth: 1040, margin: "0 auto" }}>© {new Date().getFullYear()} VERDE HEALTH</div>
        </footer>
      </body>
    </html>
  );
}
