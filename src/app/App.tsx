import { useState, useEffect, useRef } from "react";
import { Routes, Route, Link } from "react-router";
import { scrollToSection } from "../utils/scroll";
import Header from "./Header";
import PrivacyPage from "./pages/PrivacyPage";
import OfferPage from "./pages/OfferPage";
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
import imgImg from "../assets/figma/4b4e7ebacda091e49ac45b9c07bb7e2f2811bcfa.png";
import imgImg1 from "../assets/figma/d8467976fafa9b0e4d5b109b3ee5abeeb6c55d04.png";
import imgImg2 from "../assets/figma/e179ea00bc84283ae34bc53b381b155bb9dd3ee5.png";
import imgImg3 from "../assets/figma/96e27b212c9ef3caf4486da3ef6e5d542b0da8cb.png";
import imgMotionImg2 from "../assets/figma/11e78a53d33540d5ee0c02d20f0384e48fea1024.png";
import imgMotionImg3 from "../assets/figma/54d5dedadd306f34fd1cefef0856fca7581d745f.png";
import imgMotionImg4 from "../assets/figma/de7a5ccc8597df4faa089b2ce62a024aba49609c.png";
import imgContactSection from "../assets/figma/contact-section.png";
import imgProjectsSport from "../assets/figma/projects-sport.png";
import imgProjectsEducation from "../assets/figma/projects-education.png";
import imgProjectsMedicine from "../assets/figma/projects-medicine.png";
import imgHeroLeft from "../assets/figma/hero-left.png";
import imgHeroRight from "../assets/figma/hero-right.png";
import imgTeamDirector from "../assets/figma/team-director.png";
import imgTeamSfoRepresentative from "../assets/figma/team-sfo-representative.png";
import imgTeamSalesSpecialist from "../assets/figma/team-sales-specialist.png";

// Unified content width. Side paddings should be noticeable but not "too wide".
// clamp(16px, 4vw, 64px): mobile 16px, grows with viewport, capped at 64px.
const CONTAINER = "w-full max-w-[1280px] mx-auto px-[clamp(16px,4vw,56px)]";
const CONTAINER_NO_PX = "w-full max-w-[1280px] mx-auto";

/** Заявки с формы → почта через https://formsubmit.co (первый раз подтвердите ящик в письме от FormSubmit). */
const CONTACT_FORM_EMAIL = "info@interio.su";
const CONTACT_FORM_SUBJECT = "заявка с сайта";
const CONTACT_FORM_URL = `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_FORM_EMAIL)}`;

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
   HERO
