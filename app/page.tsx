export default function Page() {
  return (
    <main style={{ minHeight: "70vh" }}>
      <section style={{ maxWidth: 1040, margin: "0 auto", padding: "40px 16px" }}>
        <h1 style={{ fontSize: 28, fontWeight: 800 }}>Добре дошли във VERDE HEALTH</h1>
        <p style={{ color: "#475569" }}>Персонализирани хранителни режими, проследяване на прогрес и професионални препоръки.</p>
        <p style={{ marginTop: 12 }}>
          Започнете с <a href="/intake">въпросника</a> – ще получите калкулации (BMR/TDEE), базов 14‑дневен план и PDF.
        </p>
      </section>
    </main>
  );
}
