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
  const isHome = location.pathname === "/";

  useEffect(() => {
    const hide = () => {
      if (window.scrollY > 80) setVisible(false);
    };
    const reset = () => {
      setVisible(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(hide, 7000);
    };
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      reset();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", reset, { passive: true });
    window.addEventListener("keydown", reset, { passive: true });
    window.addEventListener("click", reset, { passive: true });
    window.addEventListener("touchstart", reset, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", reset);
      window.removeEventListener("keydown", reset);
      window.removeEventListener("click", reset);
      window.removeEventListener("touchstart", reset);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const navItems = [
    { label: "Каталог", id: "catalog" },
    { label: "О нас", id: "about" },
    { label: "Объекты", id: "objects" },
    { label: "Наша команда", id: "team" },
    { label: "Контакты", id: "contacts" },
  ];

  const handleNav = (id: string) => {
    setMenuOpen(false);
    if (!isHome) {
      navigate("/");
      window.setTimeout(() => scrollToSection(id), 80);
    } else {
      scrollToSection(id);
    }
  };

  const logoClass =
    "shrink-0 text-left font-['Cormorant_Garamond',sans-serif] font-light text-[#111] text-[20px] sm:text-[22px] md:text-[24px] leading-none tracking-[-0.5px] whitespace-nowrap transition-opacity duration-200 hover:opacity-75 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111]/20 rounded-sm";

  return (
    <>
      <div
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/60 backdrop-blur-[18px] border-b border-white/30 shadow-sm"
            : "bg-white border-b border-[#d5d5d5]",
          visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0",
        ].join(" ")}
      >
        <div className="flex items-center justify-between w-full max-w-[1280px] mx-auto px-[clamp(16px,4vw,56px)] py-[16px] md:py-[20px] text-[14px] gap-3 min-w-0">
          <Link
            to="/"
            className={logoClass}
            aria-label="Интерио — главная"
            onClick={() => {
              if (isHome) {
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
                className="font-['Raleway',sans-serif] font-light text-[13px] lg:text-[14px] text-[rgba(0,0,0,0.48)] hover:text-[#111] transition-colors duration-200 shrink-0"
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
              className={`block h-[1.5px] w-[22px] bg-[#111] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
            />
            <span
              className={`block h-[1.5px] w-[22px] bg-[#111] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-[1.5px] w-[22px] bg-[#111] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
            />
          </button>
        </div>
      </div>

      <div
        className={[
          "fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-[18px] transition-all duration-400 md:hidden",
          menuOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <div className="flex flex-col pt-[80px] pb-[32px] px-6 gap-[4px]">
          {navItems.map(({ label, id }) => (
            <button
              key={id}
              type="button"
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