──────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <div id="hero" className={`flex flex-col gap-5 md:gap-[24px] items-start pt-[72px] md:pt-[88px] ${CONTAINER}`}>
      <div className="flex flex-col gap-4 md:gap-[20px] items-start w-full">
        <div className="flex flex-col gap-4 md:gap-[20px] items-start w-full">

          {/* Title + badges */}
          <div className="flex flex-col gap-3 md:gap-[20px] items-center w-full">
            <div className="font-['Cormorant_Garamond',sans-serif] font-light leading-[normal] text-[28px] md:text-[40px] text-ink text-center uppercase w-full">
              <p className="m-0">Комплексные поставки потолочных систем</p>
              <p className="m-0">и напольных покрытий</p>
            </div>
            <div className="flex flex-wrap gap-[6px] md:gap-[8px] items-center justify-center w-full">
              {['✓ с 2015 года на рынке', '✓ 200+ реализованных объектов', '✓ официальные дистрибьюторы заводов'].map(b => (
                <div key={b} className="border-[0.8px] border-[rgba(0,0,0,0.13)] rounded-[100px] h-[24px] flex items-center px-[12px]">
                  <p className="font-['Raleway',sans-serif] font-normal text-caption text-[10px] whitespace-nowrap">{b}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Two images — on mobile only 1 photo so CTA fits on screen */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0 md:justify-between w-full">
            <div className="h-[150px] md:h-[320px] w-full md:w-[49.5%] overflow-hidden">
              <img alt="" className="w-full h-full object-cover" src={imgHeroLeft} />
            </div>
            <div className="hidden md:block h-[320px] w-[49.5%] overflow-hidden">
              <img alt="" className="w-full h-full object-cover" src={imgHeroRight} />
            </div>
          </div>
        </div>

        {/* CTA + description + tags */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 w-full">
          <div className="flex flex-col md:flex-row gap-4 md:gap-[24px] items-start md:items-center w-full md:w-auto">
            <button
              onClick={() => scrollToSection('contacts')}
              className="group relative overflow-hidden flex gap-[6px] h-[52px] md:h-[60px] items-center justify-center px-[24px] md:p-[10px] rounded-[100px] w-full md:w-[291px] border border-[rgba(0,0,0,0.25)] bg-white text-ink transition-[border-color,color,transform,box-shadow] duration-250 ease-out hover:text-ink hover:border-black hover:shadow-[0_14px_30px_rgba(0,0,0,0.18)] hover:-translate-y-[1px] active:translate-y-0 active:shadow-[0_8px_18px_rgba(0,0,0,0.14)] shrink-0"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 origin-left scale-x-0 bg-[#d5d5d5] transition-transform duration-500 ease-out group-hover:scale-x-100"
              />
              <span className="relative z-10 flex gap-[6px] items-center text-ink group-hover:text-ink transition-colors duration-300">
                <ArrowUpRight />
              <p className="font-['Raleway',sans-serif] font-medium text-[14px] md:text-[16px] text-center whitespace-nowrap">
                ОСТАВИТЬ ЗАЯВКУ
              </p>
              </span>
            </button>
            <p className="font-['Raleway',sans-serif] font-extralight leading-[21px] text-caption text-[13px] md:text-[14px] md:w-[586px]">
              Работаем с застройщиками и проектировщиками по всей России. Подбираем решения, оптимизируем бюджет и сопровождаем проект до завершения строительства.
            </p>
          </div>
          <div className="flex gap-[4px] items-center shrink-0">
            {['Потолки', 'Покрытия', 'Под ключ'].map(tag => (
              <div key={tag} className="h-[22px] rounded-[100px] border-[0.8px] border-[rgba(0,0,0,0.13)] flex items-center px-[10px]">
                <p className="font-['Raleway',sans-serif] font-normal text-[9.92px] text-dim whitespace-nowrap">{tag}</p>
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
    <div className="h-full w-full min-h-[164px] md:min-h-[176px] min-w-px relative">
      <div className="content-stretch flex flex-col gap-[10px] md:gap-[12px] items-start p-[16px] md:p-[24px] relative w-full h-full">
        {icon}
        <p className="font-['Cormorant_Garamond',sans-serif] font-medium leading-[1.2] text-ink text-[16px] md:text-[20px] break-words">{title}</p>
        <p className="font-['Raleway',sans-serif] font-light leading-[1.35] text-caption text-[10px] md:text-[12px] break-words">{subtitle}</p>
      </div>
    </div>
  );
}

function AboutSection() {
  const iconProps = {
    size: 36,
    strokeWidth: 1.15,
    className: "text-caption",
  } as const;

  return (
    <div id="about" className={`flex flex-col gap-4 md:gap-[20px] items-start ${CONTAINER}`}>
      <div className="flex flex-col gap-3 md:gap-[20px] items-start">
        <p className="font-['Raleway',sans-serif] font-semibold leading-[normal] text-[11px] md:text-[12px] text-caption tracking-[1px] uppercase">Поставляем для</p>
        <p className="font-['Cormorant_Garamond',sans-serif] font-light leading-[1.2] text-ink text-[26px] md:text-[36px]">Коммерческих и социальных объектов</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 w-full items-stretch border border-[#eaeaea] divide-x divide-y divide-[#eaeaea]">
        <CategoryCard icon={<GraduationCap {...iconProps} />} title="Образование" subtitle="школы, ВУЗы, детсады" />
        <CategoryCard icon={<Building2 {...iconProps} />} title="Медицина" subtitle="клиники, больницы, лаборатории" />
        <CategoryCard icon={<BriefcaseBusiness {...iconProps} />} title="Офисы" subtitle="БЦ, коворкинги, open space" />
        <CategoryCard icon={<ShoppingBag {...iconProps} />} title="ТРЦ" subtitle="моллы, галереи, шоурумы" />
        <CategoryCard icon={<Dumbbell {...iconProps} />} title="Спорт" subtitle="арены, стадионы, фитнес" />
        <CategoryCard icon={<Theater {...iconProps} />} title="Культура" subtitle="театры, музеи, кино" />
        <CategoryCard icon={<UtensilsCrossed {...iconProps} />} title="HORECA" subtitle="отели, рестораны, кафе" />
        <CategoryCard icon={<Home {...iconProps} />} title="Жилые комплексы" subtitle="МОПы, холлы" />
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
  { num: '04', prob: 'Ошибки в проектной документации', sol: 'Актуальная база решений, отвечающая современным требованиям',  Icon: PersonIcon },
  { num: '05', prob: 'Отсутствие сопровождения проекта от начала до конца', sol: 'Поддержка на всех этапах до реализации',   Icon: HeadphonesIcon },
];

function ProblemRow({ num, prob, sol, Icon }: { num: string; prob: string; sol: string; Icon: React.ComponentType }) {
  return (
    <div
      className="relative shrink-0 w-full cursor-default border-b-[0.8px] border-[rgba(0,0,0,0.06)] md:overflow-visible md:z-[1]"
    >
      {/* Mobile */}
      <div className="flex flex-col md:hidden" style={{ backgroundColor: '#fafafa' }}>
        <div className="flex gap-[12px] items-start px-4 py-3 min-w-0">
            <p className="font-['Raleway',sans-serif] font-semibold text-[8.96px] tracking-[0.896px] text-dim shrink-0 pt-[2px]">{num}</p>
          <p className="font-['Raleway',sans-serif] font-normal text-[12px] text-caption min-w-0 break-words">{prob}</p>
        </div>
        <div
          className="flex gap-[12px] items-center px-4 pb-3 origin-left min-w-0"
        >
          <div
            className="rounded-[6px] size-[28px] shrink-0 flex items-center justify-center bg-[rgba(0,0,0,0.06)]"
          >
            <Icon />
          </div>
          <p className="font-['Raleway',sans-serif] font-medium text-[11px] min-w-0 text-caption">
            {sol}
          </p>
        </div>
      </div>

      {/* Desktop: две колонки в потоке, чтобы строки могли расти по высоте при длинном тексте */}
      <div className="hidden md:flex min-h-[76.8px] w-full items-stretch relative overflow-visible">
        <div
          className="w-1/2 shrink-0 relative flex transition-colors duration-200"
          style={{ backgroundColor: '#fafafa' }}
        >
          <div className="absolute inset-0 border-b-[0.8px] border-r-[0.8px] border-[rgba(0,0,0,0.06)] pointer-events-none" />
          <div className="relative z-[1] flex gap-[16px] md:gap-[20px] items-center min-h-[76.8px] py-3 pl-[clamp(16px,3vw,40px)] pr-2 w-full">
            <p className="font-['Raleway',sans-serif] font-semibold text-[8.96px] tracking-[0.896px] whitespace-nowrap transition-colors duration-200 shrink-0 text-dim">{num}</p>
            <p className="font-['Raleway',sans-serif] font-normal leading-[1.35] text-[12px] md:text-[12.16px] transition-colors duration-200 min-w-0 text-caption">{prob}</p>
          </div>
        </div>
        <div className="w-1/2 shrink-0 relative flex bg-white">
          <div className="absolute inset-0 border-b-[0.8px] border-[rgba(0,0,0,0.06)] pointer-events-none" />
          <div className="relative z-[1] flex items-center min-h-[76.8px] py-3 pl-[clamp(12px,2vw,28px)] pr-[clamp(12px,2vw,20px)] w-full">
            <div
              className="flex gap-[14px] md:gap-[16px] items-center w-full rounded-[12px] py-[10px] pl-[10px] md:pl-[12px] pr-[12px] md:pr-[14px] origin-left scale-100 translate-y-0 translate-x-0 shadow-none bg-transparent"
            >
              <div
                className="rounded-[8px] size-[34px] md:size-[36px] shrink-0 flex items-center justify-center bg-[rgba(0,0,0,0.06)]"
              >
                <Icon />
              </div>
              <p
                className="font-['Raleway',sans-serif] font-medium leading-[1.25] transition-colors duration-500 min-w-0 text-[11px] md:text-[11.84px] text-caption"
              >
                {sol}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProblemsSection() {
  return (
    <div className={`flex flex-col gap-8 md:gap-[56px] items-start py-[20px] md:py-[40px] ${CONTAINER}`}>
      <div className="flex flex-col lg:flex-row items-start w-full gap-6 lg:gap-0">
        <div className="flex flex-col gap-3 md:gap-[20px] items-start w-full lg:w-1/2 lg:pr-[40px] min-w-0">
          <p className="font-['Raleway',sans-serif] font-semibold text-[11px] md:text-[12px] text-caption tracking-[1px] uppercase">Проблемы на объекте</p>
          <p className="font-['Cormorant_Garamond',sans-serif] font-light leading-[1.2] text-ink text-[clamp(22px,4vw,36px)]">С чем сталкиваются строящиеся объекты</p>
        </div>
        <div className="flex flex-col gap-3 md:gap-[20px] items-start w-full lg:w-1/2 lg:pl-[40px] min-w-0">
          <p className="font-['Raleway',sans-serif] font-semibold text-[11px] md:text-[12px] text-caption tracking-[1px] uppercase">Решения Интерио</p>
          <p className="font-['Cormorant_Garamond',sans-serif] font-light leading-[1.2] text-ink text-[clamp(22px,4vw,36px)]">Сопровождаем проект от А до Я</p>
        </div>
      </div>
      <div className="flex flex-col items-start w-full overflow-visible">
        {PROBLEMS.map(row => <ProblemRow key={row.num} {...row} />)}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────
   PARTNERS MARQUEE
──────────────────────────────────────────────────────── */
/** Ширина одного базового слота в бегущей строке (4 уникальных логотипа = один цикл анимации). */
const PARTNER_SLOT_PX = 240;
const PARTNER_LOGOS = [
  { src: imgImg, scale: 2 },  // Албес x2
  { src: imgImg1, scale: 1 }, // Метрион
  { src: imgImg2, scale: 2 }, // Forbo x2
  { src: imgImg3, scale: 1 }, // Gerflor
] as const;

function PartnersSection() {
  const logos = [...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS];
  const [offset, setOffset] = useState(0);
  const rafRef = useRef<number>(0);
  const lastRef = useRef(0);

  useEffect(() => {
    const cycle = PARTNER_LOGOS.reduce((sum, item) => sum + PARTNER_SLOT_PX * item.scale, 0);
    const tick = (ts: number) => {
      if (lastRef.current) {
        setOffset(p => (p + (ts - lastRef.current) * 0.04) % cycle);
      }
      lastRef.current = ts;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="bg-[#fafafa] w-full min-w-0">
      <div className={`flex flex-col gap-4 md:gap-[20px] items-start py-4 md:py-[40px] ${CONTAINER}`}>
        <div className="flex flex-col gap-2 md:gap-[20px] items-start max-w-full">
          <p className="font-['Raleway',sans-serif] font-semibold text-[11px] md:text-[12px] text-caption tracking-[1px] uppercase">Официальные дистрибьюторы</p>
          <p className="font-['Cormorant_Garamond',sans-serif] font-light leading-[1.2] text-ink text-[clamp(22px,4vw,36px)]">Прямые контракты с производителями</p>
        </div>
      </div>

      <div className="overflow-hidden w-full h-[96px] sm:h-[116px] md:h-[148px] relative border-y border-[rgba(0,0,0,0.05)] bg-[#fafafa]">
        <div
          className="flex items-center h-full absolute top-0 left-0 will-change-transform"
          style={{
            transform: `translateX(-${offset}px)`,
            width: `${logos.reduce((sum, item) => sum + PARTNER_SLOT_PX * item.scale, 0)}px`,
          }}
        >
          {logos.map((item, i) => (
            <div
              key={i}
              className="h-full shrink-0 flex items-center justify-center px-2 sm:px-3 box-border"
              style={{ width: PARTNER_SLOT_PX * item.scale }}
            >
              <img
                alt=""
                className="w-full max-w-[320px] object-contain object-center grayscale opacity-[0.55] hover:grayscale-0 hover:opacity-100 transition-all duration-300 pointer-events-auto"
                style={{ maxHeight: `${64 * item.scale}px` }}
                src={item.src}
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
      <p className="font-['Cormorant_Garamond',sans-serif] font-light text-[32px] md:text-[48px] text-center w-full text-ink whitespace-nowrap">
        {fmt}{suffix}
      </p>
      <p className="font-['Raleway',sans-serif] font-extralight leading-[1.5] text-[10px] md:text-[12px] text-caption w-full text-center">{label}</p>
    </div>
  );
}

function StatYears() {
  const { ref, count } = useCountUp(11, 1600);
  return (
    <div ref={ref} className="flex flex-col gap-[4px] md:gap-[8px] items-center flex-1 min-w-[110px] md:min-w-[160px]">
      <p className="font-['Cormorant_Garamond',sans-serif] font-light text-ink text-[32px] md:text-[48px] text-center w-full whitespace-nowrap">
        {count} лет
      </p>
      <p className="font-['Raleway',sans-serif] font-extralight leading-[1.5] text-[10px] md:text-[12px] text-caption uppercase w-full text-center">НА РЫНКЕ С 2015 ГОДА</p>
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
          <p className="font-['Raleway',sans-serif] font-semibold text-[11px] md:text-[12px] text-caption tracking-[1px] uppercase">Реализованные объекты</p>
          <p className="font-['Cormorant_Garamond',sans-serif] font-light leading-[1.2] text-ink text-[24px] md:text-[36px]">Более 200 объектов по всей России</p>
        </div>

        <StatsCard />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-[12px] pt-[12px] md:pt-[20px] w-full">
          {[
            { img: imgProjectsSport, cat: 'Спорт', title: 'Ледовые арены и стадионы' },
            { img: imgProjectsEducation, cat: 'Образование', title: 'Образовательные учреждения' },
            { img: imgProjectsMedicine, cat: 'Медицина', title: 'Медицинские центры и клиники' },
          ].map(({ img, cat, title }) => (
            <div key={cat} className="flex flex-col gap-[8px] items-start">
              <div className="h-[220px] md:h-[266px] w-full overflow-hidden">
                <img alt="" className="w-full h-full object-cover" src={img} />
              </div>
              <div className="flex flex-col gap-[6px] md:gap-[8px] items-start w-full">
                <p className="font-['Raleway',sans-serif] font-light text-[11px] md:text-[12px] w-full text-caption">{cat}</p>
                <p className="font-['Cormorant_Garamond',sans-serif] font-medium text-[18px] md:text-[20px] w-full text-ink">{title}</p>
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
  const leftGroups = [
    {
      title: "Металлические потолки",
      items: [
        "Реечные потолки",
        "Грильято",
        "Панели HOOK-ON",
        "Подвесные системы",
        "Кассетные потолки",
        "Острова разных форм",
      ],
    },
    {
      title: "Акустические системы",
      items: ["Модульные акустические потолки", "Акустические острова"],
    },
  ] as const;

  const rightGroups = [
    {
      title: "Линолеум",
      items: ["Гетерогенный и Гомогенный линолеум", "Натуральный линолеум"],
    },
    {
      title: "Специальные покрытия",
      items: [
        "LVT покрытия",
        "Спортивные покрытия",
        "Токопроводящие и токорассеивающие",
        "Противоскользящие покрытия",
        "Акустический линолеум",
        "Грязезащитные входные системы",
      ],
    },
  ] as const;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-[28px] md:gap-[40px] pb-[10px] md:pb-[12px]">
      <div className="flex flex-col">
        <p className="font-['Raleway',sans-serif] font-light text-[10px] md:text-[11px] text-dim uppercase tracking-[1px] mb-[10px]">
          Потолочные системы
        </p>
        {leftGroups.map((group) => (
          <div
            key={group.title}
            className="py-[6px] md:py-[8px] flex flex-col gap-[8px]"
          >
            <p className="font-['Raleway',sans-serif] font-normal text-[12px] md:text-[13px] text-ink leading-[1.2]">
              {group.title}
            </p>
            <ul className="list-disc list-inside pl-[10px]">
              {group.items.map((it) => (
                <li
                  key={it}
                  className="font-['Raleway',sans-serif] font-light text-[11px] md:text-[12px] text-caption leading-[1.5]"
                >
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col">
        <p className="font-['Raleway',sans-serif] font-light text-[10px] md:text-[11px] text-dim uppercase tracking-[1px] mb-[10px]">
          Коммерческие напольные покрытия
        </p>
        {rightGroups.map((group) => (
          <div
            key={group.title}
            className="py-[6px] md:py-[8px] flex flex-col gap-[8px]"
          >
            <p className="font-['Raleway',sans-serif] font-normal text-[12px] md:text-[13px] text-ink leading-[1.2]">
              {group.title}
            </p>
            <ul className="list-disc list-inside pl-[10px]">
              {group.items.map((it) => (
                <li
                  key={it}
                  className="font-['Raleway',sans-serif] font-light text-[11px] md:text-[12px] text-caption leading-[1.5]"
                >
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function MaterialsSection() {
  return (
    <div id="catalog" className={`flex flex-col items-start ${CONTAINER}`}>
      <div className="flex flex-col gap-3 md:gap-[20px] items-start pb-6 md:pb-[40px] w-full">
        <p className="font-['Raleway',sans-serif] font-semibold text-[11px] md:text-[12px] text-caption tracking-[1px] uppercase">наши решения</p>
        <p className="font-['Cormorant_Garamond',sans-serif] font-light leading-[1.2] text-ink text-[24px] md:text-[36px]">
          Материалы для коммерческих
          <br />
          и социальных объектов
        </p>
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
  const toTelHref = (phone: string) => {
    const digits = phone.replace(/\D/g, "");
    if (digits.length === 11 && digits.startsWith("8")) return `tel:+7${digits.slice(1)}`;
    if (digits.length === 11 && digits.startsWith("7")) return `tel:+${digits}`;
    return `tel:${digits}`;
  };

  const members = [
    {
      img: imgTeamDirector,
      role: 'Директор',
      name: 'Маланчук Екатерина Викторовна',
      phone: '8-996-974-38-39',
      email: 'ed@interio.su',
    },
    {
      img: imgTeamSfoRepresentative,
      role: 'Представитель в Сибирском Федеральном округе',
      name: 'Акатова Наталья Андреевна',
      phone: '8-913-474-92-41',
      email: 'nsk@interio.su',
    },
    {
      img: imgTeamSalesSpecialist,
      role: 'Главный специалист отдела продаж',
      name: 'Миляева Валерия Сергеевна',
      phone: '8-999-466-03-36 (только ТГ, WhatsApp)',
      email: 'vm@interio.su',
    },
  ];
  return (
    <div id="team" className="w-full">
      <div className={`flex flex-col gap-4 md:gap-[20px] items-start py-4 md:py-[40px] ${CONTAINER}`}>
        <div className="flex flex-col gap-2 md:gap-[20px] items-start">
          <p className="font-['Raleway',sans-serif] font-semibold text-[11px] md:text-[12px] text-caption tracking-[1px] uppercase">Наша команда</p>
          <p className="font-['Cormorant_Garamond',sans-serif] font-light leading-[1.2] text-ink text-[24px] md:text-[36px]">Специалисты, которые решают задачи</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-6 sm:gap-y-7 md:gap-[12px] pt-2 md:pt-[20px] w-full items-start">
          {members.map(({ img, name, role, phone, email }) => (
            <div key={name} className="flex flex-col gap-[8px] items-start h-full">
              <div className="h-[200px] md:h-[368px] w-full overflow-hidden">
                <img alt="" className="w-full h-full object-cover" src={img} />
              </div>
              <div className="flex flex-col gap-[3px] md:gap-[2px] items-start w-full">
                <p className="font-['Raleway',sans-serif] font-light text-[10px] md:text-[12px] leading-[1.35] w-full text-caption min-h-[18px] md:min-h-[34px]">
                  {role}
                </p>
                <div className="flex flex-col gap-[3px] md:gap-[6px] w-full">
                  <p className="font-['Cormorant_Garamond',sans-serif] font-medium leading-[1.08] text-[16px] md:text-[20px] w-full text-ink min-h-0 md:min-h-[36px]">
                    {name}
                  </p>
                  <a
                    href={toTelHref(phone)}
                    className="md:hidden font-['Raleway',sans-serif] font-medium leading-[1.2] text-[11px] w-full text-[#5f88e8]"
                  >
                    {phone}
                  </a>
                  <p className="hidden md:block font-['Raleway',sans-serif] font-light leading-[1.2] text-caption text-[12px] w-full">
                    {phone}
                  </p>
                  <p className="font-['Raleway',sans-serif] font-light leading-[1.2] text-caption text-[11px] md:text-[12px] w-full">
                    {email}
                  </p>
                </div>
              </div>
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
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (f: typeof form) => ({
    name:  f.name.trim().length < 2 ? 'Введите имя (минимум 2 символа)' : '',
    phone: !/^[\d\s\+\-\(\)]{7,}$/.test(f.phone.trim()) ? 'Введите корректный номер телефона' : '',
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (submitError) setSubmitError(null);
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
      setSubmitError(null);

      const res = await fetch(CONTACT_FORM_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          comment: form.comment.trim() || "—",
          _subject: CONTACT_FORM_SUBJECT,
          _template: "table",
          _captcha: false,
        }),
      });

      let errMsg: string | null = null;
      try {
        const data = (await res.json()) as { success?: boolean | string; message?: string };
        if (!res.ok) {
          errMsg = typeof data.message === "string" ? data.message : "Не удалось отправить заявку.";
        } else if (data.success === false || data.success === "false") {
          errMsg = typeof data.message === "string" ? data.message : "Не удалось отправить заявку.";
        }
      } catch {
        if (!res.ok) errMsg = "Сервер вернул некорректный ответ.";
      }
      if (errMsg) {
        setSubmitError(errMsg);
        return;
      }

      setSent(true);
      setToast(true);
      setForm({ name: "", phone: "", comment: "" });
      setTouched({ name: false, phone: false });
      setErrors({ name: "", phone: "" });
      window.setTimeout(() => setSent(false), 4500);
      window.setTimeout(() => setToast(false), 4500);
    } catch {
      setSubmitError("Не удалось отправить заявку. Проверьте соединение и попробуйте снова.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contacts" className="bg-[#fafafa] w-full">
      <div className={`flex flex-col gap-4 md:gap-[20px] items-start py-4 md:py-[40px] ${CONTAINER}`}>
        <p className="font-['Raleway',sans-serif] font-semibold text-[11px] md:text-[12px] text-caption tracking-[1px] uppercase">Оставить заявку</p>

        <div className="flex flex-col md:flex-row gap-6 md:gap-[32px] items-start md:items-start w-full">

        {/* Image — hidden on small mobile, shown from sm */}
        <div className="hidden sm:block flex-1 h-[280px] md:h-[536px] md:mt-[12px] overflow-hidden relative w-full">
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgContactSection} />
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
          <p className="font-['Cormorant_Garamond',sans-serif] font-light leading-[1.2] text-ink text-[24px] md:text-[36px]">
            Получите расчет материалов для вашего проекта
          </p>

          <div className="flex flex-col gap-[20px] md:gap-[24px] items-start w-full">
            {/* Name */}
            <div className="flex flex-col gap-[8px] items-start w-full">
              <div className="flex items-center justify-between w-full">
                <p className="font-['Raleway',sans-serif] font-light text-caption text-[12px]">Имя</p>
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
                  className="w-full px-[10px] py-[14px] md:py-[16px] font-['Raleway',sans-serif] font-light text-ink text-[12px] placeholder:text-dim bg-transparent outline-none rounded-[8px]"
                />
              </div>
            </div>
            {/* Phone */}
            <div className="flex flex-col gap-[8px] items-start w-full">
              <div className="flex items-center justify-between w-full">
                <p className="font-['Raleway',sans-serif] font-light text-caption text-[12px]">Телефон</p>
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
                  className="w-full px-[10px] py-[14px] md:py-[16px] font-['Raleway',sans-serif] font-light text-ink text-[12px] placeholder:text-dim bg-transparent outline-none rounded-[8px]"
                />
              </div>
            </div>
            {/* Comment */}
            <div className="flex flex-col gap-[8px] items-start w-full">
              <p className="font-['Raleway',sans-serif] font-light text-caption text-[12px]">
                Комментарий
              </p>
              <div className="bg-white h-[100px] md:h-[126px] rounded-[8px] w-full border border-[#eaeaea] focus-within:border-[rgba(0,0,0,0.25)] transition-colors duration-150">
                <textarea
                  placeholder=""
                  value={form.comment}
                  onChange={set('comment')}
                  disabled={isSubmitting}
                  className="w-full h-full px-[10px] py-[14px] md:py-[16px] font-['Raleway',sans-serif] font-light text-[12px] text-ink placeholder:text-dim bg-transparent outline-none resize-none rounded-[8px]"
                />
              </div>
            </div>
          </div>

          <div className="relative w-full">
            {submitError && (
              <p className="font-['Raleway',sans-serif] font-light text-[12px] text-[#e53e3e] mb-3" role="alert">
                {submitError}
              </p>
            )}
            {toast && (
              <div
                aria-live="polite"
                className="fixed left-1/2 top-[53%] -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
              >
                <div className="bg-[linear-gradient(135deg,rgba(255,255,255,0.22),rgba(255,255,255,0.10))] backdrop-blur-[16px] border border-[rgba(255,255,255,0.35)] rounded-[18px] px-[18px] py-[14px] md:px-[26px] md:py-[16px] shadow-[0_20px_70px_rgba(0,0,0,0.16)] max-w-[560px]">
                  <p className="font-['Raleway',sans-serif] font-normal text-ink text-[14px] md:text-[16px] leading-[1.35]">
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
                  : 'bg-white text-ink border border-[rgba(0,0,0,0.25)] relative overflow-hidden group hover:border-black hover:shadow-[0_14px_30px_rgba(0,0,0,0.18)] hover:-translate-y-[1px] active:translate-y-0 active:shadow-[0_8px_18px_rgba(0,0,0,0.24)]'
              }`}
            >
              {!sent && (
                <span
                  aria-hidden="true"
                  className="absolute inset-0 origin-left scale-x-0 bg-[#d5d5d5] transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
              )}
              {isSubmitting ? (
                <p className="font-['Raleway',sans-serif] font-medium text-ink text-[14px] md:text-[16px] text-center whitespace-nowrap">
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
    <div className="bg-[#fafafa] flex flex-col items-stretch overflow-x-hidden relative w-full min-w-0">

      <div className="relative w-full overflow-hidden">
        <div className="w-full max-w-[1280px] mx-auto px-[clamp(16px,4vw,40px)] py-[clamp(4px,1.4vw,9px)]">
          <p
            className="font-['Cormorant_Garamond',sans-serif] font-light text-ink/25 uppercase tracking-[-0.03em] leading-[0.86] m-0 select-none text-center"
            style={{ fontSize: "clamp(16px, 4.75vw, 70px)" }}
          >
            ИНТЕРИО
          </p>
        </div>
      </div>

      <div className="relative w-full border-b border-[rgba(0,0,0,0.06)]">
        <div className="w-full max-w-[1280px] mx-auto py-2 md:py-[10px] px-[clamp(16px,4vw,40px)] min-w-0">
          <p className="font-['Cormorant_Garamond',sans-serif] font-light text-ink/85 tracking-[-0.02em] leading-[1.2] text-[clamp(10px,2.15vw,17px)] text-center">
            Давайте начнём работать вместе
            <span className="inline-block ml-1 align-baseline opacity-70">↗</span>
          </p>
        </div>
      </div>

      <div className="relative w-full border-b border-[rgba(0,0,0,0.06)]">
        <div className="w-full max-w-[1280px] mx-auto py-4 md:py-5 px-[clamp(16px,4vw,40px)] min-w-0">
          <div className="flex flex-col gap-[6px] md:gap-[8px]">
            <p className="font-['Raleway',sans-serif] font-semibold text-[11px] md:text-[12px] text-caption tracking-[1px] uppercase">
              Реквизиты
            </p>
            <p className="font-['Raleway',sans-serif] font-light text-[11px] md:text-[12px] text-[rgba(0,0,0,0.58)] leading-[1.45]">
              ООО «ИНТЕРИО»
            </p>
            <p className="font-['Raleway',sans-serif] font-light text-[11px] md:text-[12px] text-[rgba(0,0,0,0.58)] leading-[1.45]">
              ИНН 5401958336 · КПП 772301001 · ОГРН 1155476131546
            </p>
            <p className="font-['Raleway',sans-serif] font-light text-[11px] md:text-[12px] text-[rgba(0,0,0,0.58)] leading-[1.45]">
              Юридический адрес: 109316, г. Москва, Волгоградский пр-кт, д. 32/3, к. 5, кв. 84
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full py-3 md:py-4 min-w-0">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between px-[clamp(16px,4vw,40px)] min-w-0">
          <p className="font-['Raleway',sans-serif] font-normal text-[10px] md:text-[11px] text-[rgba(0,0,0,0.28)] order-2 sm:order-1">
            © {new Date().getFullYear()} Интерио · Все права защищены
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 items-center order-1 sm:order-2">
            {[["Каталог", "catalog"], ["О нас", "about"], ["Контакты", "contacts"]].map(([label, id]) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                className="font-['Raleway',sans-serif] font-medium text-[11px] md:text-[12px] text-[rgba(0,0,0,0.45)] hover:text-ink transition-colors text-left"
              >
                {label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 items-center order-3 text-left sm:text-right">
            <Link
              to="/privacy"
              className="font-['Raleway',sans-serif] font-normal text-[10px] md:text-[11px] text-[rgba(0,0,0,0.35)] hover:text-ink transition-colors underline-offset-4 hover:underline"
            >
              Политика конфиденциальности
            </Link>
            <span className="text-[rgba(0,0,0,0.15)] hidden sm:inline">·</span>
            <Link
              to="/offer"
              className="font-['Raleway',sans-serif] font-normal text-[10px] md:text-[11px] text-[rgba(0,0,0,0.35)] hover:text-ink transition-colors underline-offset-4 hover:underline"
            >
              Публичная оферта
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────
   ROOT
──────────────────────────────────────────────────────── */
function HomePage() {
  return (
    <div className="bg-white flex flex-col items-center relative w-full min-h-screen overflow-x-hidden">
      <Header />

      <div className="flex flex-col items-center w-full space-y-[48px] md:space-y-[80px]">
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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/offer" element={<OfferPage />} />
    </Routes>
  );
}
