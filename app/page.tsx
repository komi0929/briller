"use client";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

const LineIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .348-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .349-.281.63-.63.63h-2.386a.63.63 0 0 1-.63-.63V8.108a.63.63 0 0 1 .63-.63h2.386c.349 0 .63.282.63.63 0 .349-.281.631-.63.631H17.61v1.125h1.755zm-3.855 3.016a.63.63 0 0 1-.63.63.629.629 0 0 1-.51-.262l-2.397-3.282v2.913a.63.63 0 0 1-1.26 0V8.108a.63.63 0 0 1 .63-.63c.2 0 .385.095.51.262l2.397 3.282V8.108a.63.63 0 0 1 1.26 0v4.771zm-5.741 0a.63.63 0 0 1-1.26 0V8.108a.63.63 0 0 1 1.26 0v4.771zm-2.462.63H4.921a.63.63 0 0 1-.63-.63V8.108a.63.63 0 0 1 1.261 0v4.14h1.756c.348 0 .629.283.629.631 0 .348-.281.63-.629.63zM24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.084.923.258 1.058.593.121.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967C23.309 14.09 24 12.315 24 10.314z" />
  </svg>
);
import { useState, useEffect, useRef, useCallback } from "react";

// Scroll-triggered fade-in hook
function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function FadeUp({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useFadeUp();
  const delayClass = delay === 1 ? "fade-up-delay-1" : delay === 2 ? "fade-up-delay-2" : delay === 3 ? "fade-up-delay-3" : "";
  return <div ref={ref} className={`fade-up ${delayClass} ${className}`}>{children}</div>;
}

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<{ img: string; title?: string; year?: string } | null>(null);
  const [showNav, setShowNav] = useState(false);

  const handleScroll = useCallback(() => {
    setShowNav(window.scrollY > window.innerHeight * 0.7);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedImage]);

  return (
    <div className="relative min-h-screen bg-stone-50">

      {/* Sticky Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${showNav ? "nav-visible" : "nav-hidden"}`}>
        <div className="bg-stone-50/90 backdrop-blur-md border-b border-stone-200/60">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-14">
            <Link href="/" className="font-serif text-lg text-stone-800 tracking-widest">briller</Link>
            <div className="flex items-center gap-6 md:gap-8">
              <Link href="/lessons" className="text-stone-500 hover:text-stone-800 transition-colors font-sans text-xs tracking-[0.15em] uppercase hidden sm:block">Lessons</Link>
              <Link href="/instructor" className="text-stone-500 hover:text-stone-800 transition-colors font-sans text-xs tracking-[0.15em] uppercase hidden sm:block">Instructor</Link>
              <Link href="/events" className="text-stone-500 hover:text-stone-800 transition-colors font-sans text-xs tracking-[0.15em] uppercase hidden sm:block">Events</Link>
              <a href="#" className="bg-[#06C755] text-white px-4 py-1.5 rounded-full font-sans text-xs tracking-wider flex items-center gap-1.5 hover:opacity-90 transition-opacity">
                <LineIcon size={14} /> LINE
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section — Cinematic Entrance */}
      <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="舞台のイメージ"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-stone-900/50 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center text-stone-50 px-6">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium hero-title">
            briller
          </h1>
          <p className="font-sans text-xs md:text-sm tracking-[0.4em] font-light mt-8 hero-subtitle uppercase">
            <span className="hidden md:inline">Musical School — </span>本物を知る。子どもが輝くミュージカルスクール。
          </p>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 hero-subtitle">
          <span className="text-stone-300 font-sans text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-8 bg-stone-300/60 animate-pulse" />
        </div>
      </section>

      {/* About & Lessons Section */}
      <section className="py-32 px-6 md:px-12 max-w-3xl mx-auto text-center">
        <FadeUp>
          <p className="font-sans text-stone-400 text-xs tracking-[0.25em] mb-6 uppercase">About</p>
          <h2 className="font-serif text-2xl md:text-4xl font-medium text-stone-800 mb-12 tracking-wider leading-relaxed">
            舞台に立つ喜び、<br className="md:hidden" />表現する楽しさ。
          </h2>
        </FadeUp>
        <FadeUp delay={1}>
          <div className="text-stone-500 font-sans leading-[2.2] space-y-8 text-sm md:text-base mb-20 max-w-xl mx-auto">
            <p>
              briller（ブリエ）は、第一線で活躍実績のある講師が直接指導を行う、<br className="hidden md:block" />
              格式と温かみを兼ね備えたミュージカルスクールです。
            </p>
            <p>
              ただ技術を磨くだけではなく、豊かな感性と表現力を育み、<br className="hidden md:block" />
              生徒一人ひとりが自らの力で「輝く（briller）」ためのサポートを行います。
            </p>
            <p className="text-stone-400 text-xs tracking-widest">
              ── 確かな基礎と舞台の魔法を、ここで。
            </p>
          </div>
        </FadeUp>

        {/* Lesson CTA Block */}
        <FadeUp delay={2}>
          <div className="py-12 md:py-16 inline-block max-w-2xl w-full text-center">
            <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto mb-10 rounded-full overflow-hidden border border-stone-200">
              <Image 
                src="/images/gallery/レッスン.jpg" 
                alt="レッスンの様子" 
                fill 
                className="object-cover object-[center_20%]"
              />
            </div>
            <h3 className="font-serif text-xl md:text-2xl font-medium text-stone-800 tracking-wider mb-4">レッスンについて</h3>
            <p className="font-sans text-stone-400 text-xs tracking-[0.15em] mb-3 uppercase">Lesson Details</p>
            <p className="font-sans text-stone-500 text-sm mb-10 leading-relaxed max-w-md mx-auto">
              小学生から始めるミュージカルスクール、初心者から舞台を目指す方まで、表現力と自信を育てるレッスンです。
            </p>
            <Link 
              href="/lessons"
              className="inline-flex items-center gap-4 border border-stone-800 text-stone-800 px-10 py-4 rounded-sm hover:bg-stone-800 hover:text-white transition-all duration-300 font-sans text-sm tracking-widest"
            >
              レッスン詳細を見る <span className="text-lg leading-none">→</span>
            </Link>
          </div>
        </FadeUp>
      </section>

      {/* Instructor Section */}
      <section className="py-32 bg-stone-100/60 px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <FadeUp className="w-full md:w-5/12">
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
              <Image
                src="/images/instructor.jpg"
                alt="増本 藍"
                fill
                className="object-cover"
              />
            </div>
          </FadeUp>
          <FadeUp delay={1} className="w-full md:w-7/12">
            <p className="font-sans text-stone-400 text-xs tracking-[0.2em] mb-3 uppercase">Instructor</p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-stone-800 mb-3 tracking-wide">
              増本 藍
            </h2>
            <p className="text-stone-400 font-sans text-sm tracking-widest uppercase mb-8">Ai Masumoto</p>
            <div className="text-stone-500 font-sans leading-[2.2] text-sm md:text-base space-y-6 mb-10">
              <p className="text-stone-700 font-serif text-base md:text-lg italic leading-relaxed border-l-2 border-stone-300 pl-6">
                「本物の舞台芸術に触れる経験を通じて、<br className="hidden md:block"/>表現する喜びを深く知ってほしい」
              </p>
              <p>
                劇団四季に17年間在籍し、『キャッツ』や『クレイジー・フォー・ユー』など数多くの名作に出演。退団後は福岡を拠点に後進の育成に尽力。
              </p>
            </div>
            <Link 
              href="/instructor"
              className="inline-flex items-center gap-3 text-stone-800 font-sans text-xs tracking-[0.15em] uppercase hover:text-stone-500 transition-colors border-b border-stone-300 hover:border-stone-500 pb-2"
            >
              過去の詳しい出演歴・プロフィールへ <span className="text-base leading-none">→</span>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Practice Scenery Section (Horizontal Scroll) */}
      <section className="py-32 pl-6 md:pl-12 lg:pl-24 overflow-hidden">
        <FadeUp>
          <p className="font-sans text-stone-400 text-xs tracking-[0.2em] mb-2 uppercase">Practice</p>
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-stone-800 mb-4 tracking-wider">
            練習風景
          </h2>
          <p className="font-sans text-stone-400 text-sm mb-16 tracking-wide max-w-lg leading-relaxed">
            日々の努力が、明日の輝きに。スクール生たちの真剣で楽しげなレッスンの様子です。
          </p>
        </FadeUp>
        <div className="flex overflow-x-auto gap-6 sm:gap-8 pb-8 pr-6 md:pr-12 lg:pr-24 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {[
            { tag: "キッズクラス", title: "基礎発声とリズム遊び", img: "/images/gallery/練習1.jpg" },
            { tag: "一般クラス", title: "グループでの歌唱指導", img: "/images/gallery/練習2.jpg" },
            { tag: "特別レッスン", title: "プロ向けオーディション対策", img: "/images/gallery/練習3.jpg" },
            { tag: "キッズクラス", title: "はじめてのダンスポーズ", img: "/images/gallery/練習1.jpg" }
          ].map((scene, i) => (
            <div 
              key={i} 
              className="min-w-[280px] sm:min-w-[340px] snap-center shrink-0 group cursor-pointer"
              onClick={() => setSelectedImage({ img: scene.img, title: scene.title })}
            >
              <div className="relative aspect-4/3 w-full mb-6 overflow-hidden rounded-sm">
                <Image
                  src={scene.img}
                  alt={scene.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 group-active:scale-105"
                />
              </div>
              <div className="text-stone-400 text-[10px] tracking-[0.2em] font-sans mb-2 uppercase">{scene.tag}</div>
              <h3 className="font-serif text-stone-800 text-base md:text-lg tracking-wide">{scene.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Performances Section (Asymmetrical Grid Gallery) */}
      <section className="py-32 bg-stone-900 text-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeUp>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div>
                <p className="font-sans text-stone-500 text-xs tracking-[0.2em] mb-3 uppercase">
                  Gallery
                </p>
                <h2 className="font-serif text-4xl md:text-6xl font-medium tracking-wider leading-tight">
                  出演記録・<br className="md:hidden"/>公演実績
                </h2>
              </div>
              <p className="font-sans text-stone-500 text-sm tracking-wide max-w-sm leading-[2] border-l border-stone-700 pl-6">
                スクール生たちが輝く瞬間。<br/>
                これまでに開催した発表会や、参加したイベントの記憶を切り取りました。
              </p>
            </div>
          </FadeUp>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 auto-rows-[140px] md:auto-rows-[250px] grid-flow-row-dense">
            {[
              { year: "2025", title: "春の特別公演", img: "/images/gallery/実績1_v2.jpg", span: "col-span-2 lg:col-span-2 row-span-2" },
              { year: "2024", title: "Winter Dance", img: "/images/gallery/実績2.jpg", span: "col-span-1 row-span-2" },
              { year: "2024", title: "Autumn Festival", img: "/images/gallery/実績3.jpg", span: "col-span-1 row-span-1" },
              { year: "2023", title: "The Shining Stars", img: "/images/gallery/実績4_v2.jpg", span: "col-span-1 md:col-span-2 lg:col-span-1 row-span-1" },
              { year: "2023", title: "Summer Concert", img: "/images/gallery/実績5.jpg", span: "col-span-2 lg:col-span-2 row-span-2" },
              { year: "2022", title: "Melody of Dreams", img: "/images/gallery/実績6.jpg", span: "col-span-1 lg:col-span-1 row-span-2" },
              { year: "2022", title: "First Step", img: "/images/gallery/実績8.jpg", span: "col-span-1 md:col-span-2 lg:col-span-1 row-span-1" },
              { year: "2021", title: "Overture", img: "/images/gallery/実績9.jpg", span: "col-span-1 row-span-1" },
              { year: "2020", title: "Studio Live", img: "/images/gallery/実績7.jpg", span: "col-span-2 md:col-span-3 lg:col-span-2 row-span-1" }
            ].map((perf, i) => (
              <div 
                key={i} 
                className={`relative group cursor-pointer overflow-hidden rounded-sm bg-stone-800 ${perf.span}`}
                onClick={() => setSelectedImage({ img: perf.img, title: perf.title, year: perf.year })}
              >
                <Image
                  src={perf.img}
                  alt={perf.title}
                  fill
                  className="object-cover transition-all duration-700 md:group-hover:scale-110 md:opacity-90 md:group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-linear-to-t from-stone-900/80 via-transparent to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 p-4 md:p-6 translate-y-0 md:translate-y-3 opacity-100 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500">
                  <p className="text-stone-400 text-[10px] tracking-[0.25em] font-sans mb-1 uppercase">{perf.year}</p>
                  <h3 className="font-serif text-stone-50 text-sm md:text-lg tracking-wide">{perf.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/80 p-4 sm:p-8 backdrop-blur-sm transition-all duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/80 hover:text-white transition-colors bg-black/30 backdrop-blur-sm rounded-full p-2.5 z-10"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={24} />
          </button>
          <div 
            className="relative w-[92vw] md:w-[80vw] h-[80vh] max-w-5xl flex flex-col justify-end overflow-hidden rounded-md"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.img}
              alt="拡大画像"
              fill
              className="object-contain z-0"
            />
            
            {(selectedImage.title || selectedImage.year) && (
              <div className="relative z-10 w-full bg-linear-to-t from-stone-900/90 via-stone-900/50 to-transparent pt-20 pb-8 px-6 text-center md:text-left">
                {selectedImage.year && (
                  <p className="text-stone-400 font-sans text-[10px] tracking-[0.25em] mb-2 uppercase">
                    {selectedImage.year}
                  </p>
                )}
                {selectedImage.title && (
                  <h3 className="font-serif text-xl md:text-2xl font-medium text-stone-50 tracking-wider">
                    {selectedImage.title}
                  </h3>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Future Events CTA */}
      <section className="bg-stone-800 text-center py-32 px-6">
        <FadeUp>
          <p className="font-sans text-stone-500 text-xs tracking-[0.2em] mb-4 uppercase">Upcoming</p>
          <h2 className="font-serif text-2xl md:text-4xl font-medium text-stone-100 mb-8 tracking-wider leading-relaxed">
            舞台で輝く、次の主役たち。
          </h2>
          <p className="text-stone-400 font-sans mb-12 text-sm md:text-base max-w-xl mx-auto leading-[2]">
            まもなく開催される公開レッスンやコンサートなどをご紹介します。<br/>
            生でしか味わえない感動を、ぜひ劇場で体感してください。
          </p>
          <Link 
            href="/events"
            className="inline-flex items-center gap-4 border border-stone-400 text-stone-200 px-10 py-4 rounded-sm hover:bg-stone-100 hover:text-stone-900 hover:border-stone-100 transition-all duration-300 font-sans text-sm tracking-widest uppercase"
          >
            今後のイベント・出演予定 <span className="text-lg leading-none">→</span>
          </Link>
        </FadeUp>
      </section>

      {/* Footer / Official LINE Contact */}
      <footer className="py-32 px-6 text-center bg-stone-50">
        <FadeUp>
          <p className="font-sans text-stone-400 text-xs tracking-[0.2em] mb-4 uppercase">Contact</p>
          <h2 className="font-serif text-xl md:text-3xl font-medium text-stone-800 mb-6 tracking-wider">
            お問い合わせ・体験レッスン
          </h2>
          <p className="text-stone-400 text-sm mb-12 font-sans max-w-md mx-auto leading-[2]">
            スクールに関する詳細なご案内や、体験レッスンのお申し込みは<br className="hidden md:block"/>公式LINEにて受け付けております。<br/>
            どんな些細なことでも、お気軽にご相談ください。
          </p>
          <a 
            href="#"
            className="inline-flex items-center justify-center gap-3 bg-[#06C755] text-white px-10 py-4 rounded-full hover:opacity-90 transition-opacity font-sans font-medium tracking-wide text-sm"
          >
            <LineIcon size={20} />
            公式LINEで相談する
          </a>
        </FadeUp>
        <div className="mt-20 pt-8 border-t border-stone-200">
          <p className="text-stone-300 font-sans text-[10px] tracking-[0.2em] uppercase">
            © 2026 Musical School briller. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
