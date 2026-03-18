import svgPaths from "./svg-1amu19sz3a";
import imgMotionImg from "figma:asset/eaa78224c1974336e9569a3de872efd11b38eede.png";
import imgMotionImg1 from "figma:asset/6f8aa6e99331d89a2b603a64cb9fc08afd48d117.png";
import imgImg from "figma:asset/4b4e7ebacda091e49ac45b9c07bb7e2f2811bcfa.png";
import imgImg1 from "figma:asset/d8467976fafa9b0e4d5b109b3ee5abeeb6c55d04.png";
import imgImg2 from "figma:asset/e179ea00bc84283ae34bc53b381b155bb9dd3ee5.png";
import imgImg3 from "figma:asset/96e27b212c9ef3caf4486da3ef6e5d542b0da8cb.png";
import imgMotionImg2 from "figma:asset/11e78a53d33540d5ee0c02d20f0384e48fea1024.png";
import imgMotionImg3 from "figma:asset/54d5dedadd306f34fd1cefef0856fca7581d745f.png";
import imgMotionImg4 from "figma:asset/de7a5ccc8597df4faa089b2ce62a024aba49609c.png";
import imgImg4 from "figma:asset/19db15375fd2e65a1cd75b71a8214a338ae24716.png";
import imgImg5 from "figma:asset/baa8f94eb93145e8af6d7b9c517c4e6e4d145e3b.png";
import imgImg6 from "figma:asset/f3be4cf1ef97adc392cde42f4fda364118585941.png";
import imgImg7 from "figma:asset/39a6cd04526fde7b1db41654cff0b154bac7fa56.png";
import imgImage from "figma:asset/c05c3cb162faebf9de2b56030eedc3d21a8313f7.png";

function Span() {
  return (
    <div className="h-[18px] relative shrink-0 w-[63px]" data-name="span">
      <p className="absolute font-['Space_Grotesk:Bold','Noto_Sans:Bold',sans-serif] font-bold leading-[18px] left-0 text-[#111] text-[12px] top-[-0.2px] tracking-[0.24px] whitespace-nowrap">Интерио</p>
    </div>
  );
}

function Menu() {
  return (
    <div className="content-stretch flex font-['Raleway:Light',sans-serif] font-light gap-[24px] items-center justify-center leading-[20px] relative shrink-0 text-[#232323] text-[12px] whitespace-nowrap" data-name="Menu">
      <p className="relative shrink-0 tracking-[1px]">Каталог</p>
      <p className="relative shrink-0">О нас</p>
      <p className="relative shrink-0">Объекты</p>
      <p className="relative shrink-0">Наша команда</p>
      <p className="relative shrink-0">Контакты</p>
    </div>
  );
}

function Span1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[62px]" data-name="span">
      <p className="absolute font-['Space_Grotesk:Bold','Noto_Sans:Bold',sans-serif] font-bold leading-[18px] left-0 text-[#111] text-[12px] top-[-0.2px] tracking-[0.24px] whitespace-nowrap">ИНТЕРИО</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[40px] py-[20px] relative w-full">
          <Span />
          <Menu />
          <Span1 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame />
      <div className="bg-[#d5d5d5] h-px shrink-0 w-[1201px]" />
    </div>
  );
}

function Span2() {
  return (
    <div className="absolute border-[0.8px] border-[rgba(0,0,0,0.13)] border-solid h-[24.488px] left-[326.2px] rounded-[100px] top-0 w-[133.637px]" data-name="span">
      <p className="absolute font-['Raleway:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[14.88px] left-[12px] text-[#4b4b4b] text-[10px] top-[3.8px] whitespace-nowrap">✓ с 2015 года на рынке</p>
    </div>
  );
}

function Span3() {
  return (
    <div className="absolute border-[0.8px] border-[rgba(0,0,0,0.13)] border-solid h-[24.488px] left-[467.84px] rounded-[100px] top-0 w-[179.887px]" data-name="span">
      <p className="absolute font-['Raleway:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[14.88px] left-[12px] text-[#4b4b4b] text-[10px] top-[3.8px] whitespace-nowrap">✓ 200+ реализованных объектов</p>
    </div>
  );
}

function Span4() {
  return (
    <div className="absolute border-[0.8px] border-[rgba(0,0,0,0.13)] border-solid h-[24.488px] left-[655.72px] rounded-[100px] top-0 w-[219.262px]" data-name="span">
      <p className="absolute font-['Raleway:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[14.88px] left-[12px] text-[#4b4b4b] text-[10px] top-[3.8px] whitespace-nowrap">✓ официальные дистрибьюторы заводов</p>
    </div>
  );
}

function Div() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="div">
      <Span2 />
      <Span3 />
      <Span4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full">
      <div className="font-['Cormorant_Garamond:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[40px] text-black text-center uppercase w-full whitespace-pre-wrap">
        <p className="mb-0">{`Комплексные поставки потолочных систем `}</p>
        <p>{`и напольных покрытий `}</p>
      </div>
      <Div />
    </div>
  );
}

function MotionImg() {
  return (
    <div className="h-[377px] relative shrink-0 w-[594px]" data-name="motion.img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMotionImg} />
    </div>
  );
}

function MotionImg1() {
  return (
    <div className="absolute h-[446px] left-0 top-0 w-[595px]" data-name="motion.img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMotionImg1} />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[377px] overflow-clip relative shrink-0 w-[595px]" data-name="Container">
      <MotionImg1 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <MotionImg />
      <Container />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame26 />
    </div>
  );
}

function ArrowUpRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ArrowUpRight">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ArrowUpRight">
          <path d={svgPaths.p75bbac0} id="Vector" stroke="var(--stroke-0, #403D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <g id="Vector_2">
            <path d={svgPaths.p173e4d00} fill="var(--fill-0, #403D3A)" />
            <path d={svgPaths.p3908d100} stroke="var(--stroke-0, #403D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] h-[60px] items-center justify-center p-[10px] relative rounded-[100px] shrink-0 w-[291px]">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.25)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <ArrowUpRight />
      <p className="font-['Raleway:Medium',sans-serif] font-medium leading-[18.72px] relative shrink-0 text-[#2b2a2a] text-[16px] text-center whitespace-nowrap">ОСТАВИТЬ ЗАЯВКУ</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Frame3 />
      <p className="font-['Raleway:ExtraLight',sans-serif] font-extralight leading-[21px] relative shrink-0 text-[#2b2b2b] text-[14px] w-[586px]">Работаем с застройщиками и проектировщиками по всей России. Подбираем решения, оптимизируем бюджет и сопровождаем проект до завершения строительства.</p>
    </div>
  );
}

function Span5() {
  return (
    <div className="h-[22.488px] relative rounded-[100px] shrink-0 w-[61.925px]" data-name="span">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.13)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[14.88px] left-[10.8px] text-[9.92px] text-[rgba(0,0,0,0.4)] top-[3.6px] whitespace-nowrap">Потолки</p>
    </div>
  );
}

function Span6() {
  return (
    <div className="h-[22.488px] relative rounded-[100px] shrink-0 w-[68.363px]" data-name="span">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.13)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[14.88px] left-[10.8px] text-[9.92px] text-[rgba(0,0,0,0.4)] top-[3.6px] whitespace-nowrap">Покрытия</p>
    </div>
  );
}

