import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { scrollToSection } from "../utils/scroll";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  /** Главная лендинга (не /privacy, /offer) — там есть блок #hero */
  const isLandingHome = location.pathname === "/" || location.pathname === "";

  const IDLE_MS = 4000;

  useEffect(() => {
    if (menuOpen) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      setVisible(true);
      return;
    }

    const pastHeroBottom = (): boolean => {
      if (!isLandingHome) return false;
      const el = document.getElementById("hero");
      if (!el) return false;
      return window.scrollY >= el.offsetTop + el.offsetHeight;
    };

    const hide = () => {
      if (!pastHeroBottom()) return;
      setVisible(false);
    };

    const armTimer = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(hide, IDLE_MS);
    };

    /** Автоскрытие только на главной лендинга и только ниже первого экрана (после #hero) */
    const syncIdle = () => {
      setScrolled(window.scrollY > 10);

      if (!isLandingHome) {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
          timerRef.current = null;
        }
        setVisible(true);
        return;
      }

      if (!pastHeroBottom()) {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
          timerRef.current = null;
        }
        setVisible(true);
        return;
      }

      setVisible(true);
      armTimer();
    };

    const onScroll = () => {
      syncIdle();
    };

    syncIdle();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", syncIdle, { passive: true });
    window.addEventListener("keydown", syncIdle, { passive: true });
    window.addEventListener("click", syncIdle, { passive: true });
    window.addEventListener("touchstart", syncIdle, { passive: true });
    window.addEventListener("resize", syncIdle, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", syncIdle);
      window.removeEventListener("keydown", syncIdle);
      window.removeEventListener("click", syncIdle);
      window.removeEventListener("touchstart", syncIdle);
      window.removeEventListener("resize", syncIdle);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [menuOpen, isLandingHome]);

  const navItems = [
    { label: "Каталог", id: "catalog" },
    { label: "О нас", id: "about" },
    { label: "Объекты", id: "objects" },
    { label: "Наша команда", id: "team" },
    { label: "Контакты", id: "contacts" },
  ];

  const handleNav = (id: string) => {
    setMenuOpen(false);
    if (!isLandingHome) {
      navigate("/");
      window.setTimeout(() => scrollToSection(id), 80);
    } else {
      scrollToSection(id);
    }
  };

  const logoClass =
    "shrink-0 text-left font-['Cormorant_Garamond',sans-serif] font-light text-ink text-[20px] sm:text-[22px] md:text-[24px] leading-none tracking-[-0.5px] whitespace-nowrap transition-opacity duration-200 hover:opacity-75 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 rounded-sm";

  /** Плавное появление сверху вниз / уход вверх; фон при скролле — отдельно, без «залипания» на 1s */
  const slideEase = "[transition-timing-function:cubic-bezier(0.22,1,0.36,1)]";

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <div
          className={[
            "will-change-transform transition-[transform,opacity] duration-[1000ms] motion-reduce:duration-300",
            slideEase,
            visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none",
          ].join(" ")}
          aria-hidden={!visible}
        >
          <div
            className={[
              "transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-out",
              scrolled
                ? "bg-white/60 backdrop-blur-[18px] border-b border-white/30 shadow-sm"
                : "bg-white border-b border-[#d5d5d5]",
            ].join(" ")}
          >
        <div className="flex items-center justify-between w-full max-w-[1280px] mx-auto px-[clamp(16px,4vw,56px)] py-[16px] md:py-[20px] text-[14px] gap-3 min-w-0">
          <Link
            to="/"
            className={logoClass}
            aria-label="Интерио — главная"
            onClick={() => {
              if (isLandingHome) {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            Интерио
          </Link>

          <nav className="hidden md:flex items-center justify-end gap-[clamp(16px,2.5vw,32px)] whitespace-nowrap min-w-0">
            {navItems.map(({ label, id }) => (
              <button
                key={id}
                type="button"
                onClick={() => handleNav(id)}
                className="font-['Raleway',sans-serif] font-light text-[13px] lg:text-[14px] text-caption hover:text-ink transition-colors duration-200 shrink-0"
              >
                {label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden flex flex-col gap-[5px] justify-center items-center w-[40px] h-[40px] shrink-0"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Меню"
          >
            <span
              className={`block h-[1.5px] w-[22px] bg-black transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
            />
            <span
              className={`block h-[1.5px] w-[22px] bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-[1.5px] w-[22px] bg-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
            />
          </button>
        </div>
          </div>
        </div>
      </div>

      <div
        className={[
          "fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-[18px] md:hidden will-change-transform",
          "transition-[transform,opacity] duration-[1000ms] motion-reduce:duration-300",
          slideEase,
          menuOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <div className="flex flex-col pt-[80px] pb-[32px] px-6 gap-[4px]">
          {navItems.map(({ label, id }) => (
            <button
              key={id}
              type="button"
              onClick={() => handleNav(id)}
              className="font-['Raleway',sans-serif] font-light text-[22px] text-caption hover:text-ink transition-colors duration-200 text-left py-[12px] border-b border-[rgba(0,0,0,0.06)] last:border-0"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
