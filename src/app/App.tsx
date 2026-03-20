import { useState, useEffect, useRef } from "react";
import svgPaths from "../imports/svg-are6q647vg";
import {
  GraduationCap,
  Building2,
  BriefcaseBusiness,
  ShoppingBag,
  Dumbbell,
  Theater,
  UtensilsCrossed,
  Home,
} from "lucide-react";
import imgMotionImg from "../assets/figma/eaa78224c1974336e9569a3de872efd11b38eede.png";
import imgMotionImg1 from "../assets/figma/6f8aa6e99331d89a2b603a64cb9fc08afd48d117.png";
import imgImg from "../assets/figma/4b4e7ebacda091e49ac45b9c07bb7e2f2811bcfa.png";
import imgImg1 from "../assets/figma/d8467976fafa9b0e4d5b109b3ee5abeeb6c55d04.png";
import imgImg2 from "../assets/figma/e179ea00bc84283ae34bc53b381b155bb9dd3ee5.png";
import imgImg3 from "../assets/figma/96e27b212c9ef3caf4486da3ef6e5d542b0da8cb.png";
import imgMotionImg2 from "../assets/figma/11e78a53d33540d5ee0c02d20f0384e48fea1024.png";
import imgMotionImg3 from "../assets/figma/54d5dedadd306f34fd1cefef0856fca7581d745f.png";
import imgMotionImg4 from "../assets/figma/de7a5ccc8597df4faa089b2ce62a024aba49609c.png";
import imgImg4 from "../assets/figma/19db15375fd2e65a1cd75b71a8214a338ae24716.png";
import imgImg5 from "../assets/figma/baa8f94eb93145e8af6d7b9c517c4e6e4d145e3b.png";
import imgImg6 from "../assets/figma/f3be4cf1ef97adc392cde42f4fda364118585941.png";
import imgImg7 from "../assets/figma/39a6cd04526fde7b1db41654cff0b154bac7fa56.png";
import imgImage from "../assets/figma/c05c3cb162faebf9de2b56030eedc3d21a8313f7.png";

// Unified content width. Side paddings should be noticeable but not "too wide".
// clamp(16px, 4vw, 64px): mobile 16px, grows with viewport, capped at 64px.
const CONTAINER = "w-full max-w-[1280px] mx-auto px-[clamp(16px,4vw,56px)]";
const CONTAINER_NO_PX = "w-full max-w-[1280px] mx-auto";

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

/* ── countUp hook ── */
function useCountUp(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - (1 - p) * (1 - p);
          setCount(Math.round(ease * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return { ref, count };
}

/* ────────────────────────────────────────────────────────
   ICONS
──────────────────────────────────────────────────────── */
function ArrowUpRight({ color }: { color?: string }) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={svgPaths.p75bbac0} stroke={color ?? 'currentColor'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
        <path d={svgPaths.p173e4d00} fill={color ?? 'currentColor'} />
        <path d={svgPaths.p3908d100} stroke={color ?? 'currentColor'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
      </svg>
    </div>
  );
}

function GraduationCapIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[36px]">
      <div className="absolute inset-[20.83%_8.27%_37.5%_8.34%]"><div className="absolute inset-[-3.33%_-1.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.0228 16.0011">
          <path d={svgPaths.p29365e00} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
        </svg>
      </div></div>
      <div className="absolute inset-[41.67%_8.33%_33.33%_91.67%]"><div className="absolute inset-[-5.56%_-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 10">
          <path d="M0.5 0.5V9.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
        </svg>
      </div></div>
      <div className="absolute bottom-[20.83%] left-1/4 right-1/4 top-[52.08%]"><div className="absolute inset-[-5.13%_-2.78%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 10.75">
          <path d={svgPaths.p17b64a80} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
        </svg>
      </div></div>
    </div>
  );
}

function BuildingIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[36px]">
      <div className="absolute bottom-[8.33%] left-1/4 right-1/4 top-[8.33%]"><div className="absolute inset-[-1.67%_-2.78%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 31">
          <path d={svgPaths.p3030e570} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
        </svg>
      </div></div>
      <div className="absolute bottom-[8.33%] left-[8.33%] right-3/4 top-1/2"><div className="absolute inset-[-3.33%_-8.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 16">
          <path d={svgPaths.p26312700} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
        </svg>
      </div></div>
      <div className="absolute bottom-[8.33%] left-3/4 right-[8.33%] top-[37.5%]"><div className="absolute inset-[-2.56%_-8.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 20.5">
          <path d={svgPaths.p2eeb3780} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
        </svg>
      </div></div>
    </div>
  );
}

function BriefcaseIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[36px]">
      <div className="absolute inset-[8.33%_32.09%_16.67%_34.58%]"><div className="absolute inset-[-1.85%_-4.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 28">
          <path d={svgPaths.p15eb6800} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
        </svg>
      </div></div>
      <div className="absolute bottom-[16.67%] left-[9.58%] right-[7.09%] top-1/4"><div className="absolute inset-[-2.38%_-1.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 22">
          <path d={svgPaths.pf9ae100} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
        </svg>
      </div></div>
    </div>
  );
}

function ShoppingBagIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[36px]">
      <div className="absolute inset-[8.33%_12.5%]"><div className="absolute inset-[-1.67%_-1.85%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 31">
          <path d={svgPaths.p2a8c6480} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
        </svg>
      </div></div>
      <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4"><div className="absolute inset-[-0.5px_-1.85%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 1">
          <path d="M0.5 0.5H27.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
        </svg>
      </div></div>
      <div className="absolute inset-[41.67%_33.33%]"><div className="absolute inset-[-8.33%_-4.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 7">
          <path d={svgPaths.p2808ef58} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
        </svg>
      </div></div>
    </div>
  );
}

function DumbbellIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[36px]">
      <div className="absolute inset-[40%]"><div className="absolute inset-[-6.94%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.2 8.2">
          <path d="M7.7 7.7L0.5 0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
        </svg>
      </div></div>
      <div className="absolute inset-[44.36%_8.04%_8.04%_44.36%]"><div className="absolute inset-[-2.92%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1374 18.1374">
          <path d={svgPaths.p13b0a2c0} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
        </svg>
      </div></div>
      <div className="absolute inset-[8.04%_44.36%_44.36%_8.04%]"><div className="absolute inset-[-2.92%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1374 18.1374">
          <path d={svgPaths.p3ded1a80} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
        </svg>
      </div></div>
    </div>
  );
}

function TheaterIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[36px]">
      <div className="absolute inset-[8.33%_79.17%_58.33%_8.33%]"><div className="absolute inset-[-4.17%_-11.11%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.5 13">
          <path d="M0.5 12.5C0.5 12.5 5 8 5 0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
        </svg>
      </div></div>
      <div className="absolute inset-[8.33%_8.33%_58.33%_79.17%]"><div className="absolute inset-[-4.17%_-11.11%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.5 13">
          <path d="M5 12.5C5 12.5 0.5 8 0.5 0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
        </svg>
      </div></div>
      <div className="absolute inset-[8.33%_58.33%_58.33%_8.33%]"><div className="absolute inset-[-4.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
          <path d={svgPaths.p1df6b980} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
        </svg>
      </div></div>
      <div className="absolute inset-[8.33%_8.33%_58.33%_58.33%]"><div className="absolute inset-[-4.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
          <path d={svgPaths.p36167800} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
        </svg>
      </div></div>
      <div className="absolute inset-[79.17%_58.33%_8.33%_8.33%]"><div className="absolute inset-[-11.11%_-4.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 5.5">
          <path d={svgPaths.pe0b4520} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
        </svg>
      </div></div>
      <div className="absolute inset-[79.17%_8.33%_8.33%_58.33%]"><div className="absolute inset-[-11.11%_-4.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 5.5">
          <path d={svgPaths.p1dffeea0} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
        </svg>
      </div></div>
    </div>
  );
}

function ForkIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[36px]">
      <div className="absolute inset-[8.33%_8.33%_53.51%_53.51%]"><div className="absolute inset-[-3.64%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.7364 14.7364">
          <path d={svgPaths.p32897f20} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
        </svg>
      </div></div>
      <div className="absolute inset-[13.75%_8.33%_8.33%_8.5%]"><div className="absolute inset-[-1.78%_-1.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.9409 29.05">
          <path d={svgPaths.p33287b00} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
        </svg>
      </div></div>
    </div>
  );
}

function HomeIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[36px]">
      <div className="absolute bottom-[12.5%] left-[37.5%] right-[37.5%] top-1/2"><div className="absolute inset-[-3.7%_-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 14.5">
          <path d={svgPaths.p1182a100} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
        </svg>
      </div></div>
      <div className="absolute inset-[8.34%_12.5%_12.5%_12.5%]"><div className="absolute inset-[-1.75%_-1.85%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 29.4992">
          <path d={svgPaths.p2d6ed800} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
        </svg>
      </div></div>
    </div>
  );
}

/* small icons for solutions column */
function DocIcon() {
  return <div className="relative shrink-0 size-[15px]"><svg className="absolute block size-full" fill="none" viewBox="0 0 15 15">
    <path d={svgPaths.p4ce6280} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="0.9375" />
    <path d={svgPaths.p38359080} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="0.9375" />
    <path d={svgPaths.p1c8d3500} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="0.9375" />
  </svg></div>;
}
function BoxesIcon() {
  return <div className="relative shrink-0 size-[15px]"><svg className="absolute block size-full" fill="none" viewBox="0 0 15 15">
    <g clipPath="url(#cbox)">
      <path d={svgPaths.pb2b77c0} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="0.9375" />
      <path d={svgPaths.p2bd82b00} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="0.9375" />
      <path d={svgPaths.p18570480} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="0.9375" />
    </g>
    <defs><clipPath id="cbox"><rect fill="white" height="15" width="15" /></clipPath></defs>
  </svg></div>;
}
function ShieldIcon() {
  return <div className="relative shrink-0 size-[15px]"><svg className="absolute block size-full" fill="none" viewBox="0 0 15 15">
    <path d={svgPaths.p1950ab00} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="0.9375" />
    <path d={svgPaths.pc274700} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="0.9375" />
  </svg></div>;
}
function PersonIcon() {
  return <div className="relative shrink-0 size-[15px]"><svg className="absolute block size-full" fill="none" viewBox="0 0 15 15">
    <path d={svgPaths.p2f69c040} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="0.9375" />
    <path d={svgPaths.p24aeb400} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="0.9375" />
    <path d={svgPaths.p28f1f780} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="0.9375" />
    <path d={svgPaths.p6d4e810} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="0.9375" />
  </svg></div>;
}
function HeadphonesIcon() {
  return <div className="relative shrink-0 size-[15px]"><svg className="absolute block size-full" fill="none" viewBox="0 0 15 15">
    <path d={svgPaths.p1f58da00} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="0.9375" />
  </svg></div>;
}

