import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  TrendingUp,
  Building2,
  Store,
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
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-6 flex items-center justify-between">
        <nav className="hidden md:flex items-center gap-10 text-sm font-light text-foreground/90">
          {["Home", "ROI", "Highlights", "Spaces", "Amenities", "Location", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-[var(--gold)] transition">
              {l}
            </a>
          ))}
        </nav>
        <button className="md:hidden text-foreground" aria-label="Menu">
          <Menu className="h-6 w-6" />
        </button>
        <button className="rounded-full px-7 py-3 text-sm font-medium text-background bg-[var(--gradient-gold)] hover:opacity-90 transition shadow-lg shadow-[var(--gold)]/20">
          Enquire Now
        </button>
      </div>
    </header>
  );
}

/* ---------- 2. HERO ---------- */

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-32 pb-20">
      {/* subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.78_0.13_75/0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-[var(--gold-soft)]/40 px-6 py-3 mb-10">
            <span className="h-2 w-2 rounded-full bg-[var(--gold)] animate-pulse" />
            <span className="text-xs tracking-[0.25em] text-foreground/80">NOW LAUNCHING</span>
            <span className="text-foreground/40">·</span>
            <span className="text-xs tracking-[0.25em] font-medium text-foreground">SINDHU BHAVAN ROAD</span>
          </div>

          <p className="font-serif italic text-2xl text-foreground/70 mb-2">Looking For</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground">
            Premium Commercial
            <br />
            <span className="italic">Space?</span>
          </h1>

          <div className="mt-12">
            <div className="flex items-center gap-4 mb-3">
              <span className="h-px w-12 bg-[var(--gold-soft)]" />
              <span className="text-xs tracking-[0.3em] text-[var(--gold)]">EXPECTED ANNUAL ROI</span>
            </div>
            <div className={`font-serif text-7xl md:text-8xl lg:text-[8rem] leading-none ${goldText}`}>
              15–18<span className="text-6xl md:text-7xl">%</span>
            </div>
            <p className="mt-6 max-w-md text-foreground/70 leading-relaxed">
              A high-growth commercial investment opportunity in Ahmedabad's most promising business corridor.
            </p>
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

      {/* stat strip */}
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 mt-20 grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          { icon: TrendingUp, label: "STARTING", v: "₹65 Lakhs" },
          { icon: Building2, label: "OFFICE FROM", v: "900 Sq.ft" },
          { icon: Store, label: "SHOWROOM FROM", v: "2700 Sq.ft" },
        ].map(({ icon: Icon, label, v }) => (
          <div key={label} className="rounded-xl border border-[var(--gold-soft)]/30 bg-card/40 p-6">
            <Icon className="h-5 w-5 text-[var(--gold)] mb-4" />
            <div className="text-[10px] tracking-[0.3em] text-foreground/60 mb-2">{label}</div>
            <div className="font-serif text-2xl text-foreground">{v}</div>
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
                </defs>
                {[40, 80, 120, 160, 200].map((y) => (
                  <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="oklch(0.4 0.02 70)" strokeDasharray="3 6" strokeWidth="0.5" />
                ))}
                <path
                  d="M 20 190 L 90 165 L 160 140 L 230 120 L 300 100 L 370 80 L 440 65 L 510 50 L 580 35 L 580 220 L 20 220 Z"
                  fill="url(#curveFill)"
                />
                <path
                  d="M 20 190 L 90 165 L 160 140 L 230 120 L 300 100 L 370 80 L 440 65 L 510 50 L 580 35"
                  stroke="oklch(0.78 0.13 75)"
                  strokeWidth="2"
                  fill="none"
                />
                {[[20, 190], [90, 165], [160, 140], [230, 120], [300, 100], [370, 80], [440, 65], [510, 50], [580, 35]].map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="4" fill="oklch(0.78 0.13 75)" />
                ))}
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
  return (
    <section id="amenities" className="py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <SectionLabel n="05" t="EXCLUSIVE OPPORTUNITY" />
        <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-tight text-foreground mb-10">
          Why Invest <span className={`italic ${goldText}`}>Now?</span>
        </h2>
        <p className="max-w-3xl text-foreground/70 text-lg leading-relaxed mb-16">
          The convergence of strategic location, architectural brilliance, and optimal market timing creates an unprecedented window for discerning investors.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, t, d, featured }) => (
            <div
              key={t}
              className={`rounded-2xl p-8 min-h-[420px] flex flex-col ${
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

/* ---------- 9. CONTACT / FOOTER ---------- */

function Contact() {
  return (
    <section id="contact" className="py-28 lg:py-36">
      <div className="mx-auto max-w-4xl px-6 lg:px-12 text-center">
        <SectionLabel n="08" t="CONTACT" />
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground">
          Reserve your <span className={`italic ${goldText}`}>landmark</span> address.
        </h2>
        <p className="mt-8 text-foreground/70 leading-relaxed text-lg max-w-2xl mx-auto">
          Limited units remain in the launch phase. Speak with our investment advisors for floor plans, pricing, and private viewings.
        </p>
        <button className="mt-10 rounded-full px-10 py-5 bg-[var(--gradient-gold)] text-background font-medium hover:opacity-90 transition shadow-xl shadow-[var(--gold)]/20">
          Enquire Now
        </button>
      </div>

      <footer className="mt-28 border-t border-[var(--gold-soft)]/20 pt-10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-foreground/50">
          <span>© {new Date().getFullYear()} Plinth · Sindhu Bhavan Road, Ahmedabad</span>
          <span>Privacy · Terms · RERA</span>
        </div>
      </footer>
    </section>
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
      <Contact />
    </main>
  );
}
