import Image from "next/image";
import Link from "next/link";
import { MoveRight, MapPin, MessageCircle } from "lucide-react";

export default function Home() {
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
        <div className="bg-white border border-stone-200 p-8 md:p-12 rounded-sm shadow-sm inline-block max-w-2xl w-full">
          <MapPin className="mx-auto text-stone-400 mb-4" size={28} />
          <h3 className="font-serif text-xl font-medium text-stone-800 tracking-wider mb-4">レッスンについて</h3>
          <p className="font-sans text-stone-500 text-sm mb-8">
            初めての方向けのキッズクラスから、プロを目指す実践的な指導まで。<br/>
            場所、費用、各クラスのご案内をまとめています。
          </p>
          <Link 
            href="/lessons"
            className="inline-flex items-center gap-3 bg-stone-800 text-stone-50 px-8 py-4 rounded-sm hover:bg-stone-700 transition-colors font-sans text-sm tracking-widest uppercase"
          >
            レッスン詳細を見る <MoveRight size={16} />
          </Link>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-24 bg-stone-200/50 px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="w-full md:w-1/2 relative aspect-3/4 rounded-sm overflow-hidden shadow-xl">
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
              className="inline-flex items-center gap-2 text-stone-800 font-sans text-sm tracking-widest uppercase hover:text-stone-500 transition-colors border-b border-stone-800 hover:border-stone-500 pb-1"
            >
              過去の詳しい出演歴・プロフィールへ <MoveRight size={16} />
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
            <div key={i} className="min-w-[280px] sm:min-w-[320px] snap-center shrink-0 group">
              <div className="relative aspect-4/3 w-full mb-4 overflow-hidden rounded-sm shadow-md transition-transform duration-500 group-hover:opacity-90">
                <Image
                  src={scene.img}
                  alt={scene.title}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="text-stone-500 text-xs tracking-widest font-sans mb-1">{scene.tag}</div>
              <h3 className="font-serif text-stone-800 text-base md:text-lg">{scene.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Performances Section (Horizontal Scroll) */}
      <section className="pt-24 pb-16 pl-6 md:pl-12 lg:pl-24 overflow-hidden border-b border-stone-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between pr-6 md:pr-12 lg:pr-24 mb-12 gap-6">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-stone-800 mb-2 tracking-wider">
              出演記録・公演実績
            </h2>
            <p className="font-sans text-stone-500 text-sm tracking-wide">
              これまでに開催した発表会や、参加した外部イベントの記憶。
            </p>
          </div>
        </div>
        
        <div className="flex overflow-x-auto gap-6 sm:gap-8 pb-8 pr-6 md:pr-12 lg:pr-24 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {[
            { year: "2023", title: "ミュージカル公演「The Shining Stars」" },
            { year: "2022", title: "サマーコンサート「Melody of Dreams」" },
            { year: "2021", title: "スタジオパフォーマンス「First Step」" },
            { year: "2020", title: "プレ公演「Overture」" }
          ].map((perf, i) => (
            <div key={i} className="min-w-[280px] sm:min-w-[320px] snap-center shrink-0 group cursor-pointer">
              <div className="relative aspect-3/4 w-full mb-4 overflow-hidden rounded-sm shadow-md transition-transform duration-500 group-hover:scale-[1.02]">
                <Image
                  src="/images/poster.jpg"
                  alt={perf.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-stone-500 text-xs tracking-widest font-sans mb-1">{perf.year}</div>
              <h3 className="font-serif text-stone-800 text-base md:text-lg">{perf.title}</h3>
            </div>
          ))}
        </div>
      </section>

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
          className="inline-flex items-center gap-3 bg-stone-100 text-stone-900 border border-stone-100 px-8 py-4 rounded-sm hover:bg-stone-300 transition-colors font-sans text-sm tracking-widest uppercase shadow-lg"
        >
          今後のイベント・出演予定 <MoveRight size={16} />
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
          className="inline-flex items-center justify-center gap-3 bg-[#06C755] text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-[#05b04b] transition-all hover:scale-105 font-sans font-medium tracking-wide w-full max-w-sm mx-auto"
        >
          <MessageCircle size={20} className="fill-white" />
          公式LINEで相談する
        </a>
      </footer>
    </div>
  );
}
