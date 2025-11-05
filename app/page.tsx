export default function Page() {
  return (
    <main>
      {/* HERO */}
      <section className="container py-14">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-emerald-700 text-sm font-semibold">
              Ново · Генератор на планове
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight">
              Добре дошли във <span className="text-brand">VERDE HEALTH</span>
            </h1>
            <p className="mt-3 text-lg text-slate-600">
              Персонализирани хранителни режими, BMR/TDEE калкулации и проследяване на прогрес — в един модерен уеб инструмент.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/intake" className="btn btn-primary">Попълни въпросник</a>
              <a href="/legal/privacy" className="btn btn-ghost">Научи повече</a>
            </div>
          </div>

          <div className="card">
            <ul className="grid gap-3 text-slate-700">
              <li>✅ 14-дневни планове (2–3 хранения, фастинг по избор)</li>
              <li>✅ Средиземноморски и български стил + персонални предпочитания</li>
              <li>✅ Експорт в PDF и изпращане по имейл</li>
              <li>✅ Подготвено за свързване с домейн и плащания</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card">
            <h3 className="text-lg font-semibold">Калкулации</h3>
            <p className="mt-1 text-slate-600">BMR/TDEE, макроси, WHR и препоръки за дефицит.</p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold">План генератор</h3>
            <p className="mt-1 text-slate-600">14 дни с разтоварващ ден, 2–5 хранения и стил по избор.</p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold">Експорт</h3>
            <p className="mt-1 text-slate-600">PDF отчет и имейл до клиента — готово за споделяне.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
