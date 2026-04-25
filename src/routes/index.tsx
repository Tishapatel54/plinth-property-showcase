import { createFileRoute } from "@tanstack/react-router";
import { useId, useMemo, useRef, useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
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
  X,

} from "lucide-react";
import tower from "@/assets/Tower.jpeg";
import office from "@/assets/Plinth-office.jpeg";
import showroom from "@/assets/Plinth-showroom.jpeg";
import plinthOffice from "@/assets/plinth-office.jpg";
import listing1 from "@/assets/listing-1.jpg";
import plinthShowroom from "@/assets/plinth-showroom.jpg";
import listing2 from "@/assets/listing-2.jpg";

export const Route = createFileRoute("/")({
  component: PlinthLanding,
  head: () => ({
    meta: [
      { title: "Plinth - Premium Commercial Space, Sindhu Bhavan Road" },
      { name: "description", content: "Plinth on Sindhu Bhavan Road, Ahmedabad. G+38 storey landmark commercial tower with 15Ã¢â‚¬â€œ18% expected annual ROI. Office and showroom spaces from 900 to 2700 sq.ft." },
      { property: "og:title", content: "Plinth - Premium Commercial Space" },
      { property: "og:description", content: "G+38 landmark commercial tower on Sindhu Bhavan Road, Ahmedabad. 15Ã¢â‚¬â€œ18% expected ROI." },
    ],
  }),
});

/* ---------- shared bits ---------- */

const SectionLabel = ({ n, t }: { n: string; t: string }) => (
  <div className="flex items-center gap-4 mb-8">
    <span className="h-px w-16 bg-[var(--gold-soft)]" />
    <span className="text-xs tracking-[0.3em] text-[#E3C98B]">
      {n} / {t}
    </span>
  </div>
);

const goldText = "bg-[var(--gradient-gold)] bg-clip-text text-transparent";

function TiltCard({
  children,
  className,
  style,
  onMouseEnter,
  onMouseLeave,
  ...rest
}: React.HTMLAttributes<HTMLDivElement> & { className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  const baseStyle = useMemo<React.CSSProperties>(
    () => ({
      transform: "perspective(900px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) translateZ(0) scale(var(--s, 1))",
      transition: "transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease",
      transformStyle: "preserve-3d",
    }),
    [],
  );

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...baseStyle, ...style }}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        const ry = (px - 0.5) * 10; // left/right
        const rx = (0.5 - py) * 10; // up/down (invert)
        el.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
        el.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
        el.style.setProperty("--mx", `${(px * 100).toFixed(2)}%`);
        el.style.setProperty("--my", `${(py * 100).toFixed(2)}%`);
      }}
      onMouseEnter={(e) => {
        onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        const el = ref.current;
        if (!el) return;
        el.style.setProperty("--rx", "0deg");
        el.style.setProperty("--ry", "0deg");
        el.style.removeProperty("--mx");
        el.style.removeProperty("--my");
        onMouseLeave?.(e);
      }}
      onTouchMove={(e) => {
        const el = ref.current;
        if (!el || e.touches.length === 0) return;
        const touch = e.touches[0];
        const r = el.getBoundingClientRect();
        // Calculate touch position relative to the element
        const touchX = touch.clientX - r.left;
        const touchY = touch.clientY - r.top;
        // Only trigger tilt if touch is actually inside the card
        if (touchX >= 0 && touchX <= r.width && touchY >= 0 && touchY <= r.height) {
          const px = touchX / r.width;
          const py = touchY / r.height;
          const ry = (px - 0.5) * 10;
          const rx = (0.5 - py) * 10;
          el.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
          el.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
          el.style.setProperty("--mx", `${(px * 100).toFixed(2)}%`);
          el.style.setProperty("--my", `${(py * 100).toFixed(2)}%`);
        }
      }}
      onTouchEnd={() => {
        const el = ref.current;
        if (!el) return;
        el.style.setProperty("--rx", "0deg");
        el.style.setProperty("--ry", "0deg");
        el.style.removeProperty("--mx");
        el.style.removeProperty("--my");
        el.style.setProperty("--s", "1");
      }}
      onPointerDown={() => ref.current?.style.setProperty("--s", "0.97")}
      onPointerUp={() => ref.current?.style.setProperty("--s", "1")}
      onPointerCancel={() => ref.current?.style.setProperty("--s", "1")}
      {...rest}
    >
      {/* subtle moving sheen */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-active:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), oklch(0.85 0.12 80 / 0.10), transparent 55%)",
        }}
      />
      {children}
    </div>
  );
}

function PremiumButton({ children, className, innerClassName, onClick, type = "button", fullWidth = false, disabled = false }: any) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group relative overflow-hidden rounded-full p-[1.5px] transition-all hover:shadow-[0_0_30px_-5px_rgba(227,201,139,0.4)] active:scale-[0.98] ${fullWidth ? 'w-full' : ''} ${className || ''}`}
    >
      <div className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,transparent_50%,#C69A57_80%,#F5E9C8_100%)] opacity-80 group-hover:opacity-100 transition-opacity" />
      <div className={`relative z-10 flex h-full w-full items-center justify-center rounded-full bg-gradient-to-r from-[#D4A865] via-[#C69A57] to-[#B58A4A] text-black font-semibold transition-colors group-hover:from-[#E3C98B] group-hover:via-[#D4A865] group-hover:to-[#C69A57] group-hover:text-black ${innerClassName || 'px-8 py-4 text-[13px]'}`}>
        {children}
      </div>
    </button>
  );
}

/* ---------- 1. NAV ---------- */

