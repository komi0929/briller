import Image from "next/image";
import { MoveRight, Instagram } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-stone-50 pb-24">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="舞台のイメージ"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-stone-900/30 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center text-stone-50 px-6">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium tracking-widest mb-6">
            briller
          </h1>
          <p className="font-sans text-sm md:text-base tracking-[0.3em] font-light">
            本物を知る、洗練されたミュージカルスクール
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-2xl md:text-3xl font-medium text-stone-800 mb-10 tracking-wider">
          舞台に立つ喜び、表現する楽しさ。
        </h2>
        <div className="text-stone-600 font-sans leading-loose space-y-6 text-sm md:text-base">
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
      </section>

      {/* Instructor Section */}
      <section className="py-24 bg-stone-200/50 px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="w-full md:w-1/2 relative aspect-[3/4] rounded-sm overflow-hidden shadow-xl">
            <Image
              src="/images/instructor.png"
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
            <div className="text-stone-600 font-sans leading-loose text-sm md:text-base space-y-4">
              <p>
                劇団四季に17年間在籍し、『キャッツ』（ディミータ役・ボンバルリーナ役）、『クレイジー・フォー・ユー』（テス役）、『ユタと不思議な仲間たち』など、数多くの名作ミュージカルに出演。
              </p>
              <p>
                退団後は地元である福岡県に拠点を移し、舞台活動を続けながら後進の育成に尽力。
                現在、九州大谷短期大学や福岡女学院大学にて非常勤講師も務める傍ら、Musical School brillerを主宰。
              </p>
              <p>
                「本物の舞台芸術に触れる経験を通じて、表現する喜びを深く知ってほしい」という想いのもと、丁寧かつ本格的な指導にあたっている。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performances Section (Horizontal Scroll) */}
      <section className="py-24 pl-6 md:pl-12 lg:pl-24 overflow-hidden">
        <h2 className="font-serif text-2xl md:text-3xl font-medium text-stone-800 mb-12 tracking-wider">
          出演記録・公演実績
        </h2>
        <div className="flex overflow-x-auto gap-6 sm:gap-8 pb-8 pr-6 md:pr-12 lg:pr-24 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {[
            { year: "2023", title: "ミュージカル公演「The Shining Stars」" },
            { year: "2022", title: "サマーコンサート「Melody of Dreams」" },
            { year: "2021", title: "スタジオパフォーマンス「First Step」" },
            { year: "2020", title: "プレ公演「Overture」" }
          ].map((perf, i) => (
            <div key={i} className="min-w-[280px] sm:min-w-[320px] snap-center flex-shrink-0 group cursor-pointer">
              <div className="relative aspect-[3/4] w-full mb-4 overflow-hidden rounded-sm shadow-md transition-transform duration-500 group-hover:scale-[1.02]">
                <Image
                  src="/images/poster.png"
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

      {/* Footer / Contact Link */}
      <footer className="py-20 px-6 text-center border-t border-stone-200">
        <h2 className="font-serif text-xl md:text-2xl font-medium text-stone-800 mb-6 tracking-wider">
          入会・体験レッスンのお問い合わせ
        </h2>
        <p className="text-stone-500 text-sm mb-10 font-sans max-w-lg mx-auto">
          スクールに関する詳細な資料や、体験レッスンのご案内をお送りいたします。<br className="hidden md:block"/>まずは以下のフォームよりお気軽にご連絡ください。
        </p>
        <a 
          href="mailto:info@example.com"
          className="inline-flex items-center gap-2 text-stone-800 font-sans text-sm tracking-widest uppercase hover:text-stone-500 transition-colors border-b border-stone-800 hover:border-stone-500 pb-1"
        >
          お問い合わせフォームへ <MoveRight size={16} />
        </a>
      </footer>

      {/* Sticky Instagram DM Button */}
      <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50 pointer-events-none px-4">
        <a 
          href="https://www.instagram.com/briller_2408/"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex items-center gap-3 bg-stone-800/95 text-stone-50 px-6 py-4 rounded-full shadow-2xl backdrop-blur-sm transition-transform hover:scale-105 hover:bg-stone-800"
        >
          <Instagram size={20} />
          <span className="font-sans text-sm font-medium tracking-wide">Instagram DMで気軽に相談</span>
        </a>
      </div>
    </div>
  );
}