function Span7() {
  return (
    <div className="h-[22.488px] relative rounded-[100px] shrink-0 w-[66.513px]" data-name="span">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.13)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[14.88px] left-[10.8px] text-[9.92px] text-[rgba(0,0,0,0.4)] top-[3.6px] whitespace-nowrap">Под ключ</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] h-[22px] items-center relative shrink-0">
      <Span5 />
      <Span6 />
      <Span7 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame6 />
      <Frame5 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame27 />
      <Frame4 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[1201px]">
      <Frame28 />
      <div className="bg-[#d5d5d5] h-px shrink-0 w-full" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <p className="font-['Raleway:SemiBold',sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[12px] text-[rgba(0,0,0,0.38)] tracking-[1px] uppercase w-[min-content]">Поставляем для</p>
      <p className="font-['Cormorant_Garamond:Light',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#111] text-[36px] whitespace-nowrap">Коммерческих и социальных объектов</p>
    </div>
  );
}

function GraduationCap({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative shrink-0 size-[36px]"} data-name="GraduationCap">
      <div className="absolute inset-[20.83%_8.27%_37.5%_8.34%]" data-name="Vector">
        <div className="absolute inset-[-3.33%_-1.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.0228 16.0011">
            <path d={svgPaths.p29365e00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_8.33%_33.33%_91.67%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 10">
            <path d="M0.5 0.5V9.5" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/4 right-1/4 top-[52.08%]" data-name="Vector">
        <div className="absolute inset-[-5.13%_-2.78%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 10.75">
            <path d={svgPaths.p17b64a80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-l border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[24px] relative w-full">
        <GraduationCap />
        <p className="font-['Cormorant_Garamond:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[20px] whitespace-nowrap">Образование</p>
        <p className="font-['Raleway:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#111] text-[12px] whitespace-nowrap">школы, ВУЗы, детсады</p>
      </div>
    </div>
  );
}

function Building({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative shrink-0 size-[36px]"} data-name="Building2">
      <div className="absolute bottom-[8.33%] left-1/4 right-1/4 top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-1.67%_-2.78%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 31">
            <path d={svgPaths.p3030e570} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-[8.33%] right-3/4 top-1/2" data-name="Vector">
        <div className="absolute inset-[-3.33%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 16">
            <path d={svgPaths.p26312700} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-3/4 right-[8.33%] top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-2.56%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 20.5">
            <path d={svgPaths.p2eeb3780} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[41.67%] right-[41.67%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.5px_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 1">
            <path d="M0.5 0.5H6.5" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_41.67%_58.33%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 1">
            <path d="M0.5 0.5H6.5" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.33%_41.67%_41.67%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 1">
            <path d="M0.5 0.5H6.5" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[41.67%] right-[41.67%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-0.5px_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 1">
            <path d="M0.5 0.5H6.5" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-l border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[24px] relative w-full">
        <Building />
        <p className="font-['Cormorant_Garamond:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[20px] whitespace-nowrap">Медицина</p>
        <p className="font-['Raleway:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#111] text-[12px] whitespace-nowrap">клиники, больницы, лаборатории</p>
      </div>
    </div>
  );
}

function Briefcase({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative shrink-0 size-[36px]"} data-name="Briefcase">
      <div className="absolute inset-[8.33%_32.09%_16.67%_34.58%]" data-name="Vector">
        <div className="absolute inset-[-1.85%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 28">
            <path d={svgPaths.p15eb6800} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[16.67%] left-[9.58%] right-[7.09%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-2.38%_-1.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 22">
            <path d={svgPaths.pf9ae100} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-l border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[24px] relative w-full">
        <Briefcase />
        <p className="font-['Cormorant_Garamond:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[20px] whitespace-nowrap">Офисы</p>
        <p className="font-['Raleway:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#111] text-[12px] whitespace-nowrap">БЦ, коворкинги, open space</p>
      </div>
    </div>
  );
}

function ShoppingBag({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative shrink-0 size-[36px]"} data-name="ShoppingBag">
      <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-1.67%_-1.85%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 31">
            <path d={svgPaths.p2a8c6480} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.5px_-1.85%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 1">
            <path d="M0.5 0.5H27.5" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 7">
            <path d={svgPaths.p2808ef58} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[24px] relative w-full">
        <ShoppingBag />
        <p className="font-['Cormorant_Garamond:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[20px] whitespace-nowrap">ТРЦ</p>
        <p className="font-['Raleway:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#111] text-[12px] whitespace-nowrap">моллы, галереи, шоурумы</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <Frame12 />
    </div>
  );
}

function Dumbbell({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative shrink-0 size-[36px]"} data-name="Dumbbell">
      <div className="absolute inset-[40%]" data-name="Vector">
        <div className="absolute inset-[-6.94%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.2 8.2">
            <path d="M7.7 7.7L0.5 0.5" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[44.36%_8.04%_8.04%_44.36%]" data-name="Vector">
        <div className="absolute inset-[-2.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1374 18.1374">
            <path d={svgPaths.p13b0a2c0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[83.75%_10.42%_10.42%_83.75%]" data-name="Vector">
        <div className="absolute inset-[-23.81%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.1 3.1">
            <path d="M2.6 2.6L0.5 0.5" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[10.42%_83.75%_83.75%_10.42%]" data-name="Vector">
        <div className="absolute inset-[-23.81%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.1 3.1">
            <path d="M2.6 2.6L0.5 0.5" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.04%_44.36%_44.36%_8.04%]" data-name="Vector">
        <div className="absolute inset-[-2.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1374 18.1374">
            <path d={svgPaths.p3ded1a80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[24px] relative w-full">
        <Dumbbell />
        <p className="font-['Cormorant_Garamond:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[20px] whitespace-nowrap">Спорт</p>
        <p className="font-['Raleway:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#111] text-[12px] whitespace-nowrap">арены, стадионы, фитнес</p>
      </div>
    </div>
  );
}

function Theater({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative shrink-0 size-[36px]"} data-name="Theater">
      <div className="absolute inset-[8.33%_79.17%_58.33%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-4.17%_-11.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.5 13">
            <path d="M0.5 12.5C0.5 12.5 5 8 5 0.5" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_8.33%_58.33%_79.17%]" data-name="Vector">
        <div className="absolute inset-[-4.17%_-11.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.5 13">
            <path d="M5 12.5C5 12.5 0.5 8 0.5 0.5" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_58.33%_58.33%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d={svgPaths.p1df6b980} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_8.33%_58.33%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d={svgPaths.p36167800} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_83.33%_37.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-6.67%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 8.5">
            <path d={svgPaths.p7c0a360} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_8.33%_37.5%_83.33%]" data-name="Vector">
        <div className="absolute inset-[-6.67%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 8.5">
            <path d={svgPaths.p3b964400} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.5%_33.33%_37.5%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 1">
            <path d="M0.5 0.5H12.5" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[79.17%_58.33%_8.33%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-11.11%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 5.5">
            <path d={svgPaths.pe0b4520} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[79.17%_8.33%_8.33%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-11.11%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 5.5">
            <path d={svgPaths.p1dffeea0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[24px] relative w-full">
        <Theater />
        <p className="font-['Cormorant_Garamond:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[20px] whitespace-nowrap">Культура</p>
        <p className="font-['Raleway:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#111] text-[12px] whitespace-nowrap">театры, музеи, кино</p>
      </div>
    </div>
  );
}

function UtensilsCrossed({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative shrink-0 size-[36px]"} data-name="UtensilsCrossed">
      <div className="absolute inset-[8.33%_8.33%_53.51%_53.51%]" data-name="Vector">
        <div className="absolute inset-[-3.64%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.7364 14.7364">
            <path d={svgPaths.p32897f20} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[13.75%_8.33%_8.33%_8.5%]" data-name="Vector">
        <div className="absolute inset-[-1.78%_-1.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.9409 29.05">
            <path d={svgPaths.p33287b00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[64.58%_64.58%_9.17%_8.75%]" data-name="Vector">
        <div className="absolute inset-[-5.29%_-5.21%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6 10.45">
            <path d="M0.5 9.95L10.1 0.5" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-4.76%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
            <path d="M11 0.5L0.5 11" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[24px] relative w-full">
        <UtensilsCrossed />
        <p className="font-['Cormorant_Garamond:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[20px] whitespace-nowrap">HORECA</p>
        <p className="font-['Raleway:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#111] text-[12px] whitespace-nowrap">отели, рестораны, кафе</p>
      </div>
    </div>
  );
}

function Home({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative shrink-0 size-[36px]"} data-name="Home">
      <div className="absolute bottom-[12.5%] left-[37.5%] right-[37.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-3.7%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 14.5">
            <path d={svgPaths.p1182a100} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.34%_12.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-1.75%_-1.85%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 29.4992">
            <path d={svgPaths.p2d6ed800} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-b border-l border-r border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[24px] relative w-full">
        <Home />
        <p className="font-['Cormorant_Garamond:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[20px] whitespace-nowrap">Жилые комплексы</p>
        <p className="font-['Raleway:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#111] text-[12px] whitespace-nowrap">МОПы, холлы, подъезды</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame16 />
      <Frame17 />
      <Frame18 />
      <Frame19 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame11 />
      <Frame15 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[1200px]">
      <Frame7 />
      <Frame13 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <p className="font-['Raleway:SemiBold',sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[12px] text-[rgba(0,0,0,0.38)] tracking-[1px] uppercase w-[min-content]">Проблемы объектов</p>
      <p className="font-['Cormorant_Garamond:Light',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#111] text-[36px] w-[422px]">С чем сталкиваются строящиеся объекты</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <p className="font-['Raleway:SemiBold',sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[12px] text-[rgba(0,0,0,0.38)] tracking-[1px] uppercase w-[min-content]">Решение интерио</p>
      <p className="font-['Cormorant_Garamond:Light',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#111] text-[36px] whitespace-nowrap">Сопровождаем проект от А до Я</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[171px] items-center relative shrink-0 w-full">
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d={svgPaths.p4ce6280} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="0.9375" />
          <path d={svgPaths.p38359080} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="0.9375" />
          <path d={svgPaths.p1c8d3500} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="0.9375" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[rgba(0,0,0,0.06)] relative rounded-[8px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10.5px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[17.75px] relative shrink-0 w-[427.6px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Raleway:Medium',sans-serif] font-medium leading-[17.76px] left-0 text-[11.84px] text-[rgba(0,0,0,0.5)] top-[-0.4px] whitespace-nowrap">Анализ проектной документации</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[16px] h-[76.8px] items-center left-[589.6px] pb-[0.8px] pl-[40px] top-0 w-[589.6px]" data-name="App">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Container2 />
      <Paragraph />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[13.438px] relative shrink-0 w-[11.525px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Raleway:SemiBold',sans-serif] font-semibold leading-[13.44px] left-0 text-[8.96px] text-[rgba(0,0,0,0.22)] top-[-0.2px] tracking-[0.896px] whitespace-nowrap">01</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20.063px] relative shrink-0 w-[299.675px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[20.064px] left-0 text-[12.16px] text-[rgba(0,0,0,0.42)] top-[-0.6px] whitespace-nowrap">Отсутствие компетентной технической поддержки</p>
      </div>
    </div>
  );
}

function App1() {
  return (
    <div className="absolute bg-[#fafafa] h-[76.8px] left-0 top-0 w-[589.6px]" data-name="App">
      <div className="content-stretch flex gap-[20px] items-center overflow-clip pb-[0.8px] pl-[40px] pr-[0.8px] relative rounded-[inherit] size-full">
        <Text />
        <Paragraph1 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b-[0.8px] border-r-[0.8px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[76.8px] relative shrink-0 w-full" data-name="Container">
      <App />
      <App1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g clipPath="url(#clip0_1_561)" id="Icon">
          <path d={svgPaths.pb2b77c0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="0.9375" />
          <path d={svgPaths.p2bd82b00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="0.9375" />
          <path d={svgPaths.p18570480} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="0.9375" />
        </g>
        <defs>
          <clipPath id="clip0_1_561">
            <rect fill="white" height="15" width="15" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[rgba(0,0,0,0.06)] relative rounded-[8px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10.5px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[17.75px] relative shrink-0 w-[427.6px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Raleway:Medium',sans-serif] font-medium leading-[17.76px] left-0 text-[11.84px] text-[rgba(0,0,0,0.5)] top-[-0.4px] whitespace-nowrap">Подбор и согласование материалов</p>
      </div>
    </div>
  );
}

function App2() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[16px] h-[76.8px] items-center left-[589.6px] pb-[0.8px] pl-[40px] top-0 w-[589.6px]" data-name="App">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Container4 />
      <Paragraph2 />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[13.438px] relative shrink-0 w-[12.213px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Raleway:SemiBold',sans-serif] font-semibold leading-[13.44px] left-0 text-[8.96px] text-[rgba(0,0,0,0.22)] top-[-0.2px] tracking-[0.896px] whitespace-nowrap">02</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[20.063px] relative shrink-0 w-[290.212px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[20.064px] left-0 text-[12.16px] text-[rgba(0,0,0,0.42)] top-[-0.6px] whitespace-nowrap">Сложности в выборе и согласовании материалов</p>
      </div>
    </div>
  );
}

function App3() {
  return (
    <div className="absolute bg-[#fafafa] h-[76.8px] left-0 top-0 w-[589.6px]" data-name="App">
      <div className="content-stretch flex gap-[20px] items-center overflow-clip pb-[0.8px] pl-[40px] pr-[0.8px] relative rounded-[inherit] size-full">
        <Text1 />
        <Paragraph3 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b-[0.8px] border-r-[0.8px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[76.8px] relative shrink-0 w-full" data-name="Container">
      <App2 />
      <App3 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d={svgPaths.p1950ab00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="0.9375" />
          <path d={svgPaths.pc274700} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="0.9375" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[rgba(0,0,0,0.06)] relative rounded-[8px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10.5px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[17.75px] relative shrink-0 w-[427.6px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Raleway:Medium',sans-serif] font-medium leading-[17.76px] left-0 text-[11.84px] text-[rgba(0,0,0,0.5)] top-[-0.4px] whitespace-nowrap">Прямые цены — без посредников</p>
      </div>
    </div>
  );
}

function App4() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[16px] h-[76.8px] items-center left-[589.6px] pb-[0.8px] pl-[40px] top-0 w-[589.6px]" data-name="App">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Container6 />
      <Paragraph4 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[13.438px] relative shrink-0 w-[12.213px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Raleway:SemiBold',sans-serif] font-semibold leading-[13.44px] left-0 text-[8.96px] text-[rgba(0,0,0,0.22)] top-[-0.2px] tracking-[0.896px] whitespace-nowrap">03</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[20.063px] relative shrink-0 w-[283.25px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[20.064px] left-0 text-[12.16px] text-[rgba(0,0,0,0.42)] top-[-0.6px] whitespace-nowrap">Невыгодные закупочные условия у посредников</p>
      </div>
    </div>
  );
}

function App5() {
  return (
    <div className="absolute bg-[#fafafa] h-[76.8px] left-0 top-0 w-[589.6px]" data-name="App">
      <div className="content-stretch flex gap-[20px] items-center overflow-clip pb-[0.8px] pl-[40px] pr-[0.8px] relative rounded-[inherit] size-full">
        <Text2 />
        <Paragraph5 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b-[0.8px] border-r-[0.8px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[76.8px] relative shrink-0 w-full" data-name="Container">
      <App4 />
      <App5 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d={svgPaths.p2f69c040} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="0.9375" />
          <path d={svgPaths.p24aeb400} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="0.9375" />
          <path d={svgPaths.p28f1f780} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="0.9375" />
          <path d={svgPaths.p6d4e810} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="0.9375" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[rgba(0,0,0,0.06)] relative rounded-[8px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10.5px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[17.75px] relative shrink-0 w-[427.6px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Raleway:Medium',sans-serif] font-medium leading-[17.76px] left-0 text-[11.84px] text-[rgba(0,0,0,0.5)] top-[-0.4px] whitespace-nowrap">Личный менеджер на весь проект</p>
      </div>
    </div>
  );
}

function App6() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[16px] h-[76.8px] items-center left-[589.6px] pb-[0.8px] pl-[40px] top-0 w-[589.6px]" data-name="App">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Container8 />
      <Paragraph6 />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[13.438px] relative shrink-0 w-[12.35px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Raleway:SemiBold',sans-serif] font-semibold leading-[13.44px] left-0 text-[8.96px] text-[rgba(0,0,0,0.22)] top-[-0.2px] tracking-[0.896px] whitespace-nowrap">04</p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[20.063px] relative shrink-0 w-[324.7px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[20.064px] left-0 text-[12.16px] text-[rgba(0,0,0,0.42)] top-[-0.6px] whitespace-nowrap">Ошибки в проектных решениях на этапе спецификации</p>
      </div>
    </div>
  );
}

function App7() {
  return (
    <div className="absolute bg-[#fafafa] h-[76.8px] left-0 top-0 w-[589.6px]" data-name="App">
      <div className="content-stretch flex gap-[20px] items-center overflow-clip pb-[0.8px] pl-[40px] pr-[0.8px] relative rounded-[inherit] size-full">
        <Text3 />
        <Paragraph7 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b-[0.8px] border-r-[0.8px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[76.8px] relative shrink-0 w-full" data-name="Container">
      <App6 />
      <App7 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d={svgPaths.p1f58da00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="0.9375" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[rgba(0,0,0,0.06)] relative rounded-[8px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10.5px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[17.75px] relative shrink-0 w-[427.6px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Raleway:Medium',sans-serif] font-medium leading-[17.76px] left-0 text-[11.84px] text-[rgba(0,0,0,0.5)] top-[-0.4px] whitespace-nowrap">Поддержка на этапе монтажа</p>
      </div>
    </div>
  );
}

function App8() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[16px] h-[76.8px] items-center left-[589.6px] pb-[0.8px] pl-[40px] top-0 w-[589.6px]" data-name="App">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Container10 />
      <Paragraph8 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[13.438px] relative shrink-0 w-[12.238px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Raleway:SemiBold',sans-serif] font-semibold leading-[13.44px] left-0 text-[8.96px] text-[rgba(0,0,0,0.22)] top-[-0.2px] tracking-[0.896px] whitespace-nowrap">05</p>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[20.063px] relative shrink-0 w-[328.45px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[20.064px] left-0 text-[12.16px] text-[rgba(0,0,0,0.42)] top-[-0.6px] whitespace-nowrap">Отсутствие сопровождения проекта от начала до конца</p>
      </div>
    </div>
  );
}

function App9() {
  return (
    <div className="absolute bg-[#fafafa] h-[76.8px] left-0 top-0 w-[589.6px]" data-name="App">
      <div className="content-stretch flex gap-[20px] items-center overflow-clip pb-[0.8px] pl-[40px] pr-[0.8px] relative rounded-[inherit] size-full">
        <Text4 />
        <Paragraph9 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b-[0.8px] border-r-[0.8px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[76.8px] relative shrink-0 w-full" data-name="Container">
      <App8 />
      <App9 />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.08)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Container1 />
      <Container3 />
      <Container5 />
      <Container7 />
      <Container9 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start py-[40px] relative shrink-0 w-[1200px]">
      <Frame37 />
      <Section />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <p className="font-['Raleway:SemiBold',sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[12px] text-[rgba(0,0,0,0.38)] tracking-[1px] uppercase w-[min-content]">Официальные дистрибьюторы</p>
      <p className="font-['Cormorant_Garamond:Light',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#111] text-[36px] whitespace-nowrap">Прямые контракты с производителями</p>
    </div>
  );
}

function Img() {
  return (
    <div className="h-[108px] opacity-50 relative shrink-0 w-[216px]" data-name="img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImg} />
    </div>
  );
}

function Div1() {
  return (
    <div className="h-[140px] relative shrink-0 w-[320px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Img />
      </div>
    </div>
  );
}

function Img1() {
  return (
    <div className="h-[108px] opacity-50 relative shrink-0 w-[216px]" data-name="img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImg1} />
    </div>
  );
}

function Div2() {
  return (
    <div className="h-[140px] relative shrink-0 w-[320px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Img1 />
      </div>
    </div>
  );
}

function Img2() {
  return (
    <div className="h-[108px] opacity-50 relative shrink-0 w-[216px]" data-name="img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImg2} />
    </div>
  );
}

function Div3() {
  return (
    <div className="h-[140px] relative shrink-0 w-[320px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Img2 />
      </div>
    </div>
  );
}

function Img3() {
  return (
    <div className="h-[108px] opacity-50 relative shrink-0 w-[216px]" data-name="img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImg3} />
    </div>
  );
}

function Div4() {
  return (
    <div className="h-[140px] relative shrink-0 w-[320px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Img3 />
      </div>
    </div>
  );
}

function Img4() {
  return (
    <div className="h-[108px] opacity-50 relative shrink-0 w-[216px]" data-name="img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImg} />
    </div>
  );
}

function Div5() {
  return (
    <div className="h-[140px] relative shrink-0 w-[320px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Img4 />
      </div>
    </div>
  );
}

function Img5() {
  return (
    <div className="h-[108px] opacity-50 relative shrink-0 w-[216px]" data-name="img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImg1} />
    </div>
  );
}

function Div6() {
  return (
    <div className="h-[140px] relative shrink-0 w-[320px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Img5 />
      </div>
    </div>
  );
}

function Img6() {
  return (
    <div className="h-[108px] opacity-50 relative shrink-0 w-[216px]" data-name="img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImg2} />
    </div>
  );
}

function Div7() {
  return (
    <div className="h-[140px] relative shrink-0 w-[320px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Img6 />
      </div>
    </div>
  );
}

function Img7() {
  return (
    <div className="h-[108px] opacity-50 relative shrink-0 w-[216px]" data-name="img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImg3} />
    </div>
  );
}

function Div8() {
  return (
    <div className="h-[140px] relative shrink-0 w-[320px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Img7 />
      </div>
    </div>
  );
}

function Img8() {
  return (
    <div className="h-[108px] opacity-50 relative shrink-0 w-[216px]" data-name="img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImg} />
    </div>
  );
}

function Div9() {
  return (
    <div className="h-[140px] relative shrink-0 w-[320px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Img8 />
      </div>
    </div>
  );
}

function Img9() {
  return (
    <div className="h-[108px] opacity-50 relative shrink-0 w-[216px]" data-name="img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImg1} />
    </div>
  );
}

function Div10() {
  return (
    <div className="h-[140px] relative shrink-0 w-[320px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Img9 />
      </div>
    </div>
  );
}

function Img10() {
  return (
    <div className="h-[108px] opacity-50 relative shrink-0 w-[216px]" data-name="img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImg2} />
    </div>
  );
}

function Div11() {
  return (
    <div className="h-[140px] relative shrink-0 w-[320px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Img10 />
      </div>
    </div>
  );
}

function Img11() {
  return (
    <div className="h-[108px] opacity-50 relative shrink-0 w-[216px]" data-name="img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImg3} />
    </div>
  );
}

function Div12() {
  return (
    <div className="h-[140px] relative shrink-0 w-[320px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Img11 />
      </div>
    </div>
  );
}

function Img12() {
  return (
    <div className="h-[108px] opacity-50 relative shrink-0 w-[216px]" data-name="img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImg} />
    </div>
  );
}

function Div13() {
  return (
    <div className="h-[140px] relative shrink-0 w-[320px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Img12 />
      </div>
    </div>
  );
}

function Img13() {
  return (
    <div className="h-[108px] opacity-50 relative shrink-0 w-[216px]" data-name="img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImg1} />
    </div>
  );
}

function Div14() {
  return (
    <div className="h-[140px] relative shrink-0 w-[320px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Img13 />
      </div>
    </div>
  );
}

function Img14() {
  return (
    <div className="h-[108px] opacity-50 relative shrink-0 w-[216px]" data-name="img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImg2} />
    </div>
  );
}

function Div15() {
  return (
    <div className="h-[140px] relative shrink-0 w-[320px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Img14 />
      </div>
    </div>
  );
}

function Img15() {
  return (
    <div className="h-[108px] opacity-50 relative shrink-0 w-[216px]" data-name="img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImg3} />
    </div>
  );
}

function Div16() {
  return (
    <div className="h-[140px] relative shrink-0 w-[320px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Img15 />
      </div>
    </div>
  );
}

function MotionDiv() {
  return (
    <div className="content-stretch flex h-[140px] items-center relative shrink-0 w-full" data-name="motion.div">
      <Div1 />
      <Div2 />
      <Div3 />
      <Div4 />
      <Div5 />
      <Div6 />
      <Div7 />
      <Div8 />
      <Div9 />
      <Div10 />
      <Div11 />
      <Div12 />
      <Div13 />
      <Div14 />
      <Div15 />
      <Div16 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[40px] relative w-full">
        <Frame23 />
        <MotionDiv />
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <p className="font-['Raleway:SemiBold',sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[12px] text-[rgba(0,0,0,0.38)] tracking-[1px] uppercase w-[min-content]">Реализованные объекты</p>
      <p className="font-['Cormorant_Garamond:Light',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#111] text-[36px] whitespace-nowrap">Более 200 объектов по всей России</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 uppercase w-[174px]">
      <p className="font-['Cormorant_Garamond:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[48px] text-black text-center w-full">200+</p>
      <p className="font-['Raleway:ExtraLight',sans-serif] font-extralight leading-[21px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.5)] w-full">Реализованных объектов</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 uppercase w-[204px]">
      <p className="font-['Cormorant_Garamond:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[48px] text-black text-center w-full">1 000 000+</p>
      <p className="font-['Raleway:ExtraLight',sans-serif] font-extralight leading-[21px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.5)] w-full">м² поставленных материалов</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[174px]">
      <p className="font-['Cormorant_Garamond:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#111] text-[48px] text-center tracking-[-1.075px] w-full">10 лет</p>
      <p className="font-['Raleway:ExtraLight',sans-serif] font-extralight leading-[21px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.5)] uppercase w-full">НА РЫНКЕ С 2015 ГОДА</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative w-full">
          <Frame31 />
          <Frame32 />
          <Frame33 />
        </div>
      </div>
    </div>
  );
}

function MotionImg2() {
  return (
    <div className="h-[266.788px] relative shrink-0 w-full" data-name="motion.img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMotionImg2} />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 text-[#111] w-full">
      <p className="font-['Raleway:Light',sans-serif] font-light relative shrink-0 text-[12px] w-full">Спорт</p>
      <p className="font-['Cormorant_Garamond:Medium',sans-serif] not-italic relative shrink-0 text-[20px] w-full">Ледовые арены и стадионы</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <MotionImg2 />
      <Frame36 />
    </div>
  );
}

function MotionImg3() {
  return (
    <div className="h-[267px] relative shrink-0 w-full" data-name="motion.img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMotionImg3} />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 text-[#111] w-full">
      <p className="font-['Raleway:Light',sans-serif] font-light relative shrink-0 text-[12px] w-full">Медицина</p>
      <p className="font-['Cormorant_Garamond:Medium',sans-serif] not-italic relative shrink-0 text-[20px] w-full">Медицинские центры и клиники</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <MotionImg3 />
      <Frame40 />
    </div>
  );
}

function MotionImg4() {
  return (
    <div className="h-[266.788px] relative shrink-0 w-[355.725px]" data-name="motion.img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMotionImg4} />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 text-[#111] w-full">
      <p className="font-['Raleway:Light',sans-serif] font-light relative shrink-0 text-[12px] w-full">Образование</p>
      <p className="font-['Cormorant_Garamond:Medium',sans-serif] not-italic relative shrink-0 text-[20px] w-full">Образовательные учреждения</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <MotionImg4 />
      <Frame42 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pt-[20px] relative shrink-0 w-full">
      <Frame35 />
      <Frame39 />
      <Frame41 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[40px] relative w-full">
        <Frame25 />
        <Frame30 />
        <Frame34 />
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <p className="font-['Raleway:SemiBold',sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[12px] text-[rgba(0,0,0,0.38)] tracking-[1px] uppercase w-[min-content]">наши решения</p>
      <p className="font-['Cormorant_Garamond:Light',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#111] text-[36px] whitespace-nowrap">Материалы для коммерческих и социальных объектов</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[14.4px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Raleway:SemiBold',sans-serif] font-semibold leading-[14.4px] left-0 text-[12px] text-[rgba(0,0,0,0.35)] top-[-0.4px] tracking-[1.152px] uppercase whitespace-nowrap">Потолочные системы</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[26.4px] left-0 top-0 w-[509.6px]" data-name="Paragraph">
      <p className="absolute font-['Cormorant_Garamond:Light',sans-serif] leading-[normal] left-0 not-italic text-[#111] text-[18px] top-[-0.6px] tracking-[-0.176px] whitespace-nowrap">Металлические потолки</p>
    </div>
  );
}

function Text5() {
  return <div className="bg-[rgba(0,0,0,0.25)] rounded-[1.5px] shrink-0 size-[3px]" data-name="Text" />;
}

function Paragraph12() {
  return (
    <div className="h-[17.65px] relative shrink-0 w-[91.95px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[17.664px] left-0 text-[12px] text-[rgba(0,0,0,0.5)] top-[-0.6px] whitespace-nowrap">реечные потолки</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[17.65px] items-center left-0 top-[32.4px] w-[509.6px]" data-name="Container">
      <Text5 />
      <Paragraph12 />
    </div>
  );
}

function Text6() {
  return <div className="bg-[rgba(0,0,0,0.25)] rounded-[1.5px] shrink-0 size-[3px]" data-name="Text" />;
}

function Paragraph13() {
  return (
    <div className="h-[17.65px] relative shrink-0 w-[101.975px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[17.664px] left-0 text-[12px] text-[rgba(0,0,0,0.5)] top-[-0.6px] whitespace-nowrap">кассетные потолки</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[17.65px] items-center left-0 top-[53.05px] w-[509.6px]" data-name="Container">
      <Text6 />
      <Paragraph13 />
    </div>
  );
}

function Text7() {
  return <div className="bg-[rgba(0,0,0,0.25)] rounded-[1.5px] shrink-0 size-[3px]" data-name="Text" />;
}

function Paragraph14() {
  return (
    <div className="h-[17.65px] relative shrink-0 w-[47.075px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[17.664px] left-0 text-[12px] text-[rgba(0,0,0,0.5)] top-[-0.6px] whitespace-nowrap">грильято</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[17.65px] items-center left-0 top-[73.7px] w-[509.6px]" data-name="Container">
      <Text7 />
      <Paragraph14 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[107.15px] relative shrink-0 w-[509.6px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph11 />
        <Container15 />
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[26.4px] left-0 top-0 w-[509.6px]" data-name="Paragraph">
      <p className="absolute font-['Cormorant_Garamond:Light',sans-serif] leading-[normal] left-0 not-italic text-[#111] text-[18px] top-[-0.6px] tracking-[-0.176px] whitespace-nowrap">Акустические системы</p>
    </div>
  );
}

function Text8() {
  return <div className="bg-[rgba(0,0,0,0.25)] rounded-[1.5px] shrink-0 size-[3px]" data-name="Text" />;
}

function Paragraph16() {
  return (
    <div className="h-[17.65px] relative shrink-0 w-[180.1px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[17.664px] left-0 text-[12px] text-[rgba(0,0,0,0.5)] top-[-0.6px] whitespace-nowrap">модульные акустические потолки</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[17.65px] items-center left-0 top-[32.4px] w-[509.6px]" data-name="Container">
      <Text8 />
      <Paragraph16 />
    </div>
  );
}

function Text9() {
  return <div className="bg-[rgba(0,0,0,0.25)] rounded-[1.5px] shrink-0 size-[3px]" data-name="Text" />;
}

function Paragraph17() {
  return (
    <div className="h-[17.65px] relative shrink-0 w-[118.463px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[17.664px] left-0 text-[12px] text-[rgba(0,0,0,0.5)] top-[-0.6px] whitespace-nowrap">акустические острова</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[17.65px] items-center left-0 top-[53.05px] w-[509.6px]" data-name="Container">
      <Text9 />
      <Paragraph17 />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[86.5px] relative shrink-0 w-[509.6px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph15 />
        <Container19 />
        <Container20 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[217.65px] items-start relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container18 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[302.85px] items-start left-0 pb-[0.8px] pr-[40px] pt-[28px] top-[0.8px] w-[549.6px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Paragraph10 />
      <Container13 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[14.4px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Raleway:SemiBold',sans-serif] font-semibold leading-[14.4px] left-0 text-[12px] text-[rgba(0,0,0,0.35)] top-[-0.4px] tracking-[1.152px] uppercase whitespace-nowrap">Коммерческие напольные покрытия</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="absolute h-[26.4px] left-0 top-0 w-[509.6px]" data-name="Paragraph">
      <p className="absolute font-['Cormorant_Garamond:Light',sans-serif] leading-[normal] left-0 not-italic text-[#111] text-[18px] top-[-0.6px] tracking-[-0.176px] whitespace-nowrap">Линолеум</p>
    </div>
  );
}

function Text10() {
  return <div className="bg-[rgba(0,0,0,0.25)] rounded-[1.5px] shrink-0 size-[3px]" data-name="Text" />;
}

function Paragraph20() {
  return (
    <div className="h-[17.65px] relative shrink-0 w-[128.938px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[17.664px] left-0 text-[12px] text-[rgba(0,0,0,0.5)] top-[-0.6px] whitespace-nowrap">гетерогенный линолеум</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[17.65px] items-center left-0 top-[32.4px] w-[509.6px]" data-name="Container">
      <Text10 />
      <Paragraph20 />
    </div>
  );
}

function Text11() {
  return <div className="bg-[rgba(0,0,0,0.25)] rounded-[1.5px] shrink-0 size-[3px]" data-name="Text" />;
}

function Paragraph21() {
  return (
    <div className="h-[17.65px] relative shrink-0 w-[118.2px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[17.664px] left-0 text-[12px] text-[rgba(0,0,0,0.5)] top-[-0.6px] whitespace-nowrap">гомогенный линолеум</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[17.65px] items-center left-0 top-[53.05px] w-[509.6px]" data-name="Container">
      <Text11 />
      <Paragraph21 />
    </div>
  );
}

function Text12() {
  return <div className="bg-[rgba(0,0,0,0.25)] rounded-[1.5px] shrink-0 size-[3px]" data-name="Text" />;
}

function Paragraph22() {
  return (
    <div className="h-[17.65px] relative shrink-0 w-[123.575px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[17.664px] left-0 text-[12px] text-[rgba(0,0,0,0.5)] top-[-0.6px] whitespace-nowrap">натуральный линолеум</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[17.65px] items-center left-0 top-[73.7px] w-[509.6px]" data-name="Container">
      <Text12 />
      <Paragraph22 />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[107.15px] relative shrink-0 w-[509.6px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph19 />
        <Container24 />
        <Container25 />
        <Container26 />
      </div>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="absolute h-[26.4px] left-0 top-0 w-[509.6px]" data-name="Paragraph">
      <p className="absolute font-['Cormorant_Garamond:Light',sans-serif] leading-[normal] left-0 not-italic text-[#111] text-[18px] top-[-0.6px] tracking-[-0.176px] whitespace-nowrap">Специальные покрытия</p>
    </div>
  );
}

function Text13() {
  return <div className="bg-[rgba(0,0,0,0.25)] rounded-[1.5px] shrink-0 size-[3px]" data-name="Text" />;
}

function Paragraph24() {
  return (
    <div className="h-[17.65px] relative shrink-0 w-[72.45px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[17.664px] left-0 text-[12px] text-[rgba(0,0,0,0.5)] top-[-0.6px] whitespace-nowrap">LVT покрытия</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[17.65px] items-center left-0 top-[32.4px] w-[509.6px]" data-name="Container">
      <Text13 />
      <Paragraph24 />
    </div>
  );
}

function Text14() {
  return <div className="bg-[rgba(0,0,0,0.25)] rounded-[1.5px] shrink-0 size-[3px]" data-name="Text" />;
}

function Paragraph25() {
  return (
    <div className="h-[17.65px] relative shrink-0 w-[117.088px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[17.664px] left-0 text-[12px] text-[rgba(0,0,0,0.5)] top-[-0.6px] whitespace-nowrap">спортивные покрытия</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[17.65px] items-center left-0 top-[53.05px] w-[509.6px]" data-name="Container">
      <Text14 />
      <Paragraph25 />
    </div>
  );
}

function Text15() {
  return <div className="bg-[rgba(0,0,0,0.25)] rounded-[1.5px] shrink-0 size-[3px]" data-name="Text" />;
}

function Paragraph26() {
  return (
    <div className="h-[17.65px] relative shrink-0 w-[206.775px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[17.664px] left-0 text-[12px] text-[rgba(0,0,0,0.5)] top-[-0.6px] whitespace-nowrap">токопроводящие и токорассеивающие</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[17.65px] items-center left-0 top-[73.7px] w-[509.6px]" data-name="Container">
      <Text15 />
      <Paragraph26 />
    </div>
  );
}

function Text16() {
  return <div className="bg-[rgba(0,0,0,0.25)] rounded-[1.5px] shrink-0 size-[3px]" data-name="Text" />;
}

function Paragraph27() {
  return (
    <div className="h-[17.65px] relative shrink-0 w-[159.85px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[17.664px] left-0 text-[12px] text-[rgba(0,0,0,0.5)] top-[-0.6px] whitespace-nowrap">противоскользящие покрытия</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[17.65px] items-center left-0 top-[94.35px] w-[509.6px]" data-name="Container">
      <Text16 />
      <Paragraph27 />
    </div>
  );
}

function Text17() {
  return <div className="bg-[rgba(0,0,0,0.25)] rounded-[1.5px] shrink-0 size-[3px]" data-name="Text" />;
}

function Paragraph28() {
  return (
    <div className="h-[17.65px] relative shrink-0 w-[127.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[17.664px] left-0 text-[12px] text-[rgba(0,0,0,0.5)] top-[-0.6px] whitespace-nowrap">акустический линолеум</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[17.65px] items-center left-0 top-[115px] w-[509.6px]" data-name="Container">
      <Text17 />
      <Paragraph28 />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[148.45px] relative shrink-0 w-[509.6px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph23 />
        <Container28 />
        <Container29 />
        <Container30 />
        <Container31 />
        <Container32 />
      </div>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="absolute h-[26.4px] left-0 top-0 w-[509.6px]" data-name="Paragraph">
      <p className="absolute font-['Cormorant_Garamond:Light',sans-serif] leading-[normal] left-0 not-italic text-[#111] text-[18px] top-[-0.6px] tracking-[-0.176px] whitespace-nowrap">Системы входных зон</p>
    </div>
  );
}

function Text18() {
  return <div className="bg-[rgba(0,0,0,0.25)] rounded-[1.5px] shrink-0 size-[3px]" data-name="Text" />;
}

function Paragraph30() {
  return (
    <div className="h-[17.65px] relative shrink-0 w-[177.012px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[17.664px] left-0 text-[12px] text-[rgba(0,0,0,0.5)] top-[-0.6px] whitespace-nowrap">грязезащитные входные системы</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[17.65px] items-center left-0 top-[32.4px] w-[509.6px]" data-name="Container">
      <Text18 />
      <Paragraph30 />
    </div>
  );
}

function Text19() {
  return <div className="bg-[rgba(0,0,0,0.25)] rounded-[1.5px] shrink-0 size-[3px]" data-name="Text" />;
}

function Paragraph31() {
  return (
    <div className="h-[17.65px] relative shrink-0 w-[135.663px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[17.664px] left-0 text-[12px] text-[rgba(0,0,0,0.5)] top-[-0.6px] whitespace-nowrap">иглопробивной ковролин</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[17.65px] items-center left-0 top-[53.05px] w-[509.6px]" data-name="Container">
      <Text19 />
      <Paragraph31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[86.5px] relative shrink-0 w-[509.6px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph29 />
        <Container34 />
        <Container35 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[378.1px] items-start relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Container27 />
      <Container33 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[463.3px] items-start left-[549.6px] pb-[0.8px] pl-[40px] pt-[28px] top-[0.8px] w-[549.6px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Paragraph18 />
      <Container22 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[464.1px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.08)] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <Container12 />
      <Container21 />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] pt-[40px] relative shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.08)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Container11 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1200px]">
      <Frame44 />
      <Section1 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <p className="font-['Raleway:SemiBold',sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[12px] text-[rgba(0,0,0,0.38)] tracking-[1px] uppercase w-[min-content]">Наша команда</p>
      <p className="font-['Cormorant_Garamond:Light',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#111] text-[36px] whitespace-nowrap">Специалисты, которые решают задачи</p>
    </div>
  );
}

function Img16() {
  return (
    <div className="h-[368px] relative shrink-0 w-full" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg4} />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 text-[#111] w-full">
      <p className="font-['Cormorant_Garamond:Medium',sans-serif] not-italic relative shrink-0 text-[20px] w-full">Алексей Морозов</p>
      <p className="font-['Raleway:Light',sans-serif] font-light relative shrink-0 text-[12px] w-full">Руководитель проекта</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Raleway:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#111] text-[12px] w-full">Morozov@interio.ru</p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Img16 />
      <Frame49 />
      <Frame50 />
    </div>
  );
}

function Img17() {
  return (
    <div className="h-[368px] relative shrink-0 w-full" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg5} />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 text-[#111] w-full">
      <p className="font-['Cormorant_Garamond:Medium',sans-serif] not-italic relative shrink-0 text-[20px] w-full">Елена Соколова</p>
      <p className="font-['Raleway:Light',sans-serif] font-light relative shrink-0 text-[12px] w-full">Бухгалтер</p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Raleway:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#111] text-[12px] w-full">Morozov@interio.ru</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Img17 />
      <Frame52 />
      <Frame53 />
    </div>
  );
}

function Img18() {
  return (
    <div className="h-[368px] relative shrink-0 w-full" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg6} />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 text-[#111] w-full">
      <p className="font-['Cormorant_Garamond:Medium',sans-serif] not-italic relative shrink-0 text-[20px] w-full">Дмитрий Кузнецов</p>
      <p className="font-['Raleway:Light',sans-serif] font-light relative shrink-0 text-[12px] w-full">{`Начальник отдела `}</p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Raleway:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#111] text-[12px] w-full">Morozov@interio.ru</p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Img18 />
      <Frame55 />
      <Frame56 />
    </div>
  );
}

function Img19() {
  return (
    <div className="h-[368px] relative shrink-0 w-full" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg7} />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 text-[#111] w-full">
      <p className="font-['Cormorant_Garamond:Medium',sans-serif] not-italic relative shrink-0 text-[20px] w-full">Жанна Климова</p>
      <p className="font-['Raleway:Light',sans-serif] font-light relative shrink-0 text-[12px] w-full">Менеджер</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Raleway:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#111] text-[12px] w-full">Morozov@interio.ru</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Img19 />
      <Frame58 />
      <Frame59 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pt-[20px] relative shrink-0 w-full">
      <Frame48 />
      <Frame51 />
      <Frame54 />
      <Frame57 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[40px] relative w-full">
        <Frame46 />
        <Frame47 />
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[128px]">
      <p className="font-['Raleway:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.38)] tracking-[1px] uppercase w-full">Оставить заявку</p>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[15.6px] relative shrink-0 w-[7.8px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Raleway:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[15.6px] left-0 text-[10.4px] text-white top-[0.6px] whitespace-nowrap">✓</p>
      </div>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[18.438px] relative shrink-0 w-[183.95px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[normal] left-0 text-[14px] text-[rgba(255,255,255,0.94)] top-[0.4px] whitespace-nowrap">Анализ проектной документации</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[18.438px] relative shrink-0 w-[449.6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Text20 />
        <Paragraph32 />
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[15.6px] relative shrink-0 w-[7.8px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Raleway:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[15.6px] left-0 text-[10.4px] text-white top-[0.6px] whitespace-nowrap">✓</p>
      </div>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[18.438px] relative shrink-0 w-[176.563px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[normal] left-0 text-[14px] text-[rgba(255,255,255,0.94)] top-[0.4px] whitespace-nowrap">Подбор материалов под объект</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[18.438px] relative shrink-0 w-[449.6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Text21 />
        <Paragraph33 />
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[15.6px] relative shrink-0 w-[7.8px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Raleway:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[15.6px] left-0 text-[10.4px] text-white top-[0.6px] whitespace-nowrap">✓</p>
      </div>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[18.438px] relative shrink-0 w-[227.863px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[normal] left-0 text-[14px] text-[rgba(255,255,255,0.94)] top-[0.4px] whitespace-nowrap">Консультация технического специалиста</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] h-full items-center relative">
        <Text22 />
        <Paragraph34 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(248,248,247,0.2)] content-stretch flex flex-col gap-[12px] h-[115px] items-start left-[calc(50%-95.8px)] pl-[22px] py-[18px] rounded-[10px] top-[calc(50%+89.7px)] w-[350px]" data-name="Container">
      <Container37 />
      <Container38 />
      <Container39 />
    </div>
  );
}

function Image() {
  return (
    <div className="absolute h-[729.6px] left-0 overflow-clip top-0 w-[589.6px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      <Container36 />
    </div>
  );
}

function App10() {
  return (
    <div className="flex-[1_0_0] h-[536px] min-h-px min-w-px overflow-clip relative" data-name="App">
      <Image />
    </div>
  );
}

function Frame66() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[16px] relative w-full">
          <p className="font-['Raleway:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#8e8e8e] text-[12px] whitespace-nowrap">Иван Иванов</p>
        </div>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Raleway:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#111] text-[12px] w-full">Имя</p>
      <Frame66 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[16px] relative w-full">
          <p className="font-['Raleway:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#8e8e8e] text-[12px] whitespace-nowrap">Иван Иванов</p>
        </div>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Raleway:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#111] text-[12px] w-full">Телефон</p>
      <Frame68 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="bg-white h-[126px] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-start px-[10px] py-[16px] relative size-full">
        <p className="font-['Raleway:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#8e8e8e] text-[12px] whitespace-nowrap">Тип объкта, площадь, сроки...</p>
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Raleway:Light',sans-serif] font-light leading-[0] relative shrink-0 text-[#111] text-[12px] w-full whitespace-pre-wrap">
        <span className="leading-[normal]">{`Комментарий   `}</span>
        <span className="leading-[normal] text-[#8e8e8e]">*</span>
        <span className="font-['Raleway:Light_Italic',sans-serif] italic leading-[normal] text-[#8e8e8e]">необязательно</span>
      </p>
      <Frame70 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame65 />
      <Frame67 />
      <Frame69 />
    </div>
  );
}

function ArrowUpRight1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ArrowUpRight">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ArrowUpRight">
          <path d={svgPaths.p75bbac0} id="Vector" stroke="var(--stroke-0, #F2F2F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <g id="Vector_2">
            <path d={svgPaths.p173e4d00} fill="var(--fill-0, #F2F2F2)" />
            <path d={svgPaths.p3908d100} stroke="var(--stroke-0, #F2F2F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame71() {
  return (
    <div className="bg-[#111] h-[60px] relative rounded-[100px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center p-[10px] relative size-full">
          <ArrowUpRight1 />
          <p className="font-['Raleway:Medium',sans-serif] font-medium leading-[18.72px] relative shrink-0 text-[#fcf8f8] text-[16px] text-center whitespace-nowrap">ОТПРАВИТЬ ЗАЯВКУ</p>
        </div>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative">
      <p className="font-['Cormorant_Garamond:Light',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#111] text-[36px] w-[413px]">Получите расчет материалов для вашего проекта</p>
      <Frame64 />
      <Frame71 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex gap-[32px] items-end relative shrink-0 w-full">
      <App10 />
      <Frame63 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[20px] items-start p-[40px] relative shrink-0 w-[1280px]">
      <Frame61 />
      <Frame62 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[189.188px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Cormorant_Garamond:Light',sans-serif] leading-[189.193px] left-0 not-italic text-[#4e4e4e] text-[214.992px] top-[-1px] tracking-[-8.5997px] uppercase whitespace-nowrap">ИНТЕРИО</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[227.25px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[0.8px] pt-[48px] px-[24px] relative size-full">
        <Heading />
      </div>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="h-[14.887px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[14.88px] left-0 text-[9.92px] text-[rgba(255,255,255,0.35)] top-[-0.2px] tracking-[0.992px] uppercase whitespace-nowrap">Готовы к сотрудничеству?</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="font-['Cormorant_Garamond:Light',sans-serif] h-[47px] leading-[45.984px] not-italic relative shrink-0 text-[41.804px] text-white tracking-[-1.2541px] w-full whitespace-nowrap" data-name="Heading 3">
      <p className="absolute left-0 top-[0.6px]">Давайте начнём</p>
      <p className="absolute left-[268px] top-[-0.14px]">работать вместе↗</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[78px] items-start relative shrink-0 w-[538px]" data-name="Container">
      <Paragraph35 />
      <Heading1 />
    </div>
  );
}

function ArrowUpRight2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ArrowUpRight">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ArrowUpRight">
          <path d={svgPaths.p75bbac0} id="Vector" stroke="var(--stroke-0, #403D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <g id="Vector_2">
            <path d={svgPaths.p173e4d00} fill="var(--fill-0, #403D3A)" />
            <path d={svgPaths.p3908d100} stroke="var(--stroke-0, #403D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame73() {
  return (
    <div className="bg-white h-[48px] relative rounded-[100px] shrink-0 w-[233px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center p-[10px] relative size-full">
        <ArrowUpRight2 />
        <p className="font-['Raleway:Medium',sans-serif] font-medium leading-[18.72px] relative shrink-0 text-[#2b2a2a] text-[16px] text-center whitespace-nowrap">ОСТАВИТЬ ЗАЯВКУ</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col h-[76.313px] items-end justify-end relative shrink-0 w-[537.6px]" data-name="Container">
      <Frame73 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[40px] top-[31.75px] w-[1099.2px]">
      <Container42 />
      <Container43 />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[137px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Frame72 />
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="absolute h-[14.4px] left-[40px] top-[16px] w-[185.288px]" data-name="Paragraph">
      <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[14.4px] left-0 text-[9.6px] text-[rgba(255,255,255,0.25)] top-[-0.4px] whitespace-nowrap">© 2025 ИНТЕРИО · Все права защищены</p>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[14.4px] relative shrink-0 w-[36.713px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Raleway:Medium',sans-serif] font-medium leading-[14.4px] left-[18.5px] text-[9.6px] text-[rgba(255,255,255,0.3)] text-center top-[-0.4px] whitespace-nowrap">Каталог</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[14.4px] relative shrink-0 w-[25.913px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Raleway:Medium',sans-serif] font-medium leading-[14.4px] left-[13px] text-[9.6px] text-[rgba(255,255,255,0.3)] text-center top-[-0.4px] whitespace-nowrap">О нас</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[14.4px] relative shrink-0 w-[43.638px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Raleway:Medium',sans-serif] font-medium leading-[14.4px] left-[22px] text-[9.6px] text-[rgba(255,255,255,0.3)] text-center top-[-0.4px] whitespace-nowrap">Контакты</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex gap-[24px] h-[14.4px] items-start left-[532.4px] top-[16px] w-[154.262px]" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[14.4px] left-[993.78px] top-[16px] w-[145.413px]" data-name="Link">
      <p className="absolute font-['Raleway:Regular',sans-serif] font-normal leading-[14.4px] left-0 text-[9.6px] text-[rgba(255,255,255,0.2)] top-[-0.4px] whitespace-nowrap">Политика конфиденциальности</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[46.4px] relative shrink-0 w-full" data-name="Container">
      <Paragraph36 />
      <Container45 />
      <Link />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#111] content-stretch flex flex-col h-[475px] items-center justify-end overflow-clip relative shrink-0 w-full" data-name="Footer">
      <Container40 />
      <Container41 />
      <Container44 />
    </div>
  );
}

export default function MacBookAir() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-center relative size-full" data-name="MacBook Air - 1">
      <Frame1 />
      <Frame29 />
      <Frame14 />
      <Frame38 />
      <Frame22 />
      <Frame24 />
      <Frame43 />
      <Frame45 />
      <div className="bg-[#d5d5d5] h-px shrink-0 w-[1200px]" />
      <Frame60 />
      <div className="bg-[#d5d5d5] h-px shrink-0 w-[1200px]" />
      <Footer />
    </div>
  );
}