function Nav({ onEnquireClick }: { onEnquireClick?: () => void }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = ["Home", "ROI", "Highlights", "Spaces", "Amenities", "Location", "Contact"];

  return (
    <header className="absolute top-0 inset-x-0 z-30">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-24 xl:px-25 py-4 sm:py-5 flex items-center justify-between gap-2">

        {/* Left Side: Mobile Menu Trigger */}
        <div className="flex-1 md:hidden">
          <button
            className="text-foreground p-2 -ml-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-[14px] tracking-wide font-light text-foreground/80 flex-1 justify-center">
          {navLinks.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-[#E3C98B] transition">
              {l}
            </a>
          ))}
        </nav>

        {/* Right Side: Enquire Button */}
        <div className="ml-auto flex justify-end flex-1">
          <PremiumButton
            onClick={onEnquireClick}
            innerClassName="px-4 py-2.5 sm:px-5 md:px-6 md:py-3 text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.2em] sm:tracking-widest whitespace-nowrap"
          >
            Enquire Now
          </PremiumButton>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-black/95 backdrop-blur-xl px-6 py-5 md:hidden">
          <div className="flex items-center justify-between mb-10">
            <span className="font-serif text-xl tracking-widest text-[#E3C98B]">PLINTH</span>
            <button
              className="text-foreground p-2 bg-white/10 rounded-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-6 mt-4">
            {navLinks.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="border-b border-white/5 pb-4 text-foreground/80">
                {l}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
/* ---------- 2. HERO ---------- */

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16 pb-14 lg:pt-24 lg:pb-14">
      {/* radial gold glows like screenshot */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_55%,oklch(0.78_0.13_75/0.10),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_85%_10%,oklch(0.78_0.13_75/0.08),transparent_70%)]" />
      {/* decorative concentric arcs top-right */}
      <svg className="absolute -top-40 -right-40 w-[700px] h-[700px] opacity-[0.18] pointer-events-none" viewBox="0 0 700 700" fill="none">
        {[180, 240, 300, 360, 420, 480, 540].map((r) => (
          <circle key={r} cx="500" cy="200" r={r} stroke="oklch(0.78 0.13 75)" strokeWidth="0.6" />
        ))}
      </svg>

      <div className="relative mx-auto max-w-[1080px] px-5 md:px-8 lg:px-10 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* LEFT */}
        <div className="pt-4 lg:pt-2 z-10">
          {/* Top Pill */}
          <div className="lg:mt-[-80px] inline-flex items-center gap-2 rounded-full border border-[#E3C98B]/30 bg-[#0A0A0A]/60 backdrop-blur px-4 py-2 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E3C98B]" />
            <span className="text-[11px] tracking-[0.2em] text-white/70 font-medium">
              NOW LAUNCHING <span className="mx-1 text-[#E3C98B]/50">·</span> <span className="font-semibold text-[12px] text-white tracking-[0.1em]">SINDHU BHAVAN ROAD</span>
            </span>
          </div>

          <p className="font-serif italic text-[22px] text-[#E8E1CF]/90 mb-2">Looking For</p>
          <h1 className="font-serif text-[40px] sm:text-[48px] md:text-[52px] lg:text-[50px] leading-[1.08] text-white mb-8">
            Premium Commercial<br />Space?
          </h1>

          <div className="flex items-center gap-4 mb-2">
            <span className="h-px w-8 bg-[#C69A57]/60" />
            <span className="text-[10px] tracking-[0.3em] text-[#C69A57]">EXPECTED ANNUAL ROI</span>
          </div>
          <div className="font-serif text-[62px] sm:text-[86px] lg:text-[98px] leading-[1.1] italic bg-gradient-to-b from-[#F5E9C8] via-[#E3C98B] to-[#C69A57] bg-clip-text text-transparent drop-shadow-md mb-5">
            15-18<span className="text-[42px] sm:text-[58px] lg:text-[70px]">%</span>
          </div>
          <p className="text-white/70 text-[14px] leading-relaxed max-w-[390px] mb-10">
            A high-growth commercial investment opportunity in Ahmedabad's most prestigious business corridor.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
            <PremiumButton className="w-full sm:w-auto" innerClassName="w-full px-8 py-4 text-[13px] gap-3">
              Get Pricing &amp; ROI Details
              <ArrowRight className="h-3.5 w-3.5" />
            </PremiumButton>
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-[13px] font-medium text-white/90 border border-white/20 bg-transparent hover:border-white/40 transition">
              <PhoneIcon className="h-3.5 w-3.5 text-white/70" />
              Talk to Advisor
            </button>
          </div>

          {/* 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 lg:max-w-[480px]">
            {[
              { icon: TrendingUp, label: "STARTING", v: "Ã¢â€šÂ¹65 Lakhs" },
              { icon: Building2, label: "OFFICE FROM", v: "900 Sq.ft" },
              { icon: Store, label: "SHOWROOM FROM", v: "2700 Sq.ft" },
            ].map(({ icon: Icon, label, v }) => (
              <div key={label} className="rounded-2xl border border-[#E3C98B]/20 bg-[#0A0A0A]/50 backdrop-blur p-3.5 hover:border-[#E3C98B]/40 transition duration-300 group">
                <Icon className="h-4 w-4 text-[#C69A57] mb-4 transition-transform group-hover:scale-110" strokeWidth={1.5} />
                <div className="text-[8px] tracking-[0.25em] text-white/40 mb-1.5 uppercase">{label}</div>
                <div className="text-white/90 text-[12px] font-medium">{v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - tower */}
        <div className="relative pt-10 lg:pt-0 pb-[-90]">
          {/* Main Image Frame */}
          <div className="lg:mt-[-90px] relative rounded-[28px] border border-[#C69A57]/30 bg-[#0A0A0A] aspect-[4/5] lg:aspect-[3/4] max-h-[600px] overflow-visible ">
            <style dangerouslySetInnerHTML={{
              __html: `
              @keyframes hero-slide {
                0%, 28% { transform: translateX(0%); }
                33%, 61% { transform: translateX(-33.333%); }
                66%, 95% { transform: translateX(-66.666%); }
                100% { transform: translateX(0%); }
              }
            `}} />

            <div className="absolute inset-0 rounded-[32px] overflow-hidden">
              <div className="absolute inset-0 w-[300%] flex h-full" style={{ animation: "hero-slide 18s cubic-bezier(0.8,0,0.2,1) infinite" }}>
                {[tower, plinthOffice, plinthShowroom].map((src, i) => (
                  <div key={i} className="relative w-1/3 h-full">
                    <img
                      src={src}
                      alt={`Plinth feature ${i + 1}`}
                      className="absolute inset-0 h-full w-full object-cover"

                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
                  </div>
                ))}
              </div>

              {/* top tags */}
              <div className="absolute top-6 left-6 rounded-full border border-[#E3C98B]/60 bg-[#0A0A0A]/40 backdrop-blur px-5 py-2 text-[8px] tracking-[0.3em] text-white/70">
                G + 38 STOREY
              </div>
              <div className="absolute top-6 right-6 rounded-full border border-[#E3C98B]/60 bg-[#0A0A0A]/40 backdrop-blur px-5 py-2 text-[8px] tracking-[0.3em] text-white/70">
                LANDMARK
              </div>
            </div>

            {/* floating PROPERTY APPRECIATION card */}
            <div className="absolute -left-3 sm:-left-10 top-24 rounded-2xl border border-[#E3C98B]/60  bg-background/15 backdrop-blur p-4 shadow-[0_40px_140px_-110px_oklch(0.78_0.13_75/0.40)] backdrop-blur z-10 w-52">
              <div className="text-[8px] tracking-[0.2em] text-[#C69A57] mb-2">PROPERTY APPRECIATION</div>
              <div className="font-serif text-2xl text-[#C69A57] mb-1">15-18%</div>
              <p className="text-[10px] text-white/40 leading-relaxed max-w-[150px]">Expected annual returns on investment</p>
            </div>

            {/* CEILING HEIGHT card */}
            <div className="absolute right-0 sm:-right-6 bottom-24 rounded-xl border border-[#E3C98B]/60 bg-background/15 backdrop-blur px-4 py-3 shadow-2xl z-10">
              <div className="text-[8px] tracking-[0.2em] text-[#C69A57] mb-1.5">CEILING HEIGHT</div>
              <div className="font-serif text-xl text-white/90">
                11.5 <span className="italic text-white/50 text-base">ft</span>
              </div>
            </div>

            {/* bottom development bar */}
            <div className="absolute left-5 right-5 bottom-5 rounded-2xl border border-[#E3C98B]/60 bg-background/15 backdrop-blur px-4 py-3 flex items-center justify-between z-10">
              <div>
                <div className="text-[8px] tracking-[0.25em] text-[#C69A57] mb-1.5">THE DEVELOPMENT</div>
                <div className="font-serif text-[15px] text-white">Sindhu Bhavan, Ahmedabad</div>
              </div>
              <button
                type="button"
                aria-label="Explore"
                className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-r from-[#F5E9C8] via-[#E3C98B] to-[#C69A57] text-black flex items-center justify-center transition-transform hover:scale-105"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

/* ---------- 3. INVESTMENT OPPORTUNITY (ROI) ---------- */

function ROISection() {
  return (
    <section id="roi" className="py-12 lg:py-16">
      <div className="mx-auto max-w-[1120px] px-4 lg:px-6 xl:px-8">
        <SectionLabel n="02" t="INVESTMENT OPPORTUNITY" />
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground max-w-4xl">
          Earn up to   <span className="italic bg-gradient-to-b from-[#F5E9C8] via-[#E3C98B] to-[#C69A57] bg-clip-text text-transparent">
            15-18%
          </span>
          <br />
          Annual Returns.
        </h2>
        <p className="mt-5 max-w-2xl text-foreground/70 leading-relaxed text-lg">
          A rare opportunity to own a unit inside Ahmedabad's most in demand commercial corridor.
          Exceptional rental yields, sustained capital appreciation, and a tenant ready ecosystem.
        </p>

        <div className="mt-10 grid lg:grid-cols-5 gap-4 lg:gap-5 items-start">
          {/* Chart card */}
          <div className="relative lg:col-span-3 rounded-3xl border border-[oklch(0.65_0.10_70/0.22)] bg-[linear-gradient(180deg,oklch(0.20_0.014_60/0.55),oklch(0.17_0.012_60/0.35))] backdrop-blur p-5 lg:p-6 shadow-[0_55px_170px_-150px_oklch(0.78_0.13_75/0.55)]">
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-[oklch(0.85_0.12_80/0.06)] opacity-60" />
            <div className="relative flex justify-between items-start mb-8">
              <div>
                <div className="text-[10px] tracking-[0.3em] text-[#E3C98B] mb-3">PROJECTED ROI CURVE</div>
                <h3 className="font-serif text-3xl text-foreground">Capital Appreciation</h3>
              </div>
              <div className="text-right">
                <div className="italic bg-gradient-to-b from-[#F5E9C8] via-[#E3C98B] to-[#C69A57] bg-clip-text text-transparent">8%</div>
                <div className="text-[10px] tracking-[0.3em] text-foreground/60 mt-1">PEAK YIELD</div>
              </div>
            </div>

            {/* Chart */}
            <div className="relative h-40">
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
              {["Y1", "Y2", "Y3", "Y4", "Y5", "Y6", "Y7", "Y8", "Y9"].map((y) => <span key={y} className="text-center">{y}</span>)}
            </div>

            <div className="mt-5 pt-5 border-t border-[#E3C98B]/20 grid grid-cols-3 gap-3">
              {[
                { l: "ENTRY YIELD", v: "8%" },
                { l: "STABILIZED", v: "15-18%" },
                { l: "HORIZON", v: "4 Yrs" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-[10px] tracking-[0.3em] text-foreground/60 mb-2">{s.l}</div>
                  <div className="italic bg-gradient-to-b from-[#F5E9C8] via-[#E3C98B] to-[#C69A57] bg-clip-text text-transparent">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Side stat cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: TrendingUp, v: "92%", t: "High Rental Demand Zone", d: "Occupancy rate in the corridor" },
              { icon: MapPin, v: "A+", t: "Prime Sindhu Bhavan Location", d: "Premium commercial grade" },
              { icon: TrendingUp, v: "2.4x", t: "Property Appreciation", d: "Projected 5-year growth" },
              { icon: Award, v: "IGBC", t: "Grade-A Commercial", d: "Green building certified" },
            ].map(({ icon: Icon, v, t, d }) => (
              <div
                key={t}
                className="group relative rounded-[20px] border border-[oklch(0.65_0.10_70/0.22)] bg-[linear-gradient(180deg,oklch(0.20_0.014_60/0.55),oklch(0.17_0.012_60/0.35))] backdrop-blur p-5 min-h-[200px] flex flex-col justify-center transition-all duration-300 
      transform-gpu hover:scale-[1.02] active:scale-[0.98]
      hover:border-[oklch(0.78_0.13_75/0.45)] 
      active:border-[oklch(0.78_0.13_75/0.45)] 
      hover:shadow-[0_40px_130px_-120px_oklch(0.78_0.13_75/0.65)]
      active:shadow-[0_40px_130px_-120px_oklch(0.78_0.13_75/0.65)]"
              >
                {/* 2. Ring effect: Added group-active for mobile glow */}
                <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-inset ring-[oklch(0.85_0.12_80/0.06)] opacity-55 group-hover:opacity-100 group-active:opacity-100 transition-opacity" />

                {/* Icon Container */}
                <div className="relative h-8.5 w-8.5 rounded-full bg-[linear-gradient(135deg,oklch(0.86_0.12_80),oklch(0.65_0.13_65))] flex items-center justify-center mb-3 shadow-[0_22px_60px_-40px_oklch(0.78_0.13_75/0.80)]">
                  <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-[oklch(0.20_0.014_60/0.18)]" />
                  <Icon className="h-3.5 w-3.5 text-[oklch(0.16_0.012_60)]" />
                </div>

                {/* Stat Value with Gold Gradient */}
                <div className="relative font-serif text-[20px] leading-none mb-1.5 bg-gradient-to-b from-[#F5E9C8] via-[#E3C98B] to-[#C69A57] bg-clip-text text-transparent">
                  {v}
                </div>

                {/* Title */}
                <div className="relative text-[12px] text-foreground/90 font-medium leading-snug">{t}</div>

                {/* Description */}
                <p className="relative text-[10px] text-foreground/55 mt-0.5 leading-snug">{d}</p>
              </div>
              
            ))}
          </div>
        </div >
      </div >
    </section >
  );
}

/* ---------- 4. HIGHLIGHTS ---------- */

function Highlights() {
  const items = [
    { icon: Building, t: "G + 38 Storey", d: "Landmark tower defining the skyline of Sindhu Bhavan Road." },
    { icon: Leaf, t: "Green Building", d: "IGBC certified, energy-efficient and sustainably engineered." },
    { icon: ArrowUp, t: "18 Lifts", d: "High-speed vertical transport - no wait times, zero downtime." },
    { icon: Layers, t: "18 Offices / Floor", d: "Thoughtfully planned floor plates for productivity & flow." },
    { icon: MoveVertical, t: "11.5 ft Ceilings", d: "Double-volume interiors for a grand, open workspace." },
    { icon: Car, t: "-4 Basement Parking", d: "Ample secured parking across four basement levels." },
  ];
  return (
    <section id="highlights" className="py-12 lg:py-16">
      <div className="mx-auto max-w-[1120px] px-4 lg:px-6 xl:px-8">
        <SectionLabel n="03" t="PROJECT HIGHLIGHTS" />
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-6xl leading-[1.02] text-foreground tracking-tight">
            Engineered to
            <br />
            <span className="italic bg-gradient-to-b from-[#F5E9C8] via-[#E3C98B] to-[#C69A57] bg-clip-text text-transparent">
              Impress.
            </span>
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed lg:mt-8">
            Every number has been carefully considered - floor plates, ceiling heights, basements, elevators.
            Premium scale that tenants and investors recognize instantly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-[1200px] mx-auto">
          {items.map(({ icon: Icon, t, d }, i) => (
            <TiltCard
              key={t}
              className="group relative rounded-2xl border border-[#E3C98B]/20 bg-gradient-to-br from-card/70 to-card/35 backdrop-blur p-4 min-h-[140px] hover:border-[var(--gold)]/20 hover:shadow-[0_36px_110px_-78px_oklch(0.78_0.13_75/0.75)]"
            >
              {/* inner edge glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-[oklch(0.85_0.12_80/0.08)] opacity-60 group-hover:opacity-60 transition-opacity" />

              <div className="relative flex items-start justify-between mb-4">
                <div className="relative h-12 w-12 rounded-2xl bg-[linear-gradient(135deg,oklch(0.86_0.12_80),oklch(0.65_0.13_65))] flex items-center justify-center shadow-[0_22px_60px_-40px_oklch(0.78_0.13_75/0.85)]">
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-[oklch(0.20_0.014_60/0.18)]" />
                  <Icon className="h-5 w-5 text-[oklch(0.16_0.012_60)]" />
                </div>
                <div className="relative">
                  <div className="pointer-events-none absolute -inset-3 rounded-xl bg-[radial-gradient(ellipse_at_center,oklch(0.86_0.12_80/0.22),transparent_65%)] opacity-70" />
                  <span className="relative text-xs tracking-widest text-[oklch(0.83_0.11_78/0.55)]">
                    0{i + 1}
                  </span>
                </div>
              </div>
              <h3 className="relative font-serif text-[19px] text-foreground mb-1.5 mt-1">{t}</h3>
              <p className="relative text-sm text-foreground/65 leading-relaxed">{d}</p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section >
  );
}

/* ---------- 5. SPACES ---------- */

function Spaces() {
  const goldText = "bg-gradient-to-r from-[#F5E9C8] via-[#E3C98B] to-[#C69A57] bg-clip-text text-transparent";

  const cards = [
    {
      tag: "OFFICE SPACE",
      imgs: [office, plinthOffice, listing1],
      size: "900",
      unit: "Sq.ft",
      title: "Starting ₹65 Lakhs",
      features: [
        "18 offices per floor· customizable layouts",
        "11.5 ft ceilings, floor-to-ceiling glass",
        "Dedicated high-speed elevators",
        "Central air-conditioning",
      ],
    },
    {
      tag: "SHOWROOM SPACE",
      imgs: [showroom, plinthShowroom, listing2],
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
    <section id="spaces" className="py-12 lg:py-16 bg-[#0D0D0D]">
      <div className="mx-auto max-w-[1120px] px-4 lg:px-6 xl:px-8">
        <div className="text-center mb-10 md:mb-14">
          <div className="text-[10px] tracking-[0.4em] text-[#C69A57] font-bold mb-6 uppercase">04 / SPACE OPTIONS</div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-6xl leading-tight text-foreground">
            Designed for <span className={`italic ${goldText}`}>Business &amp;</span>
            {" "}
            <span className={`italic ${goldText}`}>Brands.</span>
          </h2>

        </div>

        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes spaces-slide {
            0%, 26.66% { transform: translateX(0); }
            33.33%, 60.00% { transform: translateX(-25%); }
            66.66%, 93.33% { transform: translateX(-50%); }
            100% { transform: translateX(-75%); }
          }
        `}} />

        <div className="grid lg:grid-cols-2 gap-5 max-w-[860px] mx-auto">
          {cards.map((c) => (
            <div key={c.tag} className="rounded-[24px] border border-[#C69A57]/40 bg-[#141414] overflow-hidden group transition-all duration-700 hover:shadow-[0_0_50px_-15px_#C69A57]">

              {/* Image Section with Overlay Text */}
              <div className="relative h-[195px] sm:h-[195px] md:h-[230px] overflow-hidden group/scroll">
                {/* Scrolling Slider Container */}
                <div
                  className="flex h-full"
                  style={{
                    width: "400%",
                    animation: "spaces-slide 16s cubic-bezier(0.4, 0, 0.2, 1) infinite"
                  }}
                >
                  {[...c.imgs, c.imgs[0]].map((imgSrc, idx) => (
                    <div key={idx} className="relative h-full shrink-0" style={{ width: "25%" }}>
                      <img
                        src={imgSrc}
                        alt={c.tag}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Fixed Overlay Gradient */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#141414] via-[#141414]/20 to-black/20" />

                {/* Badge */}
                <div className="absolute top-4 left-5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md px-5 py-2 text-[9px] tracking-[0.3em] text-white font-bold uppercase">
                  {c.tag}
                </div>

                {/* Over-Image Typography */}
                <div className="absolute bottom-2 left-6 flex flex-col gap-2">
                  <div className="text-[10px] tracking-[0.4em] text-[#C69A57] font-bold uppercase">STARTING FROM</div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-3xl md:text-[2rem] text-white leading-[0.7] tracking-tighter">
                      {c.size}
                    </span>
                    <span className="font-serif text-2xl text-white/50 italic lowercase">
                      {c.unit}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Section Below Image */}
              <div className="p-4">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <h3 className="font-serif text-[17px] md:text-[19px] italic tracking-wide bg-gradient-to-r from-[#F5E9C8] via-[#E3C98B] to-[#C69A57] bg-clip-text text-transparent leading-snug">
                    {c.title}
                  </h3>
                  <span className="text-[10px] tracking-[0.2em] text-[#C69A57] font-bold uppercase">15-18% ROI</span>
                </div>

                <ul className="mt-3 space-y-2">
                  {c.features.map((f) => (
                    <li key={f} className="group flex items-start gap-3 text-[13px] text-white/50 font-light leading-relaxed cursor-pointer transition-colors duration-300 hover:text-[#E3C98B]">
                      <span className="mt-1 h-5 w-5 rounded-full border border-[#C69A57]/30 flex items-center justify-center shrink-0 bg-[#C69A57]/5 transition-all duration-300 group-hover:border-[#C69A57] group-hover:bg-[#C69A57]/20">
                        <Check className="h-2.5 w-2.5 text-[#C69A57] transition-transform duration-300 group-hover:scale-125" />
                      </span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">{f}</span>
                    </li>
                  ))}
                </ul>

                <PremiumButton fullWidth className="mt-4" innerClassName="w-full py-2.5 text-[12px] gap-2">
                  Check Availability <ArrowRight className="h-4 w-4" />
                </PremiumButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- ANIMATION HOOKS ---------- */

function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect(); // Animate only once
      }
    }, { threshold: 0.1, ...options });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
}

function TypewriterTitle() {
  const [text, setText] = useState("");
  const fullText = "Invest Now?";
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < fullText.length) {
          setText(fullText.slice(0, text.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 3000);
        }
      } else {
        if (text.length > 0) {
          setText(fullText.slice(0, text.length - 1));
        } else {
          setIsDeleting(false);
        }
      }
    }, isDeleting ? 40 : 120);

    return () => clearTimeout(timeout);
  }, [text, isDeleting]);

  const base = text.replace(/Now\?.*/, "");
  const italicPart = text.slice(base.length);

  return (
    <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground mb-5 min-h-[1.2em]">
      Why{" "}
      {base}
      {italicPart && <span className="italic" style={{ color: "oklch(0.83 0.11 78)" }}>{italicPart}</span>}
      <span className="inline-block w-[3px] h-[0.8em] bg-[#E3C98B] ml-2 animate-[pulse_1s_infinite] align-middle" />
    </h2>
  );
}

/* ---------- 6. WHY INVEST ---------- */

function WhyInvest() {
  const [active, setActive] = useState(0);
  const items = [
    { icon: Landmark, t: "Pre-Launch Pricing Advantage", d: "Secure your investment at exclusive early-bird rates before the official market launch. Maximize capital appreciation from day zero." },
    { icon: Building, t: "High Rental Yield Potential", d: "Strategic location ensures high occupancy rates and premium rental returns from day one, driven by unparalleled corporate demand." },
    { icon: Building2, t: "Future Landmark Development", d: "Be part of an iconic structure that will redefine the skyline and set new standards for luxury commercial spaces." },
    { icon: Key, t: "Limited Entry Opportunity", d: "Exclusive availability with a limited number of units remaining in this premium phase. Rarity dictates value." },
  ];
  const { ref, inView } = useInView();
  return (
    <section id="whyinvest" className="py-12 lg:py-16 overflow-hidden">
      {/* Added 'flex flex-col items-center' to parent div to center everything */}
      <div className="mx-auto max-w-[1120px] px-4 lg:px-6 xl:px-8 flex flex-col items-center">

        {/* Centering the Label and Title */}
        <div className="flex flex-col items-center text-center">
          <SectionLabel n="05" t="EXCLUSIVE OPPORTUNITY" />
          <TypewriterTitle />
          <p className="max-w-3xl text-foreground/70 text-[16px] leading-relaxed mb-12 text-center">
            The convergence of strategic location, architectural brilliance, and optimal market timing creates an unprecedented window for discerning investors.
          </p>
        </div>

        {/* Centering the Grid: Added 'mx-auto' and ensured max-width is controlled */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[410px] max-w-5xl mx-auto w-full">
          {items.map(({ icon: Icon, t, d }, i) => {
            const isActive = i === active;
            return (
              <div
                key={t}
                className={`h-full w-full flex flex-col transition-all duration-1000 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <TiltCard
                  className={[
                    "h-full group relative w-full rounded-[16px] p-5 min-h-[250px] flex flex-col transition-colors cursor-pointer",
                    isActive
                      ? "bg-gradient-to-b from-[#D4A865] via-[#C69A57] to-[#9B7335] text-black shadow-[0_55px_170px_-140px_oklch(0.78_0.13_75/0.80)]"
                      : "border border-[oklch(0.65_0.10_70/0.22)] bg-[linear-gradient(180deg,oklch(0.20_0.014_60/0.55),oklch(0.17_0.012_60/0.35))] backdrop-blur text-foreground hover:border-[oklch(0.78_0.13_75/0.45)]",
                  ].join(" ")}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(0)}
                  onClick={() => setActive(i)}
                  onTouchStart={() => setActive(i)}
                >
                  {!isActive && (
                    <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-inset ring-[oklch(0.85_0.12_80/0.07)] opacity-55 group-hover:opacity-100 transition-opacity" />
                  )}

                  <div
                    className={[
                      "relative h-10 w-10 rounded-full flex items-center justify-center mb-5",
                      isActive
                        ? "bg-[oklch(0.16_0.012_60/0.18)] shadow-[0_26px_70px_-44px_oklch(0.16_0.012_60/0.35)]"
                        : "bg-background/10 border border-[oklch(0.65_0.10_70/0.26)] shadow-[inset_0_0_0_1px_oklch(0.85_0.12_80/0.06)]",
                    ].join(" ")}
                  >
                    {isActive ? (
                      <Icon className="h-4 w-4 text-[oklch(0.16_0.012_60)]" />
                    ) : (
                      <Icon className="h-4 w-4 text-[#C69A57] drop-shadow-sm" strokeWidth={1.5} />
                    )}
                  </div>
                  <h3 className="relative font-serif text-[17px] mb-1.5 leading-snug mt-4">{t}</h3>
                  <p className={`relative text-[12px] leading-relaxed ${isActive ? "text-[oklch(0.16_0.012_60/0.82)]" : "text-foreground/65"}`}>
                    {d}
                  </p>
                </TiltCard>
              </div>
            );
          })}
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
    <section id="amenities" className="py-12 lg:py-16">
      <div className="mx-auto max-w-[1120px] px-4 lg:px-6 xl:px-8">
        <SectionLabel n="06" t="AMENITIES" />
        <div className="grid lg:grid-cols-2 gap-10 mb-10">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground">
            A Workspace that
            {" "}
            <span className="italic" style={{ color: "oklch(0.83 0.11 78)" }}>Performs.</span>
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed lg:mt-8">
            Sindhu Bhavan isn't only an address - it's an ecosystem. Wellness, productivity, hospitality and convenience, all engineered into one landmark building.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, t, d }) => (
            <TiltCard
              key={t}
              className="group relative rounded-[16px] border border-[oklch(0.65_0.10_70/0.22)] bg-[linear-gradient(180deg,oklch(0.20_0.014_60/0.55),oklch(0.17_0.012_60/0.35))] backdrop-blur p-4 min-h-[140px] flex items-center gap-2.5 hover:border-[oklch(0.78_0.13_75/0.45)] hover:shadow-[0_32px_110px_-78px_oklch(0.78_0.13_75/0.75)]"
            >
              <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-inset ring-[oklch(0.85_0.12_80/0.07)] opacity-60 group-hover:opacity-100 transition-opacity" />

              <div className="relative h-12 w-12 rounded-[14px] bg-[linear-gradient(135deg,oklch(0.85_0.12_80),oklch(0.65_0.13_65))] flex items-center justify-center shrink-0 shadow-[0_22px_60px_-36px_oklch(0.78_0.13_75/0.85)]">
                <div className="pointer-events-none absolute inset-0 rounded-[14px] ring-1 ring-inset ring-[oklch(0.20_0.014_60/0.18)]" />
                <Icon className="h-4 w-4 text-[oklch(0.16_0.012_60)]" />
              </div>
              <div className="relative">
                <h3 className="font-serif text-[17px] text-foreground leading-snug">{t}</h3>
                <p className="text-[11.5px] leading-snug text-foreground/55 mt-0.5">{d}</p>
              </div>
            </TiltCard>
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
    <section id="location" className="py-12 lg:py-16">
      <div className="mx-auto max-w-[1120px] px-4 lg:px-6 xl:px-8">
        <SectionLabel n="07" t="LOCATION ADVANTAGE" />
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-5xl leading-tight text-foreground mb-8">
              In the Heart of
              <br />
              <span className="italic text-[#E3C98B]">Sindhu Bhavan Road.</span>
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-8 max-w-xl">
              Ahmedabad's most celebrated commercial stretch. Home to premium brands, corporate headquarters, fine dining, and a business ecosystem that is already delivering industry-leading yields.
            </p>

            <div className="space-y-3">
              {places.map(({ icon: Icon, t, d }) => (
                <div key={t} className="rounded-2xl border border-[#E3C98B]/20 bg-[#0A0A0A]/40 px-6 py-5 flex items-center justify-between hover:border-[#E3C98B]/40 transition-colors">
                  <div className="flex items-center gap-5">
                    <div className="h-10 w-10 rounded-full border border-[#E3C98B]/20 flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4 text-[#E3C98B]" />
                    </div>
                    <span className="text-white/80 text-[15px] font-light tracking-wide">{t}</span>
                  </div>
                  <span className="font-serif italic text-[#E3C98B] tracking-widest">{d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="mb-6 relative rounded-3xl border border-[#E3C98B]/20 bg-[#0A0A0A] aspect-[4/3] lg:aspect-[1.45/1] max-h-[380px] overflow-hidden shadow-[0_40px_160px_-120px_oklch(0.78_0.13_75/0.55)]">
            {/* Top Left Label */}
            <div className="absolute top-6 left-6 rounded-full border border-[#E3C98B]/30 bg-black/60 backdrop-blur-md px-5 py-2 text-[11px] tracking-widest text-white flex items-center gap-2 z-20">
              <MapPin className="h-3.5 w-3.5 text-[#E3C98B]" />
              <span className="font-medium text-white/90">Sindhu Bhavan Rd, Ahmedabad - 380054</span>
            </div>

            {/* Bottom Right Score */}
            <div className="absolute bottom-6 right-6 rounded-xl border border-[#E3C98B]/30 bg-black/60 backdrop-blur-md px-6 py-4 text-right z-20 flex flex-col gap-2">
              <div className="text-[9px] tracking-[0.3em] text-[#E3C98B]">CONNECTIVITY SCORE</div>
              <div className="flex items-baseline justify-end gap-1">
                <span className="font-serif text-4xl text-[#E3C98B]">9.6</span>
                <span className="text-[11px] tracking-widest text-white/50">/ 10</span>
              </div>
            </div>

            {/* Map Canvas */}
            <svg viewBox="0 0 800 600" className="absolute inset-0 w-full h-full z-0">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeOpacity="0.03" strokeWidth="1" />
                </pattern>
                <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#E3C98B" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#E3C98B" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="800" height="600" fill="url(#grid)" />

              {/* Crossed Curved Lines */}
              <path d="M 0 320 C 300 320, 500 280, 800 280" fill="none" stroke="#E3C98B" strokeWidth="1.5" className="opacity-50" />
              <path d="M 400 0 C 400 250, 400 350, 400 600" fill="none" stroke="#E3C98B" strokeWidth="1.5" className="opacity-50" />
              <path d="M 0 0 L 800 600" fill="none" stroke="#E3C98B" strokeWidth="1" strokeDasharray="4 6" className="opacity-10" />
              <path d="M 0 600 L 800 0" fill="none" stroke="#E3C98B" strokeWidth="1" strokeDasharray="4 6" className="opacity-10" />

              {/* Surrounding Dots with Boxes */}
              {[[250, 200], [550, 220], [280, 400], [580, 420]].map(([x, y], i) => (
                <g key={i}>
                  <rect x={x - 25} y={y - 15} width="50" height="30" fill="#E3C98B" fillOpacity="0.02" stroke="#E3C98B" strokeOpacity="0.1" />
                  <circle cx={x} cy={y} r="3" fill="#E3C98B" opacity="0.8" />
                </g>
              ))}

              {/* Center Glow Halo */}
              <circle cx="400" cy="300" r="100" fill="url(#centerGlow)" />
            </svg>

            {/* HTML Blinking Center Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10">
              {/* Largest ping */}
              <div className="absolute h-40 w-40 rounded-full border border-[#E3C98B]/20 animate-ping" style={{ animationDuration: '3s' }} />
              {/* Middle ping */}
              <div className="absolute h-20 w-20 rounded-full border border-[#E3C98B]/40 animate-ping" style={{ animationDuration: '2s' }} />
              {/* Solid inner glow core */}
              <div className="absolute h-10 w-10 rounded-full bg-[#E3C98B]/20 backdrop-blur-sm" />
              {/* Actual pinpoint */}
              <div className="relative h-3.5 w-3.5 rounded-full bg-[#E3C98B] shadow-[0_0_15px_#E3C98B]" />
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
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-[1120px] px-4 lg:px-6 xl:px-8">
        <div className="text-center mb-10">
          <div className="text-xs tracking-[0.3em] text-[#E3C98B] mb-6">08 / DEVELOPER LEGACY</div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-6xl leading-tight text-foreground">
            Built on Two Decades of <span className="italic" style={{ color: "oklch(0.83 0.11 78)" }}>Trust.</span>
          </h2>
          <p className="mt-2 max-w-2xl mx-auto text-foreground/70 leading-relaxed text-lg">
            A track record of landmark commercial projects delivered on time, every time across
            Ahmedabad's most prestigious corridors.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {stats.map(({ icon: Icon, v, label }) => (
            <TiltCard
              key={label}
              className="group relative overflow-hidden rounded-[16px] border border-[oklch(0.65_0.10_70/0.22)] bg-[linear-gradient(180deg,oklch(0.20_0.014_60/0.55),oklch(0.17_0.012_60/0.35))] backdrop-blur p-4 text-center min-h-[140px] flex flex-col items-center justify-center hover:border-[oklch(0.78_0.13_75/0.45)] hover:shadow-[0_40px_140px_-110px_oklch(0.78_0.13_75/0.80)]"
            >
              <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-inset ring-[oklch(0.85_0.12_80/0.07)] opacity-55 group-hover:opacity-100 transition-opacity" />
              {/* soft gold glow like reference */}
              <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full blur-[2px]" />

              <div className="relative h-12 w-12 rounded-full bg-[linear-gradient(135deg,oklch(0.85_0.12_80),oklch(0.65_0.13_65))] flex items-center justify-center mb-4 shadow-[0_26px_70px_-44px_oklch(0.78_0.13_75/0.85)]">
                <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-[oklch(0.20_0.014_60/0.18)]" />
                <Icon className="h-5 w-5 text-[oklch(0.16_0.012_60)]" />
              </div>
              <div className="relative font-serif text-3xl leading-[1.1] mb-1.5 bg-gradient-to-b from-[#F5E9C8] via-[#E3C98B] to-[#C69A57] bg-clip-text text-transparent">
                {v}
              </div>
              <div className="relative text-[11px] tracking-wide text-foreground/65">{label}</div>
            </TiltCard>
          ))}
        </div>

        {/* Featured in strip */}
        <div className="mt-10 rounded-full border border-[oklch(0.65_0.10_70/0.22)] bg-[linear-gradient(180deg,oklch(0.20_0.014_60/0.40),oklch(0.17_0.012_60/0.25))] backdrop-blur px-5 py-4 flex flex-wrap items-center justify-between gap-5">
          <div className="text-[13px] tracking-[0.28em] text-[#E3C98B]/90">FEATURED IN</div>
          <div className="flex flex-wrap items-center gap-x-12 gap-y-3">
            {press.map((p) => (
              <span key={p} className="font-serif text-[18px] text-foreground/70">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
}

/* ---------- INVESTMENT OPPORTUNITY CTA (big ROI) ---------- */

function InvestmentCTA() {
  return (
    <section className="py-14 lg:py-12 relative overflow-hidden">
      {/* Base glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,oklch(0.78_0.13_75/0.12),transparent_70%)] pointer-events-none" />

      {/* Wavy Dotted Lines Golden Effect (from user snippet) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 mix-blend-screen">
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes dash-flow {
              0% { stroke-dashoffset: -120; }
              100% { stroke-dashoffset: 0; }
            }
            @keyframes dash-flow-reverse {
              0% { stroke-dashoffset: 120; }
              100% { stroke-dashoffset: 0; }
            }
          `
        }} />
        <svg className="h-full w-full" viewBox="0 0 1200 700" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M-60 180C160 120 280 90 470 180C690 285 860 360 1260 240"
            stroke="#C69A57"
            strokeWidth="2"
            strokeDasharray="12 12"
            style={{ animation: 'dash-flow 8s linear infinite' }}
          />
          <path
            d="M-40 540C220 450 360 410 600 520C810 610 980 600 1240 500"
            stroke="#E3C98B"
            strokeWidth="2"
            strokeDasharray="12 12"
            style={{ animation: 'dash-flow-reverse 10s linear infinite' }}
          />
        </svg>
      </div>
      <div className="relative mx-auto max-w-[1120px] px-4 lg:px-6 xl:px-8 text-center">
        <div className="inline-flex items-center gap-3 rounded-full border border-[oklch(0.65_0.10_70/0.26)] bg-background/20 backdrop-blur px-6 py-3 mb-10">
          <span className="h-2 w-2 rounded-full bg-[#E3C98B] animate-pulse" />
          <span className="text-[10px] tracking-[0.35em] text-foreground/70">INVESTMENT OPPORTUNITY</span>
        </div>

        <div className="text-[12px] tracking-[0.35em] text-[#E3C98B]/90 mb-3">EXPECTED ANNUAL ROI</div>

        <div
          className="font-serif leading-[1.1] text-[2.9rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[9rem] bg-gradient-to-b from-[#F5E9C8] via-[#E3C98B] to-[#C69A57] bg-clip-text text-transparent"
        >
          15-18<span className="text-[1.8rem] sm:text-[3rem] md:text-[4.5rem] lg:text-[6.5rem]">%</span>
        </div>

        <h3 className="font-serif text-xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mt-7 sm:mt-8">
          A Landmark Address. <span className="italic" style={{ color: "oklch(0.83 0.11 78)" }}>A Landmark Return.</span>
        </h3>

        <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
          <PremiumButton className="w-full sm:w-auto" innerClassName="w-full px-8 py-4 text-[12px] gap-3">
            <Calendar className="h-4 w-4" /> Book Site Visit
          </PremiumButton>
          <button className="w-full sm:w-auto rounded-full px-8 py-4 border border-[oklch(0.65_0.10_70/0.30)] bg-background/10 backdrop-blur text-foreground/90 font-medium flex items-center justify-center gap-3 hover:border-[oklch(0.78_0.13_75/0.55)] transition">
            <Download className="h-4 w-4 text-[#E3C98B]" /> Download Brochure <ArrowRight className="h-4 w-4 text-[#E3C98B]" />
          </button>
        </div>

        <div className="mt-10 text-[10px] tracking-[0.30em] text-foreground/60">
          SINDHU BHAVAN ROAD <span className="text-[#E3C98B]">·</span> AHMEDABAD <span className="text-[#E3C98B]">·</span> 380054
        </div>
      </div>
    </section >
  );
}

/* ---------- 9. ENQUIRE NOW ---------- */

function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const [purpose, setPurpose] = useState("Investor");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("submitting");

    try {
      const formData = new FormData(formRef.current);

      // Setup Web3Forms Payload
      const data = {
        access_key: "9f7ab840-398a-4101-ba04-b8afd8486f82", // <--- PASTE YOUR KEY HERE
        subject: "New Property Inquiry Received!",
        from_name: "Plinth Property Showcase", // This fixes the "formsubmit name thi aavu joiye" issue!
        Message: "A new inquiry has arrived.",
        Name: formData.get("user_name"),
        Phone: formData.get("user_phone"),
        Budget: formData.get("budget"),
        Purpose: formData.get("purpose")
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setStatus("success");
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus("error");
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="relative w-full rounded-2xl sm:rounded-3xl border border-[oklch(0.65_0.10_70/0.22)] bg-[linear-gradient(180deg,oklch(0.20_0.014_60/0.55),oklch(0.17_0.012_60/0.35))] backdrop-blur p-5 sm:p-6 lg:p-10 shadow-[0_50px_160px_-130px_oklch(0.78_0.13_75/0.75)]"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-inset ring-[oklch(0.85_0.12_80/0.07)] opacity-70" />

      {status === "success" ? (
        <div className="h-full flex flex-col items-center justify-center text-center py-10">
          <div className="h-16 w-16 rounded-full bg-gradient-to-r from-[#F5E9C8] via-[#E3C98B] to-[#C69A57] text-black flex items-center justify-center mb-6 shadow-[0_22px_60px_-40px_oklch(0.78_0.13_75/0.80)]">
            <Check className="h-8 w-8 text-black" />
          </div>
          <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Thank you for submitted!
          </h3>
          <p className="text-foreground/70 leading-relaxed mb-8">
            Your inquiry has been received. Our investment advisor will get in touch with you shortly.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="rounded-full px-8 py-3 border border-[oklch(0.65_0.10_70/0.30)] bg-background/10 backdrop-blur text-foreground/90 font-medium hover:border-[oklch(0.78_0.13_75/0.55)] transition"
          >
            Submit Another Enquiry
          </button>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="h-4 w-4 text-[#E3C98B]" />
            <span className="text-xs tracking-[0.3em] text-[#E3C98B]">PRIORITY ENQUIRY</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground mb-6 sm:mb-10">
            Schedule a private consultation.
          </h3>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="text-[10px] tracking-[0.3em] text-foreground/70">FULL NAME</label>
              <input
                name="user_name"
                required
                type="text"
                placeholder="Your name"
                className="mt-2.5 sm:mt-3 w-full rounded-xl border border-[oklch(0.65_0.10_70/0.22)] bg-background/20 px-4 sm:px-5 py-3.5 sm:py-4 text-foreground placeholder:text-foreground/30 shadow-[inset_0_0_0_1px_oklch(0.85_0.12_80/0.05)] focus:outline-none focus:border-[oklch(0.78_0.13_75/0.55)] transition"
              />
            </div>
            <div>
              <label className="text-[10px] tracking-[0.3em] text-foreground/70">PHONE NUMBER</label>
              <input
                name="user_phone"
                required
                type="tel"
                placeholder="+91 ------"
                className="mt-2.5 sm:mt-3 w-full rounded-xl border border-[oklch(0.65_0.10_70/0.22)] bg-background/20 px-4 sm:px-5 py-3.5 sm:py-4 text-foreground placeholder:text-foreground/30 shadow-[inset_0_0_0_1px_oklch(0.85_0.12_80/0.05)] focus:outline-none focus:border-[oklch(0.78_0.13_75/0.55)] transition"
              />
            </div>
            <div>
              <label className="text-[10px] tracking-[0.3em] text-foreground/70">BUDGET RANGE</label>
              <select name="budget" className="mt-2.5 sm:mt-3 w-full rounded-xl border border-[oklch(0.65_0.10_70/0.22)] bg-background/90 px-4 sm:px-5 py-3.5 sm:py-4 text-foreground shadow-[inset_0_0_0_1px_oklch(0.85_0.12_80/0.05)] focus:outline-none focus:border-[oklch(0.78_0.13_75/0.55)] transition">
                <option value="₹65 L - ₹1 Cr">₹65 L - ₹1 Cr</option>
                <option value="₹1 Cr - ₹2 Cr">₹1 Cr - ₹2 Cr</option>
                <option value="₹2 Cr +">₹2 Cr +</option>
              </select>
            </div>
            <div>
              <label className="text-[10px] tracking-[0.3em] text-foreground/70">PURPOSE</label>
              <input type="hidden" name="purpose" value={purpose} />
              <div className="mt-2.5 sm:mt-3 grid grid-cols-2 gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setPurpose("Investor")}
                  className={`rounded-xl py-3.5 sm:py-4 font-medium transition ${purpose === "Investor" ? "border border-[oklch(0.78_0.13_75/0.55)] bg-[oklch(0.78_0.13_75/0.08)] text-foreground shadow-[inset_0_0_0_1px_oklch(0.85_0.12_80/0.06)]" : "border border-[oklch(0.65_0.10_70/0.22)] bg-background/20 text-foreground/80 hover:border-[oklch(0.78_0.13_75/0.45)]"}`}
                >
                  Investor
                </button>
                <button
                  type="button"
                  onClick={() => setPurpose("End User")}
                  className={`rounded-xl py-3.5 sm:py-4 font-medium transition ${purpose === "End User" ? "border border-[oklch(0.78_0.13_75/0.55)] bg-[oklch(0.78_0.13_75/0.08)] text-foreground shadow-[inset_0_0_0_1px_oklch(0.85_0.12_80/0.06)]" : "border border-[oklch(0.65_0.10_70/0.22)] bg-background/20 text-foreground/80 hover:border-[oklch(0.78_0.13_75/0.45)]"}`}
                >
                  End User
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#E3C98B]/20">
            <p className="text-xs text-foreground/60 mb-6">
              By submitting, you agree to receive project details via phone, WhatsApp &amp; email.
            </p>
            <PremiumButton
              type="submit"
              disabled={status === "submitting"}
              fullWidth
              innerClassName="w-full py-4 text-[13px] gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Submitting..." : "Get Complete Investment Details"}
              {status !== "submitting" && <ArrowRight className="h-4 w-4" />}
            </PremiumButton>
            {status === "error" && (
              <p className="mt-4 text-center text-sm text-red-500">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </>
      )}
    </form>
  );
}

function EnquireNow() {
  return (
    <section id="contact" className="py-12 lg:py-16">
      <div className="mx-auto max-w-[1120px] px-4 lg:px-6 xl:px-8">
        <SectionLabel n="09" t="ENQUIRE NOW" />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14">
          {/* LEFT */}
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-6xl leading-[1.05] text-foreground">
              Get <span className="italic" style={{ color: "oklch(0.83 0.11 78)" }}>Complete</span>
              <br />
              Investment Details.
            </h2>
            <p className="mt-4 sm:mt-5 text-foreground/70 leading-relaxed text-base sm:text-lg max-w-xl">
              Priority access to pricing, RERA documentation, floor plans,
              rental projections &amp; exclusive pre-launch offers.
            </p>

            <div className="mt-7 sm:mt-8 rounded-[22px] border border-[oklch(0.65_0.10_70/0.22)] hover:border-[#C69A57] transition-colors duration-300 bg-[linear-gradient(180deg,oklch(0.20_0.014_60/0.55),oklch(0.17_0.012_60/0.35))] backdrop-blur p-4 sm:p-5 flex items-start gap-3 sm:gap-4">
              <div className="h-10 w-12 rounded-full bg-[linear-gradient(135deg,oklch(0.85_0.12_80),oklch(0.65_0.13_65))] flex items-center justify-center shrink-0 shadow-[0_22px_60px_-40px_oklch(0.78_0.13_75/0.80)]">
                <AlertCircle className="h-5 w-5 text-[oklch(0.16_0.012_60)]" />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-foreground">Limited Premium Units Available</h3>
                <p className="text-sm text-foreground/65 mt-2">
                  Only a handful of high-floor units remain in this phase.
                </p>
              </div>
            </div>

            <div className="mt-3 rounded-[22px] border border-[oklch(0.65_0.10_70/0.22)] hover:border-[#C69A57] transition-colors duration-300 bg-[linear-gradient(180deg,oklch(0.20_0.014_60/0.55),oklch(0.17_0.012_60/0.35))] backdrop-blur p-4 sm:p-6">
              <div className="text-[10px] tracking-[0.3em] text-[#E3C98B] mb-2">WHY INVEST NOW</div>
              <div
                className="font-serif leading-[1.1] text-5xl sm:text-7xl md:text-[6rem] lg:text-[6rem] bg-gradient-to-b from-[#F5E9C8] via-[#E3C98B] to-[#C69A57] bg-clip-text text-transparent"
              >
                15-18<span className="text-5xl sm:text-6xl md:text-[4rem] lg:text-[4rem]">%</span>
              </div>
              <p className="text-sm text-foreground/65 mt-4">
                Expected annual ROI - rental yield + capital appreciation.
              </p>
            </div>
          </div>

          {/* RIGHT - Form */}
          <EnquiryForm />
        </div>
      </div>
    </section >
  );
}

/* ---------- FOOTER ---------- */

function SiteFooter() {
  const navLinks = ["ROI & Returns", "Project Highlights", "Space Options", "Amenities", "Location", "Contact"];
  const socials = [Instagram, Facebook, Linkedin, Youtube];
  return (
    <footer className="relative border-t border-[oklch(0.65_0.10_70/0.18)] pt-10 pb-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_30%,oklch(0.78_0.13_75/0.08),transparent_60%)]" />
      <div className="mx-auto max-w-[1120px] px-4 lg:px-6 xl:px-8">
        <div className="grid lg:grid-cols-3 gap-14 lg:gap-16">
          {/* About */}
          <div>
            <div className="relative h-12 w-12 rounded-full bg-[linear-gradient(135deg,oklch(0.86_0.12_80),oklch(0.65_0.13_65))] mb-8 shadow-[0_26px_70px_-44px_oklch(0.78_0.13_75/0.85)]">
              <div className="pointer-events-none absolute -inset-6 rounded-full bg-[radial-gradient(circle,oklch(0.86_0.12_80/0.22),transparent_70%)]" />
            </div>
            <p className="text-sm text-foreground/65 leading-relaxed max-w-md">
              Looking for{" "}
              <span className="text-[#E3C98B]">office space in Sindhu Bhavan Ahmedabad</span>?
              This premium commercial project offers modern office spaces and showroom units with{" "}
              <span className="text-[#E3C98B]">high ROI potential (15-18% annual returns)</span>,
              G+38 storey landmark design, green building certification, 18 high-speed lifts, and
              4-level basement parking in Ahmedabad's most prestigious business corridor.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-full border border-[oklch(0.65_0.10_70/0.24)] bg-background/10 backdrop-blur flex items-center justify-center hover:border-[oklch(0.78_0.13_75/0.55)] hover:bg-[oklch(0.78_0.13_75/0.06)] transition"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4 text-[#E3C98B]" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <div className="text-[12px] tracking-[0.30em] text-[#E3C98B]/90 mb-8">NAVIGATE</div>
            <ul className="space-y-5 text-sm text-foreground/80">
              {navLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-[#E3C98B] transition">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[12px] tracking-[0.30em] text-[#E3C98B]/90 mb-8">CONTACT</div>
            <ul className="space-y-5 text-sm text-foreground/80">
              <li className="flex items-start gap-4">
                <MapPin className="h-4 w-4 text-[#E3C98B] mt-1 shrink-0" />
                <a href="https://maps.google.com/?q=Sindhu+Bhavan+Road,+Bodakdev,+Ahmedabad,+Gujarat+380054" target="_blank" rel="noopener noreferrer" className="hover:text-[#E3C98B] transition">
                  Sindhu Bhavan Road, Bodakdev, Ahmedabad, Gujarat 380054
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="h-4 w-4 text-[#E3C98B]" />
                <a href="tel:+919898709370" className="hover:text-[#E3C98B] transition">
                  +91 9898709370
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-4 w-4 text-[#E3C98B]" />
                <a href="mailto:info@plinthreality.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E3C98B] transition">
                  info@plinthreality.com
                </a>
              </li>
            </ul>

            <div className="mt-8 relative rounded-2xl border border-[oklch(0.65_0.10_70/0.22)] bg-[linear-gradient(180deg,oklch(0.20_0.014_60/0.50),oklch(0.17_0.012_60/0.30))] backdrop-blur p-6 overflow-hidden">
              <div className="pointer-events-none absolute -top-12 -left-12 h-48 w-48 rounded-full transparent_68%)]" />
              <div className="relative text-[10px] tracking-[0.35em] text-[#E3C98B]/90 mb-3">EXPECTED ROI</div>
              <div className="relative font-serif text-4xl italic bg-gradient-to-b from-[#F5E9C8] via-[#E3C98B] to-[#C69A57] bg-clip-text text-transparent">
                15-18% p.a.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[oklch(0.65_0.10_70/0.16)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-foreground/45">
          <span>© {new Date().getFullYear()} Sindhu Bhavan. All rights reserved.<br />Made with by <a href="https://13utopia.com">13UTOPiA</a></span>

          <span className="flex items-center gap-1.5">
            © {new Date().getFullYear()} Made with
            <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500 animate-pulse" />
            by <a href="https://13utopia.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C69A57] transition-colors">13UTOPiA</a>
          </span>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <a href="#" className="hover:text-[#E3C98B]">Privacy Policy</a>
            <a href="#" className="hover:text-[#E3C98B]">Terms</a>
            <a href="#" className="hover:text-[#E3C98B]">Pre-Launch Project</a>
            <a href="#" className="hover:text-[#E3C98B]">Disclaimer</a>
          </div>
        </div>
        <p className="mt-6 text-[11px] text-foreground/40 leading-relaxed">
          Disclaimer: Images are artistic impressions. ROI projections are based on current market analysis and may vary. Past performance is not indicative of future results.
        </p>
      </div>
    </footer >
  );
}

/* ---------- PAGE ---------- */

function EnquiryModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-2xl animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full bg-background/20 p-2 text-foreground/60 hover:bg-background/40 hover:text-foreground backdrop-blur border border-[oklch(0.65_0.10_70/0.22)] transition"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        <EnquiryForm />
      </div>
    </div>
  );
}

function PlinthLanding() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-background overflow-hidden [zoom:0.92] xl:[zoom:0.88]">
      <Nav onEnquireClick={() => setIsModalOpen(true)} />
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

      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
