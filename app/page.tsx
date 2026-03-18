"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen bg-stone-50 pb-24">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="舞台のイメージ"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center text-stone-50 px-6">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium tracking-widest mb-6 drop-shadow-lg">
            briller
          </h1>
          <p className="font-sans text-sm md:text-base tracking-[0.3em] font-light drop-shadow-md">
            本物を知る、洗練されたミュージカルスクール
          </p>
        </div>
      </section>

      {/* About & Lessons Section */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-2xl md:text-3xl font-medium text-stone-800 mb-10 tracking-wider">
          舞台に立つ喜び、表現する楽しさ。
        </h2>
        <div className="text-stone-600 font-sans leading-loose space-y-6 text-sm md:text-base mb-16">
          <p>
            briller（ブリエ）は、第一線で活躍実績のある講師が直接指導を行う、<br className="hidden md:block" />
            格式と温かみを兼ね備えたミュージカルスクールです。
          </p>
          <p>
            ただ技術を磨くだけではなく、豊かな感性と表現力を育み、<br className="hidden md:block" />
            生徒一人ひとりが自らの力で「輝く（briller）」ためのサポートを行います。
          </p>
          <p>
            本物志向の環境で、確かな基礎と舞台の魔法を体験してください。
          </p>
        </div>

        {/* Lesson CTA Block */}
        <div className="py-12 md:py-16 inline-block max-w-2xl w-full text-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-10 rounded-full overflow-hidden border-2 border-stone-200">
            <Image 
              src="/images/practice.jpg" 
              alt="レッスンの様子" 
              fill 
              className="object-cover"
            />
          </div>
          <h3 className="font-serif text-xl font-medium text-stone-800 tracking-wider mb-6">レッスンについて</h3>
          <p className="font-sans text-stone-500 text-sm mb-10 leading-relaxed">
            初めての方向けのキッズクラスから、プロを目指す実践的な指導まで。<br/>
            場所、費用、各クラスのご案内をまとめています。
          </p>
          <Link 
            href="/lessons"
            className="inline-flex items-center gap-3 bg-[#2d2926] text-white px-10 py-4 rounded-sm hover:bg-black transition-colors font-sans text-sm tracking-widest"
          >
            レッスン詳細を見る <span className="text-lg leading-none mb-[2px]">→</span>
          </Link>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-24 bg-stone-200/50 px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="w-full md:w-1/2 relative aspect-3/4 rounded-sm overflow-hidden">
            <Image
              src="/images/instructor.jpg"
              alt="増本 藍"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="font-serif text-stone-500 text-sm tracking-widest mb-2 uppercase">主宰 / 講師</h3>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-stone-800 mb-6 tracking-wide">
              増本 藍 <span className="text-xl text-stone-500 ml-2 font-light">Ai Masumoto</span>
            </h2>
            <div className="text-stone-600 font-sans leading-loose text-sm md:text-base space-y-4 mb-8">
              <p>
                「本物の舞台芸術に触れる経験を通じて、表現する喜びを深く知ってほしい」
              </p>
              <p>
                劇団四季に17年間在籍し、『キャッツ』や『クレイジー・フォー・ユー』など数多くの名作に出演。退団後は福岡を拠点に後進の育成に尽力。
              </p>
            </div>
            <Link 
              href="/instructor"
              className="inline-flex items-center gap-3 text-stone-800 font-sans text-sm tracking-widest uppercase hover:text-stone-500 transition-colors border-b border-stone-800 hover:border-stone-500 pb-1"
            >
              過去の詳しい出演歴・プロフィールへ <span className="text-lg leading-none mb-[2px]">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Practice Scenery Section (Horizontal Scroll) */}
      <section className="py-24 pl-6 md:pl-12 lg:pl-24 overflow-hidden border-b border-stone-200 border-dashed">
        <h2 className="font-serif text-2xl md:text-3xl font-medium text-stone-800 mb-4 tracking-wider">
          練習風景
        </h2>
        <p className="font-sans text-stone-500 text-sm mb-12 tracking-wide">
          日々の努力が、明日の輝きに。スクール生たちの真剣で楽しげなレッスンの様子です。
        </p>
        <div className="flex overflow-x-auto gap-6 sm:gap-8 pb-8 pr-6 md:pr-12 lg:pr-24 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {[
            { tag: "キッズクラス", title: "基礎発声とリズム遊び", img: "/images/practice.jpg" },
            { tag: "一般クラス", title: "グループでの歌唱指導", img: "/images/practice2.jpg" },
            { tag: "特別レッスン", title: "プロ向けオーディション対策", img: "/images/practice.jpg" },
            { tag: "キッズクラス", title: "はじめてのダンスポーズ", img: "/images/practice2.jpg" }
          ].map((scene, i) => (
            <div 
              key={i} 
              className="min-w-[280px] sm:min-w-[320px] snap-center shrink-0 group cursor-pointer"
              onClick={() => setSelectedImage(scene.img)}
            >
              <div className="relative aspect-4/3 w-full mb-6 overflow-hidden rounded-sm transition-transform duration-500 group-hover:opacity-90">
                <Image
                  src={scene.img}
                  alt={scene.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="text-stone-500 text-xs tracking-widest font-sans mb-1">{scene.tag}</div>
              <h3 className="font-serif text-stone-800 text-base md:text-lg">{scene.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Performances Section (Asymmetrical Grid Gallery) */}
      <section className="py-24 bg-stone-900 text-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="font-sans text-stone-400 text-xs tracking-[0.2em] mb-2 uppercase">
                Gallery
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-wider mb-2">
                出演記録・公演実績
              </h2>
            </div>
            <p className="font-sans text-stone-400 text-sm tracking-wide max-w-md leading-relaxed border-l border-stone-700 pl-4">
              スクール生たちが輝く瞬間。<br/>
              これまでに開催した発表会や、参加したイベントの記憶を切り取りました。
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 auto-rows-[150px] md:auto-rows-[200px]">
            {[
              { year: "2025", title: "春の特別公演", img: "/images/poster.jpg", span: "col-span-2 row-span-2" },
              { year: "2024", title: "Winter Dance", img: "/images/poster.jpg", span: "col-span-1 row-span-1" },
              { year: "2024", title: "Autumn Festival", img: "/images/poster.jpg", span: "col-span-1 row-span-1" },
              { year: "2023", title: "The Shining Stars", img: "/images/practice.jpg", span: "col-span-2 md:col-span-1 row-span-2" },
              { year: "2023", title: "Summer Concert", img: "/images/poster.jpg", span: "col-span-1 row-span-1" },
              { year: "2022", title: "Melody of Dreams", img: "/images/practice.jpg", span: "col-span-2 md:col-span-2 lg:col-span-3 row-span-1" },
              { year: "2022", title: "First Step", img: "/images/poster.jpg", span: "col-span-1 row-span-1" },
              { year: "2021", title: "Overture", img: "/images/poster.jpg", span: "col-span-1 lg:col-span-2 row-span-1" },
              { year: "2020", title: "Studio Live", img: "/images/practice.jpg", span: "col-span-1 row-span-1" },
              { year: "2019", title: "プレ公演", img: "/images/poster.jpg", span: "col-span-1 row-span-1" }
            ].map((perf, i) => (
              <div 
                key={i} 
                className={`relative group cursor-pointer overflow-hidden rounded-sm bg-stone-800 ${perf.span}`}
                onClick={() => setSelectedImage(perf.img)}
              >
                <Image
                  src={perf.img}
                  alt={perf.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 p-4 md:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-stone-300 text-xs tracking-[0.2em] font-sans mb-1">{perf.year}</p>
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/70 p-4 sm:p-8 backdrop-blur-xs transition-all duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-stone-300 transition-colors bg-black/40 rounded-full p-2"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={28} />
          </button>
          <div 
            className="relative w-[85vw] md:w-[80vw] h-[80vh] max-w-6xl shadow-2xl animate-in fade-in zoom-in-[0.98] duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="拡大画像"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* Future Events CTA */}
      <section className="bg-stone-800 text-center py-24 px-6">
        <h2 className="font-serif text-2xl md:text-3xl font-medium text-stone-100 mb-6 tracking-wider">
          舞台で輝く、次の主役たち。
        </h2>
        <p className="text-stone-400 font-sans mb-10 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          まもなく開催される公開レッスンやコンサートなどをご紹介します。<br/>
          生でしか味わえない感動を、ぜひ劇場で体感してください。
        </p>
        <Link 
          href="/events"
          className="inline-flex items-center gap-4 bg-stone-100 text-stone-900 border border-stone-100 px-8 py-4 rounded-sm hover:bg-stone-300 transition-colors font-sans text-sm tracking-widest uppercase"
        >
          今後のイベント・出演予定 <span className="text-lg leading-none mb-[2px]">→</span>
        </Link>
      </section>

      {/* Footer / Official LINE Contact */}
      <footer className="py-24 px-6 text-center border-t border-stone-200">
        <h2 className="font-serif text-xl md:text-2xl font-medium text-stone-800 mb-6 tracking-wider">
          お問い合わせ・体験レッスン録
        </h2>
        <p className="text-stone-500 text-sm mb-10 font-sans max-w-lg mx-auto leading-relaxed">
          スクールに関する詳細なご案内や、体験レッスンのお申し込みは<br className="hidden md:block"/>公式LINEにて受け付けております。<br/>
          どんな些細なことでも、お気軽にご相談ください。
        </p>
        <a 
          href="#"
          className="inline-flex items-center justify-center gap-3 bg-[#06C755] text-white px-8 py-4 rounded-full hover:bg-[#05b04b] transition-colors font-sans font-medium tracking-wide w-full max-w-sm mx-auto"
        >
          <MessageCircle size={20} className="fill-white" />
          公式LINEで相談する
        </a>
      </footer>
    </div>
  );
}
