import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  TrendingUp,
  Building2,
  Store,
  Phone as PhoneIcon,
  Leaf,
  ArrowUp,
  Layers,
  MoveVertical,
  Car,
  MapPin,
  Award,
  Landmark,
  Key,
  Tv,
  Video,
  Dumbbell,
  Coffee,
  Snowflake,
  Building,
  Briefcase,
  ShoppingBag,
  TrainFront,
  Check,
  Menu,
  Sparkles,
  AlertCircle,
  Calendar,
  Download,
  Users,
  ShieldCheck,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
} from "lucide-react";
import tower from "@/assets/plinth-tower.jpg";
import office from "@/assets/plinth-office.jpg";
import showroom from "@/assets/plinth-showroom.jpg";

export const Route = createFileRoute("/")({
  component: PlinthLanding,
  head: () => ({
    meta: [
      { title: "Plinth — Premium Commercial Space, Sindhu Bhavan Road" },
      { name: "description", content: "Plinth on Sindhu Bhavan Road, Ahmedabad. G+38 storey landmark commercial tower with 15–18% expected annual ROI. Office and showroom spaces from 900 to 2700 sq.ft." },
      { property: "og:title", content: "Plinth — Premium Commercial Space" },
      { property: "og:description", content: "G+38 landmark commercial tower on Sindhu Bhavan Road, Ahmedabad. 15–18% expected ROI." },
    ],
  }),
});

/* ---------- shared bits ---------- */

const SectionLabel = ({ n, t }: { n: string; t: string }) => (
  <div className="flex items-center gap-4 mb-8">
    <span className="h-px w-16 bg-[var(--gold-soft)]" />
    <span className="text-xs tracking-[0.3em] text-[var(--gold)]">
      {n} / {t}
    </span>
  </div>
);

const goldText = "bg-[var(--gradient-gold)] bg-clip-text text-transparent";

/* ---------- 1. NAV ---------- */

function Nav() {
  return (
    <header className="absolute top-0 inset-x-0 z-30">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-7 flex items-center justify-between">
        <nav className="hidden md:flex items-center gap-9 text-[15px] font-light text-foreground/90">
          {["Home", "ROI", "Highlights", "Spaces", "Amenities", "Location", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-[var(--gold)] transition">
              {l}
            </a>
          ))}
        </nav>
        <button className="md:hidden text-foreground" aria-label="Menu">
          <Menu className="h-6 w-6" />
        </button>
        <button className="rounded-full px-8 py-3 text-sm font-medium text-background bg-[var(--gradient-gold)] hover:opacity-90 transition shadow-[0_0_40px_-8px_oklch(0.78_0.13_75/0.55)]">
          Enquire Now
        </button>
      </div>
    </header>
  );
}

