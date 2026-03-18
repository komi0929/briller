import Link from "next/link";

export default function EventsPage() {
  return (
    <div className="relative min-h-screen bg-stone-50 pb-24">
      <div className="max-w-4xl mx-auto px-6 pt-12 text-center md:text-left">
        <Link 
          href="/" 
          className="inline-flex items-center gap-4 text-stone-400 font-sans text-xs tracking-[0.2em] uppercase hover:text-stone-800 transition-colors mb-20"
        >
          <span className="text-lg leading-none mb-[2px]">←</span> Back to Home
        </Link>
        
        <h1 className="font-serif text-3xl md:text-4xl font-medium text-stone-800 mb-6 tracking-wider">
          今後のイベント出演予定
        </h1>
        <p className="font-sans text-stone-400 text-xs tracking-[0.2em] mb-20 uppercase">
          Upcoming Events
        </p>

        <div className="space-y-0">
          
          {/* イベントアイテム1 */}
          <div className="py-12 border-t border-stone-200 flex flex-col md:flex-row gap-8 md:gap-16 items-start group">
            <div className="shrink-0 md:w-48 pt-2">
              <p className="text-stone-400 font-sans text-xs uppercase tracking-[0.2em] mb-2">2026.10.25 (Sun)</p>
              <p className="text-stone-800 font-serif text-4xl md:text-5xl font-medium leading-none">10.25</p>
            </div>
            <div className="flex-1 w-full">
              <h2 className="font-serif text-2xl font-medium text-stone-800 mb-6 tracking-wide group-hover:text-stone-500 transition-colors">
                秋の公開レッスンダンスパフォーマンス
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-stone-500 font-sans text-xs tracking-widest uppercase mb-8">
                <span>Time / 14:00</span>
                <span>Place / 福岡市内・某ホール</span>
              </div>
              <p className="text-stone-600 font-sans text-sm leading-loose max-w-2xl mb-8">
                スクール生による日頃の練習の成果を披露する秋の公開イベントです。キッズクラスからプロフェッショナルクラスまで、幅広い年代の生徒たちが参加します。観覧は無料、または事前予約制を予定しております。詳細が決まり次第、こちらでお知らせいたします。
              </p>
              <div className="flex flex-wrap gap-4 text-stone-400 font-sans text-xs tracking-widest">
                <span>#発表会</span>
                <span>#観覧無料</span>
              </div>
            </div>
          </div>

          {/* イベントアイテム2 */}
          <div className="py-12 border-t border-stone-200 flex flex-col md:flex-row gap-8 md:gap-16 items-start group">
            <div className="shrink-0 md:w-48 pt-2">
              <p className="text-stone-400 font-sans text-xs uppercase tracking-[0.2em] mb-2">2026.12.15 (Tue)</p>
              <p className="text-stone-800 font-serif text-4xl md:text-5xl font-medium leading-none">12.15</p>
            </div>
            <div className="flex-1 w-full">
              <h2 className="font-serif text-2xl font-medium text-stone-800 mb-6 tracking-wide group-hover:text-stone-500 transition-colors">
                クリスマス特別ミュージカルコンサート
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-stone-500 font-sans text-xs tracking-widest uppercase mb-8">
                <span>Time / 17:30 Open - 18:00 Start</span>
                <span>Place / 未定</span>
              </div>
              <p className="text-stone-600 font-sans text-sm leading-loose max-w-2xl mb-8">
                特別ゲストを交え、有名なミュージカルナンバーやクリスマスソングを披露する一大イベントです。主宰・増本藍によるパフォーマンスも予定されています。チケットの販売情報等は晩秋頃に公開予定です。
              </p>
              <div className="flex flex-wrap gap-4 text-stone-400 font-sans text-xs tracking-widest">
                <span>#特別コンサート</span>
              </div>
            </div>
          </div>

          <div className="text-center pt-24 border-t border-stone-200 mt-8">
            <p className="font-sans text-stone-500 text-sm leading-loose">
              ※ イベントの詳細は予告なく変更または中止になる場合がございます。<br/>
              最新情報は、公式LINEでも随時配信しておりますので、ぜひご登録ください。
            </p>
            <a 
              href="#"
              className="inline-block bg-[#06C755] text-white px-10 py-4 mt-8 transition-opacity hover:opacity-80 font-sans text-sm tracking-widest"
            >
              公式LINEを登録する
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