/* ────────────────────────────────────────────────────────
   HEADER
──────────────────────────────────────────────────────── */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible]   = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const hide = () => { if (window.scrollY > 80) setVisible(false); };
    const reset = () => {
      setVisible(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(hide, 7000);
    };
    const onScroll = () => { setScrolled(window.scrollY > 10); reset(); };

    window.addEventListener('scroll',     onScroll, { passive: true });
    window.addEventListener('mousemove',  reset,    { passive: true });
    window.addEventListener('keydown',    reset,    { passive: true });
    window.addEventListener('click',      reset,    { passive: true });
    window.addEventListener('touchstart', reset,    { passive: true });

    return () => {
      window.removeEventListener('scroll',     onScroll);
      window.removeEventListener('mousemove',  reset);
      window.removeEventListener('keydown',    reset);
      window.removeEventListener('click',      reset);
      window.removeEventListener('touchstart', reset);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const navItems = [
    { label: 'Каталог',      id: 'catalog'  },
    { label: 'О нас',        id: 'about'    },
    { label: 'Объекты',      id: 'objects'  },
    { label: 'Наша команда', id: 'team'     },
    { label: 'Контакты',     id: 'contacts' },
  ];

  const handleNav = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <>
      <div
        className={[
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-white/60 backdrop-blur-[18px] border-b border-white/30 shadow-sm'
            : 'bg-white border-b border-[#d5d5d5]',
          visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0',
        ].join(' ')}
      >
        <div className="flex items-center justify-between w-full max-w-[1280px] mx-auto px-[clamp(16px,4vw,56px)] py-[20px] text-[14px]">
          <p className="font-['Space_Grotesk',sans-serif] font-bold leading-[18px] text-[#111] text-[12px] tracking-[0.24px] whitespace-nowrap">Интерио</p>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-[32px] items-center whitespace-nowrap">
            {navItems.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => handleNav(id)}
                className="font-['Raleway',sans-serif] font-light text-[14px] text-[rgba(0,0,0,0.48)] hover:text-[#111] transition-colors duration-200"
              >
                {label}
              </button>
            ))}
          </nav>

          <p className="hidden md:block font-['Space_Grotesk',sans-serif] font-bold leading-[18px] text-[#111] text-[12px] tracking-[0.24px] whitespace-nowrap">ИНТЕРИО</p>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] justify-center items-center w-[36px] h-[36px]"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Меню"
          >
            <span className={`block h-[1.5px] w-[22px] bg-[#111] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block h-[1.5px] w-[22px] bg-[#111] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-[1.5px] w-[22px] bg-[#111] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={[
          'fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-[18px] transition-all duration-400 md:hidden',
          menuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none',
        ].join(' ')}
      >
        <div className="flex flex-col pt-[80px] pb-[32px] px-6 gap-[4px]">
          {navItems.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className="font-['Raleway',sans-serif] font-light text-[22px] text-[rgba(0,0,0,0.55)] hover:text-[#111] transition-colors duration-200 text-left py-[12px] border-b border-[rgba(0,0,0,0.06)] last:border-0"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

/* ────────────────────────────────────────────────────────
   HERO
──────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <div className={`flex flex-col gap-5 md:gap-[24px] items-start pt-[72px] md:pt-[88px] ${CONTAINER}`}>
      <div className="flex flex-col gap-4 md:gap-[20px] items-start w-full">
        <div className="flex flex-col gap-4 md:gap-[20px] items-start w-full">

          {/* Title + badges */}
          <div className="flex flex-col gap-3 md:gap-[20px] items-center w-full">
            <div className="font-['Cormorant_Garamond',sans-serif] font-light leading-[normal] text-[28px] md:text-[40px] text-black text-center uppercase w-full">
              <p className="m-0">Комплексные поставки потолочных систем</p>
              <p className="m-0">и напольных покрытий</p>
            </div>
            <div className="flex flex-wrap gap-[6px] md:gap-[8px] items-center justify-center w-full">
              {['✓ с 2015 года на рынке', '✓ 200+ реализованных объектов', '✓ официальные дистрибьюторы заводов'].map(b => (
                <div key={b} className="border-[0.8px] border-[rgba(0,0,0,0.13)] rounded-[100px] h-[24px] flex items-center px-[12px]">
                  <p className="font-['Raleway',sans-serif] font-normal text-[#4b4b4b] text-[10px] whitespace-nowrap">{b}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Two images — on mobile only 1 photo so CTA fits on screen */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0 md:justify-between w-full">
            <div className="h-[150px] md:h-[320px] w-full md:w-[49.5%] overflow-hidden">
              <img alt="" className="w-full h-full object-cover" src={imgMotionImg} />
            </div>
            <div className="hidden md:block h-[320px] w-[49.5%] overflow-hidden">
              <img alt="" className="w-full h-full object-cover" src={imgMotionImg1} />
            </div>
          </div>
        </div>

        {/* CTA + description + tags */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 w-full">
          <div className="flex flex-col md:flex-row gap-4 md:gap-[24px] items-start md:items-center w-full md:w-auto">
            <button
              onClick={() => scrollToSection('contacts')}
              className="group relative overflow-hidden flex gap-[6px] h-[52px] md:h-[60px] items-center justify-center px-[24px] md:p-[10px] rounded-[100px] w-full md:w-[291px] border border-[rgba(0,0,0,0.25)] bg-white text-[#2b2a2a] transition-[border-color,color,transform,box-shadow] duration-250 ease-out hover:text-white hover:border-black hover:shadow-[0_14px_30px_rgba(0,0,0,0.18)] hover:-translate-y-[1px] active:translate-y-0 active:shadow-[0_8px_18px_rgba(0,0,0,0.14)] shrink-0"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 origin-left scale-x-0 bg-black transition-transform duration-500 ease-out group-hover:scale-x-100"
              />
              <span className="relative z-10 flex gap-[6px] items-center">
                <ArrowUpRight />
              <p className="font-['Raleway',sans-serif] font-medium text-[14px] md:text-[16px] text-center whitespace-nowrap">
                ОСТАВИТЬ ЗАЯВКУ
              </p>
              </span>
            </button>
            <p className="font-['Raleway',sans-serif] font-extralight leading-[21px] text-[#2b2b2b] text-[13px] md:text-[14px] md:w-[586px]">
              Работаем с застройщиками и проектировщиками по всей России. Подбираем решения, оптимизируем бюджет и сопровождаем проект до завершения строительства.
            </p>
          </div>
          <div className="flex gap-[4px] items-center shrink-0">
            {['Потолки', 'Покрытия', 'Под ключ'].map(tag => (
              <div key={tag} className="h-[22px] rounded-[100px] border-[0.8px] border-[rgba(0,0,0,0.13)] flex items-center px-[10px]">
                <p className="font-['Raleway',sans-serif] font-normal text-[9.92px] text-[rgba(0,0,0,0.4)] whitespace-nowrap">{tag}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#d5d5d5] h-px w-full" />
    </div>
  );
}

/* ────────────────────────────────────────────────────────
   ABOUT / CATEGORIES
──────────────────────────────────────────────────────── */
function CategoryCard({ icon, title, subtitle }: {
  icon: React.ReactNode; title: string; subtitle: string;
}) {
  return (
    <div className="h-full w-full min-h-[140px] min-w-px relative">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] md:p-[24px] relative w-full h-full">
        {icon}
        <p className="font-['Cormorant_Garamond',sans-serif] font-medium leading-[normal] text-[#111] text-[16px] md:text-[20px]">{title}</p>
        <p className="font-['Raleway',sans-serif] font-light leading-[normal] text-[#111] text-[10px] md:text-[12px]">{subtitle}</p>
      </div>
    </div>
  );
}

function AboutSection() {
  const iconProps = {
    size: 36,
    strokeWidth: 1.15,
    className: "text-[rgba(0,0,0,0.45)]",
  } as const;

  return (
    <div id="about" className={`flex flex-col gap-4 md:gap-[20px] items-start ${CONTAINER}`}>
      <div className="flex flex-col gap-3 md:gap-[20px] items-start">
        <p className="font-['Raleway',sans-serif] font-semibold leading-[normal] text-[11px] md:text-[12px] text-[rgba(0,0,0,0.38)] tracking-[1px] uppercase">Поставляем для</p>
        <p className="font-['Cormorant_Garamond',sans-serif] font-light leading-[1.2] text-[#111] text-[26px] md:text-[36px]">Коммерческих и социальных объектов</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 w-full items-stretch border border-[#eaeaea] divide-x divide-y divide-[#eaeaea]">
        <CategoryCard icon={<GraduationCap {...iconProps} />} title="Образование" subtitle="школы, ВУЗы, детсады" />
        <CategoryCard icon={<Building2 {...iconProps} />} title="Медицина" subtitle="клиники, больницы, лаборатории" />
        <CategoryCard icon={<BriefcaseBusiness {...iconProps} />} title="Офисы" subtitle="БЦ, коворкинги, open space" />
        <CategoryCard icon={<ShoppingBag {...iconProps} />} title="ТРЦ" subtitle="моллы, галереи, шоурумы" />
        <CategoryCard icon={<Dumbbell {...iconProps} />} title="Спорт" subtitle="арены, стадионы, фитнес" />
        <CategoryCard icon={<Theater {...iconProps} />} title="Культура" subtitle="театры, музеи, кино" />
        <CategoryCard icon={<UtensilsCrossed {...iconProps} />} title="HORECA" subtitle="отели, рестораны, кафе" />
        <CategoryCard icon={<Home {...iconProps} />} title="Жилые комплексы" subtitle="МОПы, холлы, подъезды" />
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────
   PROBLEMS / SOLUTIONS
──────────────────────────────────────────────────────── */
const PROBLEMS = [
  { num: '01', prob: 'Отсутствие компетентной технической поддержки', sol: 'Анализ проектной документации',       Icon: DocIcon },
  { num: '02', prob: 'Сложности в выборе и согласовании материалов',   sol: 'Подбор и согласование материалов',   Icon: BoxesIcon },
  { num: '03', prob: 'Невыгодные закупочные условия у посредников',    sol: 'Прямые цены — без посредников',       Icon: ShieldIcon },
  { num: '04', prob: 'Ошибки в проектных решениях на этапе спецификации', sol: 'Личный менеджер на весь проект',  Icon: PersonIcon },
  { num: '05', prob: 'Отсутствие сопровождения проекта от начала до конца', sol: 'Поддержка на этапе монтажа',   Icon: HeadphonesIcon },
];

function ProblemRow({ num, prob, sol, Icon }: { num: string; prob: string; sol: string; Icon: React.ComponentType }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative shrink-0 w-full cursor-default border-b-[0.8px] border-[rgba(0,0,0,0.06)]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Mobile: stacked */}
      <div className="flex flex-col md:hidden transition-colors duration-200" style={{ backgroundColor: hovered ? '#f7f5f2' : '#fafafa' }}>
        <div className="flex gap-[12px] items-start px-4 py-3">
          <p className="font-['Raleway',sans-serif] font-semibold text-[8.96px] tracking-[0.896px] text-[rgba(0,0,0,0.35)] shrink-0 pt-[2px]">{num}</p>
          <p className="font-['Raleway',sans-serif] font-normal text-[12px] text-[rgba(0,0,0,0.55)]">{prob}</p>
        </div>
        <div className="flex gap-[12px] items-center px-4 pb-3">
          <div className="rounded-[6px] size-[28px] shrink-0 flex items-center justify-center bg-[rgba(0,0,0,0.06)]">
            <Icon />
          </div>
          <p className="font-['Raleway',sans-serif] font-medium text-[11px] text-[rgba(0,0,0,0.6)]">{sol}</p>
        </div>
      </div>

      {/* Desktop: side by side */}
      <div className="hidden md:flex h-[76.8px] relative">
        <div
          className="absolute left-0 top-0 w-1/2 h-full transition-colors duration-200"
          style={{ backgroundColor: hovered ? '#f0ede9' : '#fafafa' }}
        >
          <div className="absolute inset-0 border-b-[0.8px] border-r-[0.8px] border-[rgba(0,0,0,0.06)]" />
          <div className="flex gap-[20px] items-center h-full pl-[40px] pr-[0.8px] pb-[0.8px]">
            <p className="font-['Raleway',sans-serif] font-semibold text-[8.96px] tracking-[0.896px] whitespace-nowrap transition-colors duration-200"
              style={{ color: hovered ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.22)' }}>{num}</p>
            <p className="font-['Raleway',sans-serif] font-normal leading-[20.064px] text-[12.16px] whitespace-nowrap transition-colors duration-200"
              style={{ color: hovered ? 'rgba(0,0,0,0.82)' : 'rgba(0,0,0,0.42)' }}>{prob}</p>
          </div>
        </div>
        <div
          className="absolute left-1/2 top-0 w-1/2 h-full transition-colors duration-200"
          style={{ backgroundColor: hovered ? '#f7f5f2' : 'white' }}
        >
          <div className="absolute inset-0 border-b-[0.8px] border-[rgba(0,0,0,0.06)]" />
          <div className="flex gap-[16px] items-center h-full pl-[40px] pb-[0.8px]">
            <div
              className="rounded-[8px] size-[36px] shrink-0 flex items-center justify-center transition-colors duration-200"
              style={{ backgroundColor: hovered ? 'rgba(0,0,0,0.12)' : 'rgba(0,0,0,0.06)' }}
            >
              <Icon />
            </div>
            <p className="font-['Raleway',sans-serif] font-medium leading-[17.76px] text-[11.84px] whitespace-nowrap transition-colors duration-200"
              style={{ color: hovered ? 'rgba(0,0,0,0.82)' : 'rgba(0,0,0,0.5)' }}>{sol}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProblemsSection() {
  return (
    <div className={`flex flex-col gap-8 md:gap-[56px] items-start py-[20px] md:py-[40px] ${CONTAINER}`}>
      <div className="flex flex-col md:flex-row items-start w-full gap-6 md:gap-0">
        <div className="flex flex-col gap-3 md:gap-[20px] items-start w-full md:w-1/2 md:pr-[40px]">
          <p className="font-['Raleway',sans-serif] font-semibold text-[11px] md:text-[12px] text-[rgba(0,0,0,0.38)] tracking-[1px] uppercase">Проблемы объектов</p>
          <p className="font-['Cormorant_Garamond',sans-serif] font-light leading-[1.2] text-[#111] text-[24px] md:text-[36px]">С чем сталкиваются строящиеся объекты</p>
        </div>
        <div className="flex flex-col gap-3 md:gap-[20px] items-start w-full md:w-1/2 md:pl-[40px]">
          <p className="font-['Raleway',sans-serif] font-semibold text-[11px] md:text-[12px] text-[rgba(0,0,0,0.38)] tracking-[1px] uppercase">Решение интерио</p>
          <p className="font-['Cormorant_Garamond',sans-serif] font-light leading-[1.2] text-[#111] text-[24px] md:text-[36px]">Сопровождаем проект от А до Я</p>
        </div>
      </div>
      <div className="flex flex-col items-start w-full border-b-[0.8px] border-[rgba(0,0,0,0.08)]">
        {PROBLEMS.map(row => <ProblemRow key={row.num} {...row} />)}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────
   PARTNERS MARQUEE
──────────────────────────────────────────────────────── */
function PartnersSection() {
  const logos = [imgImg, imgImg1, imgImg2, imgImg3, imgImg, imgImg1, imgImg2, imgImg3,
                 imgImg, imgImg1, imgImg2, imgImg3, imgImg, imgImg1, imgImg2, imgImg3];
  const [offset, setOffset] = useState(0);
  const rafRef = useRef<number>(0);
  const lastRef = useRef(0);

  useEffect(() => {
    const tick = (ts: number) => {
      if (lastRef.current) {
        setOffset(p => (p + (ts - lastRef.current) * 0.04) % (320 * 4));
      }
      lastRef.current = ts;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="bg-[#fafafa] w-full">
      <div className={`flex flex-col gap-4 md:gap-[20px] items-start py-4 md:py-[40px] ${CONTAINER}`}>
        <div className="flex flex-col gap-2 md:gap-[20px] items-start">
          <p className="font-['Raleway',sans-serif] font-semibold text-[11px] md:text-[12px] text-[rgba(0,0,0,0.38)] tracking-[1px] uppercase">Официальные дистрибьюторы</p>
          <p className="font-['Cormorant_Garamond',sans-serif] font-light leading-[1.2] text-[#111] text-[24px] md:text-[36px]">Прямые контракты с производителями</p>
        </div>
      </div>

      {/* бегущая строка — на всю ширину, без контейнера */}
      <div className="overflow-hidden w-full h-[80px] md:h-[140px] relative">
          <div
            className="flex items-center h-full absolute top-0 left-0"
            style={{ transform: `translateX(-${offset}px)`, width: `${320 * logos.length}px` }}
          >
            {logos.map((src, i) => (
              <div key={i} className="h-full w-[200px] md:w-[320px] shrink-0 flex items-center justify-center">
                <img
                  alt=""
                  className="h-[50px] md:h-[108px] w-[120px] md:w-[216px] object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                  src={src}
                />
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────
   STATS CARD
──────────────────────────────────────────────────────── */
function StatItem({ target, suffix, label }: {
  target: number; suffix?: string; label: string;
}) {
  const { ref, count } = useCountUp(target, 1800);
  const fmt = count >= 1000
    ? count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    : String(count);
  return (
    <div ref={ref} className="flex flex-col gap-[4px] md:gap-[8px] items-center flex-1 min-w-[110px] md:min-w-[160px]">
      <p className="font-['Cormorant_Garamond',sans-serif] font-light text-[32px] md:text-[48px] text-center w-full text-[#111] whitespace-nowrap">
        {fmt}{suffix}
      </p>
      <p className="font-['Raleway',sans-serif] font-extralight leading-[1.5] text-[10px] md:text-[12px] text-[rgba(0,0,0,0.5)] w-full text-center">{label}</p>
    </div>
  );
}

function StatYears() {
  const { ref, count } = useCountUp(10, 1600);
  return (
    <div ref={ref} className="flex flex-col gap-[4px] md:gap-[8px] items-center flex-1 min-w-[110px] md:min-w-[160px]">
      <p className="font-['Cormorant_Garamond',sans-serif] font-light text-[#111] text-[32px] md:text-[48px] text-center w-full whitespace-nowrap">
        {count} лет
      </p>
      <p className="font-['Raleway',sans-serif] font-extralight leading-[1.5] text-[10px] md:text-[12px] text-[rgba(0,0,0,0.5)] uppercase w-full text-center">НА РЫНКЕ С 2015 ГОДА</p>
    </div>
  );
}

function StatsCard() {
  return (
    <div className="bg-white relative w-full overflow-hidden">
      <div className="absolute inset-0 pointer-events-none border border-[#eaeaea]" />
      <div className="flex flex-col sm:flex-row items-center justify-between p-[16px] md:p-[24px] gap-4 sm:gap-2">
        <StatItem target={200}     suffix="+" label="Реализованных объектов" />
        <StatItem target={1000000} suffix="+" label="м² поставленных материалов" />
        <StatYears />
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────
   PROJECTS
──────────────────────────────────────────────────────── */
function ProjectsSection() {
  return (
    <div id="objects" className="bg-[#fafafa] w-full">
      <div className={`flex flex-col gap-4 md:gap-[20px] items-start py-4 md:py-[40px] ${CONTAINER}`}>
        <div className="flex flex-col gap-2 md:gap-[20px] items-start">
          <p className="font-['Raleway',sans-serif] font-semibold text-[11px] md:text-[12px] text-[rgba(0,0,0,0.38)] tracking-[1px] uppercase">Реализованные объекты</p>
          <p className="font-['Cormorant_Garamond',sans-serif] font-light leading-[1.2] text-[#111] text-[24px] md:text-[36px]">Более 200 объектов по всей России</p>
        </div>

        <StatsCard />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-[12px] pt-[12px] md:pt-[20px] w-full">
          {[
            { img: imgMotionImg2, cat: 'Спорт',      title: 'Ледовые арены и стадионы' },
            { img: imgMotionImg3, cat: 'Медицина',    title: 'Медицинские центры и клиники' },
            { img: imgMotionImg4, cat: 'Образование', title: 'Образовательные учреждения' },
          ].map(({ img, cat, title }) => (
            <div key={cat} className="flex flex-col gap-[8px] items-start">
              <div className="h-[220px] md:h-[266px] w-full overflow-hidden">
                <img alt="" className="w-full h-full object-cover" src={img} />
              </div>
              <div className="flex flex-col gap-[6px] md:gap-[8px] items-start text-[#111] w-full">
                <p className="font-['Raleway',sans-serif] font-light text-[11px] md:text-[12px] w-full">{cat}</p>
                <p className="font-['Cormorant_Garamond',sans-serif] font-medium text-[18px] md:text-[20px] w-full">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────
   MATERIALS CATALOG
──────────────────────────────────────────────────────── */
type CatalogCard = {
  title: string;
  description: string;
  image: string;
};

const CATALOG_CARDS: CatalogCard[] = [
  {
    title: "Металлические потолки",
    description: "Реечные, кассетные и грильято для общественных и коммерческих пространств.",
    image: imgMotionImg2,
  },
  {
    title: "Акустические системы",
    description: "Потолки и острова для снижения шума в офисах, школах и медцентрах.",
    image: imgMotionImg3,
  },
  {
    title: "Линолеум",
    description: "Гетерогенный, гомогенный и натуральный линолеум под высокий трафик.",
    image: imgMotionImg4,
  },
  {
    title: "LVT покрытия",
    description: "Износостойкие модульные покрытия с быстрым монтажом и простой заменой.",
    image: imgImg1,
  },
  {
    title: "Спортивные покрытия",
    description: "Безопасные и упругие решения для залов, арен и фитнес-пространств.",
    image: imgImg2,
  },
  {
    title: "Системы входных зон",
    description: "Грязезащитные системы и ковролин для чистоты и долговечности интерьера.",
    image: imgImg3,
  },
];

function RotatingCatalog() {
  const [paused, setPaused] = useState(false);
  const cards = [...CATALOG_CARDS, ...CATALOG_CARDS];

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex w-max gap-3 md:gap-4 py-1"
        style={{ animation: "catalog-spin 32s linear infinite", animationPlayState: paused ? "paused" : "running" }}
      >
        {cards.map((card, idx) => (
          <article
            key={`${card.title}-${idx}`}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="group relative h-[154px] md:h-[200px] w-[147px] md:w-[200px] shrink-0 overflow-hidden border border-[rgba(0,0,0,0.08)] bg-white flex flex-col"
          >
            <div className="relative flex-1 w-full overflow-hidden">
              <img alt={card.title} className="h-full w-full object-cover transition-[transform,filter] duration-500 group-hover:scale-[1.03] group-hover:brightness-[0.88]" src={card.image} />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_30%,rgba(0,0,0,0.64)_100%)]" />

              <div className="absolute left-3 right-3 md:left-4 md:right-4 bottom-3 md:bottom-4 rounded-[8px] border border-[rgba(255,255,255,0.22)] bg-[rgba(17,17,17,0.74)] px-3 py-2 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <p className="font-['Raleway',sans-serif] font-light text-[11px] md:text-[12px] leading-[1.4] text-[rgba(255,255,255,0.92)]">
                  {card.description}
                </p>
              </div>
            </div>

            <div className="w-full bg-[rgba(17,17,17,0.92)] px-2 py-1.5 md:px-3 md:py-2">
              <p className="font-['Cormorant_Garamond',sans-serif] font-light text-[12px] md:text-[14px] text-white leading-[1.1] whitespace-nowrap overflow-hidden text-ellipsis">
                {card.title}
              </p>
            </div>
          </article>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[56px] md:w-[96px] bg-[linear-gradient(90deg,rgba(17,17,17,0.62)_0%,rgba(17,17,17,0)_100%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[56px] md:w-[96px] bg-[linear-gradient(270deg,rgba(17,17,17,0.62)_0%,rgba(17,17,17,0)_100%)]" />
    </div>
  );
}

function MaterialsSection() {
  return (
    <div id="catalog" className={`flex flex-col items-start ${CONTAINER}`}>
      <div className="flex flex-col gap-3 md:gap-[20px] items-start pb-6 md:pb-[40px] w-full">
        <p className="font-['Raleway',sans-serif] font-semibold text-[11px] md:text-[12px] text-[rgba(0,0,0,0.38)] tracking-[1px] uppercase">наши решения</p>
        <p className="font-['Cormorant_Garamond',sans-serif] font-light leading-[1.2] text-[#111] text-[24px] md:text-[36px]">Материалы для коммерческих и социальных объектов</p>
      </div>

      <div className="w-full border-t-[0.8px] border-[rgba(0,0,0,0.08)] pt-[16px] md:pt-[22px]">
        <RotatingCatalog />
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────
   TEAM
──────────────────────────────────────────────────────── */
function TeamSection() {
  const members = [
    { img: imgImg4, name: 'Алексей Морозов',  role: 'Руководитель проекта', email: 'Morozov@interio.ru' },
    { img: imgImg5, name: 'Елена Соколова',   role: 'Бухгалтер',            email: 'Sokolova@interio.ru' },
    { img: imgImg6, name: 'Дмитрий Кузнецов', role: 'Начальник отдела',     email: 'Kuznetsov@interio.ru' },
    { img: imgImg7, name: 'Жанна Климова',    role: 'Менеджер',             email: 'Klimova@interio.ru' },
  ];
  return (
    <div id="team" className="w-full">
      <div className={`flex flex-col gap-4 md:gap-[20px] items-start py-4 md:py-[40px] ${CONTAINER}`}>
        <div className="flex flex-col gap-2 md:gap-[20px] items-start">
          <p className="font-['Raleway',sans-serif] font-semibold text-[11px] md:text-[12px] text-[rgba(0,0,0,0.38)] tracking-[1px] uppercase">Наша команда</p>
          <p className="font-['Cormorant_Garamond',sans-serif] font-light leading-[1.2] text-[#111] text-[24px] md:text-[36px]">Специалисты, которые решают задачи</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-[12px] pt-2 md:pt-[20px] w-full">
          {members.map(({ img, name, role, email }) => (
            <div key={name} className="flex flex-col gap-[8px] items-start">
              <div className="h-[200px] md:h-[368px] w-full overflow-hidden">
                <img alt="" className="w-full h-full object-cover" src={img} />
              </div>
              <div className="flex flex-col gap-[4px] md:gap-[8px] items-start text-[#111] w-full">
                <p className="font-['Cormorant_Garamond',sans-serif] font-medium text-[16px] md:text-[20px] w-full">{name}</p>
                <p className="font-['Raleway',sans-serif] font-light text-[10px] md:text-[12px] w-full">{role}</p>
              </div>
              <p className="font-['Raleway',sans-serif] font-light text-[#111] text-[10px] md:text-[12px] w-full">{email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────
   CONTACT
──────────────────────────────────────────────────────── */
function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', comment: '' });
  const [errors, setErrors] = useState({ name: '', phone: '' });
  const [touched, setTouched] = useState({ name: false, phone: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [toast, setToast] = useState(false);

  const validate = (f: typeof form) => ({
    name:  f.name.trim().length < 2 ? 'Введите имя (минимум 2 символа)' : '',
    phone: !/^[\d\s\+\-\(\)]{7,}$/.test(f.phone.trim()) ? 'Введите корректный номер телефона' : '',
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const next = { ...form, [k]: e.target.value };
    setForm(next);
    if (touched[k as 'name' | 'phone']) {
      setErrors(v => ({ ...v, ...{ [k]: validate(next)[k as 'name' | 'phone'] } }));
    }
  };

  const blur = (k: 'name' | 'phone') => () => {
    setTouched(t => ({ ...t, [k]: true }));
    setErrors(v => ({ ...v, [k]: validate(form)[k] }));
  };

  const handleSubmit = async () => {
    const newErrors = validate(form);
    setErrors(newErrors);
    setTouched({ name: true, phone: true });
    if (newErrors.name || newErrors.phone) return;

    try {
      setIsSubmitting(true);

      // TODO: connect real backend/telegram/email later
      await new Promise((r) => setTimeout(r, 450));

      setSent(true);
      setToast(true);
      setForm({ name: '', phone: '', comment: '' });
      setTouched({ name: false, phone: false });
      setErrors({ name: '', phone: '' });
      window.setTimeout(() => setSent(false), 4500);
      window.setTimeout(() => setToast(false), 4500);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contacts" className="bg-[#fafafa] w-full">
      <div className={`flex flex-col gap-4 md:gap-[20px] items-start py-4 md:py-[40px] ${CONTAINER}`}>
        <p className="font-['Raleway',sans-serif] font-semibold text-[11px] md:text-[12px] text-[rgba(0,0,0,0.38)] tracking-[1px] uppercase">Оставить заявку</p>

        <div className="flex flex-col md:flex-row gap-6 md:gap-[32px] items-start md:items-start w-full">

        {/* Image — hidden on small mobile, shown from sm */}
        <div className="hidden sm:block flex-1 h-[280px] md:h-[536px] md:mt-[12px] overflow-hidden relative w-full">
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage} />
          <div
            className="absolute bg-[rgba(17,17,17,0.38)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.22)] shadow-[0_18px_50px_rgba(0,0,0,0.25)] flex flex-col gap-[10px] md:gap-[12px] items-start pl-[16px] md:pl-[22px] py-[14px] md:py-[18px] rounded-[10px] w-[calc(100%-32px)] md:w-[350px]"
            style={{ left: '50%', bottom: '24px', transform: 'translateX(-50%)' }}
          >
            {[
              'Анализ проектной документации',
              'Подбор материалов под объект',
              'Консультация технического специалиста',
            ].map(txt => (
              <div key={txt} className="flex gap-[10px] md:gap-[12px] items-center">
                <p className="font-['Raleway',sans-serif] font-normal text-[10px] text-white shrink-0">✓</p>
                <p className="font-['Raleway',sans-serif] font-normal text-[12px] md:text-[14px] text-[rgba(255,255,255,0.94)]">{txt}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form
          className="flex flex-1 flex-col gap-6 md:gap-[32px] items-start w-full min-w-0 relative"
          onSubmit={(e) => {
            e.preventDefault();
            void handleSubmit();
          }}
        >
          <p className="font-['Cormorant_Garamond',sans-serif] font-light leading-[1.2] text-[#111] text-[24px] md:text-[36px]">
            Получите расчет материалов для вашего проекта
          </p>

          <div className="flex flex-col gap-[20px] md:gap-[24px] items-start w-full">
            {/* Name */}
            <div className="flex flex-col gap-[8px] items-start w-full">
              <div className="flex items-center justify-between w-full">
                <p className="font-['Raleway',sans-serif] font-light text-[#111] text-[12px]">Имя</p>
                {errors.name && <p className="font-['Raleway',sans-serif] font-light text-[11px] text-[#e53e3e]">{errors.name}</p>}
              </div>
              <div className={`bg-white rounded-[8px] w-full border transition-colors duration-150 ${errors.name ? 'border-[#e53e3e]' : touched.name && !errors.name ? 'border-[#22c55e]' : 'border-[#eaeaea]'}`}>
                <input
                  type="text"
                  placeholder="Иван Иванов"
                  value={form.name}
                  onChange={set('name')}
                  onBlur={blur('name')}
                  disabled={isSubmitting}
                  className="w-full px-[10px] py-[14px] md:py-[16px] font-['Raleway',sans-serif] font-light text-[#111] text-[12px] placeholder-[#8e8e8e] bg-transparent outline-none rounded-[8px]"
                />
              </div>
            </div>
            {/* Phone */}
            <div className="flex flex-col gap-[8px] items-start w-full">
              <div className="flex items-center justify-between w-full">
                <p className="font-['Raleway',sans-serif] font-light text-[#111] text-[12px]">Телефон</p>
                {errors.phone && <p className="font-['Raleway',sans-serif] font-light text-[11px] text-[#e53e3e]">{errors.phone}</p>}
              </div>
              <div className={`bg-white rounded-[8px] w-full border transition-colors duration-150 ${errors.phone ? 'border-[#e53e3e]' : touched.phone && !errors.phone ? 'border-[#22c55e]' : 'border-[#eaeaea]'}`}>
                <input
                  type="tel"
                  placeholder="+7 (999) 000-00-00"
                  value={form.phone}
                  onChange={set('phone')}
                  onBlur={blur('phone')}
                  disabled={isSubmitting}
                  className="w-full px-[10px] py-[14px] md:py-[16px] font-['Raleway',sans-serif] font-light text-[#111] text-[12px] placeholder-[#8e8e8e] bg-transparent outline-none rounded-[8px]"
                />
              </div>
            </div>
            {/* Comment */}
            <div className="flex flex-col gap-[8px] items-start w-full">
              <p className="font-['Raleway',sans-serif] font-light text-[#111] text-[12px]">
                Комментарий&nbsp;&nbsp;
                <span className="text-[#8e8e8e]">* </span>
                <span className="italic text-[#8e8e8e]">необязательно</span>
              </p>
              <div className="bg-white h-[100px] md:h-[126px] rounded-[8px] w-full border border-[#eaeaea] focus-within:border-[rgba(0,0,0,0.25)] transition-colors duration-150">
                <textarea
                  placeholder="Тип объекта, площадь, сроки..."
                  value={form.comment}
                  onChange={set('comment')}
                  disabled={isSubmitting}
                  className="w-full h-full px-[10px] py-[14px] md:py-[16px] font-['Raleway',sans-serif] font-light text-[12px] placeholder-[#8e8e8e] bg-transparent outline-none resize-none rounded-[8px]"
                />
              </div>
            </div>
          </div>

          <div className="relative w-full">
            {toast && (
              <div
                aria-live="polite"
                className="fixed left-1/2 top-[53%] -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
              >
                <div className="bg-[linear-gradient(135deg,rgba(255,255,255,0.22),rgba(255,255,255,0.10))] backdrop-blur-[16px] border border-[rgba(255,255,255,0.35)] rounded-[18px] px-[18px] py-[14px] md:px-[26px] md:py-[16px] shadow-[0_20px_70px_rgba(0,0,0,0.16)] max-w-[560px]">
                  <p className="font-['Raleway',sans-serif] font-normal text-[#111] text-[14px] md:text-[16px] leading-[1.35]">
                    Наш специалист свяжется с вами, уточнит параметры объекта и подготовит расчет.
                  </p>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`h-[52px] md:h-[60px] rounded-[100px] w-full flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed transition-[transform,box-shadow,background-color] duration-260 ease-out ${
                sent
                  ? 'bg-[#22c55e] hover:bg-[#16a34a]'
                  : 'bg-[#111] text-[#fcf8f8] hover:shadow-[0_14px_30px_rgba(0,0,0,0.35)] hover:-translate-y-[1px] active:translate-y-0 active:shadow-[0_8px_18px_rgba(0,0,0,0.28)]'
              }`}
            >
              {isSubmitting ? (
                <p className="font-['Raleway',sans-serif] font-medium text-white text-[14px] md:text-[16px] text-center whitespace-nowrap">
                  ОТПРАВЛЯЕМ...
                </p>
              ) : sent ? (
                <>
                  <svg className="w-[20px] h-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                    <path d="M4 10l4.5 4.5L16 6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="font-['Raleway',sans-serif] font-medium text-white text-[14px] md:text-[16px] text-center whitespace-nowrap">
                    ЗАЯВКА ОТПРАВЛЕНА
                  </p>
                </>
              ) : (
                <>
                  <span className="relative z-10 flex gap-[6px] items-center justify-center transition-colors duration-400 ease-out">
                    <ArrowUpRight />
                    <p className="font-['Raleway',sans-serif] font-medium text-[14px] md:text-[16px] text-center whitespace-nowrap">
                      ОТПРАВИТЬ ЗАЯВКУ
                    </p>
                  </span>
                </>
              )}
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────
   FOOTER
──────────────────────────────────────────────────────── */
function Footer() {
  return (
    <div className="bg-[#111] flex flex-col items-center justify-end overflow-hidden relative w-full">

      {/* big ИНТЕРИО text — desktop only */}
      <div className="hidden md:block relative w-full h-[227px] border-b-[0.8px] border-[rgba(255,255,255,0.08)] overflow-hidden">
        <div className="flex flex-col items-start pb-[0.8px] pt-[48px] px-[24px] size-full relative">
          <p className="font-['Cormorant_Garamond',sans-serif] font-light leading-[189px] text-[#4e4e4e] text-[215px] tracking-[-8.6px] uppercase whitespace-nowrap">ИНТЕРИО</p>
        </div>
      </div>

      {/* CTA row */}
      <div className="relative w-full border-b-[0.8px] border-[rgba(255,255,255,0.08)]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 py-8 md:h-[137px] px-4 md:px-[40px]">
          <div className="flex flex-col gap-[10px] items-start">
            <p className="font-['Raleway',sans-serif] font-normal text-[9px] md:text-[9.92px] text-[rgba(255,255,255,0.35)] tracking-[0.992px] uppercase">Готовы к сотрудничеству?</p>
            <p className="font-['Cormorant_Garamond',sans-serif] font-light text-[28px] md:text-[41px] text-white tracking-[-1px]">
              Давайте начнём&nbsp;&nbsp;работать вместе↗
            </p>
          </div>
          <button
            onClick={() => scrollToSection('contacts')}
            className="bg-white h-[44px] md:h-[48px] rounded-[100px] w-full md:w-[233px] flex gap-[6px] items-center justify-center hover:bg-gray-100 transition-colors shrink-0 text-[#2b2a2a]"
          >
            <ArrowUpRight />
            <p className="font-['Raleway',sans-serif] font-medium text-[#2b2a2a] text-[14px] md:text-[16px] text-center whitespace-nowrap">
              ОСТАВИТЬ ЗАЯВКУ
            </p>
          </button>
        </div>
      </div>

      {/* bottom bar */}
      <div className="relative w-full flex items-center py-4 md:h-[46px] min-w-0">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-3 md:gap-0 px-4 md:px-[40px] min-w-0">
          <p className="font-['Raleway',sans-serif] font-normal text-[9px] md:text-[9.6px] text-[rgba(255,255,255,0.25)]">© 2025 ИНТЕРИО · Все права защищены</p>
          <div className="flex flex-wrap gap-x-[20px] gap-y-1 md:gap-[24px] items-center">
            {[['Каталог', 'catalog'], ['О нас', 'about'], ['Контакты', 'contacts']].map(([label, id]) => (
              <button key={id} onClick={() => scrollToSection(id)}
                className="font-['Raleway',sans-serif] font-medium text-[9px] md:text-[9.6px] text-[rgba(255,255,255,0.3)] hover:text-white transition-colors">
                {label}
              </button>
            ))}
          </div>
          <p className="font-['Raleway',sans-serif] font-normal text-[9px] md:text-[9.6px] text-[rgba(255,255,255,0.2)]">Политика конфиденциальности</p>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────
   ROOT
──────────────────────────────────────────────────────── */
export default function App() {
  return (
    <div className="bg-white flex flex-col items-center relative w-full min-h-screen overflow-x-hidden">
      <Header />

      <div className="flex flex-col gap-[48px] md:gap-[80px] items-center w-full">
        <HeroSection />
        <AboutSection />
        <ProblemsSection />
        <PartnersSection />
        <ProjectsSection />
        <MaterialsSection />
        <div className={`bg-[#d5d5d5] h-px ${CONTAINER_NO_PX}`} />
        <TeamSection />
        <div className={`bg-[#d5d5d5] h-px ${CONTAINER_NO_PX}`} />
        <ContactSection />
        <div className={`bg-[#d5d5d5] h-px ${CONTAINER_NO_PX}`} />
        <Footer />
      </div>
    </div>
  );
}