/* ---------- 2. HERO ---------- */

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16">
      {/* radial gold glows like screenshot */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_55%,oklch(0.78_0.13_75/0.10),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_85%_10%,oklch(0.78_0.13_75/0.08),transparent_70%)]" />
      {/* decorative concentric arcs top-right */}
      <svg className="absolute -top-40 -right-40 w-[700px] h-[700px] opacity-[0.18] pointer-events-none" viewBox="0 0 700 700" fill="none">
        {[180, 240, 300, 360, 420, 480, 540].map((r) => (
          <circle key={r} cx="500" cy="200" r={r} stroke="oklch(0.78 0.13 75)" strokeWidth="0.6" />
        ))}
      </svg>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-start">
        {/* LEFT */}
        <div className="pt-4">
          <div className="inline-flex items-center gap-3 rounded-full border border-[var(--gold-soft)]/40 px-6 py-3 mb-12">
            <span className="h-2 w-2 rounded-full bg-[var(--gold)] animate-pulse" />
            <span className="text-[11px] tracking-[0.25em] text-foreground/80">NOW LAUNCHING</span>
            <span className="text-foreground/40">·</span>
            <span className="text-[11px] tracking-[0.28em] font-medium text-foreground">SINDHU BHAVAN ROAD</span>
          </div>

          <p className="font-serif italic text-2xl text-foreground/85 mb-3">Looking For</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.02] text-foreground tracking-tight">
            Premium Commercial
            <br />
            <span className="italic">Space?</span>
          </h1>

          <div className="mt-10">
            <div className="flex items-center gap-4 mb-2">
              <span className="h-px w-10 bg-[var(--gold-soft)]" />
              <span className="text-[11px] tracking-[0.3em] text-[var(--gold)]">EXPECTED ANNUAL ROI</span>
            </div>
            <div className={`font-serif text-7xl md:text-8xl lg:text-[8.5rem] leading-none ${goldText}`}>
              15–18<span className="text-6xl md:text-7xl">%</span>
            </div>
            <p className="mt-6 max-w-md text-foreground/70 leading-relaxed">
              A high-growth commercial investment opportunity in Ahmedabad's most prestigious business corridor.
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-medium text-background bg-[var(--gradient-gold)] hover:opacity-90 transition shadow-[0_0_50px_-8px_oklch(0.78_0.13_75/0.6)]">
                Get Pricing &amp; ROI Details
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-medium text-foreground border border-[var(--gold-soft)]/40 hover:border-[var(--gold)] hover:bg-[var(--gold)]/5 transition">
                <PhoneIcon className="h-4 w-4 text-[var(--gold)]" />
                Talk to Advisor
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT - tower */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden border border-[var(--gold-soft)]/30 aspect-[4/5]">
            <img
              src={tower}
              alt="G+38 storey landmark tower at Plinth Sindhu Bhavan Road"
              width={1080}
              height={1350}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/30" />

            {/* top tags */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
              <div className="rounded-full border border-[var(--gold-soft)]/50 bg-background/40 backdrop-blur px-5 py-2 text-xs tracking-[0.2em] text-foreground">
                G + 38 STOREY
              </div>
              <div className="rounded-full border border-[var(--gold-soft)]/50 bg-background/40 backdrop-blur px-5 py-2 text-xs tracking-[0.25em] text-foreground">
                LANDMARK
              </div>
            </div>

            {/* floating ROI card */}
            <div className="absolute left-6 bottom-8 max-w-[260px] rounded-2xl border border-[var(--gold-soft)]/40 bg-card/85 backdrop-blur p-6">
              <div className="text-[10px] tracking-[0.3em] text-[var(--gold)] mb-2">PROPERTY APPRECIATION</div>
              <div className={`font-serif text-4xl ${goldText}`}>15–18%</div>
              <p className="text-xs text-foreground/70 mt-2 leading-snug">
                Expected annual returns on investment
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* stat strip - left aligned under CTAs like screenshot */}
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 mt-14 grid grid-cols-1 sm:grid-cols-3 gap-5 lg:max-w-[700px] lg:mx-[max(1.5rem,calc((100%-1400px)/2+3rem))]">
        {[
          { icon: TrendingUp, label: "STARTING", v: "₹65 Lakhs" },
          { icon: Building2, label: "OFFICE FROM", v: "900 Sq.ft" },
          { icon: Store, label: "SHOWROOM FROM", v: "2700 Sq.ft" },
        ].map(({ icon: Icon, label, v }) => (
          <div
            key={label}
            className="rounded-2xl border border-[var(--gold-soft)]/25 bg-gradient-to-br from-card/70 to-card/30 backdrop-blur p-5"
          >
            <Icon className="h-4 w-4 text-[var(--gold)] mb-3" />
            <div className="text-[10px] tracking-[0.3em] text-foreground/55 mb-2">{label}</div>
            <div className="font-serif text-xl text-foreground">{v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- 3. INVESTMENT OPPORTUNITY (ROI) ---------- */

function ROISection() {
  return (
    <section id="roi" className="py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <SectionLabel n="02" t="INVESTMENT OPPORTUNITY" />
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground max-w-4xl">
          Earn up to <span className={`italic ${goldText}`}>15–18%</span>
          <br />
          annual returns.
        </h2>
        <p className="mt-10 max-w-2xl text-foreground/70 leading-relaxed text-lg">
          A rare opportunity to own a unit inside Ahmedabad's most in-demand commercial corridor.
          Exceptional rental yields, sustained capital appreciation, and a tenant ready ecosystem.
        </p>

        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {/* Chart card */}
          <div className="lg:col-span-2 rounded-2xl border border-[var(--gold-soft)]/30 bg-card/50 p-8 lg:p-10">
            <div className="flex justify-between items-start mb-8">
              <div>
                <div className="text-[10px] tracking-[0.3em] text-[var(--gold)] mb-3">PROJECTED ROI CURVE</div>
                <h3 className="font-serif text-3xl text-foreground">Capital Appreciation</h3>
              </div>
              <div className="text-right">
                <div className={`font-serif text-4xl ${goldText}`}>8%</div>
                <div className="text-[10px] tracking-[0.3em] text-foreground/60 mt-1">PEAK YIELD</div>
              </div>
            </div>

            {/* Chart */}
            <div className="relative h-64">
              <svg viewBox="0 0 600 220" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="curveFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.78 0.13 75)" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="oklch(0.78 0.13 75)" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="curveStroke" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="oklch(0.65 0.13 65)" />
                    <stop offset="100%" stopColor="oklch(0.88 0.14 80)" />
                  </linearGradient>
                  <filter id="curveGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="b" />
                    <feMerge>
                      <feMergeNode in="b" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <clipPath id="curveReveal">
                    <rect x="0" y="0" height="220" width="0">
                      <animate attributeName="width" from="0" to="600" dur="3.2s" repeatCount="indefinite" />
                    </rect>
                  </clipPath>
                </defs>

                {/* Grid */}
                {[40, 80, 120, 160, 200].map((y) => (
                  <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="oklch(0.4 0.02 70)" strokeDasharray="3 6" strokeWidth="0.5" />
                ))}

                {/* Animated reveal group */}
                <g clipPath="url(#curveReveal)">
                  <path
                    d="M 20 190 L 90 165 L 160 140 L 230 120 L 300 100 L 370 80 L 440 65 L 510 50 L 580 35 L 580 220 L 20 220 Z"
                    fill="url(#curveFill)"
                  />
                  <path
                    d="M 20 190 L 90 165 L 160 140 L 230 120 L 300 100 L 370 80 L 440 65 L 510 50 L 580 35"
                    stroke="url(#curveStroke)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    filter="url(#curveGlow)"
                  />
                  {[[20, 190], [90, 165], [160, 140], [230, 120], [300, 100], [370, 80], [440, 65], [510, 50], [580, 35]].map(([x, y], i) => (
                    <circle key={i} cx={x} cy={y} r="4" fill="oklch(0.78 0.13 75)" />
                  ))}
                </g>

                {/* Traveling pulse along the curve */}
                <circle r="6" fill="oklch(0.95 0.12 85)" filter="url(#curveGlow)" opacity="0.95">
                  <animateMotion
                    dur="3.2s"
                    repeatCount="indefinite"
                    path="M 20 190 L 90 165 L 160 140 L 230 120 L 300 100 L 370 80 L 440 65 L 510 50 L 580 35"
                  />
                  <animate attributeName="r" values="3;7;3" dur="1.2s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
            <div className="grid grid-cols-9 text-[10px] tracking-widest text-foreground/50 mt-3">
              {["Y1","Y2","Y3","Y4","Y5","Y6","Y7","Y8","Y9"].map((y) => <span key={y} className="text-center">{y}</span>)}
            </div>

            <div className="mt-8 pt-8 border-t border-[var(--gold-soft)]/20 grid grid-cols-3 gap-6">
              {[
                { l: "ENTRY YIELD", v: "8%" },
                { l: "STABILIZED", v: "15–18%" },
                { l: "HORIZON", v: "4 Yrs" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-[10px] tracking-[0.3em] text-foreground/60 mb-2">{s.l}</div>
                  <div className={`font-serif text-3xl ${goldText}`}>{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Side stat cards */}
          <div className="grid grid-cols-2 gap-5">
            {[
              { icon: TrendingUp, v: "92%", t: "High Rental Demand Zone", d: "Occupancy rate in the corridor" },
              { icon: MapPin, v: "A+", t: "Prime Sindhu Bhavan Location", d: "Premium commercial grade" },
              { icon: TrendingUp, v: "2.4×", t: "Property Appreciation", d: "Projected 5-year growth" },
              { icon: Award, v: "IGBC", t: "Grade-A Commercial", d: "Green building certified" },
            ].map(({ icon: Icon, v, t, d }) => (
              <div key={t} className="rounded-2xl border border-[var(--gold-soft)]/30 bg-card/50 p-6">
                <div className="h-10 w-10 rounded-full bg-[var(--gradient-gold)] flex items-center justify-center mb-5">
                  <Icon className="h-4 w-4 text-background" />
                </div>
                <div className={`font-serif text-3xl ${goldText} mb-3`}>{v}</div>
                <div className="text-sm text-foreground font-medium">{t}</div>
                <p className="text-xs text-foreground/60 mt-2 leading-snug">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 4. HIGHLIGHTS ---------- */

function Highlights() {
  const items = [
    { icon: Building, t: "G + 38 Storey", d: "Landmark tower defining the skyline of Sindhu Bhavan Road." },
    { icon: Leaf, t: "Green Building", d: "IGBC certified, energy-efficient and sustainably engineered." },
    { icon: ArrowUp, t: "18 Lifts", d: "High-speed vertical transport — no wait times, zero downtime." },
    { icon: Layers, t: "18 Offices / Floor", d: "Thoughtfully planned floor plates for productivity & flow." },
    { icon: MoveVertical, t: "11.5 ft Ceilings", d: "Double-volume interiors for a grand, open workspace." },
    { icon: Car, t: "−4 Basement Parking", d: "Ample secured parking across four basement levels." },
  ];
  return (
    <section id="highlights" className="py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <SectionLabel n="03" t="PROJECT HIGHLIGHTS" />
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground">
            Engineered to
            <br />
            <span className={`italic ${goldText}`}>impress.</span>
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed lg:mt-8">
            Every number has been carefully considered — floor plates, ceiling heights, basements, elevators.
            Premium scale that tenants and investors recognize instantly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, t, d }, i) => (
            <div key={t} className="relative rounded-2xl border border-[var(--gold-soft)]/30 bg-card/50 p-8 hover:border-[var(--gold)]/60 transition group">
              <div className="flex items-start justify-between mb-12">
                <div className="h-12 w-12 rounded-xl bg-[var(--gradient-gold)] flex items-center justify-center">
                  <Icon className="h-5 w-5 text-background" />
                </div>
                <span className="text-xs tracking-widest text-foreground/40">0{i + 1}</span>
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-3">{t}</h3>
              <p className="text-sm text-foreground/65 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 5. SPACES ---------- */

function Spaces() {
  const cards = [
    {
      tag: "OFFICE SPACE",
      img: office,
      size: "900",
      unit: "Sq.ft",
      title: "Starting ₹65 Lakhs",
      features: [
        "18 offices per floor · customizable layouts",
        "11.5 ft ceilings, floor-to-ceiling glass",
        "Dedicated high-speed elevators",
        "Central air-conditioning",
      ],
    },
    {
      tag: "SHOWROOM SPACE",
      img: showroom,
      size: "2700",
      unit: "Sq.ft",
      title: "Premium ground retail",
      features: [
        "Double-height frontage",
        "High footfall, high visibility",
        "Signage rights on key elevation",
        "Front + rear access",
      ],
    },
  ];
  return (
    <section id="spaces" className="py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="text-center mb-20">
          <div className="text-xs tracking-[0.3em] text-[var(--gold)] mb-6">04 / SPACE OPTIONS</div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground">
            Designed for <span className={`italic ${goldText}`}>business &amp;</span>
            <br />
            <span className={`italic ${goldText}`}>brands.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {cards.map((c) => (
            <div key={c.tag} className="rounded-3xl border border-[var(--gold-soft)]/30 bg-card/50 overflow-hidden">
              <div className="relative aspect-[16/10]">
                <img src={c.img} alt={c.tag} loading="lazy" width={1400} height={875} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute top-6 left-6 rounded-full border border-[var(--gold-soft)]/50 bg-background/40 backdrop-blur px-5 py-2 text-xs tracking-[0.25em] text-foreground">
                  {c.tag}
                </div>
                <div className="absolute bottom-6 left-8 text-[10px] tracking-[0.3em] text-[var(--gold)]">STARTING FROM</div>
              </div>
              <div className="p-8 lg:p-10">
                <div className="flex items-baseline gap-3 mb-8">
                  <span className={`font-serif text-7xl ${goldText}`}>{c.size}</span>
                  <span className="font-serif text-2xl text-foreground/70 italic">{c.unit}</span>
                </div>
                <div className="flex justify-between items-center pb-6 border-b border-[var(--gold-soft)]/20">
                  <h3 className="font-serif text-2xl text-foreground">{c.title}</h3>
                  <span className="text-xs tracking-[0.2em] text-[var(--gold)]">15–18% ROI</span>
                </div>
                <ul className="mt-6 space-y-4">
                  {c.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-foreground/80">
                      <span className="mt-0.5 h-5 w-5 rounded-full border border-[var(--gold-soft)]/60 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-[var(--gold)]" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="mt-8 w-full rounded-full py-4 bg-[var(--gradient-gold)] text-background font-medium flex items-center justify-center gap-2 hover:opacity-90 transition">
                  Check Availability <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 6. WHY INVEST ---------- */

function WhyInvest() {
  const items = [
    { icon: Landmark, t: "Pre-Launch Pricing Advantage", d: "Secure your investment at exclusive early-bird rates before the official market launch. Maximize capital appreciation from day zero.", featured: true },
    { icon: Building, t: "High Rental Yield Potential", d: "Strategic location ensures high occupancy rates and premium rental returns from day one, driven by unparalleled corporate demand." },
    { icon: Building2, t: "Future Landmark Development", d: "Be part of an iconic structure that will redefine the skyline and set new standards for luxury commercial spaces." },
    { icon: Key, t: "Limited Entry Opportunity", d: "Exclusive availability with a limited number of units remaining in this premium phase. Rarity dictates value." },
  ];

  const fullText = "Why Invest Now?";
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const [typed, setTyped] = React.useState("");
  const [started, setStarted] = React.useState(false);
  const [cardsVisible, setCardsVisible] = React.useState(false);

  React.useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setStarted(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  React.useEffect(() => {
    if (!started) return;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(fullText.slice(0, i));
      if (i >= fullText.length) {
        clearInterval(id);
        setTimeout(() => setCardsVisible(true), 250);
      }
    }, 90);
    return () => clearInterval(id);
  }, [started]);

  const splitIdx = "Why Invest ".length;
  const firstPart = typed.slice(0, Math.min(typed.length, splitIdx));
  const secondPart = typed.length > splitIdx ? typed.slice(splitIdx) : "";
  const doneTyping = typed.length >= fullText.length;

  return (
    <section ref={sectionRef} id="amenities" className="py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <SectionLabel n="05" t="EXCLUSIVE OPPORTUNITY" />
        <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-tight text-foreground mb-10">
          <span>{firstPart}</span>
          <span className={`italic ${goldText}`}>{secondPart}</span>
          <span
            aria-hidden
            className="inline-block w-[3px] md:w-[5px] h-[0.85em] align-[-0.08em] ml-2 bg-[var(--gold)]"
            style={{
              animation: doneTyping ? "plinth-blink 1s steps(2) infinite" : "none",
              opacity: doneTyping ? undefined : 1,
            }}
          />
        </h2>
        <style>{`@keyframes plinth-blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }`}</style>
        <p className="max-w-3xl text-foreground/70 text-lg leading-relaxed mb-16">
          The convergence of strategic location, architectural brilliance, and optimal market timing creates an unprecedented window for discerning investors.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, t, d, featured }, idx) => (
            <div
              key={t}
              style={{ transitionDelay: `${idx * 150}ms` }}
              className={`rounded-2xl p-8 min-h-[420px] flex flex-col transform transition-all duration-700 ease-out ${
                cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              } ${
                featured
                  ? "bg-[var(--gradient-gold)] text-background"
                  : "border border-[var(--gold-soft)]/30 bg-card/50 text-foreground"
              }`}
            >
              <div className={`h-14 w-14 rounded-full flex items-center justify-center mb-10 ${featured ? "bg-background/20" : "bg-card border border-[var(--gold-soft)]/40"}`}>
                <Icon className={`h-5 w-5 ${featured ? "text-background" : "text-[var(--gold)]"}`} />
              </div>
              <h3 className="font-serif text-2xl mb-5 leading-snug">{t}</h3>
              <p className={`text-sm leading-relaxed ${featured ? "text-background/85" : "text-foreground/65"}`}>
                {d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 7. WORKSPACE AMENITIES ---------- */

function Amenities() {
  const items = [
    { icon: Tv, t: "Conference Room", d: "Fully-equipped boardrooms" },
    { icon: Video, t: "Projector Room", d: "Dedicated presentation suite" },
    { icon: Dumbbell, t: "Gym & Wellness", d: "Premium fitness floor" },
    { icon: Coffee, t: "Cafeteria", d: "Artisanal coffee & cuisine" },
    { icon: Building, t: "Double Height Reception", d: "Grand arrival experience" },
    { icon: Snowflake, t: "Central Air-Conditioning", d: "Uniform climate control" },
  ];
  return (
    <section className="py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <SectionLabel n="06" t="AMENITIES" />
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground">
            A workspace that
            <br />
            <span className={`italic ${goldText}`}>performs.</span>
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed lg:mt-8">
            Sindhu Bhavan isn't only an address — it's an ecosystem. Wellness, productivity, hospitality and convenience, all engineered into one landmark building.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-[var(--gold-soft)]/30 bg-card/50 p-6 flex items-center gap-5 hover:border-[var(--gold)]/60 transition">
              <div className="h-14 w-14 rounded-xl bg-[var(--gradient-gold)] flex items-center justify-center shrink-0">
                <Icon className="h-5 w-5 text-background" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground">{t}</h3>
                <p className="text-sm text-foreground/60 mt-1">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 8. LOCATION ---------- */

function Location() {
  const places = [
    { icon: Briefcase, t: "Corporate Park", d: "0.5 km" },
    { icon: ShoppingBag, t: "Luxury Retail Hub", d: "1.2 km" },
    { icon: TrainFront, t: "Metro Station", d: "2.8 km" },
    { icon: MapPin, t: "Airport", d: "12 km" },
  ];
  return (
    <section id="location" className="py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <SectionLabel n="07" t="LOCATION ADVANTAGE" />
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground mb-8">
              In the heart of
              <br />
              <span className={`italic ${goldText}`}>Sindhu Bhavan</span>
              <br />
              <span className={`italic ${goldText}`}>Road.</span>
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-10 max-w-xl">
              Ahmedabad's most celebrated commercial stretch. Home to premium brands, corporate headquarters, fine dining, and a business ecosystem that is already delivering industry-leading yields.
            </p>

            <div className="space-y-3">
              {places.map(({ icon: Icon, t, d }) => (
                <div key={t} className="rounded-2xl border border-[var(--gold-soft)]/30 bg-card/50 px-6 py-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full border border-[var(--gold-soft)]/50 flex items-center justify-center">
                      <Icon className="h-4 w-4 text-[var(--gold)]" />
                    </div>
                    <span className="text-foreground">{t}</span>
                  </div>
                  <span className="font-serif italic text-[var(--gold)] text-lg">{d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="relative rounded-3xl border border-[var(--gold-soft)]/30 bg-card/40 aspect-square overflow-hidden">
            <div className="absolute top-6 left-1/2 -translate-x-1/2 rounded-full border border-[var(--gold-soft)]/50 bg-background/60 backdrop-blur px-5 py-2 text-xs text-foreground flex items-center gap-2 z-10">
              <MapPin className="h-3 w-3 text-[var(--gold)]" /> Sindhu Bhavan Rd, Ahmedabad · 380054
            </div>

            <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="oklch(0.32 0.03 70)" strokeWidth="0.4" />
                </pattern>
                <radialGradient id="hot" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="oklch(0.78 0.13 75)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="oklch(0.78 0.13 75)" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="400" height="400" fill="url(#grid)" />
              <line x1="0" y1="200" x2="400" y2="180" stroke="oklch(0.6 0.1 70 / 0.4)" strokeDasharray="4 6" />
              <line x1="200" y1="0" x2="220" y2="400" stroke="oklch(0.6 0.1 70 / 0.4)" strokeDasharray="4 6" />
              <line x1="40" y1="40" x2="380" y2="380" stroke="oklch(0.6 0.1 70 / 0.3)" strokeDasharray="4 6" />
              <circle cx="210" cy="200" r="80" fill="url(#hot)" />
              <circle cx="210" cy="200" r="8" fill="oklch(0.78 0.13 75)" />
              <circle cx="210" cy="200" r="14" fill="none" stroke="oklch(0.78 0.13 75)" strokeWidth="1" />
              {[[110, 110], [310, 130], [120, 290], [310, 290]].map(([x, y], i) => (
                <g key={i}>
                  <rect x={x - 20} y={y - 20} width="40" height="40" fill="none" stroke="oklch(0.5 0.05 70 / 0.4)" />
                  <circle cx={x} cy={y} r="3" fill="oklch(0.78 0.13 75)" />
                </g>
              ))}
            </svg>

            <div className="absolute bottom-6 right-6 rounded-2xl border border-[var(--gold-soft)]/40 bg-background/70 backdrop-blur p-5 text-right">
              <div className="text-[10px] tracking-[0.25em] text-foreground/70 mb-2">CONNECTIVITY SCORE</div>
              <div className="font-serif text-4xl">
                <span className={goldText}>9.6</span>
                <span className="text-foreground/40 text-2xl"> / 10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 8. DEVELOPER LEGACY ---------- */

function DeveloperLegacy() {
  const stats = [
    { icon: Building2, v: "24+", label: "Delivered Projects", serif: true },
    { icon: Award, v: "22", label: "Years of Experience", serif: true },
    { icon: Users, v: "8,500+", label: "Happy Clients", serif: true },
    { icon: ShieldCheck, v: "New Launch", label: "Certified & Approved", serif: true },
  ];
  const press = ["ET Realty", "Forbes India", "Business Standard", "Mint", "Ahmedabad Mirror"];
  return (
    <section className="py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="text-center mb-14">
          <div className="text-xs tracking-[0.3em] text-[var(--gold)] mb-6">08 / DEVELOPER LEGACY</div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground">
            Built on two decades of <span className={`italic ${goldText}`}>trust.</span>
          </h2>
          <p className="mt-8 max-w-2xl mx-auto text-foreground/70 leading-relaxed text-lg">
            A track record of landmark commercial projects delivered on time, every time — across
            Ahmedabad's most prestigious corridors.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map(({ icon: Icon, v, label }) => (
            <div
              key={label}
              className="rounded-2xl border border-[var(--gold-soft)]/30 bg-card/40 p-8 text-center min-h-[240px] flex flex-col items-center justify-center"
            >
              <div className="h-14 w-14 rounded-full bg-[var(--gradient-gold)] flex items-center justify-center mb-8 shadow-lg shadow-[var(--gold)]/30">
                <Icon className="h-5 w-5 text-background" />
              </div>
              <div className={`font-serif text-5xl ${goldText} mb-3`}>{v}</div>
              <div className="text-sm text-foreground/70">{label}</div>
            </div>
          ))}
        </div>

        {/* Featured in strip */}
        <div className="mt-10 rounded-full border border-[var(--gold-soft)]/30 bg-card/30 px-8 py-5 flex flex-wrap items-center justify-between gap-6">
          <div className="text-[10px] tracking-[0.3em] text-[var(--gold)]">FEATURED IN</div>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
            {press.map((p) => (
              <span key={p} className="font-serif text-lg text-foreground/80">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- INVESTMENT OPPORTUNITY CTA (big ROI) ---------- */

function InvestmentCTA() {
  return (
    <section className="py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.78_0.13_75/0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 text-center">
        <div className="inline-flex items-center gap-3 rounded-full border border-[var(--gold-soft)]/40 px-6 py-3 mb-12">
          <span className="h-2 w-2 rounded-full bg-[var(--gold)] animate-pulse" />
          <span className="text-xs tracking-[0.3em] text-foreground/80">INVESTMENT OPPORTUNITY</span>
        </div>

        <div className="text-xs tracking-[0.3em] text-[var(--gold)] mb-10">EXPECTED ANNUAL ROI</div>

        <div className={`font-serif leading-none ${goldText} text-[8rem] md:text-[12rem] lg:text-[16rem]`}>
          15–18<span className="text-[6rem] md:text-[9rem] lg:text-[11rem]">%</span>
        </div>

        <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-8">
          A landmark address. <span className={`italic ${goldText}`}>A landmark return.</span>
        </h3>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
          <button className="rounded-full px-8 py-4 bg-[var(--gradient-gold)] text-background font-medium flex items-center gap-3 hover:opacity-90 transition shadow-xl shadow-[var(--gold)]/30">
            <Calendar className="h-4 w-4" /> Book Site Visit
          </button>
          <button className="rounded-full px-8 py-4 border border-[var(--gold-soft)]/50 text-foreground font-medium flex items-center gap-3 hover:border-[var(--gold)] transition">
            <Download className="h-4 w-4 text-[var(--gold)]" /> Download Brochure <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-20 text-xs tracking-[0.4em] text-foreground/70">
          SINDHU BHAVAN ROAD <span className="text-[var(--gold)]">·</span> AHMEDABAD <span className="text-[var(--gold)]">·</span> 380054
        </div>
      </div>
    </section>
  );
}

/* ---------- 9. ENQUIRE NOW ---------- */

function EnquireNow() {
  return (
    <section id="contact" className="py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <SectionLabel n="09" t="ENQUIRE NOW" />

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
          {/* LEFT */}
          <div>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground">
              Get <span className={`italic ${goldText}`}>Complete</span>
              <br />
              Investment Details.
            </h2>
            <p className="mt-8 text-foreground/70 leading-relaxed text-lg max-w-xl">
              Priority access to pricing, RERA documentation, floor plans,
              rental projections &amp; exclusive pre-launch offers.
            </p>

            <div className="mt-12 rounded-2xl border border-[var(--gold-soft)]/40 bg-card/50 p-6 flex items-start gap-5">
              <div className="h-12 w-12 rounded-full bg-[var(--gradient-gold)] flex items-center justify-center shrink-0">
                <AlertCircle className="h-5 w-5 text-background" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-foreground">Limited Premium Units Available</h3>
                <p className="text-sm text-foreground/65 mt-2">
                  Only a handful of high-floor units remain in this phase.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-[var(--gold-soft)]/40 bg-card/50 p-8">
              <div className="text-[10px] tracking-[0.3em] text-[var(--gold)] mb-4">WHY INVEST NOW</div>
              <div className={`font-serif text-6xl ${goldText}`}>15–18%</div>
              <p className="text-sm text-foreground/65 mt-4">
                Expected annual ROI — rental yield + capital appreciation.
              </p>
            </div>
          </div>

          {/* RIGHT - Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-3xl border border-[var(--gold-soft)]/40 bg-card/60 p-8 lg:p-10"
          >
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="h-4 w-4 text-[var(--gold)]" />
              <span className="text-xs tracking-[0.3em] text-[var(--gold)]">PRIORITY ENQUIRY</span>
            </div>
            <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-10">
              Schedule a private consultation.
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-[10px] tracking-[0.3em] text-foreground/70">FULL NAME</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-3 w-full rounded-xl border border-[var(--gold-soft)]/30 bg-background/40 px-5 py-4 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-[var(--gold)] transition"
                />
              </div>
              <div>
                <label className="text-[10px] tracking-[0.3em] text-foreground/70">PHONE NUMBER</label>
                <input
                  type="tel"
                  placeholder="+91 ——————"
                  className="mt-3 w-full rounded-xl border border-[var(--gold-soft)]/30 bg-background/40 px-5 py-4 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-[var(--gold)] transition"
                />
              </div>
              <div>
                <label className="text-[10px] tracking-[0.3em] text-foreground/70">BUDGET RANGE</label>
                <select className="mt-3 w-full rounded-xl border border-[var(--gold-soft)]/30 bg-background/40 px-5 py-4 text-foreground focus:outline-none focus:border-[var(--gold)] transition">
                  <option>₹65 L – ₹1 Cr</option>
                  <option>₹1 Cr – ₹2 Cr</option>
                  <option>₹2 Cr +</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] tracking-[0.3em] text-foreground/70">PURPOSE</label>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="rounded-xl border border-[var(--gold)] bg-[var(--gold)]/10 py-4 text-foreground font-medium"
                  >
                    Investor
                  </button>
                  <button
                    type="button"
                    className="rounded-xl border border-[var(--gold-soft)]/30 bg-background/40 py-4 text-foreground/80 hover:border-[var(--gold)]/60 transition"
                  >
                    End User
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-[var(--gold-soft)]/20">
              <p className="text-xs text-foreground/60 mb-6">
                By submitting, you agree to receive project details via phone, WhatsApp &amp; email.
              </p>
              <button
                type="submit"
                className="w-full rounded-full py-5 bg-[var(--gradient-gold)] text-background font-medium flex items-center justify-center gap-3 hover:opacity-90 transition shadow-xl shadow-[var(--gold)]/30"
              >
                Get Complete Investment Details <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */

function SiteFooter() {
  const navLinks = ["ROI & Returns", "Project Highlights", "Space Options", "Amenities", "Location", "Contact"];
  const socials = [Instagram, Facebook, Linkedin, Youtube];
  return (
    <footer className="border-t border-[var(--gold-soft)]/20 pt-20 pb-10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-3 gap-14">
          {/* About */}
          <div>
            <div className="h-12 w-12 rounded-full bg-[var(--gradient-gold)] mb-8 shadow-lg shadow-[var(--gold)]/30" />
            <p className="text-sm text-foreground/70 leading-relaxed">
              Looking for{" "}
              <span className="text-[var(--gold)]">office space in Sindhu Bhavan Ahmedabad</span>?
              This premium commercial project offers modern office spaces and showroom units with{" "}
              <span className="text-[var(--gold)]">high ROI potential (15–18% annual returns)</span>,
              G+38 storey landmark design, green building certification, 18 high-speed lifts, and
              4-level basement parking in Ahmedabad's most prestigious business corridor.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-full border border-[var(--gold-soft)]/50 flex items-center justify-center hover:bg-[var(--gold)]/10 hover:border-[var(--gold)] transition"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4 text-[var(--gold)]" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <div className="text-[10px] tracking-[0.3em] text-[var(--gold)] mb-8">NAVIGATE</div>
            <ul className="space-y-5">
              {navLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-foreground hover:text-[var(--gold)] transition">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[10px] tracking-[0.3em] text-[var(--gold)] mb-8">CONTACT</div>
            <ul className="space-y-5 text-foreground">
              <li className="flex items-start gap-4">
                <MapPin className="h-4 w-4 text-[var(--gold)] mt-1 shrink-0" />
                <span>Sindhu Bhavan Road, Bodakdev, Ahmedabad, Gujarat 380054</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="h-4 w-4 text-[var(--gold)]" />
                <span>+91 9898709370</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-4 w-4 text-[var(--gold)]" />
                <span>info@plinthreality.com</span>
              </li>
            </ul>

            <div className="mt-8 rounded-2xl border border-[var(--gold-soft)]/40 bg-card/50 p-6">
              <div className="text-[10px] tracking-[0.3em] text-[var(--gold)] mb-3">EXPECTED ROI</div>
              <div className={`font-serif text-4xl ${goldText}`}>15–18% p.a.</div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--gold-soft)]/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-foreground/50">
          <span>© {new Date().getFullYear()} Sindhu Bhavan. All rights reserved.</span>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <a href="#" className="hover:text-[var(--gold)]">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--gold)]">Terms</a>
            <a href="#" className="hover:text-[var(--gold)]">Pre-Launch Project</a>
            <a href="#" className="hover:text-[var(--gold)]">Disclaimer</a>
          </div>
        </div>
        <p className="mt-6 text-[11px] text-foreground/40 leading-relaxed">
          Disclaimer: Images are artistic impressions. ROI projections are based on current market analysis and may vary. Past performance is not indicative of future results.
        </p>
      </div>
    </footer>
  );
}

/* ---------- PAGE ---------- */

function PlinthLanding() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <Nav />
      <Hero />
      <ROISection />
      <Highlights />
      <Spaces />
      <WhyInvest />
      <Amenities />
      <Location />
      <DeveloperLegacy />
      <InvestmentCTA />
      <EnquireNow />
      <SiteFooter />
    </main>
  );
}
