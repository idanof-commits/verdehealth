import React from "react";
import { CheckCircle2, Leaf, Activity, Shield, Heart, ArrowRight } from "lucide-react";

/** Мини компоненти (без shadcn/ui) */
function Button({
  className = "",
  variant = "solid",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "solid" | "outline" }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition-colors";
  const styles =
    variant === "outline"
      ? "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
      : "bg-[#4CAF50] text-white hover:bg-[#43A047]";
  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
function Card({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`rounded-2xl border bg-white ${className}`} {...props} />;
}
function CardContent({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`p-6 ${className}`} {...props} />;
}
function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#A5D6A7]"
      {...props}
    />
  );
}
function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#A5D6A7]"
      rows={4}
      {...props}
    />
  );
}

/** NAV */
const nav = [
  { label: "Начало", href: "#home" },
  { label: "Как работи", href: "#how" },
  { label: "Предимства", href: "#benefits" },
  { label: "Цени", href: "#pricing" },
  { label: "Контакт", href: "#contact" },
];

export default function VerdeHealthHome() {
  return (
    <div className="min-h-screen bg-[#FAFAF5] text-[#424242]">
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-[#4CAF50] grid place-items-center">
              <Leaf className="text-white" size={18} />
            </div>
            <span className="font-bold tracking-tight">VERDE HEALTH</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-[#4CAF50] transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <a href="#intake">
              <Button>Попълни въпросник</Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="mx-auto max-w-6xl px-4 pt-12 pb-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Персонализирано хранене. <span className="text-[#4CAF50]">Научно</span>. Чисто. Устойчиво.
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Платформа за индивидуални хранителни режими, изградени на база въпросник, анализ на BMR/TDEE и клинична
            нутрициология. Поддържаме фастинг, българска и средиземноморска кухня.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#intake">
              <Button>Започни безплатно</Button>
            </a>
            <a href="#pricing">
              <Button variant="outline">Виж плановете</Button>
            </a>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
            <CheckCircle2 className="text-[#4CAF50]" size={16} />
            GDPR-съобразено ·
            <CheckCircle2 className="text-[#4CAF50]" size={16} />
            Подкрепено от специалисти ·
            <CheckCircle2 className="text-[#4CAF50]" size={16} />
            PDF доклади
          </div>
        </div>
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="grid grid-cols-2 gap-4">
              <Stat label="BMR (ккал/ден)" value="1389" />
              <Stat label="TDEE (ккал/ден)" value="1908" />
              <Stat label="Целеви калории" value="1430" />
              <Stat label="BMI" value="25.2" />
            </div>
            <p className="text-xs text-slate-500 mt-3">
              * примерни стойности (жена, 42 г., 71 кг, 168 см, лека активност)
            </p>
          </CardContent>
        </Card>
      </section>

      {/* How it works */}
      <section id="how" className="bg-white border-y">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-3xl font-bold">Как работи</h2>
          <div className="mt-8 grid md:grid-cols-4 gap-6">
            <Step icon={<Shield />} title="1. Въпросник">
              Попълваш здравен и хранителен профил (алергии, цели, фастинг, стил на хранене).
            </Step>
            <Step icon={<Activity />} title="2. Изчисления">
              Изчисляваме BMR, TDEE и калориен таргет. Предлагаме макроси и прозорец на хранене.
            </Step>
            <Step icon={<Leaf />} title="3. Генериране на режим">
              Получаваш 14-дневен план (обяд/вечеря), версии: Български/Средиземноморски + PDF.
            </Step>
            <Step icon={<Heart />} title="4. Проследяване">
              Въвеждаш тегло и обиколки; виждаш графики и насоки от специалист.
            </Step>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-bold">Защо VERDE HEALTH</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Card className="shadow">
            <CardContent>
              <h3 className="font-semibold text-lg">Наука + Традиция</h3>
              <p className="text-slate-600 mt-2">
                Комбинираме клинична нутрициология с българска кухня и фастинг протоколи.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow">
            <CardContent>
              <h3 className="font-semibold text-lg">Персонализация</h3>
              <p className="text-slate-600 mt-2">
                Изключваме непоносимости и предпочитания, поддържаме различни стилове и цели.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow">
            <CardContent>
              <h3 className="font-semibold text-lg">GDPR и сигурност</h3>
              <p className="text-slate-600 mt-2">Съгласия, право на изтриване, лог на обработките и защитени данни.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-white border-y">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-3xl font-bold">Планове и цени</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <PriceCard tier="Basic" price="0 лв" bullets={["Въпросник", "Автоматични изчисления", "Базов 7-дневен план"]} cta="Започни" />
            <PriceCard
              tier="Premium"
              price="19.90 лв / месец"
              featured
              bullets={["14-дневни планове", "PDF доклад", "Проследяване и графики", "Поддръжка от специалист"]}
              cta="Абонирай се"
            />
            <PriceCard tier="Консултация" price="50 лв / сесия" bullets={["Онлайн/видео сесия", "Корекции по режима", "Отговори на въпроси"]} cta="Запази час" />
          </div>
        </div>
      </section>

      {/* Intake CTA */}
      <section id="intake" className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-3xl border bg-white p-8 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-2xl font-bold">Готови ли сте да започнете?</h3>
            <p className="text-slate-600 mt-2">
              Попълнете краткия въпросник и получете индивидуален хранителен режим до минути. Данните се обработват сигурно и съобразно GDPR.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="/intake">
                <Button>Попълни въпросник</Button>
              </a>
              <a href="#contact">
                <Button variant="outline">
                  Имам въпрос <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <MiniPoint title="Фастинг протоколи" />
            <MiniPoint title="Български/Средиземноморски стил" />
            <MiniPoint title="Изключване на непоносимости" />
            <MiniPoint title="PDF отчет и препоръки" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white border-t">
        <div className="mx-auto max-w-6xl px-4 py-14 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold">Свържете се с нас</h2>
            <p className="text-slate-600 mt-2">Имейл: info@verdehealth.bg · Тел.: +359 88 000 0000</p>
            <ul className="mt-4 text-slate-600 list-disc pl-5">
              <li>GDPR: Личните данни се съхраняват безопасно и само за целите на изготвяне на режим.</li>
              <li>Право на изтриване: По всяко време можете да заявите изтриване/експорт на данни.</li>
            </ul>
          </div>
          <form className="grid gap-3">
            <Input placeholder="Вашето име" />
            <Input placeholder="Имейл" type="email" />
            <Textarea placeholder="Как можем да помогнем?" />
            <Button>Изпрати</Button>
          </form>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} VERDE HEALTH · Всички права запазени</p>
          <div className="flex gap-4">
            <a href="/legal/privacy" className="hover:text-[#4CAF50]">Политика за поверителност</a>
            <a href="/legal/terms" className="hover:text-[#4CAF50]">Условия за ползване</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <Card className="shadow">
      <CardContent className="p-4">
        <p className="text-xs text-slate-500">{label}</p>
        <p className="text-3xl font-bold">{value}</p>
      </CardContent>
    </Card>
  );
}

function Step({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border bg-[#FAFAF5] p-5">
      <div className="flex items-center gap-2">
        <div className="h-9 w-9 rounded-full bg-[#C8E6C9] grid place-items-center text-[#4CAF50]">{icon}</div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-slate-600 mt-2 text-sm">{children}</p>
    </div>
  );
}

function PriceCard({
  tier,
  price,
  bullets,
  cta,
  featured,
}: {
  tier: string;
  price: string;
  bullets: string[];
  cta: string;
  featured?: boolean;
}) {
  return (
    <Card className={`rounded-2xl ${featured ? "border-[#4CAF50] shadow-xl" : "shadow"}`}>
      <CardContent>
        <h3 className="text-xl font-semibold">{tier}</h3>
        <p className="mt-1 text-3xl font-extrabold">{price}</p>
        <ul className="mt-4 grid gap-2 text-slate-600">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-2 items-start">
              <CheckCircle2 className="text-[#4CAF50] mt-0.5" size={18} />
              {b}
            </li>
          ))}
        </ul>
        <Button className="mt-6 w-full">{cta}</Button>
      </CardContent>
    </Card>
  );
}

function MiniPoint({ title }: { title: string }) {
  return (
    <div className="rounded-xl border bg-white p-4 text-sm">
      <div className="flex items-center gap-2">
        <CheckCircle2 className="text-[#4CAF50]" size={16} />
        <span className="font-medium">{title}</span>
      </div>
    </div>
  );
}